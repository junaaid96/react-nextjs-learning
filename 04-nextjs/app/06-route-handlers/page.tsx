export const metadata = { title: 'Route Handlers' };

export default function RouteHandlersPage() {
  return (
    <>
      <h1>06 · Route Handlers</h1>
      <p>Open <a href="/api/posts">/api/posts</a> or try:</p>
      <pre>{`curl -X POST localhost:3000/api/posts \\
  -H 'content-type: application/json' \\
  -d '{"title":"From curl","body":"Route handlers are Web Request/Response."}'`}</pre>
    </>
  );
}
