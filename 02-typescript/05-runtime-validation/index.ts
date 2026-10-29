export type Result<T, E = string> = { ok: true; value: T } | { ok: false; error: E };

export type Validator<T> = (input: unknown) => Result<T>;
export type Infer<V> = V extends Validator<infer T> ? T : never;

export const string = (): Validator<string> => (i) =>
  typeof i === 'string' ? { ok: true, value: i } : { ok: false, error: 'expected string' };

export const number = ({ min = -Infinity } = {}): Validator<number> => (i) =>
  typeof i === 'number' && i >= min ? { ok: true, value: i } : { ok: false, error: `expected number >= ${min}` };

export function object<S extends Record<string, Validator<unknown>>>(shape: S): Validator<{ [K in keyof S]: Infer<S[K]> }> {
  return (input) => {
    if (typeof input !== 'object' || input === null) return { ok: false, error: 'expected object' };
    const out: Record<string, unknown> = {};
    for (const [key, validate] of Object.entries(shape)) {
      const r = validate((input as Record<string, unknown>)[key]);
      if (!r.ok) return { ok: false, error: `${key}: ${r.error}` };
      out[key] = r.value;
    }
    return { ok: true, value: out as { [K in keyof S]: Infer<S[K]> } };
  };
}

// Branded type
export type Email = string & { readonly __brand: 'Email' };
export function toEmail(s: string): Result<Email> {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s) ? { ok: true, value: s as Email } : { ok: false, error: 'invalid email' };
}

export const userSchema = object({ name: string(), age: number({ min: 0 }) });
export type UserInput = Infer<typeof userSchema>;
