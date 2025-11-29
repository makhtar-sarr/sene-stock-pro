import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  FileText,
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg leading-none">SÉNÉ-STOCK</div>
                <div className="text-xs text-muted-foreground">PRO</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Fonctionnalités
              </Link>
              <Link
                href="#solutions"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Tarifs
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/sign-in">
                <Button variant="ghost" size="sm">
                  Connexion
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">Démarrer</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">
                Nouveau: Tableau de bord en temps réel
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              Gérez votre stock
              <span className="block text-primary">en toute simplicité</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-10">
              Solution complète de gestion de stock et de ventes pour PME.
              Suivez vos produits, vos clients et vos factures en temps réel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8">
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent"
              >
                Voir une démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/40 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "1,240+", label: "Produits gérés" },
              { value: "15.8%", label: "Croissance moyenne" },
              { value: "300+", label: "Entreprises clientes" },
              { value: "24/7", label: "Support disponible" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des outils puissants pour gérer efficacement votre inventaire et
              développer votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Package,
                title: "Gestion de Stock",
                description:
                  "Suivez vos produits en temps réel avec des alertes de stock bas automatiques",
              },
              {
                icon: TrendingUp,
                title: "Analyse des Ventes",
                description:
                  "Visualisez vos performances avec des graphiques détaillés et des rapports personnalisés",
              },
              {
                icon: Users,
                title: "Gestion des Clients",
                description:
                  "Centralisez les informations clients et leur historique d'achat",
              },
              {
                icon: FileText,
                title: "Facturation Simplifiée",
                description:
                  "Créez et envoyez des factures professionnelles en quelques clics",
              },
              {
                icon: BarChart3,
                title: "Tableaux de Bord",
                description:
                  "Accédez à vos KPI essentiels depuis un tableau de bord intuitif",
              },
              {
                icon: CheckCircle,
                title: "Multi-utilisateurs",
                description:
                  "Collaborez avec votre équipe avec des rôles et permissions personnalisés",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg transition-shadow border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Interface moderne et intuitive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conçu pour être simple d'utilisation tout en offrant des
              fonctionnalités avancées
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-2 shadow-2xl">
            <img
              src="/images/image.png"
              alt="Dashboard Preview"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Prêt à transformer votre gestion de stock ?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Rejoignez des centaines d'entreprises qui utilisent déjà SÉNÉ-STOCK
            PRO pour optimiser leur inventaire
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up">
              <Button size="lg" className="text-base px-8">
                Essayer gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent"
              >
                Contacter les ventes
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Sans carte bancaire • Gratuit pendant 14 jours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Témoignages
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Carrières
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Sécurité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/40 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold">SÉNÉ-STOCK PRO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 SÉNÉ-STOCK. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
