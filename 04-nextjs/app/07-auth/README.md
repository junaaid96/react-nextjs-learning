# 07. Auth basics: sessions, cookies, `proxy.ts`, protected pages

## Concepts

- The flow: login Server Action → verify credentials → set an **httpOnly, secure, sameSite** signed cookie → redirect.
- `proxy.ts` (renamed from `middleware.ts` in Next 16) does fast *optimistic* redirects for signed-out users.
- **Always re-verify** in a Data Access Layer (`session.ts`, marked `server-only`) where data is read; never trust only proxy.
- Session reads use `cookies()`, so they're request-time and sit inside `<Suspense>`.
- For real apps use Auth.js, Better Auth or Clerk, hash passwords (argon2/bcrypt) and set `SESSION_SECRET` (see `.env.example`).
- Demo login: `demo@example.com` / `learn-nextjs`.

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/07-auth
```

## Interview questions
- Why shouldn't auth live only in proxy/middleware?
- Which cookie flags matter and why?
- Stateless signed cookie vs database session?

## Exercises
1. Add role-based authorisation (`admin` only page).
1. Rotate the session on each login and add logout everywhere.
