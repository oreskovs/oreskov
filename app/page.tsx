"use client";
import { Github, Mail, Linkedin, Instagram, MapPin, ArrowUpRight, ChevronDown, Code2, Smartphone, Terminal, Globe } from "lucide-react";
import { motion,useMotionValue, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {

  const containerRef = useRef(null);
  
  // Креирање на прогрес за линијата
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

  const education = [
  {
    year: "2022 - Present",
    title: "BSc in Software Technologies",
    institution: "International Slavic University – Bitola",
    description: "Currently finalizing the degree with a focus on modern software engineering practices. Completing the final thesis project.",
    status: "Finalizing Thesis"
  },
  {
    year: "2018 - 2022",
    title: "Economic Technician",
    institution: "Gymnasium 'Dobri Daskalov' – Kavadarci",
    description: "Developed a strong foundation in economics, organizational logic, and analytical thinking, providing a unique business perspective to my technical skills.",
  },
  {
    year: "2009 - 2018",
    title: "Primary Education",
    institution: "OU 'Straso Pindzur' – Kavadarci",
    description: "The beginning of my academic journey, where I first discovered my interest in technology and logical problem-solving.",
  }
];

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
        
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />

        <nav className="fixed top-0 left-0 w-full px-6 py-8 z-100 pointer-events-none">
          <div className="max-w-450 mx-auto flex justify-between items-start pointer-events-auto">
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex flex-col gap-4"
            >
              <div className="group flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase">Stojance</span>
                  <span className="text-[10px] text-gray-500 font-medium tracking-[0.2em] uppercase">Oreskov</span>
                </div>
              </div>

              <div className="px-4 py-2 bg-white/3 backdrop-blur-md border border-white/5 rounded-full flex items-center gap-2 w-fit">
                <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[8px] uppercase tracking-widest text-gray-400">Available</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex flex-col items-end gap-6"
            >
              <div className="bg-black/20 backdrop-blur-2xl border border-white/5 p-2 rounded-2xl flex flex-col gap-1 shadow-2xl">
                {[
                  { id: 'projects', icon: <Code2 size={16} /> },
                  { id: 'contact', icon: <Mail size={16} /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all group relative"
                  >
                    {item.icon}
                    <span className="absolute right-14 px-2 py-1 rounded bg-blue-600 text-[8px] font-bold text-white uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {item.id}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4 pr-3 items-center">
                <div className="h-10 w-px bg-linear-to-b from-transparent to-white/10"></div>
                <a href="https://github.com/oreskovs" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors"><Github size={16} /></a>
                <a href="https://linkedin.com/in/stojance-oreskov-b2a165356/" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors"><Linkedin size={16} /></a>
              </div>
            </motion.div>

          </div>
        </nav>

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
                  loop={0} 
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
              Specializing in high-performance <span className="text-white italic">Fullstack</span> ecosystems, turning bold ideas into seamless  <span className="text-white italic">Web and Mobile</span> experiences.
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

        <div className="hidden lg:block">
          <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[30%] left-[10%] font-mono text-[10px] text-blue-500/60 pointer-events-none hidden lg:block"
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
          className="absolute top-[45%] right-[10%] font-mono text-[10px] text-blue-400/60 pointer-events-none hidden lg:block text-right"
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
    
    {/* EDUCATION SECTION */}
    <section id="journey" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">
          
          <div className="mb-24 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-black mb-4"
            >
              Academic Background
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              Education<span className="text-blue-600">.</span>
            </motion.h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gray-900"></div>
            
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-blue-600 z-10"
            ></motion.div>

            <div className="space-y-32">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div 
                       whileInView={{ scale: [0, 1.2, 1] }}
                       className="w-4 h-4 rounded-full bg-[#050505] border-2 border-blue-600 flex items-center justify-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                    </motion.div>
                  </div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'} pl-10 md:pl-0 group`}>
                    <motion.div 
                      whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                      className="p-6 rounded-3xl border border-transparent hover:border-white/5 hover:bg-white/2 transition-all duration-500"
                    >
                      <div className={`inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-500 mb-6`}>
                        {item.year}
                      </div>
                      
                      <h4 className="text-2xl md:text-4xl font-bold text-white tracking-tight group-hover:text-blue-500 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 font-bold text-xs mt-2 uppercase tracking-widest italic opacity-80">
                        {item.institution}
                      </p>
                      
                      {item.status && (
                        <div className={`mt-4 flex items-center gap-2 ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'}`}>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                          </span>
                          <span className="text-[10px] text-amber-500 font-black uppercase tracking-widest">{item.status}</span>
                        </div>
                      )}

                      <p className="text-gray-500 text-sm mt-6 leading-relaxed font-light group-hover:text-gray-400 transition-colors">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
    </section>

    {/* 3. CONTACT SECTION */}
    <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block"
            >
              Get in touch
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Let's work <span className="italic font-serif text-gray-500">together.</span>
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form action="https://formspree.io/f/tvojot-id-tuka" method="POST" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Message</label>
                <textarea 
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full group relative py-5 overflow-hidden rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Send Message
                </span>
              </button>
            </form>
          </motion.div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-500" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">oreskov.stojance1@gmail.com</span>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">© 2026 Stojance Oreskov. All rights reserved.</p>
          </div>
        </div>
    </section>


    {/* FOOTER / CONTACT */}
    <section className="bg-[#050505] px-6 py-24 relative overflow-hidden">
  
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150px h-75 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center space-y-6 mb-24">
          <div className="flex items-center justify-center gap-3 opacity-50">
            <div className="h-px w-8 bg-blue-500"></div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-blue-500">Next Step</p>
            <div className="h-px w-8 bg-blue-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Let's create <span className="italic font-serif text-gray-500 group-hover:text-blue-500 transition-colors duration-500">something remarkable</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start border-t border-white/5 pt-16">
          
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