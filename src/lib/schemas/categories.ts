import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit avoir au moins 2 caractères")
    .max(30, "Le nom doit avoir au plus 30 caractères"),
});

export type CreateCategorySchema = z.infer<typeof createCategorySchema>;
