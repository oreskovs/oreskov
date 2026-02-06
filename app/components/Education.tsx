"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const education = [
  { year: "2022 - Present", title: "BSc in Software Technologies", institution: "International Slavic University – Bitola", description: "Currently finalizing the degree with a focus on modern software engineering practices. Completing the final thesis project.", status: "Finalizing Thesis" },
  { year: "2018 - 2022", title: "Economic Technician", institution: "Gymnasium 'Dobri Daskalov' – Kavadarci", description: "Developed a strong foundation in economics, organizational logic, and analytical thinking." },
  { year: "2009 - 2018", title: "Primary Education", institution: "OU 'Straso Pindzur' – Kavadarci", description: "The beginning of my academic journey, where I first discovered my interest in technology." }
];

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id="journey" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">
        <div className="mb-24 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-black mb-4">Academic Background</motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold tracking-tighter">Education<span className="text-blue-600">.</span></motion.h3>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gray-900"></div>
          <motion.div style={{ scaleY, originY: 0 }} className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-blue-600 z-10"></motion.div>
          <div className="space-y-32">
            {education.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-20"><div className="w-4 h-4 rounded-full bg-[#050505] border-2 border-blue-600 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div></div></div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'} pl-10 md:pl-0 group`}>
                  <motion.div whileHover={{ x: index % 2 === 0 ? -10 : 10 }} className="p-6 rounded-3xl border border-transparent hover:border-white/5 hover:bg-white/2 transition-all duration-500">
                    <div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-500 mb-6">{item.year}</div>
                    <h4 className="text-2xl md:text-4xl font-bold text-white tracking-tight group-hover:text-blue-500 transition-colors">{item.title}</h4>
                    <p className="text-gray-400 font-bold text-xs mt-2 uppercase tracking-widest italic opacity-80">{item.institution}</p>
                    {item.status && <div className={`mt-4 flex items-center gap-2 ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'}`}><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span></span><span className="text-[10px] text-amber-500 font-black uppercase tracking-widest">{item.status}</span></div>}
                    <p className="text-gray-500 text-sm mt-6 leading-relaxed font-light group-hover:text-gray-400 transition-colors">{item.description}</p>
                  </motion.div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}