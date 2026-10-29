# 06. React 19 Actions: useActionState, useOptimistic, useFormStatus, useTransition

## Concepts

- **Actions** are async functions run in a transition; React tracks pending state, errors and optimistic updates for you.
- `<form action={fn}>` passes `FormData` to the action and resets uncontrolled fields on success.
- `useActionState(action, initial)` → `[state, formAction, isPending]`: perfect for form results and validation errors.
- `useFormStatus()` reads the parent form's pending state (great for a reusable submit button).
- `useOptimistic` shows the expected result immediately and rolls back automatically if the action fails.
- In Next.js the same API works with **Server Actions** (see `04-nextjs`).

## Run

```bash
npx -w 03-react vitest run 06-react19-actions
```

Code: [`index.tsx`](index.tsx) · Tests: [`index.test.tsx`](index.test.tsx)

## Interview questions
- What is an Action in React 19?
- `useActionState` vs `useState` + `onSubmit`?
- How does `useOptimistic` roll back?

## Exercises
1. Add a password field with server-side style validation.
1. Build an optimistic comment list.
