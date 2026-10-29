import { describe as d, it, expect } from 'vitest';
import { distance, describe, toNumber, ROLES, type Role } from './index.js';

d('basics', () => {
  it('computes distance from tuples', () => expect(distance([0, 0], [3, 4])).toBe(5));
  it('handles optional props', () => {
    expect(describe({ id: 1, name: 'Ada' })).toBe('Ada');
    expect(describe({ id: 1, name: 'Ada', email: 'a@x.dev' })).toBe('Ada <a@x.dev>');
  });
  it('narrows unknown', () => {
    expect(toNumber('42')).toBe(42);
    expect(toNumber('x')).toBeNull();
    expect(toNumber({})).toBeNull();
  });
  it('derives a union from a const array', () => {
    const r: Role = 'editor';
    expect(ROLES).toContain(r);
  });
});
