"use client";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(null);
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
    <section id="faq" className="py-24 px-6 lg:px-16" style={{ background: "#FAF5EE" }} ref={ref}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px" style={{ background: "#E8721A" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{f.tag}</span>
          </div>
          <h2 className="font-playfair font-bold leading-tight mb-5" style={{ fontSize: "clamp(32px,4vw,52px)", color: "#2C1810" }}>
            {f.h2a}<br />{f.h2b}<br />{f.h2c}{" "}
            <em className="font-playfair" style={{ color: "#E8721A", fontStyle: "italic" }}>{f.h2d}</em>
          </h2>
          <p className="font-cormorant font-light leading-relaxed mb-8" style={{ fontSize: 20, color: "#5C3D2E" }}>{f.sub}</p>
          <a href="#contact" className="inline-block rounded-full font-medium"
            style={{ background: "#E8721A", color: "white", padding: "14px 32px", fontSize: 14, textDecoration: "none" }}>
            {f.cta}
          </a>
        </div>

        <div className="reveal">
          {f.items.map((item, i) => (
            <div key={i} className="cursor-pointer"
              style={{ borderBottom: "0.5px solid rgba(200,160,120,0.3)", ...(i === 0 ? { borderTop: "0.5px solid rgba(200,160,120,0.3)" } : {}) }}
              onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex justify-between items-center py-6">
                <span className="text-sm font-medium pr-8" style={{ color: "#2C1810" }}>{item.q}</span>
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-base flex-shrink-0 transition-all"
                  style={{ background: open === i ? "#E8721A" : "#FDF0E6", color: open === i ? "white" : "#E8721A", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
              </div>
              <div className="overflow-hidden transition-all" style={{ maxHeight: open === i ? "300px" : 0 }}>
                <p className="text-sm leading-relaxed pb-6" style={{ color: "#5C3D2E" }}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
