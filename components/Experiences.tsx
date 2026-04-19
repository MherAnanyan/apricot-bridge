"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

export default function Experiences() {
  const { t } = useLang();
  const e = t.experiences;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section id="experiences" className="py-24 px-6 lg:px-16" style={{ background: "#FAF5EE" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: "#E8721A" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{e.tag}</span>
          </div>
          <h2 className="font-playfair font-bold mb-4 leading-tight" style={{ fontSize: "clamp(28px,4vw,50px)", color: "#2C1810" }}>{e.h2a}</h2>
          <p className="font-cormorant font-light leading-relaxed" style={{ fontSize: 20, color: "#5C3D2E", maxWidth: 580 }}>{e.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {e.items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden transition-transform hover:-translate-y-1" style={{ border: "1px solid rgba(200,160,120,0.2)" }}>
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <span style={{ fontSize: 36 }}>{item.icon}</span>
                  {item.tag && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#FDF0E6", color: "#E8721A" }}>{item.tag}</span>
                  )}
                </div>
                <h3 className="font-playfair font-semibold mb-2" style={{ fontSize: 19, color: "#2C1810" }}>{item.title}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2 py-1 rounded" style={{ background: "#F0E8D8", color: "#5C3D2E" }}>{item.duration}</span>
                  <span className="text-xs" style={{ color: "#8C8078" }}>{item.location}</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#5C3D2E" }}>{item.desc}</p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: "0.5px solid rgba(200,160,120,0.25)" }}>
                  <span className="font-medium" style={{ color: "#E8721A", fontSize: 14 }}>{item.price}</span>
                  <a href="#contact" className="text-xs font-medium px-4 py-2 rounded-full transition-all"
                    style={{ background: "#2C1810", color: "white", textDecoration: "none" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#E8721A")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#2C1810")}>
                    Book →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
