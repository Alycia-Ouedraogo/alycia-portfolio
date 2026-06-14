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
        className={`fixed top-16 left-0 right-0 flex flex-col bg-white border-b border-taupe gap-0 list-none md:static md:border-none md:flex-row md:gap-8 md:bg-transparent ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
        id="nav-links"
      >
        <li className="md:contents">
          <a
            href="#about"
            className="block px-6 py-3 md:p-0 text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest border-b md:border-none"
            onClick={handleLinkClick}
          >
            À propos
          </a>
        </li>
        <li className="md:contents">
          <a
            href="#projects"
            className="block px-6 py-3 md:p-0 text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest border-b md:border-none"
            onClick={handleLinkClick}
          >
            Projets
          </a>
        </li>
        <li className="md:contents">
          <a
            href="#skills"
            className="block px-6 py-3 md:p-0 text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest border-b md:border-none"
            onClick={handleLinkClick}
          >
            Compétences
          </a>
        </li>
        <li className="md:contents">
          <a
            href="#experience"
            className="block px-6 py-3 md:p-0 text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest border-b md:border-none"
            onClick={handleLinkClick}
          >
            Expérience
          </a>
        </li>
        <li className="md:contents">
          <a
            href="#contact"
            className="block px-6 py-3 md:p-0 text-xs font-medium text-mid hover:text-black transition-colors uppercase tracking-widest border-b md:border-none"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </li>
        <li className="md:contents">
          <a href="#" className="block px-6 py-3 md:p-0 md:px-4 md:py-2 bg-black text-white text-xs font-semibold rounded hover:bg-gray-800 transition-colors uppercase tracking-wider md:rounded">
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
