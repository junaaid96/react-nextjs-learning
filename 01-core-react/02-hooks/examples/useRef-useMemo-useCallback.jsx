/**
 * useRef, useMemo, useCallback
 *
 * useRef: Persist value across renders, no re-render; DOM refs
 * useMemo: Cache expensive computation result
 * useCallback: Cache function identity for stable child props
 */

import React, { useRef, useMemo, useCallback, useState } from "react";

// useRef - DOM reference
export function TextInputWithFocus() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current?.focus();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}

// useRef - Mutable value (doesn't cause re-render)
export function RenderCounter() {
  const countRef = useRef(0);
  countRef.current += 1;
  return <p>Renders: {countRef.current}</p>;
}

// useMemo - Expensive computation
export function ExpensiveList({ items, filter }) {
  const filtered = useMemo(() => {
    console.log("Filtering...");
    return items.filter((i) => i.includes(filter));
  }, [items, filter]);

  return <ul>{filtered.map((i) => <li key={i}>{i}</li>)}</ul>;
}

// useCallback - Stable function for child
export function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // Same function reference across renders

  return <MemoizedChild onClick={handleClick} />;
}

// React.memo skips re-render if props haven't changed
const MemoizedChild = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});
