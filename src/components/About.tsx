import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getAnimationConfig } from '../utils/performance';
import {
  Atom
} from 'phosphor-react';
import { SiNextdotjs, SiTypescript  } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: SiTypescript , name: 'Typescript', color: 'text-blue-600' },
    { icon: Atom, name: 'React', color: 'text-cyan-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
  ];

  useEffect(() => {
    const config = getAnimationConfig();
    
    if (!sectionRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    const imageAnimation = config.enableBlur 
      ? { opacity: 0, x: -100, filter: 'blur(10px)' }
      : { opacity: 0, x: -50 };
    const imageAnimationTo = config.enableBlur
      ? { opacity: 1, x: 0, filter: 'blur(0px)', duration: config.duration, ease: config.ease }
      : { opacity: 1, x: 0, duration: config.duration, ease: config.ease };

    tl.fromTo(imageRef.current, imageAnimation, imageAnimationTo)
    .fromTo(contentRef.current,
      config.enableBlur ? { opacity: 0, x: 100, filter: 'blur(10px)' } : { opacity: 0, x: 50 },
      config.enableBlur 
        ? { opacity: 1, x: 0, filter: 'blur(0px)', duration: config.duration, ease: config.ease }
        : { opacity: 1, x: 0, duration: config.duration, ease: config.ease },
      '-=0.4'
    );

    const icons = document.querySelectorAll('.skill-icon');
    if (icons.length > 0 && contentRef.current) {
      gsap.fromTo(icons,
        config.enableBlur ? { opacity: 0, scale: 0, filter: 'blur(5px)' } : { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          ...(config.enableBlur && { filter: 'blur(0px)' }),
          duration: config.duration,
          stagger: config.stagger,
          ease: config.ease,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 60%'
          }
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="à-propos"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 px-6 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />

      <div className="glow-orb absolute top-40 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div ref={imageRef} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div
            className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-violet-500/30 group-hover:rotate-6 transition-transform duration-500"
            style={{
              boxShadow: '0 0 60px rgba(139, 92, 246, 0.4)'
            }}
          >
            <img
              src="/assets/profile.webp"
              alt="Aurès ASSOGBA-ZEHE"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div ref={contentRef}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            À propos
            <span
              className="block text-violet-400 mt-2"
              style={{ textShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
            >
              de moi
            </span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
            Passionné par le développement web et les interfaces utilisateur modernes,
            je transforme des idées créatives en expériences digitales immersives.
            Chaque projet est une opportunité d'explorer de nouvelles technologies
            et de repousser les limites du design interactif.
          </p>

          <div>
            <h3 className="text-xl text-white mb-6 font-semibold">Compétences</h3>
            <div className="grid grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-icon flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <skill.icon
                    size={40}
                    weight="light"
                    className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      filter: 'drop-shadow(0 0 10px currentColor)'
                    }}
                  />
                  <span className="text-white/70 text-xs text-center font-light">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
