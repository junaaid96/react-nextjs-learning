import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      {/* Updater form: three updates in one click all apply */}
      <button onClick={() => { setCount((c) => c + 1); setCount((c) => c + 1); setCount((c) => c + 1); }}>+3</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

interface Todo { id: number; text: string; done: boolean }

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');
  const remaining = todos.filter((t) => !t.done).length; // derived, not stored

  function add(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now() + prev.length, text: text.trim(), done: false }]);
    setText('');
  }
  const toggle = (id: number) => setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <form onSubmit={add}>
      <input aria-label="New todo" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <label><input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} /> {t.text}</label>
          </li>
        ))}
      </ul>
      <p>{remaining} remaining</p>
    </form>
  );
}
