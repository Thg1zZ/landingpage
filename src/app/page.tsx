import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Navbar is OUTSIDE the overflow wrapper so position:fixed works correctly on mobile */}
      <Navbar />
      {/* overflow-x:hidden is on this wrapper, NOT on body, to prevent breaking fixed elements */}
      <main style={{ overflowX: "hidden" }}>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
