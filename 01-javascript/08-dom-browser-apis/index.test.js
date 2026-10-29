import { test } from 'node:test';
import assert from 'node:assert/strict';
import { debounce, buildSearchUrl, Emitter } from './index.js';

test('debounce only fires the last call', async () => {
  const calls = [];
  const d = debounce((v) => calls.push(v), 10);
  d(1); d(2); d(3);
  await new Promise((r) => setTimeout(r, 30));
  assert.deepEqual(calls, [3]);
});

test('URL building encodes params', () => {
  assert.equal(buildSearchUrl('https://x.dev/s', { q: 'a b', page: 2, empty: '' }), 'https://x.dev/s?q=a+b&page=2');
});

test('emitter subscribe/unsubscribe', () => {
  const e = new Emitter(); const got = [];
  const off = e.on('msg', (m) => got.push(m));
  e.emit('msg', 1); off(); e.emit('msg', 2);
  assert.deepEqual(got, [1]);
});
