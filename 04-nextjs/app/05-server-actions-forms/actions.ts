'use server';
import { updateTag } from 'next/cache';
import { createPost } from '@/lib/db';
import { formDataToObject, parsePostInput, type FieldErrors, type PostInput } from '@/lib/validation';

export interface FormState { ok: boolean; message: string; errors?: FieldErrors<PostInput>; values?: Partial<PostInput> }

// A Server Action is a public POST endpoint: ALWAYS validate input and check auth inside it.
export async function createPostAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = formDataToObject(formData);
  const parsed = parsePostInput(raw);
  if (!parsed.success) {
    return { ok: false, message: 'Please fix the errors below.', errors: parsed.errors, values: { title: String(raw.title ?? ''), body: String(raw.body ?? '') } };
  }
  const post = await createPost(parsed.data);
  updateTag('posts');
  return { ok: true, message: `Created “${post.title}” (#${post.id})` };
}
