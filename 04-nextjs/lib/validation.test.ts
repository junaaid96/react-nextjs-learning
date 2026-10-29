import { describe, expect, it } from 'vitest';
import { parsePostInput, formDataToObject } from './validation';

describe('parsePostInput', () => {
  it('rejects short fields', () => {
    const r = parsePostInput({ title: 'a', body: 'short' });
    expect(r.success).toBe(false);
    if (!r.success) expect(Object.keys(r.errors)).toEqual(['title', 'body']);
  });
  it('trims and accepts valid input', () => {
    expect(parsePostInput({ title: '  Hello  ', body: 'A long enough body' })).toEqual({ success: true, data: { title: 'Hello', body: 'A long enough body' } });
  });
  it('ignores non-string values', () => {
    expect(parsePostInput({ title: 42, body: null }).success).toBe(false);
  });
  it('converts FormData', () => {
    const fd = new FormData(); fd.set('title', 'x');
    expect(formDataToObject(fd)).toEqual({ title: 'x' });
  });
});
