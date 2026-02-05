"use client";
import { Github, Mail, Linkedin, Instagram, MapPin, ArrowUpRight, ChevronDown, Code2, Smartphone, Terminal, Globe } from "lucide-react";
import { motion,useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {

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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const techStack = [
  { category: "Frontend", tools: ["HTML", "CSS", "JS", "React", "TailwindCSS"] },
  { category: "Mobile", tools: ["Flutter", "Dart"] },
  { category: "Backend", tools: ["NodeJS", "Express", "C#"] },
  { category: "Database", tools: ["SQL", "Mongoose"] },
];

  const projects = [
    {
      id: "01",
      title: "Meals App (Updated)",
      category: "Mobile Development",
      description: "A feature-rich Flutter application for discovering and managing recipes with advanced filtering.",
      tech: ["Dart", "Flutter"],
      link: "https://github.com/oreskovs/Dart-Flutter-Projects/tree/main/MealsApp%20Updated%20Version",
      icon: <Smartphone size={24} />
    },
    {
      id: "02",
      title: "Products Sorting System",
      category: "Software Engineering",
      description: "Desktop application focused on data structures and algorithmic sorting of product inventories.",
      tech: ["C#", ".NET"],
      link: "https://github.com/oreskovs/C-Sharp/tree/main/ProductsSortingApp",
      icon: <Terminal size={24} />
    },
    {
      id: "03",
      title: "Assembly Endgame",
      category: "Web Game",
      description: "Interactive word game focused on state management and complex UI logic in React.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://github.com/oreskovs/React-Projects/tree/main/assembly_endgame",
      icon: <Code2 size={24} />
    },
    {
      id: "04",
      title: "Tenzies & Meme Generator",
      category: "Frontend Labs",
      description: "A collection of React applications demonstrating API integration and real-time state updates.",
      tech: ["React", "API Integration"],
      link: "https://github.com/oreskovs/React-Projects",
      icon: <Code2 size={24} />
    }
  ];

  return (
  <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">

    {/* HERO SECTION */}
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* SPOTLIGHT BACKGROUND */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />

        {/* NAV BAR */}
        <nav className="absolute top-6 w-full max-w-7xl px-4 z-50">
          <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 px-6 py-4 rounded-3xl flex justify-between items-center shadow-2xl">
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-[0.2em] text-white uppercase">Stojance Oreskov</span>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Available for hire</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/oreskovs" target="_blank" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Github size={18} /></a>
              <a href="https://linkedin.com/in/stojance-oreskov-b2a165356/" target="_blank" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Linkedin size={18} /></a>
              <a href="mailto:oreskov.stojance1@gmail.com" className="ml-2 px-4 py-2 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Contact</a>
            </div>
          </div>
        </nav>

        {/* HERO CONTENT */}
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
                <Typewriter
                  words={['Web', 'Mobile', 'Fullstack', 'Next-Gen']}
                  loop={0} // 0 значи бесконечно
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
              <br />
              Developer<span className="text-blue-600">.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              I architect high-performance digital solutions with <span className="text-white italic">Next.js</span> and <span className="text-white italic">Flutter</span>.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-8"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-white text-black font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-all"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View My Work
              </span>
            </button>
          </motion.div>
        </div>

        {/* FLOATING CARDS */}
        <div className="hidden lg:block">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[35%] left-[8%] p-6 bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/5 rounded-3xl w-56 rotate-6"
          >
            <Globe className="text-blue-500 mb-2" size={24} />
            <h3 className="font-bold text-xs text-white uppercase">Web Apps</h3>
          </motion.div>

          <motion.div 
             animate={{ y: [0, 15, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute top-[40%] right-[8%] p-6 bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/5 rounded-3xl w-56 rotate-6"
          >
            <Smartphone className="text-blue-500 mb-2" size={24} />
            <h3 className="font-bold text-xs text-white uppercase">Mobile Apps</h3>
          </motion.div>
        </div>

      </section>

    {/* TECH STACK - SECTION */}
    <section className="py-24 overflow-hidden bg-[#050505] border-y border-gray-900 relative">
  
      {/* Moving Header (Суптилен ефект во позадина) */}
      <div className="flex whitespace-nowrap opacity-[0.02] select-none pointer-events-none mb-10">
        <div className="text-8xl font-black uppercase tracking-tighter animate-marquee">
          Frontend Backend Mobile Database Cloud Engineering Architecture Deployment
        </div>
      </div>

      <div className="px-6 md:px-24 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Tech <span className="text-blue-600">Stack.</span>
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto italic">
            "The right tool for the right job."
          </p>
        </div>

        {/* Асиметричен клауд со логоа */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { name: "React", slug: "react", color: "#61DAFB" },
            { name: "Next.js", slug: "nextdotjs", color: "#FFFFFF" },
            { name: "Flutter", slug: "flutter", color: "#02569B" },
            { name: "Node.js", slug: "nodedotjs", color: "#339933" },
            { name: "Express", slug: "express", color: "#FFFFFF" },
            { 
              name: "C#", 
              slug: "csharp", 
              color: "#239120",
              customSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" 
            },
            { name: "Dart", slug: "dart", color: "#0175C2" },
            { name: "TypeScript", slug: "typescript", color: "#3178C6" },
            { name: "SQL", slug: "mysql", color: "#4479A1" },
            { name: "MongoDB", slug: "mongodb", color: "#47A248" },
            { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
            { name: "Git", slug: "git", color: "#F05032" }
          ].map((tech, index) => (
            <div 
              key={tech.name}
              className={`
                group flex items-center gap-3 px-6 py-3 rounded-full 
                bg-[#0a0a0a] border border-gray-800 
                hover:border-blue-500/50 hover:bg-blue-500/5 
                transition-all duration-500 cursor-default
                ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'} 
              `}
            >
              <img 
                src={tech.customSrc ? tech.customSrc : `https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} 
                alt={tech.name}
                className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300 object-contain"
              />
              <span className="text-sm font-medium tracking-wide text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* PROJECTS SECTION */}
    <section id="projects" className="py-32 bg-[#050505] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          
          {/* Header */}
          <div className="mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-black mb-4">Works</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter"><span className="italic">Projects</span></h3>
          </div>

          {/* List Container */}
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a 
                key={project.id}
                href={project.link}
                target="_blank"
                className="group relative border-t border-gray-900 py-12 flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 hover:px-8"
              >
                {/* Background Highlight on Hover */}
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 -z-10"></div>

                {/* Left Side: Number and Title */}
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-xs font-mono text-gray-700 group-hover:text-blue-500 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white group-hover:italic group-hover:translate-x-4 transition-all duration-500">
                      {project.title}
                    </h3>
                    <div className="flex gap-4 items-center">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500">{project.category}</span>
                      <div className="h-px w-8 bg-gray-800"></div>
                      <div className="flex gap-2">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="text-[9px] text-blue-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Icon & Arrow */}
                <div className="mt-8 md:mt-0 flex items-center gap-6">
                  <p className="hidden lg:block text-gray-600 text-sm max-w-50 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-light italic">
                    {project.description.substring(0, 60)}...
                  </p>
                  <div className="w-16 h-16 rounded-full border border-gray-900 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowUpRight size={24} className="text-gray-700 group-hover:text-white" />
                  </div>
                </div>

                {/* Суптилен ефект на линијата на дното */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-600 transition-all duration-700 group-hover:w-full"></div>
              </a>
            ))}
            <div className="border-t border-gray-900"></div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 flex justify-center">
            <a href="https://github.com/oreskovs" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-black text-gray-600 hover:text-white transition-colors">
              See more on GitHub
              <Github size={16} className="group-hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
    </section>

    {/* FOOTER / CONTACT */}
    <section className="bg-[#050505] px-6 py-24 relative overflow-hidden">
  
      {/* Суптилен светлосен акцент во центарот */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150px h-75 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ГЛАВЕН ТЕКСТ - НАМАЛЕН И ПРОЧИСТЕН */}
        <div className="text-center space-y-6 mb-24">
          <div className="flex items-center justify-center gap-3 opacity-50">
            <div className="h-px w-8 bg-blue-500"></div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-blue-500">Next Step</p>
            <div className="h-px w-8 bg-blue-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Let's build <span className="italic font-serif text-gray-500 group-hover:text-blue-500 transition-colors duration-500">together</span>.
          </h2>
        </div>

        {/* КОНТАКТ И СОЦИЈАЛНИ МРЕЖИ - ХОРИЗОНТАЛЕН РАСПОРЕД */}
        <div className="grid md:grid-cols-2 gap-16 items-start border-t border-white/5 pt-16">
          
          {/* Лева страна: Email */}
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold">Inquiries</p>
            <a 
              href="mailto:oreskov.stojance1@gmail.com" 
              className="text-xl md:text-2xl font-light text-gray-300 hover:text-white transition-all duration-300 group flex items-center gap-3"
            >
              oreskov.stojance1@gmail.com
              <ArrowUpRight size={18} className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
            </a>
          </div>

          {/* Десна страна: Мрежи и Локација */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold">Socials</p>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/oreskovs" target="_blank" className="text-sm text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-medium">GitHub</a>
                <a href="https://linkedin.com/in/stojance-oreskov-b2a165356/" target="_blank" className="text-sm text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-medium">LinkedIn</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold">Based In</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-tighter">Kavadarci, Macedonia</p>
              <p className="text-[9px] text-gray-600 font-mono tracking-widest">GMT+1 TIMEZONE</p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT / BOTTOM BAR */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-widest text-white">SO</span>
            <div className="h-3 w-px bg-gray-800"></div>
            <p className="text-[9px] text-gray-700 uppercase tracking-[0.4em]">© 2026 Stojance Oreskov</p>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[9px] uppercase tracking-[0.4em] text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2 group"
          >
            Back to top <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>
      </div>
    </section>

    <footer className="p-10 text-center text-gray-800 text-[10px] tracking-[0.5em] font-mono border-t border-gray-900">
        © 2026 STOJANCE ORESKOV — BUILT WITH NEXT.JS
    </footer>
  </main>
  );
}