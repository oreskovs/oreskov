"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit",
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050505] pt-40 pb-12 px-8 overflow-hidden relative">
      <div className="max-w-450 mx-auto">
        
        {/* Top Section: Large Kinetic Text */}
        <div className="relative group">
          <motion.h2 
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] leading-[0.75] font-black tracking-tighter text-white/2 uppercase select-none group-hover:text-blue-600/4 transition-colors duration-700"
          >
            Contact
          </motion.h2>
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex flex-col md:flex-row justify-between items-center md:items-end px-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">Status</p>
              <h3 className="text-2xl md:text-5xl font-light text-white/90 italic font-serif">Available for new projects</h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 md:mt-0 text-right"
            >
              <a 
                href="mailto:oreskov.stojance1@gmail.com" 
                className="group relative text-3xl md:text-7xl font-bold tracking-tight text-white hover:text-blue-500 transition-colors duration-500"
              >
                Let's talk.
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Metadata & Info */}
        <div className="mt-40 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Local Time & Location */}
          <div className="flex gap-16">
            <div className="space-y-1">
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Local Time</p>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-tighter">
                {time} MKD
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Location</p>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-tighter">
                41.4329° N, 22.0088° E
              </p>
            </div>
          </div>

          {/* Social Archives */}
          <div className="flex gap-8 items-center">
            {['LinkedIn', 'GitHub', 'CV'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all"></span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-[10px] text-gray-700 uppercase tracking-widest">
              © 2026 Stojance Oreskov <br />
              <span className="text-[8px] opacity-50 italic">Crafted with precision</span>
            </p>
          </div>

        </div>
      </div>
      
      {/* Subtle corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />
    </footer>
  );
}