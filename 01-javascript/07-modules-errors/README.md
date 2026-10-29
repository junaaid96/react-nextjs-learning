# 07. Modules, errors & defensive code

## Concepts

- ES modules (`import`/`export`) are static, strict mode and support top-level `await`; use `"type": "module"`.
- Throw **custom `Error` subclasses** and use `cause` to keep the original error chain.
- A `Result` style (`{ ok, value | error }`) keeps expected failures out of `try/catch` spaghetti.

## Run

```bash
node --test 01-javascript/07-modules-errors
```

Code: [`index.js`](index.js) · Tests: [`index.test.js`](index.test.js)

## Interview questions
- CommonJS vs ES modules?
- What is `error.cause`?
- When to throw vs return an error value?

## Exercises
1. Add a `NotFoundError` and map errors to HTTP status codes.
1. Use a dynamic `import()` to lazy-load a module.
