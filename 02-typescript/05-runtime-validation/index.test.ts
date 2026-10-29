import { describe, it, expect, expectTypeOf } from 'vitest';
import { userSchema, toEmail, type UserInput } from './index.js';

describe('runtime validation', () => {
  it('accepts valid data and infers the type', () => {
    const r = userSchema(JSON.parse('{"name":"Ada","age":36}'));
    expect(r.ok).toBe(true);
    expectTypeOf<UserInput>().toEqualTypeOf<{ name: string; age: number }>();
  });
  it('reports the failing field', () => {
    expect(userSchema({ name: 'Ada', age: -1 })).toEqual({ ok: false, error: 'age: expected number >= 0' });
  });
  it('brands emails', () => {
    expect(toEmail('nope').ok).toBe(false);
    expect(toEmail('a@b.dev').ok).toBe(true);
  });
});
