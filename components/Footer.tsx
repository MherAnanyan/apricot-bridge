"use client";
import { useLang } from "@/lib/LangContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLang();
  const navItems = [
    { label: t.nav.experiences, href: "/#experiences" },
    { label: t.nav.apricotBox, href: "/apricot-box" },
    { label: t.nav.faq, href: "/#faq" },
  ];
  return (
    <footer
      className="px-6 lg:px-16 py-10 flex flex-wrap items-center justify-between gap-5"
      style={{ background: "#1A0F08" }}
    >
      <div>
        <div
          className="font-playfair text-lg font-semibold"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Apricot{" "}
          <span
            style={{ color: "#E8721A", fontStyle: "italic", fontWeight: 400 }}
          >
            Bridge
          </span>
        </div>
        <div
          className="text-xs mt-1 tracking-widest"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {t.footer.tagline}
        </div>
      </div>
      <ul className="hidden md:flex gap-6 list-none">
        {navItems.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-xs tracking-wide"
              style={{
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A65B")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
              }
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
        {t.footer.copy}
      </div>
    </footer>
  );
}
