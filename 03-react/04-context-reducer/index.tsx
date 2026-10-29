import { createContext, use, useReducer, type ReactNode } from 'react';

export interface CartItem { id: string; name: string; price: number; qty: number }
type Action =
  | { type: 'add'; item: Omit<CartItem, 'qty'> }
  | { type: 'remove'; id: string }
  | { type: 'clear' };

export function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case 'add': {
      const existing = state.find((i) => i.id === action.item.id);
      return existing
        ? state.map((i) => (i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i))
        : [...state, { ...action.item, qty: 1 }];
    }
    case 'remove': return state.filter((i) => i.id !== action.id);
    case 'clear': return [];
  }
}

const CartContext = createContext<CartItem[] | null>(null);
const DispatchContext = createContext<React.Dispatch<Action> | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext value={items}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </CartContext>
  );
}

export function useCart() {
  const items = use(CartContext);
  const dispatch = use(DispatchContext);
  if (!items || !dispatch) throw new Error('useCart must be used inside <CartProvider>');
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return { items, total, dispatch };
}

export function AddButton({ id, name, price }: Omit<CartItem, 'qty'>) {
  const { dispatch } = useCart();
  return <button onClick={() => dispatch({ type: 'add', item: { id, name, price } })}>Add {name}</button>;
}

export function CartSummary() {
  const { items, total } = useCart();
  return <p>{items.reduce((n, i) => n + i.qty, 0)} items · ${total}</p>;
}
