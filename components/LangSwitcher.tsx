"use client";
import { useLang } from "@/lib/LangContext";
import { Locale } from "@/lib/translations";

const langs: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "hy", label: "ՀՅ", flag: "🇦🇲" },
];

export default function LangSwitcher() {
  const { locale, setLocale } = useLang();

  return (
    <div className="flex items-center gap-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all"
          style={{
            background: locale === l.code ? "#E8721A" : "transparent",
            color: locale === l.code ? "white" : "#5C3D2E",
            border: locale === l.code ? "none" : "0.5px solid rgba(200,160,120,0.4)",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}
          aria-label={`Switch to ${l.label}`}
        >
          <span style={{ fontSize: 14 }}>{l.flag}</span>
          <span>{l.label}</span>
        </button>
      ))}
    </div>
  );
}
