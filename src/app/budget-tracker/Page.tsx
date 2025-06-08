"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BudgetTrackerPage() {
  return (
    <main className="max-w-4xl mx-auto pt-24 py-12 px-4">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Budget Tracker
      </motion.h1>
      <motion.p
        className="text-muted-foreground mb-8 text-lg"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Application web moderne pour gérer vos finances personnelles, suivre vos
        transactions et visualiser vos dépenses.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {["welcome", "dashboard", "transactions", "profile"].map((img) => (
          <div
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            key={img}
          >
            <Image
              src={`/images/projects/budget-tracker/${img}.png`}
              alt={img}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

      <AnimatedSection title="Fonctionnalités principales" delay={0.3}>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>
            Tableau de bord interactif pour visualiser les soldes et graphiques
          </li>
          <li>Ajout, modification et suppression de transactions</li>
          <li>Gestion de catégories de dépenses et revenus</li>
          <li>Profil utilisateur et authentification sécurisée</li>
          <li>Responsive design (mobile, tablette, desktop)</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Avantages" delay={0.4}>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Interface intuitive et moderne</li>
          <li>Visualisation claire des finances</li>
          <li>Accès sécurisé à vos données</li>
          <li>Accessible sur tous supports</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Technologies utilisées" delay={0.5}>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="bg-sky-100 text-sky-800 border-sky-300"
          >
            Next.js
          </Badge>
          <Badge
            variant="outline"
            className="bg-sky-100 text-sky-800 border-sky-300"
          >
            Tailwind CSS
          </Badge>
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 border-green-300"
          >
            MongoDB
          </Badge>
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-800 border-gray-300"
          >
            Vercel
          </Badge>
        </div>
      </AnimatedSection>

      <motion.div
        className="flex flex-col md:flex-row gap-4 mt-8"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="https://budget-tracker-ivory-six.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full cursor-pointer md:w-auto transition-colors duration-200 hover:bg-sky-100 hover:text-sky-800">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visiter le site
          </Button>
        </a>

        <Link href="/#projects">
          <Button
            variant="outline"
            className="w-full cursor-pointer md:w-auto transition-colors duration-200 hover:bg-sky-100 hover:text-sky-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}

function AnimatedSection({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {children}
    </motion.div>
  );
}
