"use client";
export default function Projects() {
  return (
    <section
      id="projects"
      className="flex items-center justify-center h-screen bg-gradient-to-b from-background to-background/90"
    >
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
          Mes Projets
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Voici quelques-uns de mes projets récents, démontrant mes compétences en développement web.
        </p>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>Portfolio personnel</li>
          <li>Application de gestion de tâches</li>
          <li>Site e-commerce</li>
          <li>Blog personnel</li>
        </ul>
      </div>
    </section>
  );
}