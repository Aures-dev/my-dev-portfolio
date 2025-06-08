"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTypingEffect } from "@/utils/typingEffect";

const professions = [
  "Développeur Fullstack",
  "Développeur d'applications",
  "Passionné de Javascript",
  "Designer d'interfaces",
  "Solutionneur de problèmes",
];

export default function Hero() {

  const text = useTypingEffect(professions, {
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseBetween: 1200,
    pauseEnd: 800,
  });

  return (
    <section
      id="home"
      className="section pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bonjour, je suis{" "}
            <span className="name gradient-text pb-6">Aurès Assogba-zehe</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground">
            <div>
              &gt;_ <span className="typing-animation">{text}</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-prose">
            Je résous des problèmes à travers des applications web modernes et
            performantes avec les dernières technologies.
          </p>
          <div className="flex space-x-4 pt-4">
            <Link href="#projects">
              <Button className="bg-sky-600 text-white hover:bg-sky-700 transition">
                Voir mes projets
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-sky-600 text-sky-600">
                Me contacter
              </Button>
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-xl">
            <Image
              src="/images/aures-illustration.png"
              alt="Photo de profil"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Blur circles */}
          <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-sky-500 opacity-20 blur-xl" />
          <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-sky-400 opacity-20 blur-xl" />
        </div>
      </div>
    </section>
  );
}
