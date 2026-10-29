import { describe, it, expect, expectTypeOf } from 'vitest';
import { first, pluck, indexById, Repository, tuple } from './index.js';

describe('generics', () => {
  it('first keeps the element type', () => {
    expectTypeOf(first([1, 2])).toEqualTypeOf<number | undefined>();
    expect(first(['a'])).toBe('a');
  });
  it('pluck is key-safe', () => {
    expect(pluck([{ n: 1 }, { n: 2 }], 'n')).toEqual([1, 2]);
  });
  it('repository', () => {
    const r = new Repository<{ id: string; title: string }>();
    r.save({ id: '1', title: 'TS' });
    expect(r.find('1')?.title).toBe('TS');
    expect(indexById(r.all())['1']?.title).toBe('TS');
  });
  it('const type params', () => {
    expectTypeOf(tuple(['a', 'b'])).toEqualTypeOf<readonly ['a', 'b']>();
  });
});
