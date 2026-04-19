"use client";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const inputStyle = { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "14px 18px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "white", outline: "none", width: "100%" };
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 text-center" style={{ background: "#2C1810" }} ref={ref}>
      <div className="max-w-2xl mx-auto">
        <div className="reveal">
          <div className="inline-flex items-center gap-3 mb-5 justify-center">
            <span className="block w-6 h-px" style={{ background: "#F5A65B" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#F5A65B" }}>{c.tag}</span>
            <span className="block w-6 h-px" style={{ background: "#F5A65B" }} />
          </div>
          <h2 className="font-playfair font-bold leading-tight mb-5" style={{ fontSize: "clamp(28px,4vw,50px)", color: "white" }}>
            {c.h2a}<br /><em className="font-playfair" style={{ color: "#F5A65B", fontStyle: "italic" }}>{c.h2b}</em>
          </h2>
          <p className="font-cormorant font-light leading-relaxed mb-10" style={{ fontSize: 19, color: "rgba(255,255,255,0.5)" }}>{c.sub}</p>
        </div>
        {!submitted ? (
          <form className="reveal flex flex-col gap-4 text-left" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder={c.firstName} required style={inputStyle} />
              <input type="text" placeholder={c.lastName} style={inputStyle} />
            </div>
            <input type="email" placeholder={c.email} required style={inputStyle} />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder={c.dates} style={inputStyle} />
              <input type="text" placeholder={c.groupSize} style={inputStyle} />
            </div>
            <select style={{ ...inputStyle, cursor: "pointer" }} defaultValue="">
              <option value="" disabled>{c.interest}</option>
              {c.interestOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <textarea placeholder={c.message} rows={4} style={{ ...inputStyle, resize: "vertical" }} />
            <button type="submit" className="rounded-full font-medium transition-all mt-1"
              style={{ background: "#E8721A", color: "white", padding: "15px", fontSize: 14, border: "none", cursor: "pointer" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#F5A65B")}
              onMouseLeave={e => (e.currentTarget.style.background = "#E8721A")}>
              {c.submit}
            </button>
          </form>
        ) : (
          <div className="reveal py-12">
            <p className="font-cormorant italic" style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>{c.thanks}</p>
          </div>
        )}
      </div>
    </section>
  );
}
