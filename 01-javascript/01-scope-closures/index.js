// A counter whose state is private: only the returned functions can touch `count`.
export function createCounter(start = 0) {
  let count = start; // captured by the closures below
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
}

// once(): run fn at most one time, then keep returning the first result.
export function once(fn) {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// memoize(): cache results by a key derived from the arguments.
export function memoize(fn, keyFn = (...args) => JSON.stringify(args)) {
  const cache = new Map();
  return (...args) => {
    const key = keyFn(...args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key);
  };
}

// Demonstrates the var-vs-let loop difference.
export function loopCallbacks(kind) {
  const fns = [];
  if (kind === 'var') {
    for (var i = 0; i < 3; i++) fns.push(() => i); // one shared `i`
  } else {
    for (let j = 0; j < 3; j++) fns.push(() => j); // fresh `j` per iteration
  }
  return fns.map((f) => f());
}
