# Components & Props

> Building blocks of React. Understand functional vs class, props flow, and composition.

## Functional vs Class Components

| | Functional | Class |
|---|-----------|-------|
| Syntax | `function Foo() {}` or `const Foo = () => {}` | `class Foo extends React.Component {}` |
| Hooks | ✅ Yes | ❌ No |
| Modern choice | ✅ Preferred | Legacy |

**Always use functional components** – hooks work only with them.

```jsx
// Functional (modern, preferred)
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Class (legacy - know for interviews)
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## Props

- **Read-only** – never mutate props
- Pass data **parent → child**
- Use destructuring for cleaner code

```jsx
// Props drilling - passing through multiple levels
<Grandparent user={user}>
  <Parent user={user}>
    <Child user={user} />
  </Parent>
</Grandparent>

// Better: Context or state management for deep trees
```

### PropTypes (Runtime validation)

```jsx
import PropTypes from 'prop-types';

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool,
};
```

**Note:** With TypeScript, use interfaces instead of PropTypes.

---

## Children Props

Special prop that contains content between tags.

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Card title="User Info">
  <p>This is the child content</p>
</Card>
```

---

## Component Composition

Prefer composition over inheritance.

```jsx
// Bad: inheritance
class SpecialButton extends Button { ... }

// Good: composition
function PageLayout({ header, sidebar, content }) {
  return (
    <div>
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{content}</main>
    </div>
  );
}
```

See `examples/` for runnable code.

---

## Why Components & Props Matter

- **Declarative UI**: Instead of manually touching the DOM, you describe **what** the UI should look like for a given state. React handles the DOM updates.
- **Reusability**: Components are like functions for UI. You can reuse them with different **props** across pages and projects.
- **Separation of concerns**: Split your app into small pieces (button, card, layout, page) rather than one huge file.
- **Testability**: Small, pure components that receive props are easy to test in isolation.

---

## Where You Will Use Them (Real Apps)

- **Design systems**: Buttons, inputs, modals, cards, tables – all modeled as reusable components.
- **Pages & layouts**: Page-level components composed from smaller UI pieces (`<Header>`, `<Sidebar>`, `<Content>`).
- **Stateful flows**: Checkout steps, multi-step forms, dashboards – each step/screen is a component tree.
- **Next.js routing**: Each file in `app/` or `pages/` exports a **React component** – props connect data to those components.

---

## Interview Q&A (with Examples)

### Q1: What is the difference between a component and an element?

- **Element**: A plain object that describes what you want to see on the screen (what JSX compiles to).
- **Component**: A function (or class) that **returns elements**.

```jsx
// JSX element
const heading = <h1>Hello</h1>;

// Component that returns an element
function Heading() {
  return <h1>Hello</h1>;
}
```

**How to answer in interviews**:  
> A component is a reusable piece of UI logic (function or class) that returns elements.  
> Elements are the immutable descriptions of what should appear in the DOM.

---

### Q2: Why are props read-only? What happens if you try to change them?

- Props represent **data owned by the parent**.
- Mutating props breaks **one-way data flow** and makes components harder to reason about.

```jsx
function Profile({ user }) {
  // ❌ Never do this
  // user.name = 'Changed';

  // ✅ Derive new values instead
  const displayName = user.name.toUpperCase();

  return <h2>{displayName}</h2>;
}
```

In an interview, emphasize:
- Components should be **pure** with respect to props.
- If a child needs to change something, it should call a **callback from props** so the parent updates its own state.

---

### Q3: When would you use children vs explicit props?

- Use **`children`** when you want to let the parent decide **what goes inside** a component.
- Use **explicit props** when you want to pass **config/values**, not arbitrary JSX.

```jsx
// children for flexible layout
function Card({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// usage
<Card title="User">
  <p>Jane Doe</p>
  <button>View profile</button>
</Card>
```

Explain it as:
> `children` is great for composition. I use it when the child content is UI,  
> and named props when I need to pass data or configuration.

---

### Q4: How do components and props help with reusability? Give an example.

```jsx
function Button({ label, variant = 'primary', onClick }) {
  const className =
    variant === 'primary'
      ? 'px-4 py-2 rounded bg-blue-600 text-white'
      : 'px-4 py-2 rounded bg-gray-200 text-gray-900';

  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}

// Reuse with different props
<Button label="Save" onClick={handleSave} />
<Button label="Cancel" variant="secondary" onClick={handleCancel} />
```

**Key idea**: The **structure & behavior** live in one place (`Button`),  
and only the **props** change across usages.

---

### Q5: Where do you draw the line between one big component vs many small ones?

Guidelines you can mention:

- If a component:
  - Grows beyond ~30–40 lines,
  - Handles multiple concerns (data fetching, layout, complex JSX),
  - Is hard to test,
  
then **split it**:

```jsx
// Page (container) – fetches data and decides what to render
function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return <UsersList users={users} />;
}

// Presentational – purely UI
function UsersList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Answer like this:
> I try to keep components small and focused on one responsibility.  
> If a component is doing data fetching, complex layout, and lots of UI at once,  
> I split it into a container (data/logic) and presentational components (UI).

---

## Quick Practice

- **Exercise 1**: Turn a static HTML card into a reusable `Card` component with `title`, `subtitle`, and `children`.
- **Exercise 2**: Refactor a page that passes the same props through 3+ levels into a **Context** or state management solution.
- **Exercise 3**: Take a very large component in your project and split it into at least **one container + two presentational** components.

