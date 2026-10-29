import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost } from '@/lib/db';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

export async function generateMetadata({ params }: PageProps<'/08-metadata-errors/[id]'>): Promise<Metadata> {
  const post = await getPost(Number((await params).id));
  return { title: post?.title ?? 'Post not found', description: post?.body };
}

export default async function PostPage({ params }: PageProps<'/08-metadata-errors/[id]'>) {
  const id = Number((await params).id);
  if (id === 0) throw new Error('Post 0 is broken on purpose');
  const post = await getPost(id);
  if (!post) notFound();
  return (<article className="card"><h2>{post.title}</h2><p>{post.body}</p></article>);
}
