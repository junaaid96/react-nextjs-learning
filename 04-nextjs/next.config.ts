import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cache Components: opt-in caching with 'use cache' + Partial Prerendering.
  cacheComponents: true,
  partialPrefetching: true,
  typedRoutes: true,
};

export default nextConfig;
