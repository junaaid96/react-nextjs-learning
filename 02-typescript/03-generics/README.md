# 03. Generics & constraints

## Concepts

- Generics let a function/type work for many types while keeping the relationship between input and output.
- Constrain with `extends` (`<T extends { id: string }>`), use `keyof` for property-safe access.
- Default type params (`<T = string>`) and `const` type params (`<const T>`) keep literal types.

## Run

```bash
npx -w 02-typescript vitest run 03-generics
```

Code: [`index.ts`](index.ts) · Tests: [`index.test.ts`](index.test.ts)

## Interview questions
- Why generics instead of `any`?
- What does `K extends keyof T` guarantee?
- What is a `const` type parameter?

## Exercises
1. Write `groupBy<T, K extends PropertyKey>`.
1. Add `delete` and `update(id, patch: Partial<T>)` to `Repository`.
