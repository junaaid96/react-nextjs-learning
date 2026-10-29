import 'server-only';
import { cookies } from 'next/headers';
import { decodeSession, SESSION_COOKIE } from '@/lib/session';

// Data Access Layer: verify the session close to the data, not only in proxy.ts.
export async function getSession() {
  return decodeSession((await cookies()).get(SESSION_COOKIE)?.value);
}
