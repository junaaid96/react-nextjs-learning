/**
 * Compound Components Pattern
 *
 * Tabs.List, Tabs.Tab, Tabs.Panel share implicit state
 * via React Context - no prop drilling
 */

import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

function Tabs({ children, defaultValue }) {
  const [activeId, setActiveId] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeId, setActiveId }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>;
};

Tabs.Tab = function Tab({ id, children }) {
  const { activeId, setActiveId } = useContext(TabsContext);
  const isActive = activeId === id;

  return (
    <button
      className={isActive ? "tab active" : "tab"}
      onClick={() => setActiveId(id)}
    >
      {children}
    </button>
  );
};

Tabs.Panel = function TabPanel({ id, children }) {
  const { activeId } = useContext(TabsContext);
  if (activeId !== id) return null;
  return <div className="tab-panel">{children}</div>;
};

// Usage
export function TabExample() {
  return (
    <Tabs defaultValue="1">
      <Tabs.List>
        <Tabs.Tab id="1">Overview</Tabs.Tab>
        <Tabs.Tab id="2">Details</Tabs.Tab>
        <Tabs.Tab id="3">Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="1">Overview content</Tabs.Panel>
      <Tabs.Panel id="2">Details content</Tabs.Panel>
      <Tabs.Panel id="3">Settings content</Tabs.Panel>
    </Tabs>
  );
}
