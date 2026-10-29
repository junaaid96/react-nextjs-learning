export const setOps = (a, b) => ({
  union: [...a.union(b)],
  intersection: [...a.intersection(b)],
  difference: [...a.difference(b)],
  isSubset: a.isSubsetOf(b),
});

// Iterator helpers: lazy pipeline over any iterator, no intermediate arrays.
export function firstEvenSquares(n) {
  function* naturals() { let i = 1; while (true) yield i++; }
  return naturals().filter((x) => x % 2 === 0).map((x) => x * x).take(n).toArray();
}

// Promise.try: run sync-or-async code and always get a promise back.
export function safeRun(fn) {
  if (typeof Promise.try === 'function') return Promise.try(fn);
  return new Promise((resolve) => resolve(fn()));
}

export function escapeRegExp(s) {
  if (typeof RegExp.escape === 'function') return RegExp.escape(s);
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function settings(user) {
  const theme = user?.prefs?.theme ?? 'system';  // safe access + default
  const copy = structuredClone(user ?? {});
  copy.visits ??= 0;                              // assign only if null/undefined
  copy.visits += 1;
  return { theme, copy, last: [1, 2, 3].at(-1) };
}
