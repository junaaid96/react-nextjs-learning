import { Suspense, use, useDeferredValue, useState, memo, lazy } from 'react';

export function Quote({ quotePromise }: { quotePromise: Promise<string> }) {
  const quote = use(quotePromise); // suspends until resolved
  return <blockquote>{quote}</blockquote>;
}

export function QuoteSection({ quotePromise }: { quotePromise: Promise<string> }) {
  return (
    <Suspense fallback={<p>Loading quote…</p>}>
      <Quote quotePromise={quotePromise} />
    </Suspense>
  );
}

const words = Array.from({ length: 2000 }, (_, i) => `item-${i}`);

// memo: skip re-rendering when props are equal (the React Compiler can do this for you).
export const ResultList = memo(function ResultList({ query }: { query: string }) {
  const matches = words.filter((w) => w.includes(query)).slice(0, 5);
  return <ul>{matches.map((m) => <li key={m}>{m}</li>)}</ul>;
});

export function Search() {
  const [query, setQuery] = useState('');
  const deferred = useDeferredValue(query); // list renders with a lower priority
  return (
    <>
      <input aria-label="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <ResultList query={deferred} />
    </>
  );
}

export const LazyHeavy = lazy(async () => ({ default: () => <p>Heavy chart loaded</p> }));
export function LazyDemo() {
  return <Suspense fallback={<p>Loading chart…</p>}><LazyHeavy /></Suspense>;
}
