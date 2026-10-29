/**
 * React Hook Form + Zod
 *
 * Install:
 * npm install react-hook-form @hookform/resolvers zod
 */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  age: z.coerce.number().min(18, "Must be 18+").optional(),
});

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", age: undefined },
  });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000)); // Simulate API
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name</label>
        <input {...register("name")} className="border p-2" />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register("email")} className="border p-2" />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label>Age (optional)</label>
        <input type="number" {...register("age")} className="border p-2" />
        {errors.age && (
          <p className="text-red-600 text-sm">{errors.age.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
