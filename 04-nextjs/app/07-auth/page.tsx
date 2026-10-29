import Link from 'next/link';

export const metadata = { title: 'Auth basics' };

export default function AuthIndex() {
  return (
    <>
      <h1>07 · Auth basics</h1>
      <p>Demo login: <code>demo@example.com</code> / <code>learn-nextjs</code></p>
      <p><Link href="/07-auth/dashboard">Go to the protected dashboard</Link> (redirects to login if signed out).</p>
    </>
  );
}
