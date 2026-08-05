"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield } from "lucide-react";
import { useLanguageTheme } from "@/context/LanguageThemeContext";

declare global {
  interface Window {
    openPrivacyModal?: () => void;
  }
}

const modalTranslations = {
  pt: {
    title: "Política de Privacidade",
    close: "Entendido",
    s1_title: "1. Controlador dos Dados",
    s1_text: "O responsável pelo tratamento dos dados pessoais coletados neste site é Thiago Gomes, acessível pelo e-mail thiagogomes1337@gmail.com.",
    s2_title: "2. Dados Coletados",
    s2_text: "Este site coleta somente os dados fornecidos voluntariamente pelo usuário através do formulário de contato: nome completo, endereço de e-mail, assunto e mensagem. Não são coletados dados sensíveis, financeiros ou de localização.",
    s3_title: "3. Finalidade do Tratamento",
    s3_text: "Os dados coletados são utilizados exclusivamente para responder às mensagens enviadas pelo formulário de contato e para comunicações relacionadas a oportunidades profissionais, projetos e colaborações.",
    s4_title: "4. Base Legal (Art. 7º, LGPD)",
    s4_text: "O tratamento de dados é realizado com base no consentimento do titular (Art. 7º, I da LGPD), obtido de forma livre e expressa no momento do envio do formulário. O consentimento pode ser revogado a qualquer momento.",
    s5_title: "5. Compartilhamento de Dados",
    s5_text: "Os dados não são vendidos, alugados ou compartilhados com terceiros para fins comerciais. O serviço de envio de e-mail é processado pelo EmailJS, que possui sua própria Política de Privacidade disponível em emailjs.com.",
    s6_title: "6. Cookies",
    s6_text: "Este site utiliza cookies essenciais apenas para salvar suas preferências de tema e idioma. Nenhum cookie de rastreamento ou publicidade é utilizado.",
    s7_title: "7. Retenção de Dados",
    s7_text: "Os dados do formulário de contato são armazenados apenas pelo tempo necessário para responder à solicitação. Preferências de tema e idioma são armazenadas localmente no seu navegador via localStorage, sem acesso por servidores externos. Não há retenção de dados além do prazo necessário.",
    s8_title: "8. Segurança",
    s8_text: "Adotamos medidas técnicas adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida. Toda a comunicação entre o seu navegador e este site é realizada via HTTPS (protocolo seguro com criptografia TLS).",
    s9_title: "9. Direitos do Titular (Art. 18, LGPD)",
    s9_intro: "Nos termos da LGPD, você tem direito a:",
    s9_rights: [
      "Confirmar a existência de tratamento de seus dados;",
      "Acessar os dados pessoais tratados;",
      "Solicitar a correção de dados incompletos ou inexatos;",
      "Solicitar a eliminação dos seus dados;",
      "Revogar o consentimento a qualquer momento;",
      "Apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados).",
    ],
    s9_contact: "Para exercer seus direitos: thiagogomes1337@gmail.com",
    footer_note: "Em caso de dúvidas, entre em contato com o controlador pelo e-mail indicado acima. Última atualização: Agosto de 2025.",
  },
  en: {
    title: "Privacy Policy",
    close: "Got it",
    s1_title: "1. Data Controller",
    s1_text: "The data controller for personal data collected on this website is Thiago Gomes, reachable at thiagogomes1337@gmail.com.",
    s2_title: "2. Data Collected",
    s2_text: "This website only collects data voluntarily provided through the contact form: full name, e-mail address, subject and message. No sensitive, financial or location data is collected.",
    s3_title: "3. Purpose of Processing",
    s3_text: "Collected data is used exclusively to respond to messages submitted through the contact form and for communications related to professional opportunities, projects and collaborations.",
    s4_title: "4. Legal Basis (Art. 7, LGPD)",
    s4_text: "Data processing is based on the data subject's consent (Art. 7, I of LGPD), freely and expressly given at the time of form submission. Consent may be revoked at any time.",
    s5_title: "5. Data Sharing",
    s5_text: "Data is not sold, rented or shared with third parties for commercial purposes. The e-mail sending service is processed by EmailJS, acting as a data processor, with its own Privacy Policy available at emailjs.com.",
    s6_title: "6. Cookies",
    s6_text: "This website uses essential cookies only to save your theme (dark/light) and language (PT/EN) preferences. No tracking or advertising cookies are used.",
    s7_title: "7. Data Retention",
    s7_text: "Contact form data is stored only for the time necessary to respond to the request. Theme and language preferences are stored locally in your browser via localStorage, with no access by external servers. No data is retained beyond the necessary period.",
    s8_title: "8. Security",
    s8_text: "We adopt adequate technical measures to protect your data against unauthorized access, loss, or improper disclosure. All communication between your browser and this website is carried out via HTTPS (secure protocol with TLS encryption).",
    s9_title: "9. Data Subject Rights (Art. 18, LGPD)",
    s9_intro: "Under the LGPD, you have the right to:",
    s9_rights: [
      "Confirm the existence of processing of your data;",
      "Access your processed personal data;",
      "Request correction of incomplete or inaccurate data;",
      "Request deletion of your data;",
      "Revoke consent at any time;",
      "Lodge a complaint with the ANPD (Brazilian National Data Protection Authority).",
    ],
    s9_contact: "To exercise your rights: thiagogomes1337@gmail.com",
    footer_note: "If you have any questions, please contact the controller at the e-mail address indicated above. Last updated: August 2025.",
  },
};

export function PrivacyModal() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguageTheme();
  const tLocal = modalTranslations[lang];

  useEffect(() => {
    window.openPrivacyModal = () => setOpen(true);
    return () => {
      delete window.openPrivacyModal;
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 w-full max-w-2xl max-h-[88vh] flex flex-col bg-bg-2 border border-border rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-border flex-shrink-0">
              <h2
                id="privacy-modal-title"
                className="font-[family-name:var(--font-jetbrains)] text-base font-semibold text-accent tracking-wide"
              >
                {tLocal.title}
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="cursor-pointer border border-border text-text-2 hover:border-accent-3 hover:text-accent-3 w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <X size={15} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1 px-7 py-6 text-text-2 text-sm leading-relaxed space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-md px-3 py-2 font-[family-name:var(--font-jetbrains)] text-xs text-accent font-semibold tracking-wider">
                <Shield size={14} />
                LGPD — Lei nº 13.709/2018
              </div>

              <Section title={tLocal.s1_title}>
                {tLocal.s1_text.split("thiagogomes1337@gmail.com")[0]}
                <a href="mailto:thiagogomes1337@gmail.com" className="text-accent hover:text-accent-2 underline transition-colors">
                  thiagogomes1337@gmail.com
                </a>
                {tLocal.s1_text.split("thiagogomes1337@gmail.com")[1]}
              </Section>

              <Section title={tLocal.s2_title}>
                {tLocal.s2_text}
              </Section>

              <Section title={tLocal.s3_title}>
                {tLocal.s3_text}
              </Section>

              <Section title={tLocal.s4_title}>
                {tLocal.s4_text}
              </Section>

              <Section title={tLocal.s5_title}>
                {tLocal.s5_text.split("emailjs.com")[0]}
                <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-2 underline transition-colors">
                  emailjs.com
                </a>
                {tLocal.s5_text.split("emailjs.com")[1]}
              </Section>

              <Section title={tLocal.s6_title}>
                {tLocal.s6_text}
              </Section>

              <Section title={tLocal.s7_title}>
                {tLocal.s7_text}
              </Section>

              <Section title={tLocal.s8_title}>
                {tLocal.s8_text}
              </Section>

              <Section title={tLocal.s9_title}>
                <p className="mb-2">{tLocal.s9_intro}</p>
                <ul className="space-y-1 pl-4">
                  {tLocal.s9_rights.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent font-bold flex-shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">
                  {tLocal.s9_contact.split("thiagogomes1337@gmail.com")[0]}
                  <a href="mailto:thiagogomes1337@gmail.com" className="text-accent hover:text-accent-2 underline transition-colors">
                    thiagogomes1337@gmail.com
                  </a>
                </p>
              </Section>

              <div className="mt-4 p-4 bg-bg-3 border-l-[3px] border-accent rounded-r-md text-xs text-text-2 leading-relaxed">
                {tLocal.footer_note}
              </div>
            </div>

            {/* Footer */}
            <div className="px-7 py-5 border-t border-border flex justify-end flex-shrink-0">
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer bg-accent hover:bg-accent/90 text-white text-xs font-semibold font-[family-name:var(--font-jetbrains)] tracking-wider uppercase px-6 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(74,158,255,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {tLocal.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-[family-name:var(--font-jetbrains)] text-xs font-semibold text-accent-2 tracking-[0.1em] uppercase mb-2">
        {title}
      </h3>
      <div className="text-text-2 text-sm leading-relaxed font-light">{children}</div>
    </div>
  );
}
