"use server";

import { getCurrentSession } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import {
  CreateCategorySchema,
  createCategorySchema,
} from "@/lib/schemas/categories";
import { cacheLife, cacheTag, updateTag } from "next/cache";

export async function getCategories() {
  const session = await getCurrentSession();
  if (!session) return [];

  return await getCategoriesInternal();
}

async function getCategoriesInternal() {
  "use cache";
  cacheLife("hours");
  cacheTag("categories");

  return await prisma.category.findMany({
    orderBy: { name: "asc" },
    include: {
      _count: {
        select: { products: true },
      },
    },
  });
}

export async function createCategory(data: CreateCategorySchema) {
  const session = await getCurrentSession();
  if (!session) {
    return { success: false, error: "Non autorisé" };
  }

  const result = createCategorySchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Données invalides" };
  }

  try {
    await prisma.category.create({
      data: { name: result.data.name },
    });
    updateTag("categories");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Erreur lors de la création de la catégorie",
    };
  }
}

export async function updateCategory(id: string, data: CreateCategorySchema) {
  const session = await getCurrentSession();
  if (!session) {
    return { success: false, error: "Non autorisé" };
  }

  const result = createCategorySchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Données invalides" };
  }

  try {
    await prisma.category.update({
      where: { id },
      data: { name: result.data.name },
    });
    updateTag("categories");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Erreur lors de la modification de la catégorie",
    };
  }
}

export async function deleteCategory(id: string) {
  const session = await getCurrentSession();
  if (!session) {
    return { success: false, error: "Non autorisé" };
  }

  try {
    await prisma.category.delete({
      where: { id },
    });
    updateTag("categories");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Erreur lors de la suppression de la catégorie",
    };
  }
}
