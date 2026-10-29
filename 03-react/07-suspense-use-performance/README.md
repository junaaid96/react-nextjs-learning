# 07. Suspense, `use()`, lazy loading & performance

## Concepts

- `use(promise)` suspends until the promise resolves; wrap it in `<Suspense fallback>` and an error boundary. Create the promise outside render (or in a Server Component) so it's stable.
- `lazy()` + `Suspense` code-splits components.
- Performance order of operations: measure (React DevTools Profiler) → fix structure (move state down, pass children) → the **React Compiler** auto-memoizes → manual `memo`/`useMemo`/`useCallback` only for proven hot spots.
- `useDeferredValue` / `useTransition` keep typing responsive during heavy renders.

## Run

```bash
npx -w 03-react vitest run 07-suspense-use-performance
```

Code: [`index.tsx`](index.tsx) · Tests: [`index.test.tsx`](index.test.tsx)

## Interview questions
- How does `use()` differ from other hooks?
- What does the React Compiler do?
- `useDeferredValue` vs debouncing?

## Exercises
1. Add an error boundary around `QuoteSection`.
1. Profile `Search` with and without `memo`.
