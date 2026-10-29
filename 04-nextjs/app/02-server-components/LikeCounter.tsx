'use client';
// Client Component: only this small island ships JavaScript to the browser.
import { useState } from 'react';

export function LikeCounter({ initial }: { initial: number }) {
  const [likes, setLikes] = useState(initial);
  return <button onClick={() => setLikes((n) => n + 1)}>♥ {likes}</button>;
}
