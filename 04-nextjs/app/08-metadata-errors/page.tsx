import Link from 'next/link';

export const metadata = { title: 'Metadata & error handling' };

export default function Page() {
  return (
    <>
      <h1>08 · Metadata, loading, error & not-found</h1>
      <ul>
        <li><Link href="/08-metadata-errors/1">Post 1</Link> (dynamic <code>generateMetadata</code>)</li>
        <li><Link href="/08-metadata-errors/999">Post 999</Link> (<code>notFound()</code> → not-found.tsx)</li>
        <li><Link href="/08-metadata-errors/0">Post 0</Link> (throws → error.tsx)</li>
      </ul>
    </>
  );
}
