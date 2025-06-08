"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
} from "lucide-react";

import { Icon } from "@iconify/react/dist/iconify.js";
const Linkedin = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} icon="mdi:linkedin" />
);
const Github = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} icon="mdi:github" />
);


export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xrbprgdb", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    if (response.ok) {
      form.reset();
      alert("Message envoyé !");
    } else {
      alert("Erreur lors de l'envoi.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Me <span className="gradient-text">contacter</span>
        </h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Infos de contact */}
        <div className="space-y-6 text-muted-foreground">
          <h3 className="text-2xl font-bold text-foreground">
            Discutons de votre projet
          </h3>
          <p>
            Vous avez un projet en tête ou souhaitez discuter d&apos;une
            opportunité ? Contactez-moi.
          </p>

          <ContactInfo icon={<Mail />} label="Email" value="auresaz69@gmail.com" />
          <ContactInfo icon={<Phone />} label="Téléphone" value="+229 01 56 05 02 65" />
          <ContactInfo icon={<MapPin />} label="Localisation" value="Cotonou, Bénin" />

          <div className="pt-4">
            <h4 className="font-bold mb-2">Réseaux sociaux</h4>
            <div className="flex space-x-4">
              <a
              href="https://www.linkedin.com/in/aures-assogba-zehe"
              target="_blank"
              rel="noopener"
              className="p-4 bg-muted rounded-lg hover:bg-blue-600 transition-all"
              >
              <Linkedin className="text-blue-400 w-7 h-7" icon={""} />
              </a>
              <a
                href="https://github.com/Aures-dev"
                className="p-4 bg-muted rounded-lg hover:bg-gray-700 transition-all"
              >
                <Github className="text-purple-500 w-7 h-7" icon={""} />
              </a>
              <a
                href="#"
                className="p-4 bg-muted rounded-lg hover:bg-sky-600 transition-all"
              >
                <User className="text-sky-300 w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-muted rounded-xl p-8 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Ex: Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Sujet
              </label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Sujet du message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Votre message ici..."
              />
            </div>
            <div className="pt-2">
              <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
                {loading ? "Envoi en cours..." : <>Envoyer <Send className="ml-2 w-4 h-4" /></>}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-muted rounded-lg">{icon}</div>
      <div>
        <h4 className="font-bold text-foreground">{label}</h4>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}
