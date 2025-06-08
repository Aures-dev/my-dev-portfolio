"use client";

import { ReactNode } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted/20 rounded-3xl my-12"
      aria-labelledby="skills-heading"
    >
      <div className="text-center mb-16">
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Mes <span className="gradient-text">compétences</span>
        </h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto" />
      </div>  
    
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Backend" skills={backendSkills} />
      </motion.div>

      <div className="mt-16">
        <h3 className="text-xl font-bold mb-8 text-center" id="tech-heading">
          Technologies que j'utilise
        </h3>
        <div className="tech-scroll-container overflow-hidden" role="region" aria-labelledby="tech-heading">
          <div className="tech-scroll flex animate-scroll">
            {techIcons.map((icon, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="tech-icon p-4 bg-background rounded-lg shadow-md hover:shadow-lg mx-2 flex items-center justify-center"
                      role="img"
                      aria-label={techNames[i]}
                    >
                      {icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{techNames[i]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
            {techIcons.map((icon, i) => (
              <TooltipProvider key={`clone-${i}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="tech-icon p-4 bg-background rounded-lg shadow-md hover:shadow-lg mx-2 flex items-center justify-center"
                      role="img"
                      aria-label={techNames[i]}
                    >
                      {icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{techNames[i]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; level: number; color: string }[];
}) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-muted-foreground">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div
              className="w-full bg-muted rounded-full h-2 overflow-hidden"
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Niveau de compétence en ${skill.name}`}
            >
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${skill.level}%`,
                  background: skill.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const frontendSkills = [
  { name: "HTML/CSS", level: 95, color: "linear-gradient(to right, #0284c7, #0ea5e9)" },
  { name: "JavaScript", level: 90, color: "linear-gradient(to right, #0284c7, #38bdf8)" },
  { name: "React", level: 85, color: "linear-gradient(to right, #0ea5e9, #38bdf8)" },
  { name: "Vue.js", level: 80, color: "linear-gradient(to right, #0ea5e9, #22d3ee)" },
];

const backendSkills = [
  { name: "Node.js", level: 88, color: "linear-gradient(to right, #0ea5e9, #0284c7)" },
  { name: "Python", level: 85, color: "linear-gradient(to right, #0284c7, #06b6d4)" },
  { name: "PHP", level: 75, color: "linear-gradient(to right, #06b6d4, #3b82f6)" },
  { name: "SQL/NoSQL", level: 90, color: "linear-gradient(to right, #38bdf8, #0ea5e9)" },
];

const techNames = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vue.js",
  "Node.js",
  "Python",
  "PHP",
  "SQL/NoSQL",
  "Git",
];

const techIcons: ReactNode[] = [
  <Icon icon="logos:html-5" width={32} key="html5" />,
  <Icon icon="logos:css-3" width={32} key="css3" />,
  <Icon icon="logos:javascript" width={32} key="javascript" />,
  <Icon icon="logos:react" width={32} key="react" />,
  <Icon icon="logos:vue" width={32} key="vue" />,
  <Icon icon="logos:nodejs" width={32} key="nodejs" />,
  <Icon icon="logos:python" width={32} key="python" />,
  <Icon icon="logos:php" width={32} key="php" />,
  <Icon icon="logos:mysql" width={32} key="mysql" />,
  <Icon icon="logos:git" width={32} key="git" />,
];