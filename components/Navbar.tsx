"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollShadow, setScrollShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/92 backdrop-blur-sm border-b border-black/7 transition-shadow ${
        scrollShadow ? "shadow-md" : ""
      }`}
      aria-label="Navigation principale"
    >
      <a href="#home" className="font-serif text-lg font-semibold text-black">
        Ouedraogo Alycia.
      </a>

      <ul
        className={`nav-links hidden md:flex gap-8 list-none ${menuOpen ? "open" : ""}`}
        id="nav-links"
      >
        <li>
          <a
            href="#about"
            className="text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest"
            onClick={handleLinkClick}
          >
            À propos
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest"
            onClick={handleLinkClick}
          >
            Projets
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest"
            onClick={handleLinkClick}
          >
            Compétences
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest"
            onClick={handleLinkClick}
          >
            Expérience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 bg-black text-white text-xs font-semibold rounded hover:bg-gray-800 transition-colors uppercase tracking-wider">
            CV ↗
          </a>
        </li>
      </ul>

      <button
        className="md:hidden flex flex-col gap-1 bg-none border-none p-1 cursor-pointer"
        id="nav-toggle"
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-0.5 bg-black rounded"></span>
        <span className="block w-6 h-0.5 bg-black rounded"></span>
        <span className="block w-6 h-0.5 bg-black rounded"></span>
      </button>
    </nav>
  );
}
