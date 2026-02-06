"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Meals App",
    category: "Mobile Development",
    tech: "Flutter / Dart",
    link: "https://github.com/oreskovs/Dart-Flutter-Projects/tree/main/MealsApp%20Updated%20Version",
  },
  {
    id: "02",
    title: "Inventory System",
    category: "Software Logic",
    tech: "C# / .NET",
    link: "https://github.com/oreskovs/C-Sharp/tree/main/ProductsSortingApp",
  },
  {
    id: "03",
    title: "Assembly Endgame UI",
    category: "Web Interaction",
    tech: "React / GSAP",
    link: "https://github.com/oreskovs/React-Projects/tree/main/assembly_endgame",
  },
  {
    id: "04",
    title: "React Projects",
    category: "Frontend Dev",
    tech: "React / API",
    link: "https://github.com/oreskovs/React-Projects",
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-40 bg-[#050505] px-6 md:px-24">
      <div className="max-w-350 mx-auto">
        {/* Header - Minimalist */}
        <div className="mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4"
          >
            / Selected Works
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white/90">
            Building digital <span className="italic text-gray-500 font-serif">ecosystems</span>.
          </h2>
        </div>

        {/* Interactive List */}
        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between transition-all duration-500"
            >
              {/* background hover effect */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/[0.02] transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 flex items-center gap-8">
                <span className="text-xs font-mono text-gray-600 group-hover:text-blue-500 transition-colors">
                  {project.id}
                </span>
                <h3 className="text-4xl md:text-7xl font-bold tracking-tighter text-white/40 group-hover:text-white group-hover:translate-x-4 transition-all duration-700">
                  {project.title}
                </h3>
              </div>

              <div className="relative z-10 mt-4 md:mt-0 flex items-center gap-12">
                <div className="hidden lg:block text-right">
                  <p className="text-[10px] uppercase tracking-widest text-blue-500 font-black mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.category}
                  </p>
                  <p className="text-sm text-gray-600 font-mono italic">
                    {project.tech}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                  <ArrowUpRight size={20} className="text-white group-hover:text-black transition-colors" />
                </div>
              </div>

              {/* Small dot that follows or appears */}
              {hoveredIndex === index && (
                <motion.div 
                  layoutId="dot"
                  className="absolute left-0 w-1 h-12 bg-blue-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Footer link to GitHub */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <a 
            href="https://github.com/oreskovs" 
            target="_blank"
            className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors border-b border-gray-800 pb-2"
          >
            See all archives on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}