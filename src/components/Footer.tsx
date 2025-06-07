"use client";
export default function Footer() {
  return (
    <footer className="bg-background/90 backdrop-blur-lg py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-4">
          © {new Date().getFullYear()} Aurès AZ. Tous droits réservés.
        </p>
        <a
          href="https://www.linkedin.com/in/auresaz/"
          className="text-sm text-muted-foreground hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
