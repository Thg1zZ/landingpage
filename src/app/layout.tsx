import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LGPDBanner } from "../components/ui/LGPDBanner";
import { PrivacyModal } from "../components/ui/PrivacyModal";
import { LanguageThemeProvider } from "../context/LanguageThemeContext";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiago Gomes | Full-Stack Software Engineer",
  description:
    "Portfólio de Thiago Gomes, Engenheiro de Software Full-Stack especializado em C/C++, Java, Web, Inteligência Artificial e Ciência de Dados.",
  authors: [{ name: "Thiago Gomes" }],
  keywords: ["Software Engineer", "Java", "C++", "Developer", "Full-Stack", "IA", "Power BI"],
  openGraph: {
    type: "website",
    url: "https://github.com/Thg1zZ",
    title: "Thiago Gomes | Full-Stack Software Engineer",
    description:
      "Engenheiro de software especializado no desenvolvimento de sistemas complexos, análise de dados e integrações inteligentes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Gomes | Full-Stack Software Engineer",
    description:
      "Engenheiro de software especializado no desenvolvimento de sistemas complexos, análise de dados e integrações inteligentes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable}`}>
      <body className="antialiased relative min-h-screen">
        {/* Luminous background Aurora Blobs */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
          <div className="absolute top-[10%] left-[20%] w-[35rem] h-[35rem] bg-accent/8 rounded-full blur-[140px] animate-float-slow" />
          <div className="absolute bottom-[15%] right-[10%] w-[45rem] h-[45rem] bg-accent-2/6 rounded-full blur-[160px] animate-float-medium" />
          <div className="absolute top-[50%] left-[60%] w-[30rem] h-[30rem] bg-accent-3/5 rounded-full blur-[130px] animate-float-slow" />
        </div>

        <LanguageThemeProvider>
          {children}
          <LGPDBanner />
          <PrivacyModal />
        </LanguageThemeProvider>
      </body>
    </html>
  );
}
