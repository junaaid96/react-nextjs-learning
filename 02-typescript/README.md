# 02 · TypeScript

Strict TypeScript 6 (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`). Tests use Vitest, including type-level assertions with `expectTypeOf`.

```bash
npm run typecheck -w 02-typescript
npm test -w 02-typescript
```

| Lesson | Topic |
|---|---|
| [01-basics](01-basics/) | Types, inference & type annotations |
| [02-narrowing-unions](02-narrowing-unions/) | Union types, narrowing & discriminated unions |
| [03-generics](03-generics/) | Generics & constraints |
| [04-utility-mapped-types](04-utility-mapped-types/) | Utility, mapped, conditional & template literal types |
| [05-runtime-validation](05-runtime-validation/) | Runtime validation & type-safe APIs |
| [06-classes-patterns](06-classes-patterns/) | Classes, interfaces & typed patterns |

React-specific typing lives in [`../03-react`](../03-react) (all lessons are `.tsx`).
