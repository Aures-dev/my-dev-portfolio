import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Envelope,
  Phone,
  MapPin,
  LinkedinLogo,
  GithubLogo,
  WhatsappLogo,
  PaperPlaneTilt
} from 'phosphor-react';
import { toast, Toaster } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.contact-info',
      { opacity: 0, x: -100, filter: 'blur(10px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    )
    .fromTo('.contact-form',
      { opacity: 0, x: 100, filter: 'blur(10px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' },
      '-=0.7'
    );
  }, []);

  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>"'&]/g, (match) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entities[match] || match;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Sanitize form data
    const sanitizedData = new FormData();
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        sanitizedData.append(key, sanitizeInput(value));
      } else {
        sanitizedData.append(key, value);
      }
    }

    try {
      const response = await fetch('https://formspree.io/f/xrbprgdb', {
        method: 'POST',
        body: sanitizedData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Message envoyé avec succès!', {
          description: 'Je vous répondrai dans les plus brefs délais.',
          duration: 5000
        });
        form.reset();
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
      toast.error('Erreur lors de l\'envoi', {
        description: 'Veuillez réessayer plus tard.',
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Envelope,
      label: 'Email',
      value: 'auresaz69@gmail.com',
      href: 'mailto:auresaz69@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+229 01 56 05 02 65',
      href: 'tel:+22901560502065'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Cotonou, Bénin',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: LinkedinLogo,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aures-assogba-zehe',
      color: 'hover:text-blue-400'
    },
    {
      icon: GithubLogo,
      name: 'GitHub',
      href: 'https://github.com/Aures-dev',
      color: 'hover:text-white'
    },
    {
      icon: WhatsappLogo,
      name: 'WhatsApp',
      href: 'https://wa.link/ofl41h',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 bg-black overflow-hidden"
    >
      <Toaster position="top-right" theme="dark" />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="glow-orb absolute top-40 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="glow-orb absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight text-center"
          style={{ textShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
        >
          Entrons en <span className="text-violet-400">contact</span>
        </h2>
        <p className="text-white/70 text-lg mb-16 font-light text-center">
          Un projet en tête ? Discutons-en ensemble
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-info space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <info.icon
                          size={24}
                          weight="light"
                          className="text-violet-400 mt-1 group-hover:scale-110 transition-transform"
                        />
                        <div>
                          <p className="text-white/50 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-light">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <info.icon
                          size={24}
                          weight="light"
                          className="text-violet-400 mt-1"
                        />
                        <div>
                          <p className="text-white/50 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-light">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Réseaux sociaux</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                    style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                  >
                    <social.icon
                      size={32}
                      weight="light"
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Votre nom"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-violet-500/50 text-white placeholder:text-white/40 outline-none transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Votre email"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-violet-500/50 text-white placeholder:text-white/40 outline-none transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  required
                  maxLength={200}
                  placeholder="Sujet"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-violet-500/50 text-white placeholder:text-white/40 outline-none transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={6}
                  placeholder="Votre message"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-violet-500/50 text-white placeholder:text-white/40 outline-none resize-none transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  <PaperPlaneTilt size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
