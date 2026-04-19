"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

export default function Packages() {
  const { t } = useLang();
  const p = t.packages;
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
    <section id="packages" className="py-24 px-6 lg:px-16" style={{ background: "#FDF0E6" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{p.tag}</span>
          </div>
          <h2 className="font-playfair font-bold leading-tight" style={{ fontSize: "clamp(32px,4vw,52px)", color: "#2C1810" }}>
            {p.h2a} <em className="font-playfair" style={{ color: "#E8721A", fontStyle: "italic" }}>{p.h2b}</em><br />{p.h2c}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14 reveal">
          {p.items.map((pkg, i) => {
            const featured = i === 1;
            return (
              <div key={pkg.name} className="rounded-3xl p-10 relative transition-transform hover:-translate-y-1"
                style={{ background: featured ? "#2C1810" : "white", border: featured ? "none" : "1px solid rgba(200,160,120,0.2)" }}>
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full text-white whitespace-nowrap"
                    style={{ background: "#E8721A", fontSize: 10 }}>{p.badge}</div>
                )}
                <div className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: featured ? "#F5A65B" : "#8C8078" }}>{pkg.name}</div>
                <div className="font-playfair font-bold leading-none mb-1" style={{ fontSize: 48, color: featured ? "white" : "#2C1810" }}>{pkg.price}</div>
                <div className="text-xs mb-7" style={{ color: featured ? "rgba(255,255,255,0.45)" : "#8C8078" }}>{pkg.per}</div>
                <div className="h-px mb-7" style={{ background: featured ? "rgba(255,255,255,0.1)" : "rgba(200,160,120,0.25)" }} />
                <ul className="flex flex-col gap-3 mb-9 list-none">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: featured ? "rgba(255,255,255,0.7)" : "#5C3D2E" }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
                        style={{ background: featured ? "rgba(232,114,26,0.2)" : "rgba(59,107,42,0.1)", color: featured ? "#F5A65B" : "#3B6B2A" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block text-center rounded-full py-3.5 text-sm font-medium transition-all"
                  style={{ background: featured ? "#E8721A" : "transparent", color: featured ? "white" : "#2C1810",
                    border: featured ? "none" : "1px solid rgba(200,160,120,0.4)", textDecoration: "none" }}>
                  {pkg.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
