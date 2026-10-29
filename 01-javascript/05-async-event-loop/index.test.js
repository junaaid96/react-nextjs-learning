import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sleep, eventLoopOrder, retry, mapWithConcurrency, deferred } from './index.js';

test('microtasks run before timers', async () => {
  assert.deepEqual(await eventLoopOrder(), ['sync 1', 'sync 2', 'microtask', 'queueMicrotask', 'timeout']);
});

test('retry eventually succeeds', async () => {
  const v = await retry(async (n) => { if (n < 2) throw new Error('flaky'); return 'ok'; }, { baseMs: 1 });
  assert.equal(v, 'ok');
});

test('concurrency limit is respected', async () => {
  let inFlight = 0, peak = 0;
  const out = await mapWithConcurrency([1, 2, 3, 4, 5], 2, async (x) => {
    inFlight++; peak = Math.max(peak, inFlight); await sleep(5); inFlight--; return x * 2;
  });
  assert.deepEqual(out, [2, 4, 6, 8, 10]);
  assert.equal(peak, 2);
});

test('abort cancels sleep', async () => {
  const c = new AbortController();
  const p = sleep(1000, { signal: c.signal });
  c.abort(new Error('cancelled'));
  await assert.rejects(p, /cancelled/);
});

test('Promise.allSettled and withResolvers', async () => {
  const d = deferred(); d.resolve(1);
  const r = await Promise.allSettled([d.promise, Promise.reject(new Error('x'))]);
  assert.deepEqual(r.map((x) => x.status), ['fulfilled', 'rejected']);
});
