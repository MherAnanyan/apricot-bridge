"use client";
import { useLang } from "@/lib/LangContext";

const icons = [
  <svg key="1" viewBox="0 0 24 24" fill="#F5A65B" width={18} height={18}><path d="M12 2L3 7v10l9 5 9-5V7z"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#F5A65B" strokeWidth={2} width={18} height={18}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="#F5A65B" strokeWidth={2} width={18} height={18}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="#F5A65B" strokeWidth={2} width={18} height={18}><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
];

export default function TrustBar() {
  const { t } = useLang();
  return (
    <div className="px-6 lg:px-16 py-7 flex flex-wrap items-center justify-between gap-8" style={{ background: "#2C1810" }}>
      {t.trust.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,114,26,0.18)" }}>
            {icons[i]}
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>{item.label}</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
