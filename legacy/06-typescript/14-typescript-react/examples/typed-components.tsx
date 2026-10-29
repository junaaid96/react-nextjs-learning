/**
 * TypeScript with React - Common patterns
 *
 * - Props interfaces
 * - Event types
 * - Generic components
 */

import React from "react";

// Props interface
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  label,
  variant = "primary",
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

// Event types
export function FormExample() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  );
}

// Generic list component
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item)}</li>)}</ul>;
}
