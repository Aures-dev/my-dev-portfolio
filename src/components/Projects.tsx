"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mes <span className="gradient-text">projets</span>
        </h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Budget Tracker"
          image="/images/projects/budget-tracker/welcome.png"
          description="Next.js, Tailwind CSS, MongoDB"
          link="/budget-tracker"
        />
      </div>

      <div className="text-center mt-16">
        <Link
          href="#projects"
          className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-all duration-300 shadow-lg"
        >
          Voir tous mes projets
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  image,
  description,
  link,
}: {
  title: string;
  image: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-muted rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <Link
          href={link}
          className="mt-4 inline-block text-sky-600 hover:underline text-sm font-medium"
        >
          Voir les détails →
        </Link>
      </div>
    </div>
  );
}
