import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Button, Card, SkillList } from './index';

test('Button forwards props and ref (React 19 ref-as-prop)', () => {
  const ref = createRef<HTMLButtonElement>();
  render(<Button ref={ref} variant="ghost" disabled>Save</Button>);
  const btn = screen.getByRole('button', { name: 'Save' });
  expect(btn).toBeDisabled();
  expect(btn).toHaveClass('btn-ghost');
  expect(ref.current).toBe(btn);
});

test('Card composes children', () => {
  render(<Card title="Profile"><p>Hello</p></Card>);
  expect(screen.getByRole('region', { name: 'Profile' })).toHaveTextContent('Hello');
});

test('SkillList renders conditionally', () => {
  const { rerender } = render(<SkillList skills={[]} />);
  expect(screen.getByText('No skills yet')).toBeInTheDocument();
  rerender(<SkillList skills={[{ id: '1', name: 'React', level: 5 }, { id: '2', name: 'Go', level: 2 }]} />);
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByText('(expert)')).toBeInTheDocument();
});
