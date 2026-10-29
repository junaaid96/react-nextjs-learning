import { notFound } from 'next/navigation';
import { topics } from '../topics';

// Prerender these params at build time; unknown slugs 404 below.
export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}

// In Next.js 15+ `params` is a Promise. PageProps<'/route'> is a global, typed helper.
export default async function TopicPage({ params }: PageProps<'/01-routing/[slug]'>) {
  const { slug } = await params;
  const text = topics[slug];
  if (!text) notFound();
  return (
    <article>
      <h2>Dynamic segment: {slug}</h2>
      <p>{text}</p>
    </article>
  );
}
