"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export interface ExperienceData {
  id: string;
  icon: string;
  tag: string;
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  price: string;
  groupSize: string;
  heroDesc: string;
  color: string;
  sections: { heading: string; body: string }[];
  includes: string[];
  itinerary: { time: string; desc: string }[];
  gallery: { label: string; color: string }[];
}

export default function ExperiencePage({ data }: { data: ExperienceData }) {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-16 relative overflow-hidden" style={{ background: "#FAF5EE" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 70% at 80% 40%, ${data.color}18 0%, transparent 60%)` }} />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-xs" style={{ color: "#8C8078" }}>
            <Link href="/" style={{ color: "#8C8078", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#E8721A")} onMouseLeave={e => (e.currentTarget.style.color = "#8C8078")}>Home</Link>
            <span>/</span>
            <Link href="/#experiences" style={{ color: "#8C8078", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#E8721A")} onMouseLeave={e => (e.currentTarget.style.color = "#8C8078")}>Experiences</Link>
            <span>/</span>
            <span style={{ color: "#2C1810" }}>{data.title}</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ fontSize: 40 }}>{data.icon}</span>
                <span className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: data.color + "20", color: data.color }}>{data.tag}</span>
              </div>
              <h1 className="font-playfair font-bold leading-tight mb-4" style={{ fontSize: "clamp(34px,5vw,62px)", color: "#2C1810" }}>{data.title}</h1>
              <p className="font-cormorant font-light leading-relaxed mb-8" style={{ fontSize: 22, color: "#5C3D2E", maxWidth: 580 }}>{data.subtitle}</p>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: "⏱", label: data.duration },
                  { icon: "📍", label: data.location },
                  { icon: "👥", label: data.groupSize },
                ].map((m) => (
                  <span key={m.label} className="flex items-center gap-2 text-sm px-4 py-2 rounded-full" style={{ background: "white", border: "1px solid rgba(200,160,120,0.25)", color: "#5C3D2E" }}>
                    <span>{m.icon}</span> {m.label}
                  </span>
                ))}
              </div>

              <p className="text-base leading-relaxed" style={{ color: "#5C3D2E", maxWidth: 600 }}>{data.heroDesc}</p>
            </div>

            {/* Booking card */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl p-8" style={{ background: "#2C1810", boxShadow: "0 20px 60px rgba(44,24,16,0.15)" }}>
                <div className="font-playfair font-bold mb-1" style={{ fontSize: 42, color: "white", lineHeight: 1 }}>{data.price}</div>
                <div className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>per person · all inclusive</div>
                <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.1)" }} />
                <ul className="flex flex-col gap-2.5 mb-6 list-none">
                  {data.includes.slice(0, 5).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5" style={{ background: "rgba(232,114,26,0.2)", color: "#F5A65B" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className="block text-center rounded-full py-4 font-medium transition-all"
                  style={{ background: "#E8721A", color: "white", textDecoration: "none", fontSize: 14 }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#F5A65B")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#E8721A")}>
                  Book this experience →
                </Link>
                <p className="text-xs text-center mt-3" style={{ color: "rgba(255,255,255,0.25)" }}>Free cancellation 30+ days before</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery visual */}
      <section className="py-12 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
          {data.gallery.map((g, i) => (
            <div key={i} className={`rounded-2xl flex items-end p-5 ${i === 0 ? "col-span-2 row-span-1" : ""}`}
              style={{ background: g.color, minHeight: i === 0 ? 240 : 160 }}>
              <span className="text-sm font-medium text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>{g.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16 px-6 lg:px-16" style={{ background: "#FAF5EE" }}>
        <div className="max-w-3xl mx-auto">
          {data.sections.map((s, i) => (
            <div key={i} className="mb-12">
              <h2 className="font-playfair font-semibold mb-4" style={{ fontSize: 26, color: "#2C1810" }}>{s.heading}</h2>
              <p className="leading-relaxed" style={{ fontSize: 16, color: "#5C3D2E" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair font-bold mb-10" style={{ fontSize: 30, color: "#2C1810" }}>What to expect</h2>
          <div className="flex flex-col gap-0">
            {data.itinerary.map((item, i) => (
              <div key={i} className="flex gap-5 pb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: data.color + "20", color: data.color, border: `2px solid ${data.color}` }}>{i + 1}</div>
                  {i < data.itinerary.length - 1 && <div className="w-px flex-1 mt-2" style={{ background: `${data.color}30` }} />}
                </div>
                <div className="pt-2 pb-2">
                  <div className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: data.color }}>{item.time}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "#5C3D2E" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included full list */}
      <section className="py-16 px-6 lg:px-16" style={{ background: "#FDF0E6" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair font-bold mb-8" style={{ fontSize: 30, color: "#2C1810" }}>Everything included</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {data.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white" style={{ border: "1px solid rgba(200,160,120,0.2)" }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5" style={{ background: "rgba(59,107,42,0.1)", color: "#3B6B2A" }}>✓</span>
                <span className="text-sm" style={{ color: "#5C3D2E" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 lg:px-16 text-center" style={{ background: "#2C1810" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-playfair font-bold text-white mb-4" style={{ fontSize: 32 }}>Ready to experience this?</h2>
          <p className="font-cormorant font-light mb-8" style={{ fontSize: 19, color: "rgba(255,255,255,0.5)" }}>Small groups, real places, no tourist traps.</p>
          <Link href="/#contact" className="inline-block rounded-full font-medium px-10 py-4"
            style={{ background: "#E8721A", color: "white", textDecoration: "none", fontSize: 14 }}>
            Book this experience →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
