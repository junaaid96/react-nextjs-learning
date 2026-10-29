import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { GET, POST } from './route';

const post = (body: string) => new NextRequest('http://localhost/api/posts', { method: 'POST', body, headers: { 'content-type': 'application/json' } });

describe('/api/posts route handler', () => {
  it('GET lists posts', async () => {
    const res = await GET();
    expect(res.status).toBe(200);
    expect((await res.json()).posts.length).toBeGreaterThanOrEqual(3);
  });
  it('POST validates', async () => {
    expect((await POST(post('{bad'))).status).toBe(400);
    expect((await POST(post(JSON.stringify({ title: 'x', body: 'y' })))).status).toBe(422);
  });
  it('POST creates', async () => {
    const res = await POST(post(JSON.stringify({ title: 'Hello', body: 'Created in a test' })));
    expect(res.status).toBe(201);
    expect((await res.json()).post.title).toBe('Hello');
  });
});
