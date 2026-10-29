# 03. Effects, refs & synchronising with the outside world

## Concepts

- `useEffect` is for **synchronising with external systems** (network, subscriptions, timers, DOM APIs) — not for deriving data or handling events.
- Always return a cleanup; StrictMode runs effects twice in dev to surface missing cleanups.
- Fetching in effects needs an ignore flag/AbortController to avoid race conditions. In Next.js prefer Server Components; on the client prefer a data library (TanStack Query, SWR).
- `useRef` stores mutable values that don't trigger renders, and DOM nodes.

## Run

```bash
npx -w 03-react vitest run 03-effects-refs
```

Code: [`index.tsx`](index.tsx) · Tests: [`index.test.tsx`](index.test.tsx)

## Interview questions
- When do you NOT need an effect?
- Why does StrictMode run effects twice?
- How do you avoid race conditions when fetching?

## Exercises
1. Add a `useInterval` custom hook.
1. Subscribe to `window` resize with cleanup.
