"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";
import Link from "next/link";

const experienceLinks = [
  { id: "forest-night",    href: "/experiences/forest-night",    color: "#3B6B2A" },
  { id: "village-day",     href: "/experiences/village-day",     color: "#8B5A2E" },
  { id: "wine-trail",      href: "/experiences/wine-trail",      color: "#993C6E" },
  { id: "food-immersion",  href: "/experiences/food-immersion",  color: "#C45A0A" },
  { id: "hiking-dilijan",  href: "/experiences/hiking-dilijan",  color: "#5A7A3A" },
  { id: "lake-sevan",      href: "/experiences/lake-sevan",      color: "#185FA5" },
];

export default function Experiences() {
  const { t } = useLang();
  const e = t.experiences;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) en.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {e.items.map((item, i) => {
            const link = experienceLinks[i];
            return (
              <Link
                key={i}
                href={link.href}
                className="group block rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "white", border: "1px solid rgba(200,160,120,0.2)", textDecoration: "none" }}
              >
                {/* Colour top bar */}
                <div className="h-1.5 w-full" style={{ background: link.color }} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span style={{ fontSize: 36 }}>{item.icon}</span>
                    {item.tag && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: link.color + "18", color: link.color }}>{item.tag}</span>
                    )}
                  </div>

                  <h3 className="font-playfair font-semibold mb-2 transition-colors group-hover:text-amber-700" style={{ fontSize: 19, color: "#2C1810" }}>{item.title}</h3>

                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-xs px-2 py-1 rounded" style={{ background: "#F0E8D8", color: "#5C3D2E" }}>{item.duration}</span>
                    <span className="text-xs" style={{ color: "#8C8078" }}>📍 {item.location}</span>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#5C3D2E" }}>{item.desc}</p>

                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "0.5px solid rgba(200,160,120,0.2)" }}>
                    <span className="font-medium" style={{ color: link.color, fontSize: 14 }}>{item.price}</span>
                    <span className="text-xs font-medium flex items-center gap-1 transition-all group-hover:gap-2"
                      style={{ color: link.color }}>
                      Learn more <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
