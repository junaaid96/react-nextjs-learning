import { cacheLife, cacheTag } from 'next/cache';
import { listPosts } from '@/lib/db';

// Data-level cache: shared by every request until the 'posts' tag is invalidated.
export async function getCachedPosts() {
  'use cache';
  cacheLife('hours');
  cacheTag('posts');
  const posts = await listPosts();
  return { posts, cachedAt: new Date().toISOString() };
}
