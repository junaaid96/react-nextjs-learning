import { describe, it, expect } from 'vitest';
import { render, area, speak } from './index.js';

describe('narrowing', () => {
  it('renders each state', () => {
    expect(render({ status: 'loading' }, String)).toBe('Loading…');
    expect(render({ status: 'success', data: 3 }, (n) => `n=${n}`)).toBe('n=3');
    expect(render({ status: 'error', error: 'x' }, String)).toBe('Error: x');
  });
  it('computes areas', () => expect(area({ kind: 'rect', w: 2, h: 3 })).toBe(6));
  it('type guard', () => expect(speak({ bark: () => 'woof' })).toBe('woof'));
});
