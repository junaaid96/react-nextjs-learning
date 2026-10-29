# 05. Custom hooks

## Concepts

- A custom hook is a function starting with `use` that calls other hooks; it shares **logic**, not state.
- Follow the Rules of Hooks: call at the top level, only from components/hooks (the React Compiler and ESLint plugin enforce this).
- `useSyncExternalStore` is the correct way to subscribe to external stores (browser APIs, stores).

## Run

```bash
npx -w 03-react vitest run 05-custom-hooks
```

Code: [`index.tsx`](index.tsx) · Tests: [`index.test.tsx`](index.test.tsx)

## Interview questions
- Do two components using the same hook share state?
- What are the Rules of Hooks?
- Why `useSyncExternalStore` instead of effect + state?

## Exercises
1. Write `useFetch` with abort support.
1. Write `useMediaQuery`.
