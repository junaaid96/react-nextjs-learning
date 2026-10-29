import { NextResponse, type NextRequest } from 'next/server';
import { createPost, listPosts } from '@/lib/db';
import { parsePostInput } from '@/lib/validation';

// GET /api/posts
export async function GET() {
  const posts = await listPosts();
  return NextResponse.json({ posts });
}

// POST /api/posts  { "title": "...", "body": "..." }
export async function POST(request: NextRequest) {
  let json: unknown;
  try { json = await request.json(); }
  catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const parsed = parsePostInput((json ?? {}) as Record<string, unknown>);
  if (!parsed.success) return NextResponse.json({ errors: parsed.errors }, { status: 422 });
  const post = await createPost(parsed.data);
  return NextResponse.json({ post }, { status: 201 });
}
