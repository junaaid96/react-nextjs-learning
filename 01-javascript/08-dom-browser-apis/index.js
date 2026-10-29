export function debounce(fn, ms) {
  let id;
  return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), ms); };
}

export function throttle(fn, ms) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) { last = now; fn(...args); }
  };
}

// Build a search URL safely (handles encoding for you).
export function buildSearchUrl(base, params) {
  const url = new URL(base);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== '') url.searchParams.set(k, String(v));
  }
  return url.toString();
}

// Tiny pub/sub event emitter (the idea behind DOM events and many state libs).
export class Emitter {
  #listeners = new Map();
  on(type, fn) {
    if (!this.#listeners.has(type)) this.#listeners.set(type, new Set());
    this.#listeners.get(type).add(fn);
    return () => this.#listeners.get(type).delete(fn); // unsubscribe
  }
  emit(type, payload) { this.#listeners.get(type)?.forEach((fn) => fn(payload)); }
}
