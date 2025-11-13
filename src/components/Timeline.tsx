import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);

  const events: TimelineEvent[] = [
    {
      year: "2021",
      title: "Début du parcours",
      description: "Obtention du Baccalauréat et immersion dans l'apprentissage de l'anglais"
    },
    {
      year: "2022 - 2023",
      title: "Bootcamp intensif - Cerco International",
      description: "Immersion dans les bases de la programmation et des soft skills d'un developpeur"
    },
    {
      year: "2024",
      title: "Formation Professionnelle - HIGHFIVE UNIVERSITY",
      description: "Apprentissage intensif des dernières technologies du marché, afin de répondre au progrès du domaine."
    },
    {
      year: "2025 - Présent",
      title: "Alternance professionnelle - VIPP INTERSTIS",
      description: "Participation à la réalisation de plusieurs projets internes à l'entreprise"
    },
  ];

  useEffect(() => {
    const items = gsap.utils.toArray('.timeline-item');

    items.forEach((item) => {
      gsap.fromTo(item as HTMLElement,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item as HTMLElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section
      id="parcours"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/5 to-black" />

      <div className="glow-orb absolute top-40 right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight text-center"
          style={{ textShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
        >
          Mon <span className="text-violet-400">parcours</span>
        </h2>
        <p className="text-white/70 text-lg mb-16 font-light text-center">
          Une évolution technologique et professionnelle continue
        </p>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/50 via-purple-500/50 to-violet-500/50"
               style={{ boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}
          />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 group"
                       style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-violet-400 text-2xl font-bold"
                            style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}
                      >
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 w-6 h-6 -ml-3 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-4 border-black hover:scale-125 transition-transform duration-300"
                     style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
