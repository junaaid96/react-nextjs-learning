/**
 * useState - Basic state management
 *
 * Key learnings:
 * - Lazy initial state: useState(() => expensiveComputation())
 * - Updater function when new state depends on previous
 * - Immutable updates for objects/arrays (spread operator)
 */

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export function FormInput() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Immutable update - spread previous state
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
    </form>
  );
}
