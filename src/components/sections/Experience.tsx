"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FadeIn } from "@/components/ui/Animations";
import { experience } from "@/lib/data";
import { Briefcase, ExternalLink } from "lucide-react";
import { useLanguageTheme } from "@/context/LanguageThemeContext";

export function Experience() {
  const { lang, t } = useLanguageTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position to animate vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="py-24 md:py-32 bg-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-2/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="flex items-center gap-4 mb-16">
          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-accent tracking-[0.2em] uppercase">
            // 03
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-jetbrains)] text-text">
            {t("exp_title")}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </FadeIn>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border/20" />
          
          {/* Animated Scroll-progress Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-2 via-accent to-transparent"
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-6 md:gap-8 group">
                  {/* Dot */}
                  <div className="flex-shrink-0 relative mt-5 ml-1 md:ml-3">
                    <div className="w-3 h-3 rounded-full bg-accent-2 shadow-[0_0_8px_rgba(0,212,170,0.4)] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 glass-premium rounded-2xl p-6 hover:border-accent-2/30 hover:bg-accent-2/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] cursor-default">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase size={15} className="text-accent-2 flex-shrink-0" />
                        <h3 className="font-[family-name:var(--font-jetbrains)] text-sm font-semibold text-text leading-tight">
                          {exp.role[lang]}
                        </h3>
                      </div>
                      <span className="text-text-3 text-xs font-[family-name:var(--font-jetbrains)]">
                        {exp.date[lang]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-accent-2 text-xs font-[family-name:var(--font-jetbrains)] font-medium">
                        {exp.company[lang]}
                      </span>
                    </div>

                    <p className="text-text-2 text-xs leading-relaxed font-light mb-4">
                      {exp.description[lang]}
                    </p>

                    {exp.link && (
                      <div className="pt-4 border-t border-border/20 flex justify-end">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-text="visit"
                          className="cursor-pointer text-text-3 hover:text-accent flex items-center gap-1.5 text-xs transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
                          aria-label={`Abrir link de ${exp.role[lang]}`}
                        >
                          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-wider">
                            {lang === "pt" ? "Ver Site" : "View Website"}
                          </span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
