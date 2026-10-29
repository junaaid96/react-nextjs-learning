import { getCachedPosts } from './data';
import { addQuickPost } from './actions';

export const metadata = { title: 'Caching' };

export default async function CachingPage() {
  const { posts, cachedAt } = await getCachedPosts();
  return (
    <>
      <h1>04 · Caching</h1>
      <p>Cached at <code>{cachedAt}</code>. Reload: the time stays the same until you add a post.</p>
      <form action={addQuickPost}><button type="submit">Add post & updateTag('posts')</button></form>
      <ul>{posts.map((p) => <li key={p.id}>{p.title}</li>)}</ul>
    </>
  );
}
