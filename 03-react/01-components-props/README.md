# 01. Components, props, JSX & composition

## Concepts

- A component is a function that returns JSX. Keep it **pure**: same props → same output, no side effects during render.
- Props are read-only inputs; `children` enables composition. Prefer composition over configuration flags.
- Lists need stable `key`s (ids, not array indexes when items can move).
- React 19: `ref` is a normal prop for function components (no `forwardRef` needed).

## Run

```bash
npx -w 03-react vitest run 01-components-props
```

Code: [`index.tsx`](index.tsx) · Tests: [`index.test.tsx`](index.test.tsx)

## Interview questions
- Why must components be pure?
- Why do lists need keys and why not the index?
- What changed about `ref` in React 19?

## Exercises
1. Add an `icon` slot prop to `Button`.
1. Build an `Avatar` with a fallback when the image is missing.
