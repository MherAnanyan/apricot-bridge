import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

export const metadata: Metadata = {
  title: "Apricot Bridge — Find Your Family in Armenia",
  description: "A completely personalised roots journey to discover your ancestral village, touch your family's history, and bring your roots home.",
  keywords: "Armenia roots tourism, Armenian diaspora, ancestral village, family heritage, genealogy Armenia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
