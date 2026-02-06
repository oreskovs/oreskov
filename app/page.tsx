"use client";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      <Hero />
      <TechStack />
      <Education />
      <Projects />
      <Footer />
    </main>
  );
}