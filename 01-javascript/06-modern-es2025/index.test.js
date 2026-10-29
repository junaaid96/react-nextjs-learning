import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setOps, firstEvenSquares, safeRun, escapeRegExp, settings } from './index.js';

test('Set methods', () => {
  const r = setOps(new Set([1, 2, 3]), new Set([2, 3, 4]));
  assert.deepEqual(r.union, [1, 2, 3, 4]);
  assert.deepEqual(r.intersection, [2, 3]);
  assert.deepEqual(r.difference, [1]);
  assert.equal(r.isSubset, false);
});

test('Iterator helpers are lazy over infinite sequences', () => {
  assert.deepEqual(firstEvenSquares(3), [4, 16, 36]);
});

test('Promise.try turns throws into rejections', async () => {
  await assert.rejects(safeRun(() => { throw new Error('boom'); }), /boom/);
  assert.equal(await safeRun(() => 42), 42);
});

test('escape and nullish helpers', () => {
  assert.ok(new RegExp(escapeRegExp('a.b')).test('a.b'));
  assert.ok(!new RegExp('^' + escapeRegExp('a.b') + '$').test('axb'));
  const r = settings({ prefs: {} });
  assert.equal(r.theme, 'system'); assert.equal(r.copy.visits, 1); assert.equal(r.last, 3);
});
