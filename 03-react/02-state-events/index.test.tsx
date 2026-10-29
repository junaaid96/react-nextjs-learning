import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter, TodoApp } from './index';

test('updater functions batch correctly', async () => {
  render(<Counter />);
  await userEvent.click(screen.getByText('+3'));
  expect(screen.getByText('Count: 3')).toBeInTheDocument();
});

test('todo app adds and toggles', async () => {
  const user = userEvent.setup();
  render(<TodoApp />);
  await user.type(screen.getByLabelText('New todo'), 'Learn React{enter}');
  await user.type(screen.getByLabelText('New todo'), 'Learn Next{enter}');
  expect(screen.getByText('2 remaining')).toBeInTheDocument();
  await user.click(screen.getByLabelText('Learn React'));
  expect(screen.getByText('1 remaining')).toBeInTheDocument();
});
