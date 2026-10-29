export const sleep = (ms, { signal } = {}) =>
  new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => { clearTimeout(id); reject(signal.reason); }, { once: true });
  });

// Records the order in which sync, microtask and macrotask code runs.
export function eventLoopOrder() {
  const log = [];
  return new Promise((done) => {
    log.push('sync 1');
    setTimeout(() => { log.push('timeout'); done(log); }, 0);
    Promise.resolve().then(() => log.push('microtask'));
    queueMicrotask(() => log.push('queueMicrotask'));
    log.push('sync 2');
  });
}

// Retry with exponential backoff.
export async function retry(fn, { retries = 3, baseMs = 10 } = {}) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try { return await fn(attempt); }
    catch (err) { lastError = err; await sleep(baseMs * 2 ** attempt); }
  }
  throw lastError;
}

// Run async tasks with at most `limit` in flight at once.
export async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) { const i = next++; results[i] = await fn(items[i], i); }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

// Promise.withResolvers (ES2024) exposes resolve/reject outside the executor.
export function deferred() { return Promise.withResolvers(); }
