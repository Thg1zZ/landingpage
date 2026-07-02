"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, FileDown, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/lib/data";
import { useLanguageTheme } from "@/context/LanguageThemeContext";
import { CountUp } from "../ui/Animations";
import { TechMarquee } from "./TechMarquee";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const { lang, t } = useLanguageTheme();

  // Mouse tracking for background Aurora glow
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
  const handleSectionMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  // Magnetic button 1 (Projects)
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const handleBtn1MouseMove = (e: React.MouseEvent) => {
    if (!btn1Ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btn1Ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    setBtn1Pos({ x: (clientX - centerX) * 0.3, y: (clientY - centerY) * 0.3 });
  };
  const handleBtn1MouseLeave = () => setBtn1Pos({ x: 0, y: 0 });

  // Magnetic button 2 (Contact)
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const handleBtn2MouseMove = (e: React.MouseEvent) => {
    if (!btn2Ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btn2Ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    setBtn2Pos({ x: (clientX - centerX) * 0.3, y: (clientY - centerY) * 0.3 });
  };
  const handleBtn2MouseLeave = () => setBtn2Pos({ x: 0, y: 0 });

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleSectionMouseMove}
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[60%_center]"
        >
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
        </video>

        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[rgba(10,12,16,0.65)] to-[rgba(10,12,16,0.2)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,12,16,0.85)] via-transparent to-transparent" />

        {/* Luminous cursor glow tracker */}
        <div
          className="absolute inset-0 z-10 opacity-30 pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(circle 350px at ${mousePos.x} ${mousePos.y}, rgba(74, 158, 255, 0.2) 0%, rgba(0, 212, 170, 0.05) 60%, transparent 100%)`,
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>



      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse shadow-[0_0_8px_rgba(0,212,170,0.6)]" />
              <span className="font-[family-name:var(--font-jetbrains)] text-xs text-[#00d4aa] tracking-widest uppercase">
                {t("hero_tag")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#e8edf5] leading-none tracking-tight mb-3 font-[family-name:var(--font-jetbrains)]">
              <span className="inline-block mr-3">
                {"Thiago".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.3 + index * 0.04,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="gradient-text inline-block">
                {"Gomes".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.65 + index * 0.04,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="font-[family-name:var(--font-jetbrains)] text-lg md:text-xl text-[#9aabcc] mb-8 tracking-wide"
            >
              {personalInfo.role[lang]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                ref={btn1Ref}
                href="#projects"
                onMouseMove={handleBtn1MouseMove}
                onMouseLeave={handleBtn1MouseLeave}
                animate={btn1Pos}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                data-cursor-text="view"
                className="cursor-pointer inline-flex items-center gap-2 bg-[#4a9eff] hover:bg-[#3a8ee8] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,158,255,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9eff]"
              >
                {t("hero_btn1")} <ArrowRight size={16} />
              </motion.a>
              <motion.a
                ref={btn2Ref}
                href="#contact"
                onMouseMove={handleBtn2MouseMove}
                onMouseLeave={handleBtn2MouseLeave}
                animate={btn2Pos}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                data-cursor-text="talk"
                className="cursor-pointer inline-flex items-center gap-2 glass text-[#e8edf5] hover:border-[#4a9eff] hover:text-[#4a9eff] font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9eff]"
              >
                {t("hero_btn2")}
              </motion.a>
            </motion.div>
          </div>

          {/* Right — stats + desc */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-6"
          >
            <p className="text-[#9aabcc] text-sm md:text-base leading-relaxed font-light max-w-md">
              {t("hero_desc")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat) => {
                const numValue = parseInt(stat.value);
                const suffix = stat.value.includes("+") ? "+" : "";
                return (
                  <div
                    key={stat.label[lang]}
                    className="glass-premium rounded-xl p-3 text-center hover:border-[rgba(74,158,255,0.3)] transition-all duration-300 hover:bg-[rgba(74,158,255,0.05)]"
                  >
                    <div className="font-[family-name:var(--font-jetbrains)] text-2xl font-bold text-[#4a9eff] leading-none">
                      <CountUp target={numValue} suffix={suffix} />
                    </div>
                    <div className="text-[10px] text-[#5a6e8c] mt-1 tracking-wide">{stat.label[lang]}</div>
                  </div>
                );
              })}
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="visit"
                className="cursor-pointer flex items-center gap-2 text-xs font-[family-name:var(--font-jetbrains)] text-[#9aabcc] hover:text-[#4a9eff] transition-colors duration-200 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9eff] rounded"
                aria-label="GitHub"
              >
                <GithubIcon size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="visit"
                className="cursor-pointer flex items-center gap-2 text-xs font-[family-name:var(--font-jetbrains)] text-[#9aabcc] hover:text-[#4a9eff] transition-colors duration-200 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9eff] rounded"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="open"
                className="cursor-pointer flex items-center gap-2 text-xs font-[family-name:var(--font-jetbrains)] text-[#9aabcc] hover:text-[#00d4aa] transition-colors duration-200 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9eff] rounded"
                aria-label="Download CV"
              >
                <FileDown size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">{t("cv_link")}</span>
              </a>
            </div>
          </motion.div>
        </div>
        <TechMarquee />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#4a9eff] opacity-60" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[#4a9eff] opacity-70" />
        </motion.div>
        <span className="font-[family-name:var(--font-jetbrains)] text-[9px] text-[#5a6e8c] tracking-[0.2em] uppercase">
          {t("scroll_hint")}
        </span>
      </motion.div>
    </section>
  );
}
