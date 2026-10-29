import { act, renderHook } from '@testing-library/react';
import { useToggle, useDebouncedValue, useOnlineStatus, useLocalStorage } from './index';

test('useToggle', () => {
  const { result } = renderHook(() => useToggle());
  act(() => result.current[1]());
  expect(result.current[0]).toBe(true);
});

test('useDebouncedValue', () => {
  vi.useFakeTimers();
  const { result, rerender } = renderHook(({ v }) => useDebouncedValue(v, 100), { initialProps: { v: 'a' } });
  rerender({ v: 'ab' });
  expect(result.current).toBe('a');
  act(() => { vi.advanceTimersByTime(100); });
  expect(result.current).toBe('ab');
  vi.useRealTimers();
});

test('useOnlineStatus reacts to events', () => {
  const { result } = renderHook(() => useOnlineStatus());
  expect(result.current).toBe(true);
  vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);
  act(() => { window.dispatchEvent(new Event('offline')); });
  expect(result.current).toBe(false);
});

test('useLocalStorage persists', () => {
  localStorage.clear();
  const { result } = renderHook(() => useLocalStorage('k', 1));
  act(() => result.current[1](5));
  expect(localStorage.getItem('k')).toBe('5');
});
