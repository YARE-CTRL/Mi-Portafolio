"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "GITHUB", href: "https://github.com/YARE-CTRL" },
  { label: "LINKEDIN", href: "#" },
  { label: "SRE", href: "#casos" },
  { label: "DATA", href: "#casos" },
  { label: "SQL", href: "#casos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route-ish link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-300
        ${scrolled && !menuOpen ? "bg-black/90 backdrop-blur-sm border-b border-zinc-800" : "bg-black border-b border-zinc-800"}
      `}
    >
      {/* ── Top bar ── */}
      <nav
        className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Brand */}
        <a
          href="/"
          className="font-mono text-sm font-medium tracking-widest text-white uppercase hover:text-green-400 transition-colors duration-200"
          aria-label="Inicio — B. Hurtado"
        >
          B. Hurtado
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-xs tracking-widest text-zinc-500 hover:text-green-400 transition-colors duration-200 uppercase"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-xs tracking-widest text-zinc-400 hover:text-green-400 transition-colors duration-200 uppercase"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </nav>

      {/* ── Mobile dropdown panel ── */}
      {menuOpen && (
        <div
          className="md:hidden w-full bg-black border-t border-zinc-800"
          role="menu"
        >
          <ul className="flex flex-col px-6 py-6 gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label} role="none">
                <a
                  href={href}
                  role="menuitem"
                  onClick={handleLinkClick}
                  className="
                    block font-mono text-3xl font-bold tracking-widest
                    text-zinc-400 hover:text-green-400
                    transition-colors duration-150 uppercase py-2
                    border-b border-zinc-900 last:border-0
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <p className="font-mono text-xs text-zinc-700 tracking-widest">
              BUILD_SHA · #F526968 · 2026
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
