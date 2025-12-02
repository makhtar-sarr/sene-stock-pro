import { ShoppingBag } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 my-8">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
          <ShoppingBag className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">SÉNÉ-STOCK PRO</h1>
      </div>

      {/* Form */}
      {children}

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        © 2025 SÉNÉ-STOCK PRO. Tous droits réservés.
      </footer>
    </div>
  );
}
