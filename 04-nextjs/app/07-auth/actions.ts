'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { checkCredentials, encodeSession, SESSION_COOKIE } from '@/lib/session';

export async function login(_prev: { error?: string }, formData: FormData): Promise<{ error?: string }> {
  const session = checkCredentials(String(formData.get('email')), String(formData.get('password')));
  if (!session) return { error: 'Invalid email or password' };
  (await cookies()).set(SESSION_COOKIE, await encodeSession(session), {
    httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 60 * 60,
  });
  redirect('/07-auth/dashboard');
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect('/07-auth/login');
}
