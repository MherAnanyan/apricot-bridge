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
    <div className="flex items-center gap-1 flex-shrink-0">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          aria-label={`Switch to ${l.label}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            padding: "4px 7px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 500,
            background: locale === l.code ? "#E8721A" : "transparent",
            color: locale === l.code ? "white" : "#5C3D2E",
            border: locale === l.code ? "none" : "0.5px solid rgba(200,160,120,0.4)",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {/* On very small screens show only the flag, label hidden below 400px */}
          <span style={{ fontSize: 13, lineHeight: 1 }}>{l.flag}</span>
          <span className="hidden xs:inline sm:inline">{l.label}</span>
        </button>
      ))}
    </div>
  );
}
