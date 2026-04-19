"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

export default function Stories() {
  const { t } = useLang();
  const s = t.stories;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section id="stories" className="py-24 px-6 lg:px-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: "#E8721A" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{s.tag}</span>
          </div>
          <h2 className="font-playfair font-bold leading-tight" style={{ fontSize: "clamp(28px,4vw,50px)", color: "#2C1810" }}>{s.h2a}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 mt-14 items-center">
          <div className="reveal flex flex-col gap-10">
            {s.items.map((item, i) => (
              <div key={i}>
                <blockquote className="font-cormorant font-light italic leading-relaxed mb-6" style={{ fontSize: 22, color: "#5C3D2E", borderLeft: "3px solid #E8721A", paddingLeft: 24 }}>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-playfair font-semibold flex-shrink-0" style={{ background: "#FDF0E6", color: "#E8721A", fontSize: 14 }}>{item.initials}</div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: "#2C1810" }}>{item.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#8C8078" }}>{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            {s.cards.map((c, i) => (
              <div key={c.title} className={`rounded-2xl flex flex-col justify-end p-6 ${i === 0 ? "col-span-2" : ""}`}
                style={{ background: c.bg, minHeight: i === 0 ? 220 : 180 }}>
                <h4 className="font-playfair font-semibold text-white" style={{ fontSize: 16 }}>{c.title}</h4>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
