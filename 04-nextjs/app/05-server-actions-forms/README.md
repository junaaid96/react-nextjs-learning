# 05. Server Actions & forms

## Concepts

- `'use server'` functions run on the server and can be passed to `<form action>` or called from Client Components.
- Each action is a **public POST endpoint**: validate input (Zod/Valibot), authenticate and authorise inside the action.
- `useActionState` returns field errors/messages; `useFormStatus` drives a pending submit button; forms work before JS loads.
- After mutating, invalidate with `updateTag`/`revalidatePath` and optionally `redirect()`.

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/05-server-actions-forms
```

## Interview questions
- Why are Server Actions security-sensitive?
- How does progressive enhancement work here?
- Server Action vs Route Handler: when to use each?

## Exercises
1. Add an optimistic list with `useOptimistic`.
1. Add a delete action guarded by the session from lesson 07.
