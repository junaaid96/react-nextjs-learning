import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Timer, UserName, FocusInput } from './index';

test('timer ticks and cleans up', () => {
  vi.useFakeTimers();
  render(<Timer />);
  act(() => screen.getByText('Start').click());
  act(() => { vi.advanceTimersByTime(3000); });
  expect(screen.getByText('3s')).toBeInTheDocument();
  act(() => screen.getByText('Stop').click());
  act(() => { vi.advanceTimersByTime(3000); });
  expect(screen.getByText('3s')).toBeInTheDocument();
  vi.useRealTimers();
});

test('effect fetch aborts stale requests', async () => {
  const load = vi.fn((id: number, signal: AbortSignal) =>
    new Promise<string>((res, rej) => {
      const t = setTimeout(() => res(`user-${id}`), id === 1 ? 50 : 5);
      signal.addEventListener('abort', () => { clearTimeout(t); rej(new Error('aborted')); });
    }));
  const { rerender } = render(<UserName id={1} load={load} />);
  rerender(<UserName id={2} load={load} />);
  expect(await screen.findByText('user-2')).toBeInTheDocument();
  await new Promise((r) => setTimeout(r, 80));
  expect(screen.queryByText('user-1')).not.toBeInTheDocument();
});

test('ref focuses input', async () => {
  render(<FocusInput />);
  await userEvent.click(screen.getByText('Focus'));
  expect(screen.getByLabelText('name')).toHaveFocus();
});
