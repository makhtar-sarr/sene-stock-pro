import { Suspense } from "react";

import { ProductList } from "@/components/products/product-list";
import { ProductListSkeleton } from "@/components/products/product-list-skeleton";

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">
          Gestion des Produits
        </h1>
      </div>
      <div className="rounded-lg border p-4 shadow-sm">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList />
        </Suspense>
      </div>
    </div>
  );
}
