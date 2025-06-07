"use client";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen bg-gradient-to-b from-background to-background/90"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
          Aurès AZ.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Développeur web passionné par la création d'expériences numériques
          exceptionnelles.
        </p>
        <a
          href="#about"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition-colors"
        >
          En savoir plus
        </a>
      </div>
    </section>
  );
}