# 04. Caching with Cache Components (`'use cache'`, `cacheLife`, `cacheTag`, `updateTag`)

## Concepts

- Next.js 16 caching is **opt-in**: nothing is cached unless you add `'use cache'` to a function, component or file.
- Pair every `'use cache'` with `cacheLife('seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'max' | custom)`.
- Tag entries with `cacheTag('posts')`, then invalidate:
  - `updateTag('posts')`: Server Actions only, expires immediately (read-your-own-writes).
  - `revalidateTag('posts', 'max')`: stale-while-revalidate, also from Route Handlers.
  - `revalidatePath('/04-caching')`: by path.
- Variants: `'use cache: private'` (per-user, browser only), `'use cache: remote'` (shared durable handler).
- Arguments become part of the cache key; values must be serialisable.

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/04-caching
```

## Interview questions
- What changed vs the Next 14 'cache everything' model?
- `updateTag` vs `revalidateTag`?
- What becomes part of a `'use cache'` key?

## Exercises
1. Cache `getPost(id)` per id and tag it `post-${id}`.
1. Define a custom `cacheLife` profile in `next.config.ts`.
