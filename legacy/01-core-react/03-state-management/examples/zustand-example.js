/**
 * Zustand - Minimal global state
 *
 * - No Provider needed
 * - Selectors prevent unnecessary re-renders
 * - Great for cart, theme, user preferences
 */

import create from "zustand";

// Simple counter store
export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Cart store example
export const useCartStore = create((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));

// Usage in component:
// const count = useCounterStore((s) => s.count);  // Only re-render when count changes
// const increment = useCounterStore((s) => s.increment);
