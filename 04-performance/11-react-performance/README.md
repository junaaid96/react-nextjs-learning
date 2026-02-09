# React Performance

> Code splitting, memoization, virtual DOM, bundle optimization.

## Code Splitting (React.lazy + Suspense)

Load components only when needed.

```jsx
import { lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <HeavyChart />
    </Suspense>
  );
}
```

---

## Memoization

**React.memo** – Skip re-render if props unchanged.

```jsx
const MemoizedItem = React.memo(function Item({ name }) {
  return <li>{name}</li>;
});
```

**useMemo** – Cache computed value.

```jsx
const sorted = useMemo(() => [...items].sort(compare), [items]);
```

**useCallback** – Stable function reference.

```jsx
const onClick = useCallback(() => doSomething(id), [id]);
```

**When to use:** Expensive renders, lists, callbacks passed to memoized children.

---

## Virtual DOM

- React keeps a lightweight copy of the DOM in memory
- On state change, it diffs virtual DOM and updates only what changed
- Batched updates reduce real DOM operations

---

## Bundle Size Optimization

- Tree shaking (ES modules, sideEffect: false)
- Dynamic imports for heavy libraries
- Analyze with `@next/bundle-analyzer` or `webpack-bundle-analyzer`
- Replace moment.js with date-fns/dayjs

---

## Lazy Loading Images

```jsx
<img loading="lazy" src="..." alt="..." />

// Next.js
import Image from 'next/image';
<Image src="..." alt="..." />  // Built-in lazy load
```

---

## Why React Performance Matters

- Performance issues often come from **unnecessary re-renders**, large bundles, and expensive computations.
- In interviews, performance questions differentiate **mid vs senior** engineers.
- Production dashboards (tables, charts, analytics) require careful performance work.

---

## Where Performance Problems Show Up

- **Large lists/tables**: slow scrolling, laggy filtering/sorting.
- **Charts & dashboards**: expensive computations on every render.
- **Component trees with many children**: parent state changes trigger broad re-renders.
- **Slow networks / mobile devices**: large JS bundles increase time-to-interactive.

---

## Interview Q&A (with Examples)

### Q1: What causes a component to re-render?

Common causes:
- Its **state** changes
- Its **props** change (including new object/function references)
- Its parent re-renders (and it isn’t memoized)
- Context value it consumes changes

Good interview line:
> Re-renders are normal; the goal is to avoid *unnecessary* ones, especially in large lists and expensive components.

---

### Q2: When should you use `useMemo` / `useCallback`?

Use them when:
- You have **expensive computations** or large derived data.
- You pass callbacks into **memoized children** and need stable references.

Avoid using them everywhere:
> Memoization has overhead and can make code harder to read. I add it when profiling shows it helps.

---

### Q3: Why can `items.sort()` inside `useMemo` be a bug?

Because `.sort()` mutates the array in place. If `items` is a prop or state, mutating it breaks immutability.

```jsx
// ✅ Good: copy before sorting
const sorted = useMemo(() => [...items].sort(compare), [items]);
```

---

### Q4: What is code splitting and why does it help?

Code splitting loads only the code needed for the current route/feature, reducing initial bundle size and improving load time.

---

## Quick Practice

- **Exercise 1**: Create a list of 5,000 items and measure rendering time; add `React.memo` and stable props.
- **Exercise 2**: Add a search box; implement **debouncing** so filtering doesn’t run on every keystroke.
- **Exercise 3**: Lazy-load a heavy chart component with `React.lazy`.
- **Exercise 4**: Use React DevTools Profiler to find which components re-render and why.

