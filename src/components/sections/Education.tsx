"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FadeIn } from "@/components/ui/Animations";
import { education } from "@/lib/data";
import { GraduationCap, CheckCircle, Clock } from "lucide-react";
import { useLanguageTheme } from "@/context/LanguageThemeContext";

const statusConfig = {
  current: { icon: <Clock size={14} />, color: "text-[#ff6b35]", dot: "bg-[#ff6b35]", glow: "shadow-[0_0_8px_rgba(255,107,53,0.5)]" },
  progress: { icon: <Clock size={14} />, color: "text-[#00d4aa]", dot: "bg-[#00d4aa]", glow: "shadow-[0_0_8px_rgba(0,212,170,0.5)]" },
  done: { icon: <CheckCircle size={14} />, color: "text-text-2", dot: "bg-text-3", glow: "" },
};

const statusLabels = {
  current: { pt: "Cursando", en: "Enrolled" },
  progress: { pt: "Em Andamento", en: "In Progress" },
  done: { pt: "Concluído", en: "Completed" },
};

export function Education() {
  const { lang, t } = useLanguageTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to animate vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="education" className="py-24 md:py-32 bg-bg-2 relative">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="flex items-center gap-4 mb-16">
          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-accent tracking-[0.2em] uppercase">
            // 02
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-jetbrains)] text-text">
            {t("edu_title")}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </FadeIn>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border/20" />

          {/* Animated Scroll-progress Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent"
          />

          <div className="space-y-8">
            {education.map((item, i) => {
              const s = statusConfig[item.status as keyof typeof statusConfig] || statusConfig.done;
              const statusLabel = statusLabels[item.status as keyof typeof statusLabels]?.[lang] || "";
              return (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex gap-6 md:gap-8 group">
                    {/* Dot */}
                    <div className="flex-shrink-0 relative mt-5 ml-1 md:ml-3">
                      <div className={`w-3 h-3 rounded-full ${s.dot} ${s.glow} flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} />
                    </div>

                    {/* Content card */}
                    <div className="flex-1 glass-premium rounded-2xl p-6 hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] cursor-default">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap size={15} className="text-accent flex-shrink-0" />
                          <h3 className="font-[family-name:var(--font-jetbrains)] text-sm font-semibold text-text leading-tight">
                            {item.degree[lang]}
                          </h3>
                        </div>
                        <div className={`flex items-center gap-1.5 text-[10px] font-[family-name:var(--font-jetbrains)] tracking-wider uppercase ${s.color}`}>
                          {s.icon}
                          {statusLabel}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-accent text-xs font-[family-name:var(--font-jetbrains)] font-medium">
                          {item.institution[lang]}
                        </span>
                        <span className="text-text-3 text-xs font-[family-name:var(--font-jetbrains)]">
                          {item.date[lang]}
                        </span>
                      </div>

                      <p className="text-text-2 text-xs leading-relaxed font-light">
                        {item.description[lang]}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
