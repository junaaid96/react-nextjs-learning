import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pipe, compose, curry, myBind, user } from './index.js';

test('pipe goes left to right, compose right to left', () => {
  const inc = (x) => x + 1, dbl = (x) => x * 2;
  assert.equal(pipe(inc, dbl)(3), 8);
  assert.equal(compose(inc, dbl)(3), 7);
});

test('curry supports any grouping', () => {
  const add3 = curry((a, b, c) => a + b + c);
  assert.equal(add3(1)(2)(3), 6);
  assert.equal(add3(1, 2)(3), 6);
});

test('this depends on the call site', () => {
  assert.equal(user.regularGreet(), 'Hi Ada');
  const detached = user.regularGreet;
  assert.equal(detached(), 'Hi undefined');
  assert.equal(myBind(user.regularGreet, { name: 'Linus' })(), 'Hi Linus');
});
