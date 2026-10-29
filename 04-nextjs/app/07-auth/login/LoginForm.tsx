'use client';
import { useActionState } from 'react';
import { login } from '../actions';

export function LoginForm() {
  const [state, action, pending] = useActionState(login, {});
  return (
    <form action={action} className="card">
      <p><label>Email<br /><input name="email" type="email" required autoComplete="username" /></label></p>
      <p><label>Password<br /><input name="password" type="password" required autoComplete="current-password" /></label></p>
      {state.error && <p className="error" role="alert">{state.error}</p>}
      <button disabled={pending}>{pending ? 'Signing in…' : 'Sign in'}</button>
    </form>
  );
}
