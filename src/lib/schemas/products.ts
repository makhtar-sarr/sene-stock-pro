import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Le nom doit avoir au moins 3 caractères")
    .max(50, "Le nom doit avoir au plus 50 caractères"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Le prix doit être au moins 0"),
  categoryId: z.string(),
  minStock: z.coerce.number().min(0, "Le stock minimum doit être au moins 0"),
});

export type ProductSchema = z.infer<typeof productSchema>;
