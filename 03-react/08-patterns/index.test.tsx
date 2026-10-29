import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, MouseTracker } from './index';

test('compound tabs switch panels', async () => {
  render(
    <Tabs defaultValue="a">
      <Tabs.List>
        <Tabs.Trigger value="a">A</Tabs.Trigger>
        <Tabs.Trigger value="b">B</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Panel value="a">Panel A</Tabs.Panel>
      <Tabs.Panel value="b">Panel B</Tabs.Panel>
    </Tabs>,
  );
  expect(screen.getByRole('tabpanel')).toHaveTextContent('Panel A');
  await userEvent.click(screen.getByRole('tab', { name: 'B' }));
  expect(screen.getByRole('tabpanel')).toHaveTextContent('Panel B');
  expect(screen.getByRole('tab', { name: 'B' })).toHaveAttribute('aria-selected', 'true');
});

test('render prop', () => {
  render(<MouseTracker render={({ x, y }) => <p>{x},{y}</p>} />);
  fireEvent.mouseMove(screen.getByTestId('area'), { clientX: 5, clientY: 7 });
  expect(screen.getByText('5,7')).toBeInTheDocument();
});
