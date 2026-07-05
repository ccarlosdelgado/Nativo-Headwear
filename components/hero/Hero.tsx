"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen p-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10"
      >
        <p className="text-xs tracking-[0.5em] uppercase text-white">
          WEAR IT WILD
        </p>
      </motion.div>
    </section>
  );
}
