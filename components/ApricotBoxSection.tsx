"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import Link from "next/link";

export default function ApricotBoxSection() {
  const { t } = useLang();
  const a = t.apricotBoxSection;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section id="apricot-box" className="py-24 px-6 lg:px-16" style={{ background: "#2C1810" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px" style={{ background: "#F5A65B" }} />
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#F5A65B" }}>{a.tag}</span>
            </div>
            <h2 className="font-playfair font-bold leading-tight mb-5" style={{ fontSize: "clamp(28px,4vw,50px)", color: "white" }}>
              {a.h2a}<br />
              <em className="font-playfair" style={{ color: "#F5A65B", fontStyle: "italic" }}>{a.h2b}</em>
            </h2>
            <p className="font-cormorant font-light leading-relaxed mb-8" style={{ fontSize: 20, color: "rgba(255,255,255,0.55)" }}>{a.sub}</p>
            <Link href="/apricot-box" className="inline-block rounded-full font-medium transition-all"
              style={{ background: "#E8721A", color: "white", padding: "14px 32px", fontSize: 14, textDecoration: "none" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#F5A65B")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#E8721A")}>
              {a.cta}
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {a.boxes.map((box, i) => (
              <div key={i} className={`rounded-2xl p-5 text-center transition-transform hover:-translate-y-1 ${i === 1 ? "ring-2 ring-orange-400" : ""}`}
                style={{ background: i === 1 ? "#E8721A" : "rgba(255,255,255,0.07)", border: i !== 1 ? "0.5px solid rgba(255,255,255,0.1)" : "none" }}>
                <div className="font-playfair font-bold mb-1" style={{ fontSize: 24, color: "white" }}>{box.price}</div>
                <div className="font-medium mb-1" style={{ fontSize: 13, color: i === 1 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.7)" }}>{box.name}</div>
                <div className="text-xs mb-2" style={{ color: i === 1 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)" }}>{box.items}</div>
                {i === 1 && <div className="text-xs font-medium px-2 py-0.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>{box.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
