# 02. Union types, narrowing & discriminated unions

## Concepts

- Narrow with `typeof`, `instanceof`, `in`, equality checks, and **user-defined type guards** (`x is T`).
- **Discriminated unions** (a shared literal `kind`/`status` field) model state machines safely: impossible states become unrepresentable.
- An exhaustive `switch` with a `never` check makes the compiler tell you when a new case is added.

## Run

```bash
npx -w 02-typescript vitest run 02-narrowing-unions
```

Code: [`index.ts`](index.ts) · Tests: [`index.test.ts`](index.test.ts)

## Interview questions
- What is a discriminated union?
- How does exhaustive checking with `never` work?
- What is a type predicate?

## Exercises
1. Add a `triangle` shape and see the compiler error.
1. Model a checkout flow as a discriminated union.
