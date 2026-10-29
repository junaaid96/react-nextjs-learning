'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createPostAction, type FormState } from './actions';

function Submit() {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending}>{pending ? 'Saving…' : 'Create post'}</button>;
}

export function PostForm() {
  const [state, action] = useActionState<FormState, FormData>(createPostAction, { ok: false, message: '' });
  return (
    // Works before JS loads (progressive enhancement), then upgrades to a client transition.
    <form action={action} className="card">
      <p><label>Title<br /><input name="title" defaultValue={state.values?.title} aria-invalid={!!state.errors?.title} /></label></p>
      {state.errors?.title && <p className="error">{state.errors.title}</p>}
      <p><label>Body<br /><textarea name="body" rows={3} defaultValue={state.values?.body} aria-invalid={!!state.errors?.body} /></label></p>
      {state.errors?.body && <p className="error">{state.errors.body}</p>}
      <Submit />
      {state.message && <p role="status">{state.message}</p>}
    </form>
  );
}
