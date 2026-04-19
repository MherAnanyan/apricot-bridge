"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LangContext";
import LangSwitcher from "./LangSwitcher";
import Link from "next/link";

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
    { label: t.nav.experiences, href: "#experiences" },
    { label: t.nav.apricotBox, href: "/apricot-box" },
    { label: t.nav.faq, href: "#faq" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 shadow-sm" : "py-5"}`}
      style={{ background: "rgba(250,245,238,0.93)", backdropFilter: "blur(12px)", borderBottom: "0.5px solid rgba(200,160,120,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-16 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2 no-underline" style={{ minWidth: 0, flexShrink: 1 }}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#E8721A" }}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <ellipse cx="11" cy="13" rx="7" ry="7" fill="#FDF0E6" />
              <ellipse cx="13" cy="12" rx="4" ry="5" fill="#F5A65B" opacity="0.5" />
              <path d="M11 7 Q11 3 11 1" stroke="#3B6B2A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11 2 Q14.5 0 17 2 Q16 5.5 13 5.5 Q12 5 11 2" fill="#3B6B2A" />
              <path d="M11 8 Q9.5 10 9.5 13" stroke="#C45A0A" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="font-playfair font-semibold leading-tight whitespace-nowrap" style={{ color: "#2C1810", fontSize: "clamp(14px,4vw,18px)" }}>
              Apricot <span style={{ color: "#E8721A", fontStyle: "italic", fontWeight: 400 }}>Bridge</span>
            </div>
            <div className="hidden sm:block text-xs uppercase tracking-widest" style={{ color: "#8C8078", marginTop: "-1px" }}>Armenia</div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-5 flex-shrink-0">
          {links.map(l => (
            <Link key={l.label} href={l.href} className="text-sm tracking-wide transition-colors whitespace-nowrap"
              style={{ color: "#5C3D2E", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8721A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#5C3D2E")}>{l.label}</Link>
          ))}
          <LangSwitcher />
          <a href="#contact" className="text-sm font-medium rounded-full px-5 py-2 whitespace-nowrap flex-shrink-0"
            style={{ background: "#E8721A", color: "white", textDecoration: "none" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#C45A0A")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#E8721A")}>{t.nav.cta}</a>
        </div>
        <div className="md:hidden flex items-center gap-2 flex-shrink-0" style={{ marginLeft: "auto" }}>
          <LangSwitcher />
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" className="flex flex-col justify-center items-center gap-1.5 p-2" style={{ flexShrink: 0 }}>
            {[0, 1, 2].map(i => (
              <span key={i} className="block rounded" style={{ width: 22, height: 2, background: "#2C1810", transition: "all 0.2s",
                transform: menuOpen && i === 0 ? "rotate(45deg) translate(3px,3px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(3px,-3px)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1 }} />
            ))}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-5 pt-2 flex flex-col gap-1" style={{ borderTop: "0.5px solid rgba(200,160,120,0.2)" }}>
          {links.map(l => (
            <Link key={l.label} href={l.href} className="text-sm py-3 block"
              style={{ color: "#5C3D2E", textDecoration: "none", borderBottom: "0.5px solid rgba(200,160,120,0.15)" }}
              onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <a href="#contact" className="text-sm py-3 font-medium" style={{ color: "#E8721A", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>{t.nav.cta}</a>
        </div>
      )}
    </nav>
  );
}
