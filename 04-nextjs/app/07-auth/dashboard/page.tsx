import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '../session';
import { logout } from '../actions';

async function Welcome() {
  const session = await getSession(); // reads cookies -> request-time, so it sits inside Suspense
  if (!session) redirect('/07-auth/login');
  return (
    <div className="card">
      <p>Welcome, {session.name}! Your session expires at {new Date(session.exp).toLocaleTimeString()}.</p>
      <form action={logout}><button>Sign out</button></form>
    </div>
  );
}

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard (protected)</h1>
      <Suspense fallback={<p>Checking session…</p>}><Welcome /></Suspense>
    </>
  );
}
