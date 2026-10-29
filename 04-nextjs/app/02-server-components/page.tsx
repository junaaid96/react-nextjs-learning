import { cacheLife } from 'next/cache';
import { listPosts } from '@/lib/db';
import { LikeCounter } from './LikeCounter';

export const metadata = { title: 'Server vs Client Components' };

// Server Component (the default): can be async, read data directly, keep secrets on the server.
export default async function ServerComponentsPage() {
  'use cache';
  cacheLife('minutes');
  const posts = await listPosts();
  return (
    <>
      <h1>02 · Server vs Client Components</h1>
      {posts.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          {/* Server -> Client: pass serialisable props only */}
          <LikeCounter initial={p.id * 3} />
        </div>
      ))}
    </>
  );
}
