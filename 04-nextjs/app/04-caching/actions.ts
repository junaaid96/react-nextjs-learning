'use server';
import { updateTag } from 'next/cache';
import { createPost } from '@/lib/db';

// updateTag (Server Actions only) expires the tag so the next read sees fresh data
// (read-your-own-writes). Use revalidateTag(tag, 'max') for stale-while-revalidate elsewhere.
export async function addQuickPost() {
  const n = Math.floor(Math.random() * 1000);
  await createPost({ title: `Quick post #${n}`, body: 'Created from the caching lesson.' });
  updateTag('posts');
}
