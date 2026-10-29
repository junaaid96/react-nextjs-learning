# Best practices (JavaScript · TypeScript · React · Next.js)

## JavaScript
- Prefer `const`, then `let`; never `var`.
- Don't mutate shared data: use spread, `structuredClone`, `toSorted`/`with`.
- Use `async/await` with `try/catch`, pass `AbortSignal`s, and run independent work with `Promise.all`.
- Throw `Error` subclasses with `cause`; never throw strings.
- Use `??` for defaults (not `||`) and `?.` for optional access.

## TypeScript
- Turn on `strict`, `noUncheckedIndexedAccess`; avoid `any` (use `unknown` + narrowing).
- Model state with discriminated unions; add exhaustive `never` checks.
- Validate all external data at the boundary (Zod/Valibot) and infer types from schemas.
- Let inference work for locals; annotate exported APIs.
- Use `satisfies` for config objects and `as const` for literal tables.

## React
- Keep components pure; derive values during render instead of syncing state.
- Effects are for external systems only; always clean up.
- Lift state only as high as needed; colocate the rest.
- Use the React Compiler before reaching for `memo`/`useMemo`/`useCallback`.
- Use Actions (`useActionState`, `useOptimistic`, `useFormStatus`) for mutations.
- Accessibility: semantic HTML, labels, keyboard support; test by role/label.
- Stable `key`s from data ids.

## Next.js 16
- Server Components by default; push `'use client'` to the leaves.
- Fetch in parallel on the server; wrap request-time data in `<Suspense>` to keep a static shell.
- Cache deliberately with `'use cache'` + `cacheLife` + `cacheTag`; invalidate with `updateTag`/`revalidateTag`.
- Treat every Server Action as a public endpoint: validate, authenticate, authorise.
- Do auth checks in a `server-only` Data Access Layer, not just `proxy.ts`.
- Keep secrets in env vars, never in `NEXT_PUBLIC_*`.
- Use `next/image`, `next/font` and `next/link`; measure with Lighthouse and Web Vitals.

## Testing
- Unit-test pure logic (reducers, validators, utils).
- Component tests with React Testing Library: interact like a user, assert visible output.
- Route handlers and server utilities are plain functions; call them directly.
- Add end-to-end tests (Playwright) for critical flows such as login and checkout.

## Project hygiene
- Small, focused commits and PRs; lint + typecheck + test before pushing.
- Dependabot keeps dependencies current; read release notes before major upgrades.
