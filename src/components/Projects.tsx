import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  link?: string;
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Budget Tracker",
      description: "Application web moderne pour gérer vos finances personnelles et visualiser vos dépenses.",
      image: "/assets/project-2.png",
      isActive: true,
      link: "https://budget-tracker-ivory-six.vercel.app"
    },
    {
      id: 2,
      title: "Stell's Hope",
      description: "Plateforme de vente de vêtements en ligne. Interface épurée, UX centrée sur le client.",
      image: "/assets/project-1.png",
      isActive: true
    },
    {
      id: 3,
      title: "Projet à venir",
      description: "Un nouveau projet innovant en cours de développement.",
      image: "/assets/coming_soon.jpg",
      isActive: false
    },
    {
      id: 4,
      title: "Projet à venir",
      description: "Un nouveau projet innovant en cours de développement.",
      image: "/assets/coming_soon.jpg",
      isActive: false
    },
    {
      id: 5,
      title: "Projet à venir",
      description: "Un nouveau projet innovant en cours de développement.",
      image: "/assets/coming_soon.jpg",
      isActive: false
    },
    {
      id: 6,
      title: "Projet à venir",
      description: "Un nouveau projet innovant en cours de développement.",
      image: "/assets/coming_soon.jpg",
      isActive: false
    }
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');

    gsap.fromTo(cards,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section
      id="projets"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="glow-orb absolute top-20 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="glow-orb absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          style={{ textShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
        >
          Projets
          <span className="text-violet-400"> récents</span>
        </h2>
        <p className="text-white/70 text-lg mb-16 font-light">
          Une sélection de mes réalisations et créations
        </p>

        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/20 group-hover:to-purple-500/20 transition-all duration-500 pointer-events-none" />

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {!project.isActive && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white/90 text-lg font-light tracking-wide">Bientôt disponible</span>
                  </div>
                )}
              </div>

              <div className="p-6 relative z-10">
                {project.link ? (
                  <div className="relative inline-block">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative z-20 inline-block"
                    >
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowRight size={20} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </a>
                  </div>
                ) : (
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                )}
                <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* {project.isActive && (
                  <button className="flex items-center gap-2 text-violet-400 text-sm font-medium group-hover:gap-4 transition-all duration-300">
                    Voir le projet
                    <ArrowRight size={16} weight="bold" />
                  </button>
                )} */}
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
