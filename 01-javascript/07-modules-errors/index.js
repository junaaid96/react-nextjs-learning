export class ValidationError extends Error {
  constructor(field, message, options) {
    super(message, options);
    this.name = 'ValidationError';
    this.field = field;
  }
}

export function parseAge(input) {
  const n = Number(input);
  if (!Number.isInteger(n) || n < 0 || n > 150) {
    throw new ValidationError('age', `invalid age: ${input}`);
  }
  return n;
}

// Wrap a throwing function in a Result object.
export function tryResult(fn) {
  try { return { ok: true, value: fn() }; }
  catch (error) { return { ok: false, error }; }
}

export function loadConfig(json) {
  try { return JSON.parse(json); }
  catch (err) { throw new Error('config is not valid JSON', { cause: err }); }
}
