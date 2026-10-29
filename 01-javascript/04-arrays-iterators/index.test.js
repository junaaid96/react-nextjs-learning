import { test } from 'node:test';
import assert from 'node:assert/strict';
import { products, sortedByPrice, groupByCategory, total, fibonacci, take, range } from './index.js';

test('toSorted does not mutate', () => {
  const s = sortedByPrice(products);
  assert.equal(s[0].name, 'Mouse');
  assert.equal(products[0].name, 'Laptop');
});

test('Object.groupBy groups', () => {
  const g = groupByCategory(products);
  assert.equal(g.tech.length, 2);
  assert.equal(total(g.office), 450);
});

test('generators are lazy', () => {
  assert.deepEqual(take(fibonacci(), 7), [0, 1, 1, 2, 3, 5, 8]);
  assert.deepEqual([...range(0, 10, 3)], [0, 3, 6, 9]);
});
