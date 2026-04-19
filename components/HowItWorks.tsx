"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

export default function HowItWorks() {
  const { t } = useLang();
  const h = t.howItWorks;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section id="how-it-works" className="py-24 px-6 lg:px-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: "#E8721A" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{h.tag}</span>
            <span className="block w-6 h-px" style={{ background: "#E8721A" }} />
          </div>
          <h2 className="font-playfair font-bold" style={{ fontSize: "clamp(28px,4vw,48px)", color: "#2C1810" }}>{h.h2}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {h.steps.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl" style={{ background: i % 2 === 0 ? "#FDF0E6" : "#FAF5EE", border: "1px solid rgba(200,160,120,0.2)" }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-playfair font-bold mb-5" style={{ background: "#E8721A", color: "white", fontSize: 18 }}>{s.n}</div>
              <h4 className="font-playfair font-semibold mb-3" style={{ fontSize: 17, color: "#2C1810" }}>{s.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#5C3D2E" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
