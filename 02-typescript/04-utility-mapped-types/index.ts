export interface Todo { id: number; title: string; done: boolean }

export type TodoPreview = Pick<Todo, 'id' | 'title'>;
export type NewTodo = Omit<Todo, 'id'>;
export type TodoPatch = Partial<NewTodo>;

// Mapped type with key remapping: { onIdChange, onTitleChange, onDoneChange }
export type ChangeHandlers<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (value: T[K]) => void;
};

// Conditional type with infer
export type ElementOf<T> = T extends readonly (infer E)[] ? E : never;
export type Unwrap<T> = T extends Promise<infer V> ? Unwrap<V> : T;

// Deep readonly (recursive mapped type)
export type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] };

export function applyPatch(todo: Todo, patch: TodoPatch): Todo {
  return { ...todo, ...patch };
}

export const routes = {
  home: '/',
  todo: '/todos/:id',
} satisfies Record<string, `/${string}`>;
