# 05. Promises, async/await & the event loop

## Concepts

- The event loop runs one macrotask, then **drains all microtasks** (promise callbacks, `queueMicrotask`) before the next macrotask (`setTimeout`).
- `Promise.all` fails fast; `Promise.allSettled` never rejects; `Promise.any` resolves with the first success; `Promise.race` settles with the first settled.
- Always pass an `AbortSignal` to cancellable work (`fetch`, timers) and handle errors with `try/catch`.

## Run

```bash
node --test 01-javascript/05-async-event-loop
```

Code: [`index.js`](index.js) · Tests: [`index.test.js`](index.test.js)

## Interview questions
- Explain microtasks vs macrotasks.
- `Promise.all` vs `allSettled` vs `any` vs `race`?
- How do you cancel a fetch?

## Exercises
1. Add a `timeout(promise, ms)` helper.
1. Make `retry` respect an AbortSignal.
