// Minimal signed-cookie session (HMAC-SHA256 via Web Crypto, works in Node and the edge).
// Real apps: use Auth.js, Better Auth, Clerk, or a library like iron-session/jose.
export interface Session { userId: string; name: string; exp: number }

export const SESSION_COOKIE = 'session';
const encoder = new TextEncoder();

function secret(): string {
  const s = process.env.SESSION_SECRET;
  if (s) return s;
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE !== 'phase-production-build') {
    console.warn('SESSION_SECRET is not set; using an insecure demo secret');
  }
  return 'dev-only-insecure-secret-change-me';
}

const b64url = (bytes: Uint8Array) => Buffer.from(bytes).toString('base64url');

async function hmac(data: string, key = secret()): Promise<string> {
  const k = await crypto.subtle.importKey('raw', encoder.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64url(new Uint8Array(await crypto.subtle.sign('HMAC', k, encoder.encode(data))));
}

export async function encodeSession(session: Session, key?: string): Promise<string> {
  const payload = b64url(encoder.encode(JSON.stringify(session)));
  return `${payload}.${await hmac(payload, key)}`;
}

export async function decodeSession(token: string | undefined, key?: string, now = Date.now()): Promise<Session | null> {
  if (!token) return null;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return null;
  const expected = await hmac(payload, key);
  if (expected.length !== sig.length || expected !== sig) return null; // reject tampered tokens
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString()) as Session;
    return session.exp > now ? session : null;
  } catch {
    return null;
  }
}

// Demo credential check. NEVER store plain passwords: hash with argon2/bcrypt.
export function checkCredentials(email: string, password: string): Session | null {
  if (email === 'demo@example.com' && password === 'learn-nextjs') {
    return { userId: 'u_1', name: 'Demo Learner', exp: Date.now() + 1000 * 60 * 60 };
  }
  return null;
}
