// A tiny in-memory "database" so every lesson runs without external services.
// Swap it for Postgres/Prisma/Drizzle in a real app; the patterns stay the same.
export interface Post { id: number; title: string; body: string; createdAt: string }

const posts: Post[] = [
  { id: 1, title: 'Server Components by default', body: 'Only add "use client" where you need interactivity.', createdAt: '2026-01-10' },
  { id: 2, title: 'Cache what is shared', body: 'Use "use cache" with cacheLife and cacheTag.', createdAt: '2026-02-14' },
  { id: 3, title: 'Mutate with Server Actions', body: 'Validate on the server, then updateTag.', createdAt: '2026-03-01' },
];

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function listPosts(): Promise<Post[]> {
  await sleep(50); // simulate network/database latency
  return posts.toSorted((a, b) => b.id - a.id);
}

export async function getPost(id: number): Promise<Post | undefined> {
  await sleep(20);
  return posts.find((p) => p.id === id);
}

export async function createPost(input: { title: string; body: string }): Promise<Post> {
  const post: Post = { id: Math.max(0, ...posts.map((p) => p.id)) + 1, createdAt: new Date().toISOString().slice(0, 10), ...input };
  posts.push(post);
  return post;
}
