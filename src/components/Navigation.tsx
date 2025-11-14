import { useState, useEffect } from 'react';
import { List, X } from 'phosphor-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="text-2xl font-bold text-white tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}
        >
          AZ
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Accueil', 'À-propos', 'Projets', 'Parcours', 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace('à ', '').replace(' ', '-'))}
              className="text-white/70 hover:text-white transition-all duration-300 text-sm tracking-wide relative group"
              aria-label={`Naviguer vers ${item}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-300 group-hover:w-full transition-all duration-300"
                    style={{ boxShadow: '0 0 8px rgba(139, 92, 246, 0.8)' }}
              />
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {['Accueil', 'À-propos', 'Projets', 'Parcours', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase().replace('à ', '').replace(' ', '-'));
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-white/70 hover:text-white transition-colors py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
