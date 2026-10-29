/**
 * useEffect - Side effects and lifecycle
 *
 * Key learnings:
 * - Dependency array controls when effect runs
 * - [] = mount only, [dep] = when dep changes, nothing = every render
 * - Return cleanup function for subscriptions, timers, listeners
 */

import { useState, useEffect } from "react";

// Fetch on mount
export function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      const res = await fetch(`/api/users/${userId}`);
      const data = await res.json();
      if (!cancelled) setUser(data);
      setLoading(false);
    }

    fetchUser();
    return () => {
      cancelled = true; // Prevent state update after unmount
    };
  }, [userId]); // Re-run when userId changes

  if (loading) return <p>Loading...</p>;
  return <div>{user?.name}</div>;
}

// Cleanup example - subscription
export function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => connection.disconnect(); // Cleanup on unmount or roomId change
  }, [roomId]);
}
