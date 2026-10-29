# Next.js Features

> API routes, image/font optimization, metadata, middleware, env vars.

## API Routes

**Pages Router:** `pages/api/hello.js`

```js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello' });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end();
  }
}
```

**App Router:** `app/api/users/route.js`

```js
export async function GET(request) {
  const users = await db.users.findMany();
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const user = await db.users.create({ data: body });
  return Response.json(user);
}
```

---

## Image Optimization

```js
import Image from 'next/image';

<Image
  src="/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  priority          // Above-fold: load immediately
  placeholder="blur"
  blurDataURL="..."
/>
```

Benefits: lazy load, WebP/AVIF, responsive srcset.

---

## Font Optimization

```js
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

---

## Metadata (SEO)

```js
// app/layout.js or page.js
export const metadata = {
  title: 'My App',
  description: 'App description',
  openGraph: { title: '...', images: ['/og.png'] },
};

// Or dynamic
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return { title: post.title };
}
```

---

## Middleware

Runs before request completes. Use for auth, redirects, rewrites.

```js
// middleware.js at project root
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

---

## Environment Variables

- `.env.local` – local dev (gitignored)
- `NEXT_PUBLIC_*` – exposed to browser
- Others – server-only

```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://...
```

---

## Why These Next.js Features Matter

- They solve common production needs out-of-the-box: **backend endpoints, performance optimizations, SEO, request control, and configuration**.
- Interviews often check whether you understand *when* to use these features vs building custom solutions.
- Used correctly, these features improve **security**, **performance**, and **developer experience**.

---

## Where You Use Each Feature

- **API routes / route handlers**: simple CRUD, webhook receivers, auth callbacks, internal endpoints.
- **`next/image`**: any user-facing image-heavy page (landing, product listing, profile).
- **`next/font`**: consistent typography without layout shift or extra network requests.
- **Metadata API**: SEO titles/descriptions, OpenGraph previews, dynamic page metadata.
- **Middleware**: auth gating, redirects, A/B tests, rewrites, locale routing.
- **Env vars**: different configs per environment (dev/staging/prod) without hardcoding secrets.

---

## Interview Q&A (with Examples)

### Q1: When should you use API routes vs a separate backend?

Use **API routes** when:
- You need lightweight endpoints close to the UI (BFF pattern).
- You want to avoid running/maintaining a separate backend for simple features.

Use a **separate backend** when:
- You have many services, complex domain logic, heavy background jobs, or multiple clients (mobile + web).

What to say:
> API routes are great for small-to-medium features and a BFF. For larger domains, I keep business logic in a dedicated backend/service layer.

---

### Q2: Why is `NEXT_PUBLIC_*` special?

Only variables with the `NEXT_PUBLIC_` prefix are exposed to the browser bundle.  
All other env vars are server-only and must never be used in client components.

---

### Q3: What benefits does `next/image` provide?

- Responsive `srcset`
- Lazy loading by default
- Modern formats (WebP/AVIF when possible)
- Reduced layout shift when using `width`/`height`

In interviews:
> It’s a performance feature: better LCP, less bandwidth, and safer responsive images.

---

### Q4: Why is middleware useful for auth?

Middleware runs **before** the request is completed, so you can block protected routes early (before rendering) and redirect unauthenticated users.

Mention security:
> Middleware helps enforce route-level access consistently and prevents accidental exposure of protected UI routes.

---

## Quick Practice

- **Exercise 1**: Create `app/api/health/route.js` that returns `{ ok: true }`.
- **Exercise 2**: Add middleware that protects `/dashboard/*` routes.
- **Exercise 3**: Use `next/image` for all images in a sample page and compare performance with `<img>`.
- **Exercise 4**: Implement `generateMetadata` for a blog post route and include OpenGraph images.

