export interface User {
  readonly id: number;
  name: string;
  email?: string; // optional
}

export type Point = [x: number, y: number]; // labelled tuple

export const ROLES = ['admin', 'editor', 'viewer'] as const;
export type Role = (typeof ROLES)[number]; // 'admin' | 'editor' | 'viewer'

export function distance([x1, y1]: Point, [x2, y2]: Point): number {
  return Math.hypot(x2 - x1, y2 - y1);
}

export function describe(user: User): string {
  return user.email ? `${user.name} <${user.email}>` : user.name;
}

// unknown forces you to check before using the value.
export function toNumber(value: unknown): number | null {
  if (typeof value === 'number') return value;
  if (typeof value === 'string' && value.trim() !== '' && !Number.isNaN(Number(value))) return Number(value);
  return null;
}
