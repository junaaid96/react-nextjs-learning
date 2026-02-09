# Modern CSS Approaches

> Tailwind, CSS Modules, Styled Components, responsive design.

## Tailwind CSS (Highly Used)

Utility-first. Fast prototyping, consistent design.

```jsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    Click
  </button>
</div>
```

**Responsive:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

**Dark mode:**
```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

---

## CSS Modules

Scoped styles, no global conflicts.

```css
/* Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.primary {
  background: blue;
  color: white;
}
```

```jsx
import styles from './Button.module.css';
<button className={`${styles.button} ${styles.primary}`}>Click</button>
```

---

## Styled Components

CSS-in-JS with component syntax.

```jsx
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  border-radius: 0.25rem;

  &:hover {
    opacity: 0.9;
  }
`;
```

---

## Flexbox & Grid

**Flexbox** – 1D layout (row or column)
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

**Grid** – 2D layout
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
```

---

## Responsive Design (Mobile-First)

```css
/* Base = mobile */
.container { padding: 1rem; }

/* Tablet and up */
@media (min-width: 768px) {
  .container { padding: 2rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
}
```

Tailwind: `md:`, `lg:`, `xl:` etc.

---

## Why Modern CSS Matters for React/Next.js

- UI quality is a **major hiring signal** – teams want responsive, accessible, and clean designs.
- Most React/Next.js projects use **Tailwind, CSS Modules, or CSS-in-JS** today.
- Good CSS architecture reduces regressions and makes components easier to maintain.

---

## Where to Use Each Approach

- **Tailwind**: fast iteration, design systems, dashboards, components with many variations.
- **CSS Modules**: scoped styles in component-based apps without runtime overhead.
- **Styled Components / CSS-in-JS**: highly dynamic styling tied to props/state.
- **Flexbox**: navbars, toolbars, horizontally aligned items, center content.
- **Grid**: cards, dashboards, complex responsive layouts.

---

## Interview Q&A (with Examples)

### Q1: Why might you choose Tailwind over plain CSS?

- Strong **design system** via utility classes.
- Faster prototyping and consistent spacing/typography.
- No global CSS collisions; everything is local to the component via classes.

Mention tradeoff:
> Tailwind can make JSX noisy; I usually extract reusable components for complex patterns.

---

### Q2: Flexbox vs Grid — when to use which?

- **Flexbox**: 1D layout (row *or* column).
- **Grid**: 2D layout (rows *and* columns).

Example answer:
> I use Flexbox for simple horizontal/vertical alignment and Grid for full page or card layouts.

---

### Q3: How do you implement a mobile-first layout?

- Start with **single-column mobile styles**.
- Use `min-width` media queries or Tailwind breakpoints (`md:`, `lg:`) to enhance layout for larger screens.

---

### Q4: How would you implement dark mode in a Next.js app?

- Use a **theme toggle** that flips a `class` on `<html>` or `<body>` (`className="dark"`).
- Tailwind: use `dark:` variants to apply dark styles.
- Persist choice in localStorage or user profile.

---

## Quick Practice

- **Exercise 1**: Rebuild a simple landing page (hero, features, footer) using Tailwind utilities.
- **Exercise 2**: Implement a 3-column responsive grid that collapses to 1 column on mobile and 2 on tablet.
- **Exercise 3**: Add a dark mode toggle and wire it to Tailwind’s `dark:` classes.
- **Exercise 4**: Convert a global CSS file into CSS Modules and ensure no styles leak globally.

