# 04. Utility, mapped, conditional & template literal types

## Concepts

- Built-ins: `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters`, `Awaited`, `NonNullable`.
- **Mapped types** transform every key (`{ [K in keyof T]: ... }`), with `as` for key remapping.
- **Conditional types** (`T extends U ? X : Y`) with `infer` extract inner types.
- **Template literal types** build string unions (`on${Capitalize<K>}`).
- `satisfies` checks a value against a type without widening it.

## Run

```bash
npx -w 02-typescript vitest run 04-utility-mapped-types
```

Code: [`index.ts`](index.ts) · Tests: [`index.test.ts`](index.test.ts)

## Interview questions
- `Pick` vs `Omit`?
- What does `infer` do?
- `satisfies` vs a type annotation?

## Exercises
1. Write `Mutable<T>` that removes `readonly`.
1. Create `PathParams<'/todos/:id'>` → `{ id: string }`.
