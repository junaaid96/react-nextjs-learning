// Function composition helpers used throughout functional-style code.
export const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
export const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

// curry(): turns f(a, b, c) into f(a)(b)(c) (or any grouping).
export function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...more) => curried.apply(this, [...args, ...more]);
  };
}

// A tiny polyfill of Function.prototype.bind to show how `this` is fixed.
export function myBind(fn, thisArg, ...preset) {
  return (...args) => fn.apply(thisArg, [...preset, ...args]);
}

export const user = {
  name: 'Ada',
  regularGreet() { return `Hi ${this?.name}`; },
  // Arrow functions do NOT get their own `this`; in a module it's undefined.
  arrowGreet: () => `Hi ${globalThis.undefinedName ?? 'nobody'}`,
};
