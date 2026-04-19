"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

export default function HowItWorks() {
  const { t } = useLang();
  const h = t.how;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24 px-6 lg:px-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: "#E8721A" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{h.tag}</span>
          </div>
          <h2 className="font-playfair font-bold mb-4 leading-tight" style={{ fontSize: "clamp(32px,4vw,52px)", color: "#2C1810" }}>
            {h.h2a}<br /><em className="font-playfair" style={{ color: "#E8721A", fontStyle: "italic" }}>{h.h2b}</em> {h.h2c}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 mt-14 items-start">
          <div className="reveal flex flex-col">
            {h.steps.map((s, i) => (
              <div key={i} className="flex gap-6 py-7" style={{ borderBottom: "0.5px solid rgba(200,160,120,0.2)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-playfair font-bold" style={{ background: "#FDF0E6", color: "#E8721A", fontSize: 16 }}>
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-playfair font-semibold mb-1.5" style={{ fontSize: 17, color: "#2C1810" }}>{s.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#5C3D2E" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal lg:sticky lg:top-28">
            <div className="rounded-3xl p-12 relative overflow-hidden" style={{ background: "#2C1810" }}>
              <div className="absolute -top-14 -right-14 w-52 h-52 rounded-full" style={{ background: "rgba(232,114,26,0.12)" }} />
              <div className="text-xs uppercase tracking-widest mb-5" style={{ color: "#F5A65B" }}>{h.cardTag}</div>
              <h3 className="font-playfair font-semibold leading-snug mb-5" style={{ fontSize: 28, color: "white" }}>
                {h.cardH3a}<br />{h.cardH3b}<br />
                <em className="font-playfair" style={{ color: "#F5A65B", fontStyle: "italic" }}>{h.cardH3c}</em>
              </h3>
              <p className="font-cormorant font-light leading-relaxed mb-8" style={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}>
                {h.cardP}
              </p>
              <div className="flex flex-col gap-3.5">
                {h.timeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-3.5">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#E8721A" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
