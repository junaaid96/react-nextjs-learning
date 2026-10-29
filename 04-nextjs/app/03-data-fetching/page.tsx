import { Suspense } from 'react';
import { connection } from 'next/server';
import { getPost, listPosts, sleep } from '@/lib/db';

export const metadata = { title: 'Data fetching & streaming' };

async function Stats() {
  await connection(); // per-request data: opt out of prerendering for this component only
  const [posts, first] = await Promise.all([listPosts(), getPost(1)]); // parallel, not a waterfall
  return <p>{posts.length} posts · first: “{first?.title}” · rendered at {new Date().toLocaleTimeString()}</p>;
}

async function SlowFeed() {
  await connection();
  await sleep(800); // simulate a slow API; the rest of the page is already visible
  return <p>Slow feed loaded ✅</p>;
}

export default function DataFetchingPage() {
  return (
    <>
      <h1>03 · Data fetching & streaming</h1>
      <p>This heading is part of the static shell. The sections below stream in.</p>
      <Suspense fallback={<p>Loading stats…</p>}><Stats /></Suspense>
      <Suspense fallback={<p>Loading slow feed…</p>}><SlowFeed /></Suspense>
    </>
  );
}
