# Component Patterns

> Reusable, maintainable component architectures.

## Controlled vs Uncontrolled

**Controlled:** React state is source of truth.

```jsx
const [value, setValue] = useState('');
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

**Uncontrolled:** DOM holds state, use ref to read.

```jsx
const inputRef = useRef();
<input ref={inputRef} defaultValue="initial" />
// Read: inputRef.current.value
```

Prefer controlled for most forms; uncontrolled for file inputs or simple cases.

---

## Higher-Order Component (HOC)

Function that takes a component and returns an enhanced component.

```jsx
function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const user = useAuth();
    if (!user) return <Navigate to="/login" />;
    return <WrappedComponent {...props} user={user} />;
  };
}
```

---

## Render Props

Component receives a function as prop to render content.

```jsx
<DataFetcher url="/api/users" render={(data) => <UserList users={data} />} />
```

---

## Compound Components

Components that work together, share implicit state.

```jsx
<Tabs>
  <Tabs.List>
    <Tabs.Tab id="1">Tab 1</Tabs.Tab>
    <Tabs.Tab id="2">Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="1">Content 1</Tabs.Panel>
  <Tabs.Panel id="2">Content 2</Tabs.Panel>
</Tabs>
```

---

## Container/Presentational

- **Container:** Logic, data fetching, state
- **Presentational:** Pure UI, receives props only

```jsx
// UserListContainer.jsx - fetches data, passes to UserList
// UserList.jsx - renders UI from props
```

See `examples/` for code.

---

## Why Component Patterns Matter

- Patterns give you **repeatable solutions** for structuring components in large apps.
- They improve **reusability, testability, and separation of concerns**.
- Interviewers use these topics to see if you can **design architecture**, not just write components.

---

## Where to Use Each Pattern

- **Controlled components**: forms, search inputs, filters – when the parent should own the value.
- **Uncontrolled components**: file inputs, very simple forms, or integration with non-React code.
- **HOCs**: legacy codebases, cross-cutting concerns (analytics, auth) when hooks are not an option.
- **Render props**: reusable behavior where children decide how to render (less common now, replaced by hooks).
- **Compound components**: complex UI widgets (tabs, dropdowns, menus, modals) with shared internal state.
- **Container/Presentational**: clear split between **data fetching/logic** and **pure UI**.

---

## Interview Q&A (with Examples)

### Q1: What is the difference between a controlled component and an uncontrolled component?

- **Controlled**: value comes from React state; on change, you update state.
- **Uncontrolled**: DOM manages value; you read it via `ref` when needed.

Explain:
> I use controlled components when I need validation, instant feedback, or to sync multiple parts of the UI.  
> I use uncontrolled for simple inputs or when integrating third-party widgets.

---

### Q2: When would you choose compound components over many props?

When a component has **many possible configurations** (e.g. Tabs, Dropdown, Modal with Header/Body/Footer), passing everything via props becomes messy.  
Compound components let you write more natural JSX and hide state management:

```jsx
<Dropdown>
  <Dropdown.Trigger>Open</Dropdown.Trigger>
  <Dropdown.Menu>
    <Dropdown.Item>Profile</Dropdown.Item>
    <Dropdown.Item>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

---

### Q3: Why are HOCs and render props less popular now?

- They can create **deep wrapper hierarchies** and make JSX hard to read (“wrapper hell”).
- **Hooks** allow you to share logic with simple functions (`useXyz`) while keeping JSX flat.

However, you still see HOCs in libraries (e.g. `connect` in older Redux code).

---

### Q4: How does the container/presentational pattern help in a team?

- Containers handle **data fetching, state, and side effects**.
- Presentational components focus on **layout and styling**.

This separation:
- Makes presentational components easy to reuse across features.
- Lets different people work in parallel (one on data, one on UI).

---

## Quick Practice

- **Exercise 1**: Take a large “god component” and split it into at least:
  - a **container** for data fetching + state
  - multiple **presentational** components.
- **Exercise 2**: Implement a `Tabs` compound component with `Tabs.List`, `Tabs.Tab`, and `Tabs.Panel`.
- **Exercise 3**: Wrap an existing page in a simple `withAuth` HOC and then refactor the same logic into a **hook + guard component**.

