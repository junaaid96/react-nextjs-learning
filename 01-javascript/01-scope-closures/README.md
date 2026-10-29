# 01. Scope, hoisting & closures

## Concepts

- `let`/`const` are block scoped and live in the *temporal dead zone* until declared; `var` is function scoped and hoisted as `undefined`.
- A **closure** is a function plus the variables it captured from where it was *defined*. It is how JS gives you private state without classes.
- Classic bug: `var` in a loop shares one binding across callbacks; `let` creates a fresh binding per iteration.

## Run

```bash
node --test 01-javascript/01-scope-closures
```

Code: [`index.js`](index.js) · Tests: [`index.test.js`](index.test.js)

## Interview questions
- What is a closure and give a real use case?
- What is the temporal dead zone?
- Why does a `var` loop with `setTimeout` print the same number?

## Exercises
1. Write `debounce(fn, ms)` using a closure.
1. Add a `reset()` method to `createCounter`.
