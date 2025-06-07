"use client";
export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center h-screen bg-gradient-to-b from-background to-background/90"
    >
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
          Contactez-moi
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Vous avez un projet ou une question ? N'hésitez pas à me contacter !
        </p>
        <a
          href="mailto:contact@auresaz.com"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition-colors"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}