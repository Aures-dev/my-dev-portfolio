// components/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">À propos</span> de moi
        </h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image & citation */}
        <div className="relative">
          <div className="floating">
            <div className="relative w-full h-full bg-muted rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aures-about.png"
                alt="Code"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-lg font-bold">Steve Jobs</h3>
                <p className="text-muted-foreground">
                  "L&apos;innovation, c&apos;est ce qui distingue le leader du
                  suiveur."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="space-y-6 text-muted-foreground">
          <h3 className="text-2xl font-bold text-foreground">
            Développeur Fullstack créatif et passionné
          </h3>
          <p>
            Je suis un développeur fullstack focalisé dans la création
            d&apos;applications web modernes. Je me spécialise dans les
            technologies JavaScript comme React, Node.js et Vue.js, mais j&apos;ai
            également une solide expérience avec Python et PHP.
          </p>
          <p>
            Mon approche combine une attention méticuleuse aux détails du design
            avec une expertise technique approfondie. Je crois en la création de
            produits à la fois esthétiques, robustes et évolutifs.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
            <InfoLine label="Nom" value="Aurès Assogba-zehe" />
            <InfoLine label="Email" value="auresaz69@gmail.com" />
            <InfoLine label="Téléphone" value="+229 01 56 05 02 65" />
            <InfoLine label="Localisation" value="Cotonou, Bénin" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 rounded-full bg-sky-500" />
      <span className="text-muted-foreground">
        {label}: <span className="text-foreground">{value}</span>
      </span>
    </div>
  );
}
