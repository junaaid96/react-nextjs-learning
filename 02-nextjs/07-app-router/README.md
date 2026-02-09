# Next.js App Router (v13+)

> File-based routing, Server Components, layouts, streaming.

## File-Based Routing

```
app/
├── page.js          → /
├── layout.js        → Wraps all pages
├── loading.js       → Loading UI
├── error.js         → Error boundary
├── not-found.js     → 404
├── dashboard/
│   ├── page.js      → /dashboard
│   ├── layout.js    → Dashboard layout
│   └── settings/
│       └── page.js  → /dashboard/settings
└── blog/
    └── [slug]/
        └── page.js  → /blog/:slug
```

---

## Server vs Client Components

**Server Components (default):**
- No `useState`, `useEffect`, event handlers
- Can fetch data directly (async)
- Smaller bundle (code stays on server)
- Access backend (DB, env vars)

**Client Components:**
- Add `'use client'` at top
- Use hooks, event handlers, browser APIs
- Needed for interactivity

```js
// app/page.js - Server Component (default)
async function Page() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  return <ClientWidget data={json} />;  // Pass to client
}

// app/ClientWidget.jsx
'use client';
import { useState } from 'react';
export function ClientWidget({ data }) {
  const [open, setOpen] = useState(false);
  return <button onClick={() => setOpen(!open)}>{data.title}</button>;
}
```

---

## Layout & Templates

**layout.js** – Shared UI, persists across navigations (state preserved).

**template.js** – Re-mounts on navigation (new instance).

```js
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>...</nav>
        {children}
      </body>
    </html>
  );
}
```

---

## Loading & Error

```js
// loading.js - Shown during Suspense
export default function Loading() {
  return <Spinner />;
}

// error.js - Error boundary
'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      <p>Something went wrong</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

---

## Dynamic Routes

```js
// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return <div>Slug: {params.slug}</div>;
}

// app/shop/[...slug]/page.js  → catch-all
// app/shop/[[...slug]]/page.js  → optional catch-all
```

---

## Why the App Router Matters

- App Router (Next 13+) is the modern default and is heavily tested in interviews.
- Server Components by default help you ship **smaller client bundles** and improve performance.
- Layouts, loading/error boundaries, and route groups give **clean architecture** for large apps.

---

## Where You Use App Router Features

- **Server Components**: fetch data, render SEO-friendly pages, access server-only secrets/DB (without shipping code to client).
- **Client Components**: interactivity (forms, buttons, stateful widgets, browser APIs).
- **`loading.js`**: skeleton screens for slow routes and better UX.
- **`error.js`**: route-level error boundaries (recover with `reset()`).
- **Layouts**: shared shells (nav/sidebar) across route trees.
- **Route groups**: keep folder structure organized without affecting URL paths.

---

## Interview Q&A (with Examples)

### Q1: Server Components vs Client Components — how do you decide?

Decision rule:
- If it needs **state, effects, event handlers, or browser APIs** → Client component (`'use client'`).
- If it’s mostly rendering data and can run on the server → Server component (default).

What to say:
> I keep the tree server-first and push `'use client'` as deep as possible to minimize bundle size.

---

### Q2: What does `'use client'` actually do?

It marks the file as a **Client Component boundary**. Everything imported into that file becomes part of the client bundle (unless it’s server-only and blocked).  
It enables hooks like `useState`, `useEffect`, and event handlers.

---

### Q3: Layout vs template — what’s the difference?

- **`layout.js`** persists across navigations → component state inside it can be preserved.
- **`template.js`** re-mounts on navigation → new instance each time.

Use `template.js` when you need a fresh state per navigation (rare).

---

### Q4: What is the “waterfall problem” in App Router data fetching?

If components fetch sequentially (A waits, then B waits), total time increases.

Fix:
- Fetch in parallel with `Promise.all` where possible.
- Lift shared fetching up to the parent server component.

---

## Quick Practice

- **Exercise 1**: Build `app/dashboard` with a shared `layout.js` and nested routes.
- **Exercise 2**: Create one Server Component page that fetches data and passes it into a small Client Component for interactivity.
- **Exercise 3**: Add `loading.js` (skeleton) and `error.js` to the same route and test behavior by forcing an error.

