# State Management

> When to use what: local state → Context → Redux/Zustand → React Query.

## Local vs Global State

| Type | Use Case | Tool |
|------|----------|------|
| Local | Component-specific (input, toggle) | useState |
| Shared (UI) | Theme, modal, sidebar | Context |
| Shared (app) | User, cart, settings | Zustand / Redux |
| Server | API data, caching | React Query |

---

## Context API

Good for: theme, auth, locale. Avoid for frequently updating data (causes all consumers to re-render).

```jsx
const AuthContext = createContext(null);
<AuthContext.Provider value={user}>{children}</AuthContext.Provider>
const user = useContext(AuthContext);
```

---

## Redux Toolkit

- Global store, predictable updates
- `createSlice`, `configureStore`, `useSelector`, `useDispatch`

```jsx
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
  },
});
```

---

## Zustand (Lightweight)

Simpler than Redux. Great for small-to-medium apps.

```jsx
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));

const count = useStore((s) => s.count);
```

---

## React Query / TanStack Query (Job Priority!)

- **Server state** – fetch, cache, refetch, mutations
- Handles loading, error, stale-while-revalidate

```jsx
const { data, isLoading, error } = useQuery({
  queryKey: ['users', userId],
  queryFn: () => fetchUser(userId),
});
```

See `examples/` for implementations.

---

## Why State Management Matters

- Real apps have **many screens and shared data** (auth user, cart, filters, feature flags).
- Mixing everything in local component state quickly becomes unmanageable.
- Different types of state (local UI vs server data) have **different lifecycles and constraints**.

---

## Where to Use Each Tool

- **Local state (`useState`)**: component-only concerns (inputs, toggles, open/close).
- **Context**: low-frequency global values (theme, current user, locale).
- **Redux/Redux Toolkit/Zustand**: cross-cutting app state (cart, permissions, layout, global filters).
- **React Query / RTK Query**: **server state** – fetched data that can be out of date and needs caching, refetching, and background updates.

---

## Interview Q&A (with Examples)

### Q1: What is the difference between server state and client state?

- **Client state**: exists only in the browser (e.g. modal open, selected tab), controlled entirely by your app.
- **Server state**: comes from an API or database, can change **outside** your app, and needs caching, refetching, and syncing.

React Query is designed for **server state**; Redux/Zustand are better for **client state**.

---

### Q2: Why might you choose React Query instead of storing API data in Redux?

React Query gives:
- Built-in **caching, refetching, retries, and background updates**.
- Declarative control over **staleTime** and **revalidation**.
- Automatic **loading** and **error** handling.

You would have to build all of this yourself on top of Redux, which increases complexity.

---

### Q3: When is Context API enough, and when is it an anti-pattern?

Context is great for:
- Low-frequency updates like theme, locale, and current user.

It becomes an anti-pattern when:
- The value updates **frequently** (e.g. every keystroke, scroll position), because **all consumers re-render**.
- You nest many providers and lose clarity (“Context hell”).

In that case, prefer **state management libraries** or splitting contexts.

---

### Q4: How does Redux Toolkit improve classic Redux?

- Uses **Immer** so you can “mutate” state while still producing immutable updates.
- Reduces boilerplate with `createSlice`, `createAsyncThunk`.
- Encourages a **standard project structure** and good defaults (e.g. DevTools, middleware).

---

### Q5: How would you structure state for an e-commerce cart?

Key points to mention:
- Keep cart as a **normalized structure** (items by id + ids array).
- Store only what you need (ids, quantities, prices), fetch details separately if necessary.
- Use a dedicated store (Redux/Zustand) for **global access** from header, checkout, and product pages.

---

## Quick Practice

- **Exercise 1**: Refactor a component that passes `user` props through 3+ levels into a **Context**.
- **Exercise 2**: Implement a small **Zustand** store for theme and layout preferences; use it in multiple components.
- **Exercise 3**: Replace manual `useEffect` fetching and loading state with **React Query** for one feature.
- **Exercise 4**: Design the state shape for a dashboard with filters, pagination, and selected rows – write down which parts are client state vs server state.

