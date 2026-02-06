"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Get in touch</motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Let's work <span className="italic font-serif text-gray-500">together.</span></h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <form action="#" method="POST" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Your Name</label>
                  <input type="text" name="name" placeholder="John Doe" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Message</label>
                <textarea name="message" placeholder="Tell me about your project..." rows={5} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none" />
              </div>
              <button type="submit" className="w-full group relative py-5 overflow-hidden rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.02]">
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      
    </>
  );
}