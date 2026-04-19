"use client";
import { useLang } from "@/lib/LangContext";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-16 pt-32 pb-20 relative overflow-hidden" style={{ background: "#FAF5EE" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(232,114,26,0.08) 0%, transparent 60%)" }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #E8721A 0, #E8721A 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-7 h-px" style={{ background: "#E8721A" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{h.tag}</span>
          </div>
          <h1 className="font-playfair font-bold leading-tight mb-7" style={{ fontSize: "clamp(40px,6vw,70px)", color: "#2C1810" }}>
            {h.h1a}<br />
            <em style={{ color: "#E8721A", fontStyle: "italic" }}>{h.h1b}</em>
            {h.h1c && <> {h.h1c}</>}
          </h1>
          <p className="font-cormorant font-light leading-relaxed mb-12" style={{ fontSize: "21px", color: "#5C3D2E", maxWidth: "520px" }}>{h.sub}</p>
          <div className="flex items-center gap-6 flex-wrap">
            <a href="#experiences" className="inline-block rounded-full font-medium transition-all"
              style={{ background: "#E8721A", color: "white", padding: "16px 36px", fontSize: "14px", textDecoration: "none" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#C45A0A")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#E8721A")}>
              {h.cta}
            </a>
            <a href="#how-it-works" className="flex items-center gap-2 text-sm" style={{ color: "#5C3D2E", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8721A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#5C3D2E")}>
              {h.learnMore} <span>→</span>
            </a>
          </div>
        </div>
        <div className="hidden lg:block animate-fade-in">
          <div className="relative h-[500px]">
            <div className="absolute rounded-2xl overflow-hidden" style={{ width: 340, height: 400, top: 50, left: 70, boxShadow: "0 20px 60px rgba(44,24,16,0.18)", background: "linear-gradient(to bottom, transparent 30%, rgba(44,24,16,0.85) 100%), linear-gradient(160deg, #3B6B2A 0%, #8B5A2E 50%, #E8941A 100%)" }}>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="font-playfair font-semibold text-white leading-snug" style={{ fontSize: 20 }}>{h.cardTitle}</h3>
                <p className="text-sm mt-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>{h.cardSub}</p>
              </div>
            </div>
            <div className="absolute bg-white rounded-2xl p-5 flex flex-col gap-1" style={{ top: 0, left: 0, width: 185, boxShadow: "0 8px 30px rgba(44,24,16,0.1)" }}>
              <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "#8C8078" }}>{h.stat1Label}</div>
              <div className="font-playfair font-bold text-xl" style={{ color: "#2C1810" }}>{h.stat1Value}</div>
              <div className="text-xs flex items-center gap-1.5" style={{ color: "#8C8078" }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#3B6B2A" }} />{h.stat1Sub}
              </div>
            </div>
            <div className="absolute bg-white rounded-2xl p-5 flex flex-col gap-1" style={{ bottom: 0, right: 0, width: 175, boxShadow: "0 8px 30px rgba(44,24,16,0.1)" }}>
              <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "#8C8078" }}>{h.stat2Label}</div>
              <div className="font-playfair font-bold text-xl" style={{ color: "#2C1810" }}>{h.stat2Value}</div>
              <div className="text-xs" style={{ color: "#8C8078" }}>{h.stat2Sub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
