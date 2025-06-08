"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BudgetTrackerPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
        Budget Tracker
      </h1>
      <p className="text-muted-foreground mb-8 text-lg">
        Application web moderne pour gérer vos finances personnelles, suivre vos transactions et visualiser vos dépenses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {["welcome", "dashboard", "transactions", "profile"].map((img) => (
          <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg" key={img}>
            <Image
              src={`/images/projects/budget-tracker/${img}.png`}
              alt={img}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <Section title="Fonctionnalités principales">
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Tableau de bord interactif pour visualiser les soldes et graphiques</li>
          <li>Ajout, modification et suppression de transactions</li>
          <li>Gestion de catégories de dépenses et revenus</li>
          <li>Profil utilisateur et authentification sécurisée</li>
          <li>Responsive design (mobile, tablette, desktop)</li>
        </ul>
      </Section>

      <Section title="Avantages">
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Interface intuitive et moderne</li>
          <li>Visualisation claire des finances</li>
          <li>Accès sécurisé à vos données</li>
          <li>Accessible sur tous supports</li>
        </ul>
      </Section>

      <Section title="Technologies utilisées">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-sky-100 text-sky-800 border-sky-300">Next.js</Badge>
          <Badge variant="outline" className="bg-sky-100 text-sky-800 border-sky-300">Tailwind CSS</Badge>
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">MongoDB</Badge>
          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">Vercel</Badge>
        </div>
      </Section>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <a
          href="https://budget-tracker-ivory-six.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full md:w-auto">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visiter le site
          </Button>
        </a>

        <Link href="/#projects">
          <Button variant="outline" className="w-full md:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Button>
        </Link>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}
