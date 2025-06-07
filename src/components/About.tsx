"use client";
export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center h-screen bg-gradient-to-b from-background to-background/90"
    >
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
          À propos de moi
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Passionné par le développement web, je crée des expériences numériques
          qui allient esthétique et fonctionnalité. Mon objectif est de
          transformer des idées en solutions innovantes.
        </p>
        <a
          href="#skills"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition-colors"
        >
          Voir mes compétences
        </a>
      </div>
    </section>
  );
}