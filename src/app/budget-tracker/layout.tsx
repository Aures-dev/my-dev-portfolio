
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Budget Tracker | Projet de Aurès AZ",
  description: "Application de gestion de budget moderne et sécurisée.",
  openGraph: {
    title: "Budget Tracker | Projet de Aurès AZ",
    description:
      "Application web pour suivre vos finances personnelles. Fonctionnalités avancées et design moderne.",
    url: process.env.APP_URL + "/budget-tracker",
    images: [
      {
        url: "/images/projects/budget-tracker/welcome.png",
        width: 1200,
        height: 630,
        alt: "Aperçu de l'application Budget Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Tracker | Projet de Aurès AZ",
    description: "Application web pour gérer vos finances personnelles.",
    images: ["/images/projects/budget-tracker/welcome.png"],
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
