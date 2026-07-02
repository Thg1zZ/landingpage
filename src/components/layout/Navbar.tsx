"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useLanguageTheme } from "@/context/LanguageThemeContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { lang, theme, toggleLang, toggleTheme, t, mounted } = useLanguageTheme();

  const navLinks = [
    { href: "#home", label: lang === "pt" ? "Início" : "Home" },
    { href: "#about", label: t("nav_about") },
    { href: "#education", label: t("nav_edu") },
    { href: "#experience", label: t("nav_exp") },
    { href: "#projects", label: t("nav_proj") },
    { href: "#contact", label: t("nav_contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll progress
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      // Active section detection
      let current = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        const s = section as HTMLElement;
        if (window.scrollY >= s.offsetTop - 180) current = s.id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger scroll check on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex flex-col items-center w-full">
      {/* Floating Pill Container */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto mt-4 md:mt-6 px-5 md:px-8 py-3 rounded-full border bg-[rgba(10,15,25,0.72)] backdrop-blur-xl flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 w-[92%] md:w-fit gap-5 md:gap-7 relative overflow-hidden ${
          scrolled ? "border-accent/20 bg-[rgba(6,9,16,0.85)] scale-[0.98]" : "border-border/30"
        }`}
      >
        {/* Logo / Brand */}
        <Link
          href="#home"
          data-cursor-text="home"
          className="font-[family-name:var(--font-jetbrains)] text-sm text-[#4a9eff] tracking-wider cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
        >
          <span className="text-[#9aabcc]">{"//"}</span> TG<span className="text-[#9aabcc]">.dev</span>
        </Link>

        {/* Vertical divider */}
        <div className="w-px h-5 bg-border/20 hidden md:block" />

        {/* Desktop Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={`relative z-10 font-[family-name:var(--font-jetbrains)] text-xs font-semibold tracking-widest uppercase py-2 px-3.5 rounded-full transition-colors duration-300 block ${
                      isActive ? "text-white" : "text-[#9aabcc] hover:text-[#e8edf5]"
                    } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9eff]`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-accent/20 border-b border-accent rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Vertical divider */}
        <div className="w-px h-5 bg-border/20 hidden md:block" />

        {/* Desktop Lang & Theme Controls */}
        {mounted && (
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLang}
              data-cursor-text="lang"
              className="cursor-pointer text-xs font-[family-name:var(--font-jetbrains)] font-bold text-[#9aabcc] hover:text-accent w-8 h-8 rounded-full hover:bg-bg-3/50 flex items-center justify-center transition-colors"
              aria-label="Mudar idioma"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <button
              onClick={toggleTheme}
              data-cursor-text="theme"
              className="cursor-pointer text-[#9aabcc] hover:text-accent w-8 h-8 rounded-full hover:bg-bg-3/50 flex items-center justify-center transition-colors"
              aria-label="Mudar tema"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        )}

        {/* Vertical divider */}
        <div className="w-px h-5 bg-border/20 hidden md:block" />

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            data-cursor-text="chat"
            className="cursor-pointer bg-accent hover:bg-accent/90 text-white font-semibold text-xs font-[family-name:var(--font-jetbrains)] tracking-wider uppercase px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-[0_4px_16px_rgba(74,158,255,0.35)]"
          >
            <MessageSquare size={13} />
            <span>{lang === "pt" ? "Vamos conversar" : "Let's Talk"}</span>
          </a>
        </div>

        {/* Mobile menu toggle & controls */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <>
              <button
                onClick={toggleLang}
                className="cursor-pointer text-xs font-[family-name:var(--font-jetbrains)] font-bold text-[#9aabcc] hover:text-accent w-8 h-8 rounded-full hover:bg-bg-3/50 flex items-center justify-center transition-colors"
                aria-label="Mudar idioma"
              >
                {lang === "pt" ? "EN" : "PT"}
              </button>
              <button
                onClick={toggleTheme}
                className="cursor-pointer text-[#9aabcc] hover:text-accent w-8 h-8 rounded-full hover:bg-bg-3/50 flex items-center justify-center transition-colors"
                aria-label="Mudar tema"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </>
          )}

          <button
            className="cursor-pointer text-[#9aabcc] hover:text-[#4a9eff] transition-colors p-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9eff]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Scroll progress bar inside the pill */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/5 overflow-hidden pointer-events-none rounded-b-full">
          <div
            className="h-full bg-gradient-to-r from-[#4a9eff] to-[#00d4aa] transition-all duration-75 shadow-[0_0_8px_rgba(74,158,255,0.4)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden pointer-events-auto w-[92%] mx-auto mt-2 bg-[rgba(10,15,25,0.92)] backdrop-blur-2xl border border-border/40 px-6 py-6 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.5)] flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-[family-name:var(--font-jetbrains)] text-xs font-semibold tracking-widest uppercase block py-2 px-3 rounded-lg ${
                        isActive ? "text-accent bg-accent/10 border-l-2 border-accent" : "text-[#9aabcc] hover:text-white"
                      } transition-all`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="w-full h-px bg-border/20" />
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-xs font-[family-name:var(--font-jetbrains)] tracking-wider uppercase py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare size={13} />
              <span>{lang === "pt" ? "Vamos conversar" : "Let's Talk"}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
