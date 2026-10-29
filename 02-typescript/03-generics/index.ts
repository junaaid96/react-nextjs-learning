export function first<T>(items: readonly T[]): T | undefined {
  return items[0];
}

export function pluck<T, K extends keyof T>(items: readonly T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

export function indexById<T extends { id: string }>(items: readonly T[]): Record<string, T> {
  return Object.fromEntries(items.map((i) => [i.id, i]));
}

// A generic, type-safe in-memory repository.
export class Repository<T extends { id: string }> {
  #items = new Map<string, T>();
  save(item: T): T { this.#items.set(item.id, item); return item; }
  find(id: string): T | undefined { return this.#items.get(id); }
  all(): T[] { return [...this.#items.values()]; }
}

// const type parameter keeps literal types: tuple(['a','b']) -> readonly ['a','b']
export function tuple<const T extends readonly unknown[]>(t: T): T { return t; }
