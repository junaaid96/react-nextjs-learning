# Interview questions

Each lesson README ends with its own questions. This page collects the high-frequency ones. The original question bank is in [`legacy/09-job-prep`](../legacy/09-job-prep/interview-questions.md).

## JavaScript
1. Explain closures with a practical example.
2. How does the event loop order sync code, microtasks and timers?
3. `==` vs `===`; `null` vs `undefined`; `??` vs `||`.
4. How does `this` get bound?
5. Prototypal inheritance vs classes.
6. `Promise.all` vs `allSettled` vs `any` vs `race`.
7. Debounce vs throttle.

## TypeScript
1. `unknown` vs `any` vs `never`.
2. `type` vs `interface`.
3. What are generics and constraints?
4. Discriminated unions and exhaustive checks.
5. Why do you still need runtime validation?

## React
1. What triggers a re-render? How do you avoid unnecessary ones?
2. Why must state be immutable?
3. When do you NOT need `useEffect`?
4. How do keys work in lists?
5. Context performance pitfalls.
6. What are Actions, `useActionState` and `useOptimistic` in React 19?
7. What does the React Compiler do?
8. Explain Suspense and `use()`.

## Next.js
1. Server Components vs Client Components.
2. SSR vs SSG vs ISR vs Partial Prerendering.
3. How does caching work in Next.js 16 (`'use cache'`, `cacheLife`, `cacheTag`)?
4. `updateTag` vs `revalidateTag` vs `revalidatePath`.
5. Server Actions vs Route Handlers.
6. How do you protect routes? Why isn't `proxy.ts` enough?
7. How do `loading.tsx`, `error.tsx` and `not-found.tsx` work?
8. How would you deploy and self-host a Next.js app?
