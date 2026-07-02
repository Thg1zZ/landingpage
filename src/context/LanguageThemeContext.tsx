"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en";
type Theme = "dark" | "light";

interface LanguageThemeContextType {
  lang: Language;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
  t: (key: string) => string;
  mounted: boolean;
}

const LanguageThemeContext = createContext<LanguageThemeContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    nav_about: "Sobre",
    nav_edu: "Formação",
    nav_exp: "Experiência",
    nav_proj: "Projetos",
    nav_contact: "Contato",
    scroll_hint: "scroll",

    // Hero
    hero_tag: "Disponível para projetos",
    hero_role: "Full-Stack Engineer",
    hero_desc: "Engenheiro de software com sólida experiência em desenvolvimento de sistemas, análise de dados e implementação de soluções com Inteligência Artificial. Transformando complexidade em código limpo e resultados reais.",
    hero_btn1: "Ver Projetos",
    hero_btn2: "Entrar em Contato",

    // Stats
    stat1: "Anos de Exp.",
    stat2: "Projetos",
    stat3: "Tecnologias",
    stat4: "Certificações",

    // About
    about_title: "Sobre Mim",
    about_p1: "Sou um Engenheiro de Software Full-Stack com forte base em linguagens de baixo nível (C/C++) e plataformas de alta produtividade (Java, Spring Boot). Apaixonado por arquiteturas seguras e código que escala.",
    about_p2: "Além do desenvolvimento de sistemas, atuo na área de Ciência de Dados e Inteligência Artificial, integrando LLMs em soluções práticas e construindo dashboards analíticos com Power BI e SQL.",
    about_p3: "Atualmente cursando Bacharelado em Ciência da Computação na Universidade Estácio de Sá, com foco em elevar continuamente minha capacidade técnica e adaptabilidade.",
    skill_advanced: "Avançado",
    skill_intermediate: "Intermediário",

    // Education
    edu_title: "Formação",

    // Experience
    exp_title: "Experiência",

    // Projects
    proj_title: "Projetos",
    proj_view_code: "Ver no GitHub →",
    proj_view_project: "Acessar Projeto →",

    // Contact
    contact_title: "Contato",
    contact_desc: "Estou aberto a novas oportunidades, projetos freelance e colaborações. Se você tem um problema interessante para resolver, vamos conversar.",
    cv_link: "Currículo / CV",
    form_name: "Nome",
    form_name_ph: "Seu nome completo",
    form_email_ph: "seu@email.com",
    form_subject: "Assunto",
    form_subject_ph: "Assunto da mensagem",
    form_msg: "Mensagem",
    form_msg_ph: "Descreva seu projeto ou oportunidade...",
    form_btn: "Enviar Mensagem",
    form_btn_sending: "Enviando...",
    form_lgpd: "Concordo que meus dados sejam utilizados para responder este contato, conforme a ",
    form_lgpd_link: "Política de Privacidade",

    // LGPD
    footer_privacy: "Política de Privacidade (LGPD)",
    lgpd_banner_title: "Este site utiliza cookies",
    lgpd_banner_desc: "Utilizamos apenas cookies essenciais para o funcionamento do site. Nenhum dado pessoal é coletado sem sua autorização, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
    lgpd_accept: "Aceitar",
    lgpd_reject: "Apenas Essenciais",
    lgpd_learn: "Saiba mais",
    privacy_title: "Política de Privacidade",
    privacy_close: "Entendido",
  },
  en: {
    // Navigation
    nav_about: "About",
    nav_edu: "Education",
    nav_exp: "Experience",
    nav_proj: "Projects",
    nav_contact: "Contact",
    scroll_hint: "scroll",

    // Hero
    hero_tag: "Available for projects",
    hero_role: "Full-Stack Engineer",
    hero_desc: "Software engineer with solid experience in systems development, data analysis, and AI-powered solution implementation. Turning complexity into clean code and real results.",
    hero_btn1: "View Projects",
    hero_btn2: "Get in Touch",

    // Stats
    stat1: "Years of Exp.",
    stat2: "Projects",
    stat3: "Technologies",
    stat4: "Certifications",

    // About
    about_title: "About Me",
    about_p1: "I'm a Full-Stack Software Engineer with a solid foundation in low-level languages (C/C++) and high-productivity platforms (Java, Spring Boot). Passionate about secure architectures and code that scales.",
    about_p2: "Besides systems development, I work in Data Science and Artificial Intelligence, integrating LLMs into practical solutions and building analytical dashboards with Power BI and SQL.",
    about_p3: "Currently pursuing a B.S. in Computer Science at Universidade Estácio de Sá, focusing on continuously raising my technical capacity and adaptability.",
    skill_advanced: "Advanced",
    skill_intermediate: "Intermediate",

    // Education
    edu_title: "Education",

    // Experience
    exp_title: "Experience",

    // Projects
    proj_title: "Projects",
    proj_view_code: "View on GitHub →",
    proj_view_project: "Live Demo →",

    // Contact
    contact_title: "Contact",
    contact_desc: "I'm open to new opportunities, freelance projects, and collaborations. If you have an interesting problem to solve, let's talk.",
    cv_link: "Resume / CV",
    form_name: "Name",
    form_name_ph: "Your full name",
    form_email_ph: "your@email.com",
    form_subject: "Subject",
    form_subject_ph: "Message subject",
    form_msg: "Message",
    form_msg_ph: "Describe your project or opportunity...",
    form_btn: "Send Message",
    form_btn_sending: "Sending...",
    form_lgpd: "I agree that my data may be used to respond to this contact, as per the ",
    form_lgpd_link: "Privacy Policy",

    // LGPD
    footer_privacy: "Privacy Policy (LGPD/GDPR)",
    lgpd_banner_title: "This website uses cookies",
    lgpd_banner_desc: "We only use essential cookies for website functionality. No personal data is collected without your consent, in compliance with Brazilian Data Protection Law (LGPD — Law 13,709/2018).",
    lgpd_accept: "Accept",
    lgpd_reject: "Essential Only",
    lgpd_learn: "Learn more",
    privacy_title: "Privacy Policy",
    privacy_close: "Got it",
  },
};

export function LanguageThemeProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Access localStorage on mount
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;

    if (savedLang === "pt" || savedLang === "en") {
      setLang(savedLang);
    }
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    
    // In Tailwind CSS v4, we also toggle the 'dark' class on <html> or <body> for styling
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme, mounted]);

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageThemeContext.Provider value={{ lang, theme, toggleLang, toggleTheme, t, mounted }}>
      {children}
    </LanguageThemeContext.Provider>
  );
}

export function useLanguageTheme() {
  const context = useContext(LanguageThemeContext);
  if (context === undefined) {
    throw new Error("useLanguageTheme must be used within a LanguageThemeProvider");
  }
  return context;
}
