# React Hooks (Most Important)

> Hooks let you use state and other React features without writing a class.

## useState

Manage local component state.

```jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });

// Updater function - use when new state depends on previous
setCount(prev => prev + 1);

// Object update - spread to avoid mutation
setUser(prev => ({ ...prev, name: 'John' }));
```

**Rules:** Never call hooks inside loops, conditions, or nested functions.

---

## useEffect

Run side effects (API calls, subscriptions, DOM) after render.

```jsx
useEffect(() => {
  // Runs after every render
  fetchData();
}, []);  // Empty deps = run once on mount

useEffect(() => {
  fetchUser(id);
}, [id]);  // Run when id changes

useEffect(() => {
  const sub = subscribe();
  return () => sub.unsubscribe();  // Cleanup on unmount
}, []);
```

**Cleanup is important** – prevent memory leaks for subscriptions, timers.

---

## useContext

Share values without prop drilling.

```jsx
const ThemeContext = createContext('light');

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// Consumer
const theme = useContext(ThemeContext);
```

---

## useRef

- Hold **mutable value** that doesn't trigger re-render
- Access **DOM elements**

```jsx
const inputRef = useRef(null);
const renderCount = useRef(0);

useEffect(() => {
  renderCount.current += 1;
});

// DOM reference
<input ref={inputRef} />
inputRef.current.focus();
```

---

## useMemo

Memoize **expensive computed values**.

```jsx
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
```

Use when: expensive computation, referential equality for child props.

---

## useCallback

Memoize **functions** (prevents child re-renders when passed as prop).

```jsx
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

---

## useReducer

Complex state logic, multiple sub-values, next state depends on previous.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
}
```

---

## Custom Hooks

Extract reusable logic. Name must start with `use`.

```jsx
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key)) ?? initial
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
```

See `examples/` for full implementations.

---

## Why Hooks Matter

- Hooks bring **state, side effects, and lifecycle** into functional components without classes.
- They encourage **composition of logic** – you can extract reusable behavior into **custom hooks**.
- They enable fine-grained optimization (e.g. `useMemo`, `useCallback`) and better separation of concerns.

---

## Where You Use Each Hook

- **`useState`**: component-local UI state (toggles, inputs, modals, tabs).
- **`useEffect`**: data fetching, subscriptions, timers, syncing to external systems (document title, analytics).
- **`useContext`**: themes, current user, feature flags, global UI state.
- **`useRef`**: focusing inputs, measuring elements, storing values across renders without causing re-renders.
- **`useMemo` / `useCallback`**: expensive computations and stable callbacks passed to memoized children.
- **`useReducer`**: complex state machines, multi-step flows, forms with many fields.
- **Custom hooks**: any logic that repeats across components (data fetching, auth, keyboard shortcuts).

---

## Interview Q&A (with Examples)

### Q1: What problem do hooks solve compared to class components?

Hooks:
- Remove the need for `this` and lifecycle methods like `componentDidMount`.
- Let you **split logic by concern** (e.g. “subscribe to chat” vs “listen to window size”) instead of by lifecycle method.
- Enable easy **sharing of logic** via custom hooks, instead of HOCs/render props.

---

### Q2: How do you avoid infinite loops with `useEffect`?

- Ensure that **dependencies reflect all values used** inside the effect.
- Do **not** update state unconditionally inside an effect that depends on that state.

```jsx
// ❌ Bad - updates count every render
useEffect(() => {
  setCount(count + 1);
}, [count]);

// ✅ Good - effect depends on id, not on derived state
useEffect(() => {
  void fetchUser(id);
}, [id]);
```

Explain it as:
> Infinite loops happen when an effect updates state that is in its dependency array  
> without any guard. I carefully choose dependencies and avoid unnecessary state.

---

### Q3: When do you choose `useReducer` over `useState`?

Use `useReducer` when:
- State has **multiple related fields**.
- Next state depends heavily on **current state and action type**.
- You want a **clear transition table** (state machine).

```jsx
interface CounterState {
  count: number;
}

type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}
```

---

### Q4: What’s the difference between `useMemo` and `useCallback`?

- `useMemo` memoizes a **value** (result of a computation).
- `useCallback` memoizes a **function**.

```jsx
const sortedUsers = useMemo(
  () => [...users].sort((a, b) => a.name.localeCompare(b.name)),
  [users]
);

const handleSelect = useCallback(
  (id: string) => {
    onSelect(id);
  },
  [onSelect]
);
```

---

### Q5: Why must hooks be called at the top level of the component?

Because React relies on **call order** to match hook state between renders.  
If hooks were called conditionally or in loops, the order would change and React would not know which state belongs to which hook.

---

## Quick Practice

- **Exercise 1**: Convert a class component with `componentDidMount` + `componentWillUnmount` into a functional component using `useEffect` with cleanup.
- **Exercise 2**: Extract a repeated data-fetching pattern from two components into a **custom hook**.
- **Exercise 3**: Implement a small **wizard/multi-step form** using `useReducer` to manage steps and data.
- **Exercise 4**: Profile a component with React DevTools and add `useMemo`/`useCallback` only where it measurably reduces renders.

