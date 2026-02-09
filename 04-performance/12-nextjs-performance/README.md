# Next.js Performance

> Dynamic imports, image/font optimization, bundle analysis, caching.

## Dynamic Imports

```js
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('@/components/Chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false,  // Client-only if needed
});
```

---

## Image Optimization

`next/image` – automatic WebP/AVIF, responsive, lazy load.

```jsx
<Image src="/hero.jpg" alt="Hero" width={1200} height={600} priority />
```

---

## Font Optimization

`next/font` – self-hosted, no layout shift, no external requests.

```js
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

---

## Bundle Analysis

```bash
npm install @next/bundle-analyzer
```

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(nextConfig);
```

Run: `ANALYZE=true npm run build`

---

## Caching Strategies

- **fetch** – `next: { revalidate: 60 }` for ISR
- **Route cache** – Static routes cached
- **Data cache** – `fetch` responses cached by default
- **Router cache** – Client-side route cache (soft navigation)

---

## Quick Wins

1. Use `next/image` for all images
2. Use `next/font` for fonts
3. Lazy load below-fold components
4. Enable compression (gzip/brotli) – Vercel does this by default

---

## Why Next.js Performance Matters

- Next.js gives you many performance features by default, but you still need to make good architectural choices.
- Performance impacts user experience and business metrics (bounce rate, conversion rate, retention).
- Interviews often test practical knowledge: dynamic imports, bundle analysis, caching, and avoiding hydration issues.

---

## Where Next.js Performance Work Pays Off Most

- **Landing pages**: improve LCP and SEO performance.
- **E-commerce**: faster product listing and images improve conversions.
- **Dashboards**: reduce JS shipped and keep interactions snappy.
- **Content sites**: caching + ISR reduces server load and speeds up global delivery.

---

## Interview Q&A (with Examples)

### Q1: When would you set `ssr: false` on a dynamic import?

When a component:
- Depends on browser-only APIs (`window`, `document`), or
- Is heavy and only needed on the client (e.g. certain charting libs).

```js
const Chart = dynamic(() => import('@/components/Chart'), { ssr: false });
```

Mention the tradeoff:
> Client-only components don’t render HTML on the server, so they can hurt SEO if used on public pages.

---

### Q2: What is the difference between build-time optimization and runtime optimization?

- **Build-time**: bundle splitting, tree shaking, image/font optimization.
- **Runtime**: caching strategies, reducing re-renders, avoiding waterfalls, streaming/Suspense UX improvements.

---

### Q3: How does caching work in Next.js App Router `fetch`?

Key points:
- `fetch` is extended by Next.js and is cached by default in many cases.
- You can control behavior with `cache: 'no-store'` or `next: { revalidate: N }`.

Good interview line:
> I treat caching as part of the API contract: define freshness requirements per route and pick the simplest strategy that meets them.

---

## Quick Practice

- **Exercise 1**: Enable bundle analyzer and identify the top 3 largest dependencies; reduce or lazy-load them.
- **Exercise 2**: Convert all `<img>` tags to `next/image` and verify layout shift is reduced.
- **Exercise 3**: Create a route that uses `fetch(..., { next: { revalidate: 60 } })` and explain ISR behavior.
- **Exercise 4**: Add a heavy component and load it with `dynamic()` only on the pages that need it.

