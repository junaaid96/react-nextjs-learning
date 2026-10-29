# 02. Functions, `this`, call/apply/bind

## Concepts

- `this` is decided by **how a function is called**, not where it is written (except arrow functions, which capture `this` lexically).
- Rules in priority order: `new` > explicit (`call`/`apply`/`bind`) > method call (`obj.fn()`) > default (`undefined` in strict/module code).
- Higher-order functions take or return functions: `compose`, `pipe`, `curry`.

## Run

```bash
node --test 01-javascript/02-functions-this
```

Code: [`index.js`](index.js) · Tests: [`index.test.js`](index.test.js)

## Interview questions
- Explain the four `this` binding rules.
- When should you NOT use an arrow function?
- Implement `bind` yourself.

## Exercises
1. Implement `partial(fn, ...args)`.
1. Write `throttle(fn, ms)`.
