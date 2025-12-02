"use server";

import { cacheLife, cacheTag, updateTag } from "next/cache";

import { getCurrentSession } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { ProductSchema, productSchema } from "@/lib/schemas/products";

export const getProducts = async (categoryId?: string) => {
  const session = await getCurrentSession();

  if (!session) return [];

  return await getProductsInternal(categoryId);
};

const getProductsInternal = async (categoryId?: string) => {
  "use cache";
  cacheLife("hours");
  cacheTag("products", "categories");

  const where = categoryId ? { categoryId } : {};

  return await prisma.product.findMany({
    where,
    include: { category: true },
    orderBy: { name: "asc" },
  });
};

export async function createProduct(data: ProductSchema) {
  updateTag("products");

  const session = await getCurrentSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const result = productSchema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.message);
  }

  const { name, description, price, categoryId, minStock } = result.data;

  if (!name || !price || !categoryId) {
    throw new Error("Missing required fields");
  }

  try {
    await prisma.product.create({
      data: {
        name,
        description,
        price,
        categoryId,
        minStock,
        stock: 0,
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to create product" };
  }
}

export async function updateProduct(id: string, data: ProductSchema) {
  updateTag("products");

  const session = await getCurrentSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const result = productSchema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.message);
  }

  const { name, description, price, categoryId, minStock } = result.data;

  try {
    await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price,
        categoryId,
        minStock,
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to update product" };
  }
}

export async function deleteProduct(id: string) {
  updateTag("products");

  const session = await getCurrentSession();
  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.product.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete product" };
  }
}
