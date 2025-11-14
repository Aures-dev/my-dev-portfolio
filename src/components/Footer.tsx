import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 60, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    const particles = document.querySelectorAll('.footer-particle');
    if (particles.length > 0) {
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -15,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.2
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-12 px-6 bg-black overflow-hidden border-t border-white/10">
      <div className="footer-particle absolute top-10 left-20 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />
      <div className="footer-particle absolute bottom-10 right-40 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
      <div className="footer-particle absolute top-20 right-20 w-24 h-24 bg-violet-600/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div
            className="text-3xl font-bold text-white tracking-tight cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}
          >
            AZ
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {['Accueil', 'À propos', 'Projets', 'Parcours', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('à ', '').replace(' ', '-'))}
                className="text-white/70 hover:text-white transition-all duration-300 text-sm tracking-wide relative group"
                aria-label={`Aller à la section ${item}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-violet-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm font-light flex items-center justify-center gap-2">
            Aurès ASSOGBA-ZEHE © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
