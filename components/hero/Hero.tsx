"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen p-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2"
      >
        <p className="text-xs tracking-[0.5em] uppercase text-white">
          WEAR IT WILD
        </p>
      </motion.div>
    </section>
  );
}
