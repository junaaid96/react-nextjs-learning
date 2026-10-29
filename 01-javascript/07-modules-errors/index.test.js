import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ValidationError, parseAge, tryResult, loadConfig } from './index.js';

test('custom errors carry context', () => {
  assert.throws(() => parseAge('abc'), (e) => e instanceof ValidationError && e.field === 'age');
  assert.equal(parseAge('30'), 30);
});

test('Result helper', () => {
  assert.deepEqual(tryResult(() => 1), { ok: true, value: 1 });
  assert.equal(tryResult(() => parseAge(-1)).ok, false);
});

test('error cause chains', () => {
  try { loadConfig('{bad'); assert.fail(); }
  catch (e) { assert.ok(e.cause instanceof SyntaxError); }
});
