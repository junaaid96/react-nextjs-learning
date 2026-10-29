# 04. Context + useReducer for shared state

## Concepts

- `useReducer` centralises complex state transitions in a pure function (easy to unit test).
- Context passes values deep without prop drilling. Split state and dispatch contexts so dispatch-only consumers don't re-render.
- React 19: render `<Context value={...}>` directly (no `.Provider`), and read context with `use(Context)` (works conditionally).
- Reach for an external store (Zustand, Redux Toolkit) only when context + reducer becomes painful; server data belongs in a data-fetching cache, not global state.

## Run

```bash
npx -w 03-react vitest run 04-context-reducer
```

Code: [`index.tsx`](index.tsx) · Tests: [`index.test.tsx`](index.test.tsx)

## Interview questions
- When would you choose `useReducer` over `useState`?
- Why split state and dispatch contexts?
- What does `use()` do in React 19?

## Exercises
1. Add a `decrement` action.
1. Persist the cart with `useSyncExternalStore` + localStorage.
