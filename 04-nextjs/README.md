# 04 · Next.js 16 (App Router)

One Next.js 16.4 app where **every route is a lesson**. Cache Components (`cacheComponents: true`), Partial Prefetching and typed routes are enabled, and all data comes from an in-memory store in `lib/db.ts`, so nothing external is needed.

```bash
npm run dev -w 04-nextjs        # http://localhost:3000
npm test -w 04-nextjs           # Vitest: validation, sessions, route handler
npm run build -w 04-nextjs      # production build
```

| Lesson | Topic |
|---|---|
| [01-routing](app/01-routing/) | Routing: file-system routes, layouts, dynamic & grouped segments |
| [02-server-components](app/02-server-components/) | Server Components vs Client Components |
| [03-data-fetching](app/03-data-fetching/) | Data fetching & streaming with Suspense |
| [04-caching](app/04-caching/) | Caching with Cache Components (`'use cache'`, `cacheLife`, `cacheTag`, `updateTag`) |
| [05-server-actions-forms](app/05-server-actions-forms/) | Server Actions & forms |
| [06-route-handlers](app/06-route-handlers/) | Route Handlers (`app/api/**/route.ts`) |
| [07-auth](app/07-auth/) | Auth basics: sessions, cookies, `proxy.ts`, protected pages |
| [08-metadata-errors](app/08-metadata-errors/) | Metadata, `loading`, `error` & `not-found` |
| [09-deployment](app/09-deployment/) | Deployment |

Supporting code: `lib/` (db, validation, signed sessions, with tests), `proxy.ts` (auth redirect), `app/api/posts/route.ts`.
