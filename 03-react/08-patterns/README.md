# 08. Component patterns: compound components, render props, portals

## Concepts

- **Compound components** share implicit state via context (`<Tabs><Tabs.List/>…`). Ported from the original `compound-tabs.jsx`.
- **Render props / children as function** hand rendering control to the caller (now mostly replaced by hooks).
- **Headless components** own behaviour + accessibility; consumers own markup (Radix, React Aria, shadcn/ui follow this).
- Accessibility first: correct roles, `aria-*`, keyboard support.

## Run

```bash
npx -w 03-react vitest run 08-patterns
```

Code: [`index.tsx`](index.tsx) · Tests: [`index.test.tsx`](index.test.tsx)

## Interview questions
- What problem do compound components solve?
- Render props vs custom hooks?
- What is a headless component?

## Exercises
1. Add arrow-key navigation to `Tabs`.
1. Build an accessible `Modal` with `createPortal`.
