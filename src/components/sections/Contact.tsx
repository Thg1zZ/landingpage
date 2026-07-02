"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/Animations";
import { personalInfo } from "@/lib/data";
import { Send, FileDown, AlertCircle, Loader2, Mail, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import emailjs from "@emailjs/browser";
import { useLanguageTheme } from "@/context/LanguageThemeContext";

type Status = "idle" | "loading" | "success" | "error";

// Custom SVG WhatsApp icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" width="16" height="16">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.022 14.07 1 11.993 1 6.552 1 2.126 5.375 2.122 10.803c-.001 1.765.467 3.49 1.355 5.017l-.992 3.62 3.731-.977zm11.387-5.464c-.307-.153-1.82-.9-2.1-.998-.28-.102-.483-.153-.686.153-.203.305-.788.998-.966 1.2-.178.203-.356.229-.663.076-.307-.153-1.297-.477-2.472-1.524-.913-.815-1.53-1.82-1.708-2.126-.178-.306-.019-.471.134-.624.137-.138.307-.356.462-.534.156-.178.207-.306.311-.509.105-.203.052-.382-.026-.534-.078-.153-.686-1.654-.94-2.262-.247-.597-.5-.515-.686-.525-.178-.01-.382-.01-.586-.01-.203 0-.534.076-.814.382-.28.306-1.069 1.043-1.069 2.545s1.094 2.951 1.247 3.155c.153.204 2.152 3.285 5.213 4.607.728.314 1.297.502 1.741.643.731.233 1.396.2 1.922.122.586-.086 1.82-.744 2.074-1.46.254-.718.254-1.332.178-1.46-.077-.128-.28-.204-.587-.356z"/>
  </svg>
);

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);
  const [formExpanded, setFormExpanded] = useState(false);
  const { lang, t } = useLanguageTheme();

  // Centralized WhatsApp link & display loaded from data.ts
  const whatsappUrl = personalInfo.whatsapp;
  const whatsappDisplay = personalInfo.whatsappDisplay;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        "service_5vxay59",  // Service ID
        "template_wcawyrb", // Template ID
        formRef.current!,
        "49WERftjvNxygg3C8" // Public Key
      );
      setStatus("success");
      formRef.current?.reset();
      setConsent(false);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const svgDrawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.15, type: "spring" as const, duration: 1.2, bounce: 0 },
        opacity: { delay: 0.1, duration: 0.1 }
      }
    }
  };

  const socialCards = [
    {
      icon: <WhatsAppIcon className="w-4 h-4" />,
      label: "WhatsApp",
      value: whatsappDisplay,
      href: whatsappUrl,
      cText: "whatsapp",
      color: "text-accent-2 bg-accent-2/10 hover:bg-accent-2/20"
    },
    {
      icon: <Mail size={16} />,
      label: "E-mail",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      cText: "email",
      color: "text-accent bg-accent/10 hover:bg-accent/20"
    },
    {
      icon: <LinkedinIcon size={16} />,
      label: "LinkedIn",
      value: "linkedin.com/in/thiago-gomes-fc",
      href: personalInfo.linkedin,
      cText: "linkedin",
      color: "text-accent bg-accent/10 hover:bg-accent/20"
    },
    {
      icon: <GithubIcon size={16} />,
      label: "GitHub",
      value: "github.com/Thg1zZ",
      href: personalInfo.github,
      cText: "github",
      color: "text-accent bg-accent/10 hover:bg-accent/20"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="flex items-center gap-4 mb-16">
          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-accent tracking-[0.2em] uppercase">
            {"// 05"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-jetbrains)] text-text">
            {t("contact_title")}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </FadeIn>

        {/* Large Bento Box Layout */}
        <FadeIn delay={0.1}>
          <div className="glass-premium rounded-3xl p-8 md:p-12 lg:p-14 relative overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - Text and Main CTA */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Status Indicator Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-2/10 border border-accent-2/20 rounded-full w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse shadow-[0_0_8px_var(--color-accent-2)]" />
                    <span className="font-[family-name:var(--font-jetbrains)] text-[9px] text-accent-2 tracking-widest font-bold uppercase">
                      {lang === "pt" ? "DISPONÍVEL PARA JOBS" : "AVAILABLE FOR JOBS"}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-3xl sm:text-4xl font-bold text-text leading-tight font-[family-name:var(--font-ibm-sans)] tracking-tight">
                    {lang === "pt" ? "Tem um projeto " : "Have a project "}
                    <span className="font-serif italic text-accent-2">
                      {lang === "pt" ? "em mente?" : "in mind?"}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-text-2 text-sm leading-relaxed font-light">
                    {t("contact_desc")}
                  </p>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="whatsapp"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-accent-2 hover:bg-accent-2/90 text-white font-semibold text-xs font-[family-name:var(--font-jetbrains)] tracking-wider uppercase px-6 py-3.5 rounded-full w-fit transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(0,212,170,0.25)] hover:shadow-[0_8px_24px_rgba(0,212,170,0.4)]"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{lang === "pt" ? "WhatsApp Direto" : "Direct WhatsApp"}</span>
                </a>

                {/* CV Download Quick Link */}
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="open"
                  className="cursor-pointer inline-flex items-center gap-2.5 text-xs text-text-3 hover:text-accent transition-colors duration-250 w-fit pt-2 font-[family-name:var(--font-jetbrains)]"
                >
                  <FileDown size={14} />
                  <span className="uppercase tracking-widest">{t("cv_link")}</span>
                </a>
              </div>

              {/* Right Column - Stacked Social Cards */}
              <div className="lg:col-span-7 space-y-3">
                {socialCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={card.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    data-cursor-text={card.cText}
                    className="cursor-pointer bg-bg-3/20 hover:bg-accent/[0.02] border border-border/20 hover:border-accent/40 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
                  >
                    <div className="flex items-center gap-4">
                      {/* Left Rounded Icon Box */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${card.color}`}>
                        {card.icon}
                      </div>
                      
                      {/* Mid Labels */}
                      <div>
                        <div className="font-[family-name:var(--font-jetbrains)] text-[9px] text-text-3 tracking-widest uppercase mb-0.5">
                          {card.label}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-text-2 group-hover:text-text transition-colors">
                          {card.value}
                        </div>
                      </div>
                    </div>

                    {/* Right Up-Right Arrow Icon */}
                    <div className="text-text-3 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 pr-2">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Form Accordion Selector */}
            <div className="mt-12 border-t border-border/20 pt-6 flex flex-col items-center">
              <button
                onClick={() => setFormExpanded(!formExpanded)}
                className="cursor-pointer inline-flex items-center gap-2 text-xs font-[family-name:var(--font-jetbrains)] text-text-3 hover:text-text transition-colors uppercase tracking-widest py-2 px-4 rounded-full border border-border/30 hover:border-accent/30 bg-bg-3/25"
              >
                {lang === "pt" ? "Ou envie uma mensagem direta" : "Or send a direct message"}
                {formExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Expandable Form Box */}
              <motion.div
                animate={{ height: formExpanded ? "auto" : 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden w-full max-w-2xl"
              >
                <div className="pt-8 pb-4">
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      // Success Animation Card
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center space-y-6 py-8"
                      >
                        <div className="flex items-center justify-center">
                          <motion.svg
                            width="80"
                            height="80"
                            viewBox="0 0 100 100"
                            initial="hidden"
                            animate="visible"
                          >
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="var(--color-accent-2)"
                              strokeWidth="5"
                              fill="transparent"
                              strokeLinecap="round"
                              variants={svgDrawVariants}
                            />
                            <motion.path
                              d="M32 52 L45 65 L68 38"
                              stroke="var(--color-accent-2)"
                              strokeWidth="5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="transparent"
                              variants={svgDrawVariants}
                            />
                          </motion.svg>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-[family-name:var(--font-jetbrains)] text-md font-semibold text-text">
                            {lang === "pt" ? "Mensagem Enviada!" : "Message Sent!"}
                          </h4>
                          <p className="text-text-2 text-xs leading-relaxed max-w-sm mx-auto font-light">
                            {lang === "pt"
                              ? "Obrigado pelo contato. Recebi sua mensagem com sucesso e responderei em breve."
                              : "Thank you for getting in touch. I have successfully received your message and will reply soon."}
                          </p>
                        </div>
                        <button
                          onClick={() => setStatus("idle")}
                          className="cursor-pointer inline-flex items-center justify-center px-5 py-2 bg-bg-3 border border-border/40 hover:border-accent text-text-2 hover:text-text rounded-lg text-[10px] font-[family-name:var(--font-jetbrains)] uppercase tracking-wider transition-all duration-300"
                        >
                          {lang === "pt" ? "Enviar Nova Mensagem" : "Send Another Message"}
                        </button>
                      </motion.div>
                    ) : (
                      // Contact Form View
                      <motion.form
                        key="form"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4 w-full"
                        noValidate
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="contact-name"
                              className="block font-[family-name:var(--font-jetbrains)] text-[10px] text-text-3 uppercase tracking-widest mb-1.5"
                            >
                              {t("form_name")}
                            </label>
                            <input
                              id="contact-name"
                              name="user_name"
                              type="text"
                              required
                              data-cursor-text="write"
                              placeholder={t("form_name_ph")}
                              className="w-full bg-surface-2/20 border border-border/40 rounded-lg px-4 py-2.5 text-xs text-text placeholder:text-text-3/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 focus:bg-accent/[0.02] transition-all duration-200"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="contact-email"
                              className="block font-[family-name:var(--font-jetbrains)] text-[10px] text-text-3 uppercase tracking-widest mb-1.5"
                            >
                              E-mail
                            </label>
                            <input
                              id="contact-email"
                              name="user_email"
                              type="email"
                              required
                              data-cursor-text="write"
                              placeholder={t("form_email_ph")}
                              className="w-full bg-surface-2/20 border border-border/40 rounded-lg px-4 py-2.5 text-xs text-text placeholder:text-text-3/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 focus:bg-accent/[0.02] transition-all duration-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="contact-subject"
                            className="block font-[family-name:var(--font-jetbrains)] text-[10px] text-text-3 uppercase tracking-widest mb-1.5"
                          >
                            {t("form_subject")}
                          </label>
                          <input
                            id="contact-subject"
                            name="subject"
                            type="text"
                            required
                            data-cursor-text="write"
                            placeholder={t("form_subject_ph")}
                            className="w-full bg-surface-2/20 border border-border/40 rounded-lg px-4 py-2.5 text-xs text-text placeholder:text-text-3/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 focus:bg-accent/[0.02] transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-message"
                            className="block font-[family-name:var(--font-jetbrains)] text-[10px] text-text-3 uppercase tracking-widest mb-1.5"
                          >
                            {t("form_msg")}
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            required
                            rows={4}
                            data-cursor-text="write"
                            placeholder={t("form_msg_ph")}
                            className="w-full bg-surface-2/20 border border-border/40 rounded-lg px-4 py-2.5 text-xs text-text placeholder:text-text-3/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 focus:bg-accent/[0.02] transition-all duration-200 resize-none"
                          />
                        </div>

                        {/* LGPD Consent */}
                        <div className="flex items-start gap-3 p-3 bg-surface-2/10 rounded-lg border border-border/20">
                          <input
                            id="lgpd-contact-consent"
                            name="lgpd_consent"
                            type="checkbox"
                            required
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 w-3.5 h-3.5 rounded border-border/40 bg-surface text-accent cursor-pointer accent-accent focus-visible:ring-2 focus-visible:ring-accent"
                          />
                          <label
                            htmlFor="lgpd-contact-consent"
                            className="text-text-2 text-[11px] leading-relaxed cursor-pointer"
                          >
                            {t("form_lgpd")}
                            <button
                              type="button"
                              onClick={() => window.openPrivacyModal?.()}
                              className="text-accent hover:text-accent-2 underline transition-colors cursor-pointer text-[11px] ml-1"
                            >
                              {t("form_lgpd_link")}
                            </button>
                            .
                          </label>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={status === "loading" || !consent}
                          id="contact-submit-btn"
                          data-cursor-text={consent ? "send" : ""}
                          className="cursor-pointer w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:bg-accent/30 disabled:cursor-not-allowed text-white font-semibold text-xs font-[family-name:var(--font-jetbrains)] tracking-wider py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(74,158,255,0.3)]"
                        >
                          {status === "loading" ? (
                            <><Loader2 size={14} className="animate-spin" /> {t("form_btn_sending")}</>
                          ) : (
                            <><Send size={14} /> {t("form_btn")}</>
                          )}
                        </button>

                        {/* Error message */}
                        {status === "error" && (
                          <div className="flex items-center gap-2.5 p-3.5 bg-accent-3/10 border border-accent-3/20 rounded-lg" role="alert">
                            <AlertCircle size={14} className="text-accent-3 flex-shrink-0" />
                            <p className="text-accent-3 text-[11px] font-[family-name:var(--font-jetbrains)]">
                              {lang === "pt" ? "Falha ao enviar. Tente novamente ou envie para:" : "Failed to send. Please try again or send to:"}{" "}
                              <a href={`mailto:${personalInfo.email}`} className="underline font-bold">
                                {personalInfo.email}
                              </a>
                            </p>
                          </div>
                        )}
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
            
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
