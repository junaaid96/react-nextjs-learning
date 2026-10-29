# Next.js Rendering Strategies

> SSR, SSG, ISR, CSR – when to use each.

## Overview

| Strategy | When runs | Use Case | Data freshness |
|----------|-----------|----------|----------------|
| **CSR** | Client | Dashboards, auth-only pages | On demand |
| **SSR** | Every request (server) | Dynamic, personalized content | Per request |
| **SSG** | Build time | Static content (blog, marketing) | At build |
| **ISR** | Build + revalidate | Static with periodic updates | Configurable |

---

## CSR (Client-Side Rendering)

Default in plain React. Data fetched in browser.

```jsx
'use client';
function Page() {
  const [data, setData] = useState(null);
  useEffect(() => { fetch('/api/data').then(r => r.json()).then(setData); }, []);
  return <div>{data?.title}</div>;
}
```

---

## SSG (Static Site Generation)

Page built at build time. Fast, cached.

**Pages Router (legacy):**
```js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  return { props: { posts } };
}
```

**App Router:**
```js
// app/posts/page.js - fetch is cached by default
async function PostsPage() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  return <PostList posts={posts} />;
}
```

---

## SSR (Server-Side Rendering)

Rendered on every request. Good for dynamic/personalized content.

**Pages Router:**
```js
export async function getServerSideProps(context) {
  const { req } = context;
  const user = await getUser(req);
  return { props: { user } };
}
```

**App Router:**
```js
// Force dynamic
export const dynamic = 'force-dynamic';

async function Page() {
  const user = await getCurrentUser();
  return <UserDashboard user={user} />;
}
```

---

## ISR (Incremental Static Regeneration)

SSG + background revalidation.

**Pages Router:**
```js
export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
```

**App Router:**
```js
const res = await fetch(url, { next: { revalidate: 60 } });
```

---

## getStaticPaths

For dynamic SSG routes (e.g. `/posts/[id]`).

```js
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(p => ({ params: { id: p.id } })),
    fallback: 'blocking', // or true, false
  };
}
```

---

## Why Rendering Strategies Matter

- Rendering strategy impacts **SEO, performance, caching, and cost**.
- Next.js interviews almost always ask you to choose between CSR/SSR/SSG/ISR and justify it.
- Production systems often mix strategies: marketing pages (SSG), authenticated dashboards (CSR/SSR), content sites (ISR).

---

## Where to Use Which (Practical Rules)

- **SSG**: marketing pages, documentation, public blog posts that change rarely.
- **ISR**: content pages that update periodically (news, product pages with occasional updates).
- **SSR**: personalized pages (user-specific content), pages that must always be fresh per request.
- **CSR**: dashboards behind auth, highly interactive UIs where SEO is not important.

Quick mental model:
- **Public + SEO + cacheable** → SSG/ISR
- **Personalized or always-fresh** → SSR
- **App-like UI** → CSR (often with server data libraries)

---

## Interview Q&A (with Examples)

### Q1: CSR vs SSR vs SSG vs ISR — what’s the real difference?

- **CSR**: HTML is minimal; browser downloads JS and renders UI.
- **SSR**: server renders HTML on each request.
- **SSG**: server renders HTML at build time.
- **ISR**: pre-rendered like SSG, but refreshed in the background on a schedule.

What to say:
> The difference is when HTML is generated (client vs server, build vs request) and how caching works.

---

### Q2: “ERP dashboard vs Blog vs Landing page” — which strategy?

- **ERP dashboard** (authenticated, heavy interactivity): CSR (sometimes SSR for initial shell if needed).
- **Blog** (SEO, mostly static): SSG/ISR.
- **Landing page** (SEO + speed): SSG.

---

### Q3: What is a hydration mismatch and why does it happen?

Hydration mismatch happens when the **server-rendered HTML** doesn’t match what the client renders on first load.

Common causes:
- Using `Date.now()`, random values, or locale-specific formatting during render.
- Reading browser-only APIs during server render.

Fix approach:
> Ensure deterministic server output; move client-only behavior into client components/effects.

---

## Quick Practice

- **Exercise 1**: Take a “posts” page and implement it using SSG (build-time) vs ISR (revalidate every 60s).
- **Exercise 2**: Build a “profile” page that must be personalized; make it SSR and explain why.
- **Exercise 3**: Create a small decision table: for 10 sample pages, pick CSR/SSR/SSG/ISR and justify each choice in 1–2 lines.

