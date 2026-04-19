"use client";
import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { t } = useLang();
  const links = [t.nav.howItWorks, t.nav.packages, t.nav.stories, t.nav.faq];
  const hrefs = ["#how-it-works", "#packages", "#stories", "#faq"];

  return (
    <footer className="px-6 lg:px-16 py-12 flex flex-wrap items-center justify-between gap-6" style={{ background: "#1A0F08" }}>
      <div>
        <div className="font-playfair text-lg font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
          Apricot <span className="font-playfair" style={{ color: "#E8721A", fontStyle: "italic", fontWeight: 400 }}>Bridge</span>
        </div>
        <div className="text-xs mt-1 tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>{t.footer.tagline}</div>
      </div>
      <ul className="hidden md:flex gap-7 list-none">
        {links.map((l, i) => (
          <li key={l}>
            <a href={hrefs[i]} className="text-xs tracking-wide transition-colors"
              style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F5A65B")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>{l}</a>
          </li>
        ))}
      </ul>
      <div className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>{t.footer.copy}</div>
    </footer>
  );
}
