import { describe, expect, it } from 'vitest';
import { checkCredentials, decodeSession, encodeSession } from './session';

const s = { userId: 'u1', name: 'A', exp: Date.now() + 60_000 };

describe('signed session', () => {
  it('round-trips', async () => {
    expect(await decodeSession(await encodeSession(s, 'k'), 'k')).toEqual(s);
  });
  it('rejects tampering and wrong keys', async () => {
    const token = await encodeSession(s, 'k');
    const forged = Buffer.from(JSON.stringify({ ...s, userId: 'admin' })).toString('base64url') + '.' + token.split('.')[1];
    expect(await decodeSession(forged, 'k')).toBeNull();
    expect(await decodeSession(token, 'other')).toBeNull();
    expect(await decodeSession('garbage', 'k')).toBeNull();
  });
  it('rejects expired sessions', async () => {
    const token = await encodeSession({ ...s, exp: 1 }, 'k');
    expect(await decodeSession(token, 'k')).toBeNull();
  });
  it('checks demo credentials', () => {
    expect(checkCredentials('demo@example.com', 'learn-nextjs')?.userId).toBe('u_1');
    expect(checkCredentials('demo@example.com', 'wrong')).toBeNull();
  });
});
