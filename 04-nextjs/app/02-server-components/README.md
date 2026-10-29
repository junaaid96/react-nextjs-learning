# 02. Server Components vs Client Components

## Concepts

- Every component in `app/` is a **Server Component** by default: it can be `async`, read databases/secrets directly and ships **no JS**.
- Add `'use client'` only at the boundary that needs state, effects, event handlers or browser APIs. Everything imported by it becomes client code.
- Pass Server → Client only **serialisable** props; pass Server Components *as children* into Client Components to keep them on the server.
- Use `import 'server-only'` to make accidental client imports a build error.

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/02-server-components
```

## Interview questions
- What can't a Server Component do?
- How do you render a Server Component inside a Client Component?
- What does `'use client'` actually mark?

## Exercises
1. Move the like button state to a Server Action.
1. Add `server-only` to `lib/db.ts` and see what breaks.
