import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'phosphor-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(headlineRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    const orbs = document.querySelectorAll('.glow-orb');
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: -20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.3
      });
    });
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
         <Spline scene="https://prod.spline.design/W-KNaS1oMJ6yzooH/scene.splinecode" className="w-full h-full opacity-60" />
      </div>

      <div className="glow-orb absolute top-20 left-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="glow-orb absolute bottom-40 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="glow-orb absolute top-1/2 left-1/2 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          style={{
            textShadow: '0 0 40px rgba(139, 92, 246, 0.5)'
          }}
        >
          Salut, moi c'est Aurès
          <br />
          <span className="text-violet-400">Développeur créatif</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/70 mb-12 font-light tracking-wide max-w-2xl mx-auto"
        >
          Je crée des expériences web immersives et innovantes qui fusionnent design et technologie
        </p>

        <button
          ref={ctaRef}
          onClick={handleContactClick}
          className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-105"
          style={{
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Entrer en contact
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
}
