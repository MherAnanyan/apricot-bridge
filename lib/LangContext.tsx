"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale, TranslationSet } from "@/lib/translations";

interface LangContextType {
  locale: Locale;
  t: TranslationSet;
  setLocale: (l: Locale) => void;
}

const LangContext = createContext<LangContextType>({
  locale: "en",
  t: translations.en,
  setLocale: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider
      value={{ locale, t: translations[locale], setLocale }}
    >
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
