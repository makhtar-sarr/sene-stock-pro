import { Suspense } from "react";

import { CategoryList } from "@/components/categories/category-list";
import { CategoryListSkeleton } from "@/components/categories/category-list-skeleton";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">
          Gestion des Catégories
        </h1>
      </div>
      <div className="rounded-lg border p-4 shadow-sm">
        <Suspense fallback={<CategoryListSkeleton />}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  );
}
