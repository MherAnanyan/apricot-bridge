"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

export default function ApricotBoxPage() {
  const { t } = useLang();
  const a = t.apricotBox;
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 12, padding: "14px 18px", fontFamily: "'DM Sans',sans-serif",
    fontSize: 14, color: "white", outline: "none", width: "100%",
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-16 relative overflow-hidden" style={{ background: "#FDF0E6" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(232,114,26,0.1) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px" style={{ background: "#E8721A" }} />
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{a.heroTag}</span>
            </div>
            <h1 className="font-playfair font-bold leading-tight mb-6" style={{ fontSize: "clamp(36px,5vw,64px)", color: "#2C1810" }}>
              {a.heroH1}<br />
              <em style={{ color: "#E8721A", fontStyle: "italic" }}>{a.heroH1b}</em>
            </h1>
            <p className="font-cormorant font-light leading-relaxed mb-8" style={{ fontSize: 20, color: "#5C3D2E", maxWidth: 500 }}>{a.heroSub}</p>
            <a href="#boxes" className="inline-block rounded-full font-medium"
              style={{ background: "#E8721A", color: "white", padding: "15px 36px", fontSize: 14, textDecoration: "none" }}>
              See the boxes ↓
            </a>
          </div>
          {/* Visual */}
          <div className="hidden lg:flex gap-4 justify-center items-end">
            {[
              { label: "Small", price: "$29", h: 200, color: "#F5C4B3" },
              { label: "Medium", price: "$55", h: 260, color: "#F0860A" },
              { label: "Large", price: "$89", h: 220, color: "#C45A0A" },
            ].map((b, i) => (
              <div key={b.label} className="rounded-2xl flex flex-col items-center justify-end pb-6 relative" style={{ width: 140, height: b.h, background: b.color }}>
                <span style={{ fontSize: 32, marginBottom: 8 }}>🎁</span>
                <div className="font-playfair font-bold text-white" style={{ fontSize: 20 }}>{b.price}</div>
                <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{b.label} Box</div>
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full text-white whitespace-nowrap" style={{ background: "#2C1810", fontSize: 10 }}>Most popular</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{a.insideTag}</span>
            </div>
            <h2 className="font-playfair font-bold" style={{ fontSize: "clamp(26px,3.5vw,44px)", color: "#2C1810" }}>{a.insideH2}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {a.insideItems.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl" style={{ background: "#FDF0E6", border: "1px solid rgba(200,160,120,0.2)" }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div className="font-medium mb-1" style={{ fontSize: 15, color: "#2C1810" }}>{item.name}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "#5C3D2E" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boxes */}
      <section id="boxes" className="py-20 px-6 lg:px-16" style={{ background: "#FAF5EE" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair font-bold" style={{ fontSize: "clamp(26px,3.5vw,44px)", color: "#2C1810" }}>Choose your box</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {a.boxes.map((box, i) => (
              <div key={box.name} className="rounded-3xl p-10 relative transition-transform hover:-translate-y-1"
                style={{ background: box.featured ? "#2C1810" : "white", border: box.featured ? "none" : "1px solid rgba(200,160,120,0.2)" }}>
                {box.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-4 py-1.5 rounded-full text-white whitespace-nowrap" style={{ background: "#E8721A", fontSize: 10 }}>Most popular</div>
                )}
                <div className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: box.featured ? "#F5A65B" : "#8C8078" }}>{box.name}</div>
                <div className="font-playfair font-bold leading-none mb-1" style={{ fontSize: 48, color: box.featured ? "white" : "#2C1810" }}>{box.price}</div>
                <div className="text-xs mb-2" style={{ color: box.featured ? "rgba(255,255,255,0.45)" : "#8C8078" }}>{box.shipping}</div>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: box.featured ? "rgba(255,255,255,0.6)" : "#5C3D2E" }}>{box.desc}</p>
                <div className="h-px mb-6" style={{ background: box.featured ? "rgba(255,255,255,0.1)" : "rgba(200,160,120,0.25)" }} />
                <ul className="flex flex-col gap-3 mb-8 list-none">
                  {box.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: box.featured ? "rgba(255,255,255,0.7)" : "#5C3D2E" }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
                        style={{ background: box.featured ? "rgba(232,114,26,0.2)" : "rgba(59,107,42,0.1)", color: box.featured ? "#F5A65B" : "#3B6B2A" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#order" className="block text-center rounded-full py-3.5 text-sm font-medium transition-all"
                  style={{ background: box.featured ? "#E8721A" : "transparent", color: box.featured ? "white" : "#2C1810",
                    border: box.featured ? "none" : "1px solid rgba(200,160,120,0.4)", textDecoration: "none" }}>
                  {box.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-3 mb-5 justify-center">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{a.shippingTag}</span>
          </div>
          <h2 className="font-playfair font-bold mb-10" style={{ fontSize: "clamp(24px,3vw,40px)", color: "#2C1810" }}>{a.shippingH2}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {a.shippingItems.map((s, i) => (
              <div key={i} className="rounded-2xl p-5 text-center" style={{ background: "#FDF0E6", border: "1px solid rgba(200,160,120,0.2)" }}>
                <div className="font-medium mb-1" style={{ fontSize: 14, color: "#2C1810" }}>{s.region}</div>
                <div className="text-sm mb-1" style={{ color: "#5C3D2E" }}>{s.time}</div>
                <div className="font-medium" style={{ fontSize: 13, color: "#E8721A" }}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="py-20 px-6 lg:px-16 text-center" style={{ background: "#2C1810" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-playfair font-bold mb-4 text-white" style={{ fontSize: "clamp(24px,3vw,40px)" }}>{a.ctaH2}</h2>
          <p className="font-cormorant font-light mb-10" style={{ fontSize: 19, color: "rgba(255,255,255,0.5)" }}>{a.ctaSub}</p>
          {!submitted ? (
            <form className="flex flex-col gap-4 text-left" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First name" required style={inputStyle} />
                <input type="text" placeholder="Last name" style={inputStyle} />
              </div>
              <input type="email" placeholder="Email address" required style={inputStyle} />
              <select style={{ ...inputStyle, cursor: "pointer" }} defaultValue="">
                <option value="" disabled>Which box?</option>
                {a.boxes.map(b => <option key={b.name} value={b.name}>{b.name} — {b.price}</option>)}
              </select>
              <input type="text" placeholder="Shipping address" style={inputStyle} />
              <textarea placeholder="Any special requests or questions..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              <button type="submit" className="rounded-full font-medium transition-all mt-1"
                style={{ background: "#E8721A", color: "white", padding: "15px", fontSize: 14, border: "none", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#F5A65B")}
                onMouseLeave={e => (e.currentTarget.style.background = "#E8721A")}>
                {a.ctaBtn} →
              </button>
            </form>
          ) : (
            <p className="font-cormorant italic" style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>Thank you! We&apos;ll contact you within 24 hours.</p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
