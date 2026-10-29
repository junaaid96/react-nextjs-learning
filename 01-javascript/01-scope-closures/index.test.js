import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createCounter, once, memoize, loopCallbacks } from './index.js';

test('counter keeps private state', () => {
  const c = createCounter(5);
  c.increment(); c.increment(); c.decrement();
  assert.equal(c.value(), 6);
  assert.equal(c.count, undefined);
});

test('once runs only one time', () => {
  let calls = 0;
  const init = once(() => ++calls);
  init(); init();
  assert.equal(calls, 1);
});

test('memoize caches by arguments', () => {
  let calls = 0;
  const sq = memoize((n) => { calls++; return n * n; });
  assert.equal(sq(4), 16); assert.equal(sq(4), 16);
  assert.equal(calls, 1);
});

test('var shares one binding, let does not', () => {
  assert.deepEqual(loopCallbacks('var'), [3, 3, 3]);
  assert.deepEqual(loopCallbacks('let'), [0, 1, 2]);
});
