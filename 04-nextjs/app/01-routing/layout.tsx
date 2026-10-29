import Link from 'next/link';

// A layout wraps every page in this segment and keeps its state across navigations.
export default function RoutingLayout({ children }: LayoutProps<'/01-routing'>) {
  return (
    <section>
      <h1>01 · Routing</h1>
      <nav>
        <Link href="/01-routing">Index</Link>
        <Link href="/01-routing/server-components">Dynamic: /server-components</Link>
        <Link href="/01-routing/caching">Dynamic: /caching</Link>
        <Link href="/01-routing/about">Route group: /about</Link>
      </nav>
      <div className="card">{children}</div>
    </section>
  );
}
