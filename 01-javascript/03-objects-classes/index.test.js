import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BankAccount, SavingsAccount, updateCity } from './index.js';

test('private fields and chaining', () => {
  const a = new BankAccount('x').deposit(100).withdraw(30);
  assert.equal(a.balance, 70);
  assert.throws(() => a.withdraw(1000), /insufficient/);
  assert.equal(Object.keys(a).includes('#balance'), false);
});

test('inheritance uses the prototype chain', () => {
  const s = new SavingsAccount('y', 0.1).deposit(100).addInterest();
  assert.equal(s.balance, 110);
  assert.ok(s instanceof BankAccount);
  assert.equal(Object.getPrototypeOf(SavingsAccount.prototype), BankAccount.prototype);
});

test('immutable update keeps the original intact', () => {
  const p = { name: 'a', address: { city: 'Old', zip: '1' } };
  const q = updateCity(p, 'New');
  assert.equal(p.address.city, 'Old');
  assert.equal(q.address.zip, '1');
  assert.notEqual(p.address, q.address);
});
