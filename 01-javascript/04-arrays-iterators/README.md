# 04. Arrays, iterators & generators

## Concepts

- Non-mutating array methods (`toSorted`, `toReversed`, `toSpliced`, `with`) are safe for React state.
- `Object.groupBy` / `Map.groupBy` replace hand-written reduce grouping.
- Generators (`function*`) produce lazy sequences; anything with `[Symbol.iterator]` works with `for...of` and spread.

## Run

```bash
node --test 01-javascript/04-arrays-iterators
```

Code: [`index.js`](index.js) · Tests: [`index.test.js`](index.test.js)

## Interview questions
- `map` vs `forEach`?
- Why are `toSorted`/`with` useful in React?
- What is the iterator protocol?

## Exercises
1. Write a lazy `filterIter(iterable, pred)` generator.
1. Implement `chunk(array, size)`.
