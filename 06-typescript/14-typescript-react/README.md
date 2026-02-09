# TypeScript with React

> Component typing, props interfaces, event types, generics.

## Component Typing

```tsx
// Function component
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}

// With children
function Card({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
```

---

## Props Interface

```tsx
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ label, variant = 'primary', onClick, disabled }: ButtonProps) {
  return (
    <button className={variant} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
```

---

## Event Types

```tsx
function Input() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
}
```

---

## Generic Components

```tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}

// Usage
<List items={users} renderItem={(user) => <li>{user.name}</li>} />
```

---

## Type vs Interface

- **Interface** – Extend with `extends`, good for object shapes
- **Type** – Unions, intersections, primitives

```tsx
type Status = 'idle' | 'loading' | 'error';
interface User { id: number; name: string; }
type UserWithRole = User & { role: string };
```

---

## Strict Mode

Use `strict: true` in tsconfig. Avoid `any`; use `unknown` when type is unknown.

---

## Why TypeScript Matters in React/Next.js

- Prevents common runtime bugs by catching them at compile time (wrong props, wrong event types, missing fields).
- Makes refactoring safer in large codebases (rename, move, change contracts confidently).
- Improves collaboration: types document component and API contracts.

---

## Where TypeScript Helps the Most

- **Component boundaries**: strict props typing prevents misuse of UI components.
- **API contracts**: typed request/response models reduce “undefined” bugs.
- **Forms**: schema-driven types (Zod) + TS eliminates mismatched fields.
- **State management**: typed actions/selectors and query keys reduce bugs.

---

## Interview Q&A (with Examples)

### Q1: Type vs interface — when do you use each?

- **interface**: object shapes, especially when you expect extension/implementation.
- **type**: unions, intersections, mapped types, utility composition.

Good interview line:
> I use `interface` for public object contracts and `type` for unions and composition. Both are fine; consistency matters.

---

### Q2: Why avoid `any`? What should you use instead?

`any` disables type checking and can hide bugs. Prefer:
- `unknown` when you truly don’t know the type yet.
- Narrow `unknown` with runtime checks.

```tsx
function parseJson(input: string): unknown {
  return JSON.parse(input);
}

const value = parseJson('{"x":1}');
if (typeof value === 'object' && value !== null && 'x' in value) {
  // now narrowed safely
}
```

---

### Q3: How do you type `children` properly?

Use `React.ReactNode`:

```tsx
function Card({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
```

---

### Q4: How do generics make components reusable?

They let you write one component that works with many item types while preserving type safety.

```tsx
function List<T>(props: { items: T[]; renderItem: (item: T) => React.ReactNode }) {
  return <ul>{props.items.map(props.renderItem)}</ul>;
}
```

---

## Quick Practice

- **Exercise 1**: Convert a JS component to TS and type all props/events without using `any`.
- **Exercise 2**: Define API response types and create a typed fetch helper that returns `Promise<T>`.
- **Exercise 3**: Create a reusable `Select<T>` component with generics.
- **Exercise 4**: Turn on `strict: true` and fix all type errors by narrowing and better typing.

