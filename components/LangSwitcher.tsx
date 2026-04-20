"use client";
import { useLang } from "@/lib/LangContext";
import { Locale } from "@/lib/translations";

const langs: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "hy", label: "Հայերեն", short: "ՀՅ" },
];

export default function LangSwitcher() {
  const { locale, setLocale } = useLang();

  return (
    <div className="flex items-center gap-1 flex-shrink-0">
      {langs.map((l) => {
        const active = locale === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLocale(l.code)}
            aria-label={l.label}
            style={{
              padding: "5px 9px",
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.04em",
              background: active ? "#E8721A" : "transparent",
              color: active ? "white" : "#5C3D2E",
              border: active ? "none" : "0.5px solid rgba(200,160,120,0.5)",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.15s",
            }}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}
