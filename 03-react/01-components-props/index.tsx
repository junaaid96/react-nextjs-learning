import type { ComponentProps, ReactNode } from 'react';

type ButtonProps = ComponentProps<'button'> & { variant?: 'primary' | 'ghost' };

// Extends native button props so every HTML attribute (and `ref`, in React 19) just works.
export function Button({ variant = 'primary', className = '', ...rest }: ButtonProps) {
  return <button className={`btn btn-${variant} ${className}`.trim()} {...rest} />;
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section aria-label={title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export interface Skill { id: string; name: string; level: number }

export function SkillList({ skills }: { skills: Skill[] }) {
  if (skills.length === 0) return <p>No skills yet</p>; // early return for empty state
  return (
    <ul>
      {skills.map((s) => (
        <li key={s.id}>
          {s.name} {s.level >= 4 && <strong>(expert)</strong>}
        </li>
      ))}
    </ul>
  );
}
