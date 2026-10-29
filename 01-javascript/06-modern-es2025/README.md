# 06. Modern JavaScript: ES2023 to ES2025 features

## Concepts

| Feature | Year | Example |
|---|---|---|
| `Array#findLast`, `toSorted`, `with` | ES2023 | `arr.with(0, x)` |
| `Object.groupBy`, `Promise.withResolvers` | ES2024 | see lesson 04/05 |
| `Set` methods (`union`, `intersection`, `difference`, ...) | ES2025 | `a.union(b)` |
| Iterator helpers (`.map`, `.filter`, `.take`, `.toArray`) on iterators | ES2025 | `Iterator.from(x).take(3)` |
| `Promise.try`, `RegExp.escape`, JSON modules, `Float16Array` | ES2025 | `Promise.try(fn)` |

Check runtime support before using cutting-edge features: this lesson feature-detects `Promise.try` and `RegExp.escape`.
Also covered: optional chaining `?.`, nullish coalescing `??`, logical assignment `??=`, `structuredClone`, `at()`.

## Run

```bash
node --test 01-javascript/06-modern-es2025
```

Code: [`index.js`](index.js) · Tests: [`index.test.js`](index.test.js)

## Interview questions
- What do iterator helpers give you over array methods?
- `??` vs `||`?
- How do you safely adopt new language features?

## Exercises
1. Use `Map.groupBy` to group users by role.
1. Rewrite lesson 04's `take` with iterator helpers.
