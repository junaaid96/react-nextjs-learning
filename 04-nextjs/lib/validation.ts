// Server-side validation shared by Server Actions and Route Handlers.
// In production use Zod/Valibot; this hand-rolled version keeps the lesson dependency-free.
export type FieldErrors<T> = Partial<Record<keyof T, string>>;
export type ParseResult<T> = { success: true; data: T } | { success: false; errors: FieldErrors<T> };

export interface PostInput { title: string; body: string }

export function parsePostInput(raw: Record<string, unknown>): ParseResult<PostInput> {
  const title = typeof raw.title === 'string' ? raw.title.trim() : '';
  const body = typeof raw.body === 'string' ? raw.body.trim() : '';
  const errors: FieldErrors<PostInput> = {};
  if (title.length < 3) errors.title = 'Title must be at least 3 characters';
  if (title.length > 80) errors.title = 'Title must be at most 80 characters';
  if (body.length < 10) errors.body = 'Body must be at least 10 characters';
  return Object.keys(errors).length ? { success: false, errors } : { success: true, data: { title, body } };
}

export const formDataToObject = (fd: FormData) => Object.fromEntries(fd.entries());
