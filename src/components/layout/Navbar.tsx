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

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      let current = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        const s = section as HTMLElement;
        if (window.scrollY >= s.offsetTop - 180) current = s.id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex flex-col items-center w-full">

      {/* ── DESKTOP NAV PILL ─────────────────────────────────────── */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto hidden md:flex mt-6 px-8 py-3 rounded-full border bg-[rgba(10,15,25,0.72)] backdrop-blur-xl items-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 gap-7 relative overflow-hidden ${
          scrolled ? "border-accent/20 bg-[rgba(6,9,16,0.85)] scale-[0.98]" : "border-border/30"
        }`}
      >
        {/* Logo */}
        <Link
          href="#home"
          data-cursor-text="home"
          className="font-[family-name:var(--font-jetbrains)] text-sm text-[#4a9eff] tracking-wider cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
        >
          <span className="text-[#9aabcc]">{"//"}</span> TG<span className="text-[#9aabcc]">.dev</span>
        </Link>

        <div className="w-px h-5 bg-border/20" />

        {/* Desktop Links */}
        <nav>
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

        <div className="w-px h-5 bg-border/20" />

        {/* Desktop Controls */}
        {mounted && (
          <div className="flex items-center gap-2">
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

        <div className="w-px h-5 bg-border/20" />

        {/* Desktop CTA */}
        <a
          href="#contact"
          data-cursor-text="chat"
          className="cursor-pointer bg-accent hover:bg-accent/90 text-white font-semibold text-xs font-[family-name:var(--font-jetbrains)] tracking-wider uppercase px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-[0_4px_16px_rgba(74,158,255,0.35)]"
        >
          <MessageSquare size={13} />
          <span>{lang === "pt" ? "Vamos conversar" : "Let's Talk"}</span>
        </a>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/5 overflow-hidden pointer-events-none rounded-b-full">
          <div
            className="h-full bg-gradient-to-r from-[#4a9eff] to-[#00d4aa] transition-all duration-75 shadow-[0_0_8px_rgba(74,158,255,0.4)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.div>

      {/* ── MOBILE NAV BAR ───────────────────────────────────────── */}
      <div
        className={`pointer-events-auto flex md:hidden mt-4 mx-4 px-4 py-3 rounded-2xl border bg-[rgba(10,15,25,0.85)] backdrop-blur-xl items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 relative overflow-hidden ${
          scrolled ? "border-accent/20" : "border-border/30"
        }`}
        style={{ width: "calc(100% - 2rem)" }}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setMobileOpen(false)}
          className="font-[family-name:var(--font-jetbrains)] text-sm text-[#4a9eff] tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          <span className="text-[#9aabcc]">{"//"}</span> TG<span className="text-[#9aabcc]">.dev</span>
        </Link>

        {/* Right side: controls + hamburger */}
        <div className="flex items-center gap-1">
          {mounted && (
            <>
              <button
                onClick={toggleLang}
                className="font-[family-name:var(--font-jetbrains)] text-[11px] font-bold text-[#9aabcc] hover:text-accent w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors"
                aria-label="Mudar idioma"
              >
                {lang === "pt" ? "EN" : "PT"}
              </button>
              <button
                onClick={toggleTheme}
                className="text-[#9aabcc] hover:text-accent w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors"
                aria-label="Mudar tema"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </>
          )}

          <button
            className="text-[#9aabcc] hover:text-[#4a9eff] transition-colors w-9 h-9 rounded-full hover:bg-white/5 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9eff]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Mobile scroll progress */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/5 overflow-hidden pointer-events-none rounded-b-2xl">
          <div
            className="h-full bg-gradient-to-r from-[#4a9eff] to-[#00d4aa] transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* ── MOBILE MENU DROPDOWN ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden pointer-events-auto w-[calc(100%-2rem)] mx-4 mt-2 bg-[rgba(8,12,22,0.96)] backdrop-blur-2xl border border-border/40 px-5 py-5 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] flex flex-col gap-5"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-[family-name:var(--font-jetbrains)] text-xs font-semibold tracking-widest uppercase flex items-center py-2.5 px-4 rounded-xl transition-all ${
                        isActive
                          ? "text-accent bg-accent/10 border-l-2 border-accent"
                          : "text-[#9aabcc] hover:text-white hover:bg-white/5"
                      }`}
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
