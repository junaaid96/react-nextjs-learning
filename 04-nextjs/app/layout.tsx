import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Next.js 16 lessons', template: '%s · Next.js 16 lessons' },
  description: 'Runnable App Router lessons: Server Components, caching, Server Actions and more.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        <nav><Link href="/">Home</Link></nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
