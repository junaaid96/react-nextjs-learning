# 03. Objects, prototypes & classes

## Concepts

- Every object has a prototype; property lookup walks the **prototype chain**.
- `class` is syntax over prototypes, and adds `#private` fields, `static` blocks and accessors.
- Prefer immutable updates (`{...obj, x}`, `structuredClone`) for state that UI code relies on.

## Run

```bash
node --test 01-javascript/03-objects-classes
```

Code: [`index.js`](index.js) · Tests: [`index.test.js`](index.test.js)

## Interview questions
- How does prototypal inheritance work?
- `#private` vs closure privacy?
- Shallow vs deep copy (`structuredClone`)?

## Exercises
1. Add a `transfer(to, amount)` method.
1. Write a `deepFreeze(obj)` helper.
