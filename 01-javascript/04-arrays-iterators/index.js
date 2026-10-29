export const products = [
  { name: 'Laptop', category: 'tech', price: 1200 },
  { name: 'Mouse', category: 'tech', price: 25 },
  { name: 'Desk', category: 'office', price: 300 },
  { name: 'Chair', category: 'office', price: 150 },
];

export const sortedByPrice = (items) => items.toSorted((a, b) => a.price - b.price);
export const groupByCategory = (items) => Object.groupBy(items, (p) => p.category);
export const total = (items) => items.reduce((sum, p) => sum + p.price, 0);

// Lazy infinite sequence: values are only computed when pulled.
export function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) { yield a; [a, b] = [b, a + b]; }
}

export function take(iterable, n) {
  const out = [];
  for (const v of iterable) { if (out.length >= n) break; out.push(v); }
  return out;
}

// A custom iterable range object.
export const range = (start, end, step = 1) => ({
  *[Symbol.iterator]() { for (let i = start; i < end; i += step) yield i; },
});
