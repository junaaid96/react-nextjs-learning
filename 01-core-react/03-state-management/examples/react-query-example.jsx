/**
 * React Query / TanStack Query - Server state management
 *
 * JOB PRIORITY - 6sense specifically mentioned this!
 *
 * Key features:
 * - Automatic caching
 * - Background refetch (stale-while-revalidate)
 * - Loading/error states
 * - Mutations with cache invalidation
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Fetch users
async function fetchUsers() {
  const res = await fetch("/api/users");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

// Fetch single user
async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

// Query hook
export function useUsers() {
  return useQuery({
    queryKey: ["users"], // Cache key
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 min - data considered fresh
  });
}

export function useUser(userId) {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId, // Only run when userId exists
  });
}

// Mutation example
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser) =>
      fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(newUser),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

// Usage in component
function UserList() {
  const { data, isLoading, error, refetch } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
