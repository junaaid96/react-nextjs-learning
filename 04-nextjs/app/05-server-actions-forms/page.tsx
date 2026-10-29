import { PostForm } from './PostForm';

export const metadata = { title: 'Server Actions & forms' };

export default function ServerActionsPage() {
  return (
    <>
      <h1>05 · Server Actions & forms</h1>
      <p>Submit an empty form to see server-side validation, then a valid one. Check lesson 04 to see the new post.</p>
      <PostForm />
    </>
  );
}
