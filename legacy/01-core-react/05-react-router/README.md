# React Router

> Client-side routing for SPAs.

## Setup (React Router v6)

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users/:id" element={<UserDetail />} />
  </Routes>
</BrowserRouter>
```

---

## Navigation

```jsx
import { Link, useNavigate } from 'react-router-dom';

// Declarative
<Link to="/about">About</Link>

// Programmatic
const navigate = useNavigate();
navigate('/dashboard');
navigate(-1); // Go back
```

---

## Dynamic Routes & Params

```jsx
// Route: /users/:id
function UserDetail() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}
```

---

## Protected Routes

```jsx
function ProtectedRoute({ children }) {
  const user = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

<Route path="/dashboard" element={
  <ProtectedRoute><Dashboard /></ProtectedRoute>
} />
```

---

## Nested Routes

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  <Route path="settings" element={<Settings />} />
</Route>

// In DashboardLayout: <Outlet /> renders child route
```

---

## Query Params

```jsx
const [searchParams, setSearchParams] = useSearchParams();
const page = searchParams.get('page');
setSearchParams({ page: '2' });
```

---

## Why React Router Matters

- Enables **single-page applications** with multiple screens without full page reloads.
- Essential for **deep linking, back/forward navigation, and shareable URLs**.
- Forms the base for many **dashboard, admin, and multi-step applications**.

---

## Where You Use It

- **Dashboards**: `/dashboard`, `/dashboard/reports`, `/dashboard/settings`.
- **CRUD apps**: `/users`, `/users/:id`, `/users/:id/edit`.
- **Auth flows**: `/login`, `/register`, protected routes for `/app/*`.
- **Filterable lists**: sync filters to query params (`?page=2&sort=desc`).

---

## Interview Q&A (with Examples)

### Q1: What problem does client-side routing solve compared to traditional multi-page apps?

Client-side routing:
- Avoids full page reloads – **faster and smoother UX**.
- Reuses existing components and state between navigations.
- Gives you full control over **transitions, loading states, and layout**.

---

### Q2: How would you implement a protected route?

Explain:
> I wrap the route element with a guard that checks auth; if the user is not logged in, I redirect to login.

```jsx
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const user = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
```

---

### Q3: When would you use URL params vs query params?

- **URL params (`/users/:id`)**: identify a **resource** (user id, slug).
- **Query params (`?page=2&sort=desc`)**: represent **view state** (filters, sort, pagination).

In interviews, say:
> I use path params for identity and query params for filtering, sorting, or pagination state.

---

### Q4: How do nested routes help with layout composition?

They let you define a **layout route** (e.g. `/dashboard`) that renders a shared shell (sidebar, header) and uses `<Outlet />` for inner routes (`/dashboard/settings`, `/dashboard/reports`).  
This mirrors how Next.js layouts work and avoids duplicating layout code.

---

## Quick Practice

- **Exercise 1**: Build a small app with routes `/`, `/about`, `/users/:id` and navigation links.
- **Exercise 2**: Add a protected `/dashboard` route that redirects unauthenticated users to `/login`.
- **Exercise 3**: Implement query params for pagination (`?page=`) and sync the current page to URL using `useSearchParams`.

