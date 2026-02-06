"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Gradient Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Floating Code Decorations (Left & Right) */}
      <div className="hidden lg:block">
        <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[35%] left-[5%] font-mono text-[10px] text-blue-500/60 pointer-events-none"
        >
          <pre>
            {`<html>
  <body class="modern-web">
    <div id="stojance" />
  </body>
</html>`}
          </pre>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute top-[45%] right-[5%] font-mono text-[10px] text-blue-400/60 pointer-events-none text-right"
        >
          <pre>
            {`class MobileApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FlutterApp();
  }
}`}
          </pre>
        </motion.div>
      </div>

      {/* Navigation - FIXED WIDTHS HERE */}
      <nav className="fixed top-0 left-0 w-full px-8 py-10 z-[100] pointer-events-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-start pointer-events-auto w-full">
          
          {/* Left Side: Name & Status */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col gap-4">
            <div className="group flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-white">Stojance</span>
                <span className="text-[10px] text-gray-500 font-medium tracking-[0.2em] uppercase">Oreskov</span>
              </div>
            </div>
            <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Available</span>
            </div>
          </motion.div>

          {/* Right Side: Socials & Menu */}
          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col items-end gap-6">
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-2 rounded-2xl flex flex-col gap-1 shadow-2xl">
              {[{ id: 'projects', icon: <Code2 size={16} /> }, { id: 'contact', icon: <Mail size={16} /> }].map((item) => (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:text-white hover:bg-white/10 transition-all group relative"
                >
                  {item.icon}
                  <span className="absolute right-14 px-2 py-1 rounded bg-blue-600 text-[8px] font-bold text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.id}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-5 pr-3 items-center">
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <a href="https://github.com/oreskovs" target="_blank" className="text-gray-500 hover:text-blue-500 transition-all hover:scale-110"><Github size={18} /></a>
              <a href="https://linkedin.com/in/stojance-oreskov-b2a165356/" target="_blank" className="text-gray-500 hover:text-blue-500 transition-all hover:scale-110"><Linkedin size={18} /></a>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/5 bg-[#0a0a0a]">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Innovation in Code</span>
          </div>
        </motion.div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
            <span className="text-blue-500">
              <Typewriter words={['Web', 'Mobile', 'Fullstack', 'Next-Gen']} loop={0} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
            </span>
            <br />Developer<span className="text-blue-600">.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Specializing in high-performance <span className="text-white italic">Fullstack</span> ecosystems, turning bold ideas into seamless <span className="text-white italic">Web and Mobile</span> experiences.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex justify-center">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-10 py-5 overflow-hidden rounded-full bg-white text-black font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-blue-500/10">
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View My Work</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}