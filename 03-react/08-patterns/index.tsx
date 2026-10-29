import { createContext, use, useState, useId, type ReactNode } from 'react';

const TabsContext = createContext<{ active: string; setActive: (v: string) => void; id: string } | null>(null);
const useTabs = () => {
  const ctx = use(TabsContext);
  if (!ctx) throw new Error('Tabs.* must be inside <Tabs>');
  return ctx;
};

export function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [active, setActive] = useState(defaultValue);
  const id = useId();
  return <TabsContext value={{ active, setActive, id }}>{children}</TabsContext>;
}
Tabs.List = function List({ children }: { children: ReactNode }) {
  return <div role="tablist">{children}</div>;
};
Tabs.Trigger = function Trigger({ value, children }: { value: string; children: ReactNode }) {
  const { active, setActive, id } = useTabs();
  return (
    <button role="tab" aria-selected={active === value} aria-controls={`${id}-${value}`} onClick={() => setActive(value)}>
      {children}
    </button>
  );
};
Tabs.Panel = function Panel({ value, children }: { value: string; children: ReactNode }) {
  const { active, id } = useTabs();
  return active === value ? <div role="tabpanel" id={`${id}-${value}`}>{children}</div> : null;
};

// Render prop
export function MouseTracker({ render }: { render: (pos: { x: number; y: number }) => ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return <div data-testid="area" onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>{render(pos)}</div>;
}
