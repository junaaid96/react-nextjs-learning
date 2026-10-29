import { NextResponse, type NextRequest } from 'next/server';
import { decodeSession, SESSION_COOKIE } from '@/lib/session';

// proxy.ts (formerly middleware.ts) runs before routes. Use it for fast, optimistic
// redirects only; always re-check auth where data is read (see app/07-auth/session.ts).
export async function proxy(request: NextRequest) {
  const session = await decodeSession(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    const url = new URL('/07-auth/login', request.url);
    url.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/07-auth/dashboard/:path*'] };
