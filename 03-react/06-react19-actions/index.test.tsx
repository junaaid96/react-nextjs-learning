import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignupForm, LikeButton } from './index';

test('useActionState shows validation errors', async () => {
  render(<SignupForm signup={vi.fn()} />);
  await userEvent.type(screen.getByLabelText('Email'), 'nope');
  await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));
  expect(await screen.findByRole('alert')).toHaveTextContent('Enter a valid email');
});

test('useActionState success path with pending state', async () => {
  let resolve!: () => void;
  const signup = vi.fn(() => new Promise<void>((r) => { resolve = r; }));
  render(<SignupForm signup={signup} />);
  await userEvent.type(screen.getByLabelText('Email'), 'a@b.dev');
  await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));
  expect(await screen.findByRole('button', { name: 'Saving…' })).toBeDisabled();
  resolve();
  expect(await screen.findByText('Welcome a@b.dev')).toBeInTheDocument();
});

test('useOptimistic updates first, then settles', async () => {
  let resolve!: (n: number) => void;
  render(<LikeButton like={() => new Promise((r) => { resolve = r; })} />);
  await userEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('button')).toHaveTextContent('♥ 1');
  resolve(10);
  await waitFor(() => expect(screen.getByRole('button')).toHaveTextContent('♥ 10'));
});
