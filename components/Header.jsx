"use client";
import { useState, useEffect } from "react";
import ViewCounter from "./ViewCounter";

export default function Header({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass bg-black/30 border-b border-white/10" : "py-5"}`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-float inline-block">🌙</span>
          <div>
            <h1 className="font-display text-white text-lg font-bold leading-none tracking-tight">
              Eid Mubarak
            </h1>
            <p className="text-white/40 text-xs font-body tracking-widest uppercase">
              Greeting Generator
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ViewCounter />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-xl glass bg-white/10 border border-white/20 flex items-center justify-center text-base hover:bg-white/20 transition-all duration-200 hover:scale-110"
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
