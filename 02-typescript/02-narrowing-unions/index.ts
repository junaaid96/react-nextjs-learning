export type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

export function render<T>(state: RequestState<T>, show: (d: T) => string): string {
  switch (state.status) {
    case 'idle': return 'Nothing yet';
    case 'loading': return 'Loading…';
    case 'success': return show(state.data); // data only exists here
    case 'error': return `Error: ${state.error}`;
    default: return assertNever(state);
  }
}

export function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(x)}`);
}

export type Shape = { kind: 'circle'; r: number } | { kind: 'rect'; w: number; h: number };
export const area = (s: Shape): number => (s.kind === 'circle' ? Math.PI * s.r ** 2 : s.w * s.h);

// User-defined type guard
export interface Cat { meow(): string }
export interface Dog { bark(): string }
export const isCat = (pet: Cat | Dog): pet is Cat => 'meow' in pet;
export const speak = (pet: Cat | Dog) => (isCat(pet) ? pet.meow() : pet.bark());
