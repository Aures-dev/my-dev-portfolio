"use client";
export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center h-screen bg-gradient-to-b from-background to-background/90"
    >
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
          Mes compétences
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Je maîtrise une variété de technologies et de langages de programmation,
          me permettant de créer des applications web robustes et performantes.
        </p>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>JavaScript, TypeScript</li>
          <li>React, Next.js</li>
          <li>Node.js, Express</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>Git, GitHub</li>
        </ul>
      </div>
    </section>
  );
}