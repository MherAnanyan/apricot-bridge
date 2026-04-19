"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LangContext";
import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.packages, href: "#packages" },
    { label: t.nav.stories, href: "#stories" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 shadow-sm" : "py-5"}`}
      style={{ background: "rgba(250,245,238,0.93)", backdropFilter: "blur(12px)", borderBottom: "0.5px solid rgba(200,160,120,0.2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 no-underline flex-shrink-0">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#E8721A" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <ellipse cx="11" cy="13" rx="7" ry="7" fill="#FDF0E6" />
              <ellipse cx="13" cy="12" rx="4" ry="5" fill="#F5A65B" opacity="0.5" />
              <path d="M11 7 Q11 3 11 1" stroke="#3B6B2A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11 2 Q14.5 0 17 2 Q16 5.5 13 5.5 Q12 5 11 2" fill="#3B6B2A" />
              <path d="M11 8 Q9.5 10 9.5 13" stroke="#C45A0A" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="font-playfair text-lg font-semibold" style={{ color: "#2C1810" }}>
              Apricot <span style={{ color: "#E8721A", fontStyle: "italic", fontWeight: 400 }}>Bridge</span>
            </div>
            <div className="text-xs uppercase tracking-widest" style={{ color: "#8C8078", marginTop: "-2px" }}>Roots Tourism</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm tracking-wide transition-colors"
              style={{ color: "#5C3D2E", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8721A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#5C3D2E")}>
              {l.label}
            </a>
          ))}
          <LangSwitcher />
          <a href="#contact" className="text-sm font-medium rounded-full px-5 py-2 transition-all"
            style={{ background: "#E8721A", color: "white", textDecoration: "none" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#C45A0A")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#E8721A")}>
            {t.nav.cta}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LangSwitcher />
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" className="p-2 flex flex-col gap-1.5">
            <span className="block w-6 h-0.5 rounded" style={{ background: "#2C1810" }} />
            <span className="block w-6 h-0.5 rounded" style={{ background: "#2C1810" }} />
            <span className="block w-6 h-0.5 rounded" style={{ background: "#2C1810" }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ borderTop: "0.5px solid rgba(200,160,120,0.2)" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm py-2"
              style={{ color: "#5C3D2E", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="text-sm py-2 font-medium"
            style={{ color: "#E8721A", textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}>{t.nav.cta}</a>
        </div>
      )}
    </nav>
  );
}
