import Link from 'next/link';
import { lessons } from './lessons';

export default function Home() {
  return (
    <>
      <h1>Next.js 16 App Router lessons</h1>
      <p>Each page is a lesson; read the <code>README.md</code> next to its <code>page.tsx</code>.</p>
      <ol>
        {lessons.map((l) => (
          <li key={l.href}><Link href={l.href}>{l.title}</Link></li>
        ))}
      </ol>
    </>
  );
}
