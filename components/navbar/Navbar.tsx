"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between">
        <a
          href="/"
          className="text-2xl tracking-[0.4em] font-semibold"
        >
          NATIVO
        </a>

        <nav className="hidden md:flex gap-10 text-sm tracking-[0.2em] uppercase">
          <a href="#story">Story</a>
          <a href="#collections">Collection</a>
          <a href="#waitlist">Pre-order</a>
        </nav>
      </div>
    </header>
  );
}
