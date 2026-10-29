# 01. Types, inference & type annotations

## Concepts

- Let TypeScript **infer** locals; annotate function parameters, return types of exported functions, and public APIs.
- Primitive types, arrays (`T[]`), tuples (`[string, number]`), `unknown` (safe) vs `any` (unsafe), `never` (impossible).
- `type` vs `interface`: both describe shapes; interfaces can be merged/extended, types can express unions and mapped types. Pick one convention and be consistent.
- `as const` freezes literals into readonly literal types.

## Run

```bash
npx -w 02-typescript vitest run 01-basics
```

Code: [`index.ts`](index.ts) · Tests: [`index.test.ts`](index.test.ts)

## Interview questions
- `unknown` vs `any` vs `never`?
- `type` vs `interface`?
- What does `as const` do?

## Exercises
1. Model a `Product` with an optional discount and a readonly SKU.
1. Turn on `noUncheckedIndexedAccess` errors and fix one.
