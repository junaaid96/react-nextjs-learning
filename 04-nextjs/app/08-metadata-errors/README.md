# 08. Metadata, `loading`, `error` & `not-found`

## Concepts

- Static `export const metadata` or dynamic `generateMetadata({ params })` for titles, descriptions, Open Graph.
- Special files per segment: `loading.tsx` (Suspense fallback), `error.tsx` (Client error boundary with `reset`), `not-found.tsx` (rendered by `notFound()`), plus `global-error.tsx` at the root.
- Note: when a page streams, the not-found UI may arrive with HTTP 200; prerender known params with `generateStaticParams` when exact status codes matter.

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/08-metadata-errors
```

## Interview questions
- Why must `error.tsx` be a Client Component?
- What does `loading.tsx` compile to?
- How do you generate Open Graph images?

## Exercises
1. Add an `opengraph-image.tsx` for posts.
1. Add `global-error.tsx`.
