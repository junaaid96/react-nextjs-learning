import { describe, it, expect, expectTypeOf } from 'vitest';
import { applyPatch, routes, type ChangeHandlers, type ElementOf, type Unwrap, type Todo } from './index.js';

describe('utility types', () => {
  it('applies partial patches', () => {
    expect(applyPatch({ id: 1, title: 'a', done: false }, { done: true })).toEqual({ id: 1, title: 'a', done: true });
  });
  it('mapped + template literal keys', () => {
    expectTypeOf<keyof ChangeHandlers<Todo>>().toEqualTypeOf<'onIdChange' | 'onTitleChange' | 'onDoneChange'>();
  });
  it('conditional types', () => {
    expectTypeOf<ElementOf<string[]>>().toEqualTypeOf<string>();
    expectTypeOf<Unwrap<Promise<Promise<number>>>>().toEqualTypeOf<number>();
  });
  it('satisfies keeps literal types', () => {
    expectTypeOf(routes.home).toEqualTypeOf<'/'>();
    expect(routes.todo).toBe('/todos/:id');
  });
});
