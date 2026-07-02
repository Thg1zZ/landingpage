"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/Animations";
import { projects } from "@/lib/data";
import { ExternalLink, Zap } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { useLanguageTheme } from "@/context/LanguageThemeContext";

type FilterType = "all" | "java" | "web" | "python";

export function Projects() {
  const { lang, t } = useLanguageTheme();
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "java")
      return p.tags.some(
        (tag) => tag.toLowerCase().includes("java") || tag.toLowerCase().includes("spring")
      );
    if (filter === "web")
      return p.tags.some(
        (tag) =>
          tag.toLowerCase().includes("js") ||
          tag.toLowerCase().includes("javascript") ||
          tag.toLowerCase().includes("extension") ||
          tag.toLowerCase().includes("next.js")
      );
    if (filter === "python") return p.tags.some((tag) => tag.toLowerCase().includes("python"));
    return true;
  });

  const filterTabs = [
    { type: "all" as FilterType, pt: "Todos", en: "All" },
    { type: "java" as FilterType, pt: "Java & Spring", en: "Java & Spring" },
    { type: "web" as FilterType, pt: "Web / JS", en: "Web & Javascript" },
    { type: "python" as FilterType, pt: "Python & Outros", en: "Python & Others" },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-2 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-3/15 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="flex items-center gap-4 mb-10">
          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-accent tracking-[0.2em] uppercase">
            {"// 04"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-jetbrains)] text-text">
            {t("proj_title")}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </FadeIn>

        {/* Filter Navigation */}
        <FadeIn delay={0.1} className="flex justify-center mb-12">
          <div className="flex flex-wrap bg-bg-3/40 border border-border/20 p-1.5 rounded-xl gap-1">
            {filterTabs.map((tab) => {
              const selected = filter === tab.type;
              return (
                <button
                  key={tab.type}
                  onClick={() => setFilter(tab.type)}
                  className={`cursor-pointer relative px-4 py-2 text-xs font-[family-name:var(--font-jetbrains)] uppercase tracking-wider rounded-lg transition-colors duration-300 font-semibold ${
                    selected ? "text-white" : "text-text-2 hover:text-text"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-accent rounded-lg -z-10 shadow-[0_4px_16px_rgba(74,158,255,0.25)]"
                      transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    />
                  )}
                  {lang === "pt" ? tab.pt : tab.en}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const isLive = project.link && !project.link.includes("github.com");
              const cursorText = project.link ? (isLive ? "live" : "code") : "";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  key={project.num}
                  className="flex"
                >
                  <div
                    data-cursor-text={cursorText}
                    className="glass-premium rounded-2xl p-6 h-full flex flex-col hover:border-accent/40 hover:bg-accent/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] group relative overflow-hidden w-full"
                  >
                    {/* Glow effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-2/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Project number */}
                    <div className="absolute top-0 right-0 font-[family-name:var(--font-jetbrains)] text-[80px] font-bold text-border/20 leading-none pointer-events-none select-none overflow-hidden max-h-[70px] group-hover:text-accent/10 transition-colors">
                      {project.num}
                    </div>

                    {/* Status badge */}
                    {project.status && (
                      <div className="inline-flex items-center gap-1.5 bg-accent-3/10 border border-accent-3/20 rounded-full px-3 py-1 mb-4 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-3 animate-pulse" />
                        <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-accent-3 tracking-wider uppercase">
                          {project.status[lang]}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-jetbrains)] text-sm font-semibold text-text mb-3 leading-snug group-hover:text-accent transition-colors duration-200 mt-2">
                      {project.title[lang]}
                    </h3>

                    {/* Description */}
                    <p className="text-text-2 text-xs leading-relaxed font-light flex-1 mb-5">
                      {project.description[lang]}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-bg-3/60 border border-border/20 text-text-3 text-[10px] font-[family-name:var(--font-jetbrains)] px-2 py-0.5 rounded tracking-wide group-hover:bg-accent/5 group-hover:text-text transition-colors duration-250"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/20">
                      <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-text-3 uppercase tracking-wider">
                        {project.link
                          ? lang === "pt"
                            ? "Acessar Projeto"
                            : "Access Project"
                          : lang === "pt"
                          ? "Em desenvolvimento"
                          : "In development"}
                      </span>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          aria-label={`${lang === "pt" ? "Acessar" : "Access"} ${project.title[lang]}`}
                        >
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-bg-3/60 border border-border/20 flex items-center justify-center">
                          <Zap size={13} className="text-text-3" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <FadeIn delay={0.3} className="mt-14 text-center">
          <a
            href="https://github.com/Thg1zZ"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="visit"
            className="cursor-pointer inline-flex items-center gap-3 glass px-7 py-3.5 rounded-xl text-sm text-text-2 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GithubIcon size={18} />
            <span className="font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase">
              {lang === "pt" ? "Ver todos os repositórios no GitHub" : "View all repositories on GitHub"}
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
