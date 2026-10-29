import { useActionState, useOptimistic, useState, startTransition } from 'react';
import { useFormStatus } from 'react-dom';

export interface SignupState { ok: boolean; message: string; errors?: { email?: string } }

export type SignupFn = (email: string) => Promise<void>;

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus(); // status of the nearest parent <form>
  return <button type="submit" disabled={pending}>{pending ? 'Saving…' : children}</button>;
}

export function SignupForm({ signup }: { signup: SignupFn }) {
  const [state, formAction, isPending] = useActionState<SignupState, FormData>(async (_prev, formData) => {
    const email = String(formData.get('email') ?? '');
    if (!email.includes('@')) return { ok: false, message: 'Fix the errors', errors: { email: 'Enter a valid email' } };
    try { await signup(email); return { ok: true, message: `Welcome ${email}` }; }
    catch { return { ok: false, message: 'Server error, try again' }; }
  }, { ok: false, message: '' });

  return (
    <form action={formAction} aria-busy={isPending}>
      <input name="email" aria-label="Email" aria-invalid={!!state.errors?.email} />
      {state.errors?.email && <p role="alert">{state.errors.email}</p>}
      <SubmitButton>Sign up</SubmitButton>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}

export function LikeButton({ like }: { like: () => Promise<number> }) {
  const [likes, setLikes] = useState(0);
  const [optimisticLikes, addOptimistic] = useOptimistic(likes, (cur, inc: number) => cur + inc);
  const onClick = () =>
    startTransition(async () => {
      addOptimistic(1);              // UI updates instantly
      try { setLikes(await like()); } // confirmed value from "server"
      catch { /* optimistic value is discarded automatically */ }
    });
  return <button onClick={onClick}>♥ {optimisticLikes}</button>;
}
