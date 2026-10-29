# 08. DOM, events & browser APIs (testable core)

## Concepts

- Event delegation: one listener on a parent handles events for many children (`event.target.closest(...)`).
- Debounce input handlers, throttle scroll handlers.
- Browser APIs worth knowing: `fetch`, `AbortController`, `URL`/`URLSearchParams`, `localStorage`, `IntersectionObserver`, `structuredClone`.
- This lesson keeps logic pure so it runs in Node; try the snippets in a browser console too.

## Run

```bash
node --test 01-javascript/08-dom-browser-apis
```

Code: [`index.js`](index.js) · Tests: [`index.test.js`](index.test.js)

## Interview questions
- What is event delegation?
- Debounce vs throttle?
- `localStorage` vs cookies vs `sessionStorage`?

## Exercises
1. Add `once(type, fn)` to `Emitter`.
1. Write a `useDebounce` hook later in the React section.
