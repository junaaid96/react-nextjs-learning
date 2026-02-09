# Form Handling

> React Hook Form, Formik, validation with Zod/Yup.

## React Hook Form (Most Popular)

- Minimal re-renders
- Built-in validation
- Easy integration with Zod

```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}

      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
}
```

---

## Formik

```jsx
import { useFormik } from 'formik';

const formik = useFormik({
  initialValues: { email: '', password: '' },
  validate: (values) => { /* ... */ },
  onSubmit: (values) => { /* ... */ },
});

<form onSubmit={formik.handleSubmit}>
  <input name="email" value={formik.values.email} onChange={formik.handleChange} />
</form>
```

---

## Validation (Zod vs Yup)

**Zod** – TypeScript-first, composable.

```js
const schema = z.object({
  name: z.string().min(2),
  age: z.number().min(0).max(120),
});
```

**Yup** – Mature, widely used.

```js
const schema = yup.object({
  name: yup.string().min(2).required(),
});
```

---

## Controlled vs Uncontrolled

React Hook Form uses **uncontrolled** by default (`register`) – better performance. Use `Controller` for controlled components (custom inputs, third-party UI).

---

## Why Form Handling Matters

- Forms are core to real apps: **auth, onboarding, settings, checkout, admin CRUD**.
- Interviews test form fundamentals: controlled vs uncontrolled, validation, error UX, and performance on large forms.
- Bad form handling leads to poor UX (lost input, confusing errors) and data quality issues.

---

## Where You Use Each Tool

- **React Hook Form**: most production forms (great performance, minimal re-renders).
- **Formik**: still common in older codebases; good to recognize in interviews.
- **Zod/Yup**: schema-based validation (Zod pairs well with TypeScript).
- **Controlled inputs**: when you need immediate sync with React state (live preview, dependent fields).
- **Uncontrolled inputs**: when you want performance and simpler wiring (RHF default).

---

## Interview Q&A (with Examples)

### Q1: Controlled vs uncontrolled — what’s the tradeoff?

- **Controlled**:
  - Pros: easy validation, immediate UI sync
  - Cons: can cause more re-renders (especially in large forms)
- **Uncontrolled**:
  - Pros: better performance, less state wiring
  - Cons: reading values happens at submit/time of need (usually via libraries like RHF)

Good interview line:
> For large forms, I prefer RHF’s uncontrolled approach for performance, and use `Controller` only for custom controlled components.

---

### Q2: Why is schema validation useful?

Schema validation:
- Centralizes rules (required, min length, formats).
- Produces consistent errors.
- With Zod, can generate TypeScript types from the schema (single source of truth).

---

### Q3: How do you improve error UX?

Key points:
- Show errors near the field.
- Use clear language (“Password must be 8+ characters”).
- Don’t show errors too early (e.g. only after blur/submit depending on UX).
- Provide a summary for large forms if needed.

---

## Quick Practice

- **Exercise 1**: Build a login form with RHF + Zod and show field-level errors.
- **Exercise 2**: Build a profile form with dependent fields (country → state) and validate accordingly.
- **Exercise 3**: Implement async validation (check if username is taken) with debouncing.
- **Exercise 4**: Create a large form (20+ fields) and ensure typing performance remains smooth.

