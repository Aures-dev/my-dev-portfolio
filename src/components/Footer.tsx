"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

const Linkedin = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} icon="mdi:linkedin" />
);
const Github = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} icon="mdi:github" />
);
const Whatsapp = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} icon="mdi:whatsapp" />
);

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold gradient-text">
              Aurès Assogba-zehe
            </span>
            <p className="text-muted-foreground mt-2">
              Développeur Fullstack innovant et passionné.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aures-assogba-zehe"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" icon={""} />
            </a>
            <a
              href="https://github.com/Aures-dev"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" icon={""} />
            </a>
            <a
                // href="https://wa.me/22956050265"
                href="https://wa.link/ofl41h"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                  <Whatsapp className="w-5 h-5" icon={""} />
              </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Aurès Assogba-zehe. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Mentions légales
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
