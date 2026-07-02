"use client";

import { useLanguageTheme } from "@/context/LanguageThemeContext";

const skillsList = [
  "C", "C++", "Java", "Python", "Bash",
  "HTML5", "CSS3", "JavaScript", "TypeScript",
  "Tailwind CSS", "Next.js", "React",
  "Spring Boot", "REST APIs", "Node.js",
  "SQL", "Oracle DB", "PostgreSQL",
  "Git", "Docker",
  "Google Gemini", "LLM APIs", "AI Agents"
];

export function TechMarquee() {
  const { lang } = useLanguageTheme();

  return (
    <div className="relative pt-6 pb-2 border-t border-border/15 overflow-hidden flex items-center group w-full select-none mt-12 md:mt-20">
      {/* Static Label on the Left */}
      <div className="pr-5 bg-bg z-20 flex-shrink-0 flex items-center gap-2 border-r border-border/15 shadow-[12px_0_24px_var(--color-bg)]">
        <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-text-3 tracking-[0.25em] uppercase font-bold">
          STACK
        </span>
      </div>

      {/* Scrolling Container */}
      <div className="flex items-center overflow-hidden w-full relative h-full">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap min-w-full items-center">
          {/* First loop of items */}
          <div className="animate-marquee flex items-center gap-12 pr-12 shrink-0">
            {skillsList.map((skill, idx) => (
              <div key={`marquee-1-${idx}`} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_var(--color-accent-2)]" />
                <span className="font-[family-name:var(--font-jetbrains)] text-xs text-[#9aabcc] tracking-widest uppercase font-semibold">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          {/* Second loop of items (for infinite loop effect) */}
          <div className="animate-marquee flex items-center gap-12 pr-12 shrink-0" aria-hidden="true">
            {skillsList.map((skill, idx) => (
              <div key={`marquee-2-${idx}`} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_var(--color-accent-2)]" />
                <span className="font-[family-name:var(--font-jetbrains)] text-xs text-[#9aabcc] tracking-widest uppercase font-semibold">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static Link on the Right */}
      <a
        href="#about"
        className="pl-5 bg-bg z-20 flex-shrink-0 flex items-center gap-2 border-l border-border/15 shadow-[-12px_0_24px_var(--color-bg)] font-[family-name:var(--font-jetbrains)] text-[10px] text-text-3 hover:text-accent transition-colors tracking-[0.25em] uppercase font-bold group-hover:text-accent"
      >
        {lang === "pt" ? "SOBRE" : "ABOUT"} →
      </a>
    </div>
  );
}
