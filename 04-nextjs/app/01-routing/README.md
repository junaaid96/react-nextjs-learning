# 01. Routing: file-system routes, layouts, dynamic & grouped segments

## Concepts

- A folder is a route segment; `page.tsx` makes it reachable, `layout.tsx` wraps children and **persists state** across navigations.
- Dynamic segments `[slug]`, catch-all `[...slug]`, optional catch-all `[[...slug]]`. `params` is a **Promise** (await it).
- `generateStaticParams` prerenders known params at build time.
- Route groups `(name)` organise files without changing the URL; private folders `_name` are never routable.
- `<Link>` prefetches routes; `typedRoutes: true` type-checks `href`s. `PageProps<'/route'>` / `LayoutProps` are generated global types.
- Also know: parallel routes (`@slot`), intercepting routes (`(.)photo`), `template.tsx`.

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/01-routing
```

## Interview questions
- What is the difference between `layout.tsx` and `template.tsx`?
- Why is `params` a Promise?
- What are route groups for?

## Exercises
1. Add a catch-all `[...path]` docs route.
1. Add a parallel `@sidebar` slot to the layout.
