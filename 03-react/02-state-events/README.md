# 02. State, events & controlled inputs

## Concepts

- `useState` holds component memory; setting state schedules a re-render. Use the **updater form** (`setN(n => n + 1)`) when the new value depends on the old.
- Never mutate state: create new arrays/objects.
- **Derive** values during render instead of storing duplicates in state.
- Controlled inputs: the value lives in state, `onChange` updates it.

## Run

```bash
npx -w 03-react vitest run 02-state-events
```

Code: [`index.tsx`](index.tsx) · Tests: [`index.test.tsx`](index.test.tsx)

## Interview questions
- Why use the updater form?
- What is derived state and why avoid storing it?
- Controlled vs uncontrolled inputs?

## Exercises
1. Add delete and 'clear completed'.
1. Persist todos to `localStorage`.
