"use client";
export default function TechStack() {
  const techs = [
    { name: "React", slug: "react", color: "#61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "#FFFFFF" },
    { name: "Flutter", slug: "flutter", color: "#02569B" },
    { name: "Node.js", slug: "nodedotjs", color: "#339933" },
    { name: "Express", slug: "express", color: "#FFFFFF" },
    { name: "C#", slug: "csharp", color: "#239120", customSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
    { name: "Dart", slug: "dart", color: "#0175C2" },
    { name: "TypeScript", slug: "typescript", color: "#3178C6" },
    { name: "SQL", slug: "mysql", color: "#4479A1" },
    { name: "MongoDB", slug: "mongodb", color: "#47A248" },
    { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
    { name: "Git", slug: "git", color: "#F05032" }
  ];

  return (
    <section className="py-24 overflow-hidden bg-[#050505] border-y border-gray-900 relative">
      <div className="flex whitespace-nowrap opacity-[0.02] select-none pointer-events-none mb-10">
        <div className="text-8xl font-black uppercase tracking-tighter animate-marquee">
          Frontend Backend Mobile Database Cloud Engineering Architecture Deployment
        </div>
      </div>
      <div className="px-6 md:px-24 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Tech <span className="text-blue-600">Stack.</span></h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto italic">"The right tool for the right job."</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {techs.map((tech, index) => (
            <div key={tech.name} className={`group flex items-center gap-3 px-6 py-3 rounded-full bg-[#0a0a0a] border border-gray-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-500 cursor-default ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}>
              <img src={tech.customSrc || `https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} alt={tech.name} className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300 object-contain" />
              <span className="text-sm font-medium tracking-wide text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}