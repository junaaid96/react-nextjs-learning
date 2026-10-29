import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cartReducer, CartProvider, AddButton, CartSummary } from './index';

test('reducer is a pure function', () => {
  const s1 = cartReducer([], { type: 'add', item: { id: 'a', name: 'A', price: 2 } });
  const s2 = cartReducer(s1, { type: 'add', item: { id: 'a', name: 'A', price: 2 } });
  expect(s2[0]?.qty).toBe(2);
  expect(s1[0]?.qty).toBe(1);
  expect(cartReducer(s2, { type: 'clear' })).toEqual([]);
});

test('context shares cart state', async () => {
  render(
    <CartProvider>
      <AddButton id="b" name="Book" price={10} />
      <CartSummary />
    </CartProvider>,
  );
  await userEvent.click(screen.getByText('Add Book'));
  await userEvent.click(screen.getByText('Add Book'));
  expect(screen.getByText('2 items · $20')).toBeInTheDocument();
});

test('hook throws outside provider', () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  expect(() => render(<CartSummary />)).toThrow(/CartProvider/);
});
