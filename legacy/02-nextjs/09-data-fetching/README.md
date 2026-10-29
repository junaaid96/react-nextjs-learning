# Data Fetching

> fetch, SWR, React Query, Axios, error handling.

## Native fetch in Next.js App Router

Fetch is extended by Next.js – cached by default, supports revalidate.

```js
// Cached indefinitely (default)
const res = await fetch('https://api.example.com/data');

// Revalidate every 60 seconds
const res = await fetch(url, { next: { revalidate: 60 } });

// No cache (always fresh)
const res = await fetch(url, { cache: 'no-store' });
```

---

## SWR (Stale-While-Revalidate)

```js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

function Profile() {
  const { data, error, isLoading, mutate } = useSWR('/api/user', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return <div>Hello {data.name}</div>;
}
```

---

## React Query / TanStack Query

See `01-core-react/03-state-management/examples/react-query-example.jsx`

Key concepts:
- `queryKey` – cache identity
- `queryFn` – fetch function
- `staleTime`, `gcTime` (formerly cacheTime)
- `useMutation` + `invalidateQueries` for updates

---

## Axios Integration

```js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptors for auth
api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});
```

---

## Error Handling & Loading

```js
async function DataComponent() {
  try {
    const data = await fetchData();
    return <Display data={data} />;
  } catch (error) {
    return <ErrorDisplay error={error} />;
  }
}

// Or use Suspense
<Suspense fallback={<Skeleton />}>
  <AsyncComponent />
</Suspense>
```

---

## Why Data Fetching Matters

- Almost every production app depends on remote data. Interviews test whether you can handle **latency, failure, caching, and consistency**.
- Poor data-fetching patterns cause common issues: loading flicker, duplicate requests, stale data, waterfall delays, and cache bugs.
- Next.js adds server-side data fetching with **caching and revalidation**, which changes how you design your data layer.

---

## Where to Use Which Approach

- **Next.js `fetch` in Server Components**: preferred for server-rendered pages with caching/revalidation.
- **SWR**: client fetching for lightweight components with “stale-while-revalidate” behavior.
- **React Query**: complex server-state needs (pagination, infinite scroll, optimistic updates, retries).
- **Axios**: consistent API client, interceptors for auth, custom error handling; often used together with React Query.

---

## Interview Q&A (with Examples)

### Q1: Fetch vs Axios — which one should you use?

- **fetch**: built-in, good default, especially in Next.js server components.
- **Axios**: richer ergonomics (interceptors, automatic JSON transforms, request cancellation patterns), useful for shared API clients.

Good interview answer:
> I default to `fetch` in Next.js server code. For client-side apps or large teams, I use an Axios client with interceptors and consistent error handling, often combined with React Query.

---

### Q2: What are “loading states” and “error states” and why are they important?

They make the UI resilient:
- Loading state prevents blank screens and communicates progress.
- Error state provides recovery (retry, fallback UI) and prevents crashes.

Mention UX:
> I prefer skeletons over spinners for content-heavy pages and provide retry actions on errors.

---

### Q3: What is caching, and what can go wrong?

Caching stores responses to avoid repeated work and improve performance.  
Things that go wrong:
- Serving stale data too long.
- Cache key mistakes (wrong `queryKey`, missing params).
- Not invalidating after mutations.

---

### Q4: What is optimistic update?

Update the UI **before** the server confirms, then rollback on failure.  
Used in likes, toggles, and fast UX interactions.

If using React Query, you’d mention `onMutate`, rollback, and invalidation.

---

## Quick Practice

- **Exercise 1**: Build a paginated list with:
  - loading skeleton
  - error + retry button
  - empty state (“no results”)
- **Exercise 2**: Implement infinite scroll and add caching with React Query.
- **Exercise 3**: Create an Axios instance with an auth interceptor and handle 401 by redirecting to `/login`.
- **Exercise 4**: Create a mutation (create/update) and correctly invalidate/refetch the affected queries.

