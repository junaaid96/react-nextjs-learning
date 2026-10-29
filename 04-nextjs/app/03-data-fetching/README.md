# 03. Data fetching & streaming with Suspense

## Concepts

- Fetch data in Server Components with `async/await`; start independent requests together (`Promise.all`) to avoid waterfalls.
- With Cache Components, anything uncached or request-specific (`cookies()`, `headers()`, `searchParams`, `connection()`) must sit inside `<Suspense>`: the page's **static shell** is sent instantly and the rest **streams**.
- Use `React.cache()` to dedupe the same query within one request.
- Client-side fetching (TanStack Query/SWR) is for highly interactive, user-driven data.

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/03-data-fetching
```

## Interview questions
- What is Partial Prerendering?
- How do you avoid request waterfalls?
- When is client-side fetching still the right call?

## Exercises
1. Add a third streamed section that fails and wrap it with an error boundary.
1. Dedupe `getPost` with `React.cache`.
