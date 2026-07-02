"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/Animations";
import { skills } from "@/lib/data";
import { useLanguageTheme } from "@/context/LanguageThemeContext";
import { Briefcase, MapPin, Award, CheckCircle } from "lucide-react";

const techStack = [
  { group: "Sistemas", groupEn: "Systems", items: ["C", "C++", "Java", "Bash", "Python"] },
  { group: "Web", groupEn: "Web", items: ["HTML5", "CSS3", "JavaScript", "Tailwind", "Next.js", "React"] },
  { group: "Backend", groupEn: "Backend", items: ["Spring Boot", "JDBC", "JWT", "REST APIs", "Node.js"] },
  { group: "Data", groupEn: "Data", items: ["Power BI", "Excel", "SQL", "Oracle DB", "PostgreSQL"] },
  { group: "Infra / DevOps", groupEn: "Infra / DevOps", items: ["Git", "GitHub", "Docker", "WSL2"] },
  { group: "IA & Cloud", groupEn: "AI & Cloud", items: ["Google Gemini", "LLM APIs", "Cloud Native", "Agentes IA"] },
];

export function About() {
  const { lang, t } = useLanguageTheme();
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  // Collect all unique categories for filters
  const categories = ["All", ...techStack.map(item => lang === "pt" ? item.group : item.groupEn)];

  // Get items based on selection
  const filteredItems = selectedGroup === "All"
    ? techStack.flatMap(stack => stack.items)
    : techStack.find(stack => (lang === "pt" ? stack.group : stack.groupEn) === selectedGroup)?.items || [];

  return (
    <section id="about" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Aurora visual accent */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="flex items-center gap-4 mb-16">
          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-accent tracking-[0.2em] uppercase">
            {"// 01"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-jetbrains)] text-text">
            {t("about_title")}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Bio (Col span 2) */}
          <FadeIn delay={0.1} className="lg:col-span-2 flex">
            <div className="glass-premium rounded-2xl p-8 flex flex-col justify-between w-full relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-500" />
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Briefcase size={16} />
                  </div>
                  <span className="font-[family-name:var(--font-jetbrains)] text-xs text-text-2 uppercase tracking-wider">
                    {lang === "pt" ? "Quem Sou" : "Who I Am"}
                  </span>
                </div>
                <div className="space-y-4 leading-relaxed font-light text-text-2 text-sm sm:text-base">
                  <p dangerouslySetInnerHTML={{ __html: t("about_p1") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("about_p2") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("about_p3") }} />
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-[family-name:var(--font-jetbrains)] text-text-3 border-t border-border/20 pt-6">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-accent" /> Rio de Janeiro, Brasil
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={12} className="text-accent-2" /> {lang === "pt" ? "Estudante de C. da Computação" : "Computer Science Student"}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Status / Availability */}
          <FadeIn delay={0.2} className="flex">
            <div className="glass-premium rounded-2xl p-6 flex flex-col justify-between items-center text-center w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-accent-2/5 to-transparent pointer-events-none" />
              
              <div className="w-full flex justify-between items-center text-xs font-[family-name:var(--font-jetbrains)] text-text-3">
                <span>STATUS</span>
                <span className="flex items-center gap-1 text-[#00d4aa]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-ping" />
                  {lang === "pt" ? "ATIVO" : "ACTIVE"}
                </span>
              </div>

              {/* Glowing radar pulse */}
              <div className="my-8 relative flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-[#00d4aa]/5 rounded-full animate-ping" />
                <div className="absolute w-16 h-16 bg-[#00d4aa]/15 rounded-full animate-pulse" />
                <div className="w-6 h-6 bg-[#00d4aa] rounded-full shadow-[0_0_16px_rgba(0,212,170,0.8)] flex items-center justify-center text-white">
                  <CheckCircle size={12} />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-text">
                  {lang === "pt" ? "Disponível para Oportunidades" : "Available for Opportunities"}
                </p>
                <p className="text-xs text-text-2 leading-relaxed">
                  {lang === "pt" 
                    ? "Buscando estágios ou posições júnior como desenvolvedor de software."
                    : "Seeking internships or junior positions as a software developer."}
                </p>
                <a
                  href="#contact"
                  data-cursor-text="hire"
                  className="cursor-pointer mt-4 inline-flex items-center justify-center w-full bg-[#00d4aa] hover:bg-[#00b38f] text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg transition-all duration-200"
                >
                  {lang === "pt" ? "Contate-me" : "Get in Touch"}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Skills levels / Progress Bars */}
          <FadeIn delay={0.25} className="flex">
            <div className="glass-premium rounded-2xl p-6 w-full flex flex-col justify-between">
              <div>
                <span className="font-[family-name:var(--font-jetbrains)] text-xs text-text-2 uppercase tracking-wider block mb-6">
                  {lang === "pt" ? "Nível de Proficiência" : "Proficiency Level"}
                </span>
                <div className="space-y-5">
                  {skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1 text-xs">
                        <span className="font-[family-name:var(--font-jetbrains)] text-text font-medium">
                          {skill.name}
                        </span>
                        <span className="font-[family-name:var(--font-jetbrains)] text-text-3">
                          {skill.level[lang]}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-border/40 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 4: Tech Stack Filter (Col span 2) */}
          <FadeIn delay={0.3} className="lg:col-span-2 flex">
            <div className="glass-premium rounded-2xl p-8 w-full flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="font-[family-name:var(--font-jetbrains)] text-xs text-text-2 uppercase tracking-wider block mb-6">
                  {lang === "pt" ? "Matriz Tecnológica Interativa" : "Interactive Tech Matrix"}
                </span>

                {/* Filters */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedGroup(category)}
                      className={`cursor-pointer px-3 py-1.5 rounded-lg text-xs font-[family-name:var(--font-jetbrains)] transition-all duration-300 ${
                        selectedGroup === category
                          ? "bg-accent text-white shadow-[0_4px_12px_rgba(74,158,255,0.25)]"
                          : "bg-bg-3/60 text-text-2 hover:bg-bg-3 hover:text-text"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Staggered Grid Content */}
                <div className="min-h-[140px] flex flex-wrap gap-2.5 items-start content-start">
                  <AnimatePresence mode="popLayout">
                    {selectedGroup === "All" ? (
                      // Show all grouped nicely
                      techStack.map((group) => (
                        <motion.div
                          key={group.group}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="bg-bg-3/40 border border-border/20 rounded-xl p-4 flex flex-col gap-2 flex-grow min-w-[200px] sm:max-w-[48%]"
                        >
                          <div className="font-[family-name:var(--font-jetbrains)] text-[10px] text-accent-2 tracking-widest uppercase font-semibold">
                            {lang === "pt" ? group.group : group.groupEn}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className="bg-bg-2 border border-border/10 text-text-2 text-[10px] font-[family-name:var(--font-jetbrains)] px-2 py-0.5 rounded tracking-wide hover:text-accent transition-colors"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      // Show individual filtered list
                      filteredItems.map((item, i) => (
                        <motion.span
                          key={item}
                          layout
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.25, delay: i * 0.03 }}
                          className="bg-accent/10 border border-accent/20 text-text text-xs font-[family-name:var(--font-jetbrains)] px-4 py-2 rounded-lg tracking-wider hover:border-accent-2 transition-all duration-300"
                        >
                          {item}
                        </motion.span>
                      ))
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
