import { useEffect, useRef, useState } from 'react';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id); // cleanup on stop/unmount
  }, [running]);
  return (
    <div>
      <p>{seconds}s</p>
      <button onClick={() => setRunning((r) => !r)}>{running ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export function UserName({ id, load }: { id: number; load: (id: number, signal: AbortSignal) => Promise<string> }) {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    setName(null);
    load(id, controller.signal).then(setName).catch(() => {});
    return () => controller.abort(); // stale responses are ignored
  }, [id, load]);
  return <p>{name ?? 'Loading…'}</p>;
}

export function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input ref={inputRef} aria-label="name" />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </>
  );
}
