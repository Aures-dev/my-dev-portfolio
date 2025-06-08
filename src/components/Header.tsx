"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollClass, setScrollClass] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setScrollClass("scrolled-down");
    } else {
      setScrollClass("scrolled-up");
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [lastScrollY]);

  // Gérer le focus pour l'accessibilité
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.focus();
    }
  }, [isMobileMenuOpen]);

  // Déclaration des liens de navigation placée AVANT le return pour éviter les erreurs
  const navLinks = [
    { href: "/#home", label: "Accueil" },
    { href: "/#about", label: "À propos" },
    { href: "/#skills", label: "Compétences" },
    { href: "/#projects", label: "Projets" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/90 transition-all duration-300 ${scrollClass} ${
        scrollClass === "scrolled-down" ? "shadow-md" : ""
      } ${scrollClass === "scrolled-down" ? "-translate-y-full md:-translate-y-20" : "translate-y-0"} md:transition-transform md:duration-500`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        role="navigation"
        aria-label="Navigation principale"
      >
        <Link href="#home" className="flex items-center space-x-2 text-xl font-bold gradient-text">
          <span>Aurès AZ.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium relative group transition-colors duration-200"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            role="navigation"
            aria-label="Menu mobile"
            tabIndex={-1}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground text-lg font-medium py-2 px-4 rounded-md hover:bg-muted transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-4 pt-2">
              <span className="text-sm text-muted-foreground">Mode</span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}