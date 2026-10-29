// Single source of truth for the lesson list (used by the home page and nav).
export const lessons = [
  { href: '/01-routing', title: '01 · Routing: layouts, dynamic & grouped routes' },
  { href: '/02-server-components', title: '02 · Server vs Client Components' },
  { href: '/03-data-fetching', title: '03 · Data fetching & streaming with Suspense' },
  { href: '/04-caching', title: "04 · Caching with 'use cache', cacheLife, cacheTag" },
  { href: '/05-server-actions-forms', title: '05 · Server Actions & forms' },
  { href: '/06-route-handlers', title: '06 · Route Handlers (REST API)' },
  { href: '/07-auth', title: '07 · Auth basics: cookies, proxy, protected pages' },
  { href: '/08-metadata-errors', title: '08 · Metadata, loading, error & not-found' },
  { href: '/09-deployment', title: '09 · Deployment' },
] as const;
