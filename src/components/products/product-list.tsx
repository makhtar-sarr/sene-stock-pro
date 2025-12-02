import { Box, Edit, Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

import { getCategories } from "@/app/actions/categories";
import { getProducts } from "@/app/actions/products";
import { DeleteProductDialog } from "@/components/products/delete-product-dialog";
import { ProductDialog } from "@/components/products/product-dialog";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCurrentSession } from "@/lib/dal";

export async function ProductList() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/sign-in");
  }

  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Produits</h2>
        <ProductDialog categories={categories} />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead>Prix</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category.name}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "XOF",
                  }).format(Number(product.price))}
                </TableCell>
                <TableCell>
                  <span
                    className={
                      product.stock <= product.minStock
                        ? "text-red-500 font-bold"
                        : ""
                    }
                  >
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <ProductDialog
                    product={product}
                    categories={categories}
                    trigger={
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    }
                  />
                  <DeleteProductDialog
                    product={product}
                    trigger={
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
            {products.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  <Empty className="border border-dashed">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <Box />
                      </EmptyMedia>
                      <EmptyTitle>Aucun produit trouvé</EmptyTitle>
                      <EmptyDescription>
                        Ajoutez un produit pour commencer.
                      </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                      <ProductDialog categories={categories} />
                    </EmptyContent>
                  </Empty>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
