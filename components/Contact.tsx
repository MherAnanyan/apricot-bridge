"use client";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

const paymentMethods = [
  {
    id: "card",
    icon: "💳",
    label: {
      en: "Credit / Debit Card",
      ru: "Банковская карта",
      hy: "Բանկային քարտ",
    },
  },
  {
    id: "paypal",
    icon: "🅿️",
    label: {
      en: "PayPal",
      ru: "PayPal",
      hy: "PayPal",
    },
  },
  {
    id: "transfer",
    icon: "🏦",
    label: {
      en: "Bank Transfer",
      ru: "Банковский перевод",
      hy: "Բանկային փոխանցում",
    },
  },
  {
    id: "crypto",
    icon: "₿",
    label: {
      en: "Crypto (USDT/BTC)",
      ru: "Крипто (USDT/BTC)",
      hy: "Կրիպտո (USDT/BTC)",
    },
  },
];

const depositNote = {
  en: "A 30% deposit secures your booking. The remaining balance is due 14 days before your trip.",
  ru: "Депозит 30% подтверждает бронирование. Остаток оплачивается за 14 дней до поездки.",
  hy: "30% կանխավճարը հաստատում է ձեր ամրագրումը։ Մնացած գումարը վճարվում է ուղևորությունից 14 օր առաջ։",
};

export default function Contact() {
  const { t, locale } = useLang();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("card");
  const ref = useRef<HTMLDivElement>(null);
  console.log(c);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const inputStyle = {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 12,
    padding: "14px 18px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: "white",
    outline: "none",
    width: "100%",
  };

  const payLabel =
    locale === "ru"
      ? "Способ оплаты"
      : locale === "hy"
        ? "Vcharаkman eghаnаk"
        : "Preferred payment method";
  const depositLabel =
    depositNote[locale as keyof typeof depositNote] ?? depositNote.en;
  const secureLabel =
    locale === "ru"
      ? "Безопасная оплата"
      : locale === "hy"
        ? "Аpаhov vcharаkum"
        : "Secure payment";
  const refundLabel =
    locale === "ru"
      ? "Возврат средств"
      : locale === "hy"
        ? "Vchаrutyun"
        : "Refund policy";
  const refundText =
    locale === "ru"
      ? "Полный возврат при отмене за 30+ дней. 50% за 14–29 дней."
      : locale === "hy"
        ? "Lriv vchаrutyun 30+ or аrаj: 50% 14-29 or аrаj:"
        : "Full refund if cancelled 30+ days before. 50% refund within 14–29 days.";

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-16 text-center"
      style={{ background: "#2C1810" }}
      ref={ref}
    >
      <div className="max-w-2xl mx-auto">
        <div className="reveal">
          <div className="inline-flex items-center gap-3 mb-5 justify-center">
            <span
              className="block w-6 h-px"
              style={{ background: "#F5A65B" }}
            />
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "#F5A65B" }}
            >
              {c.tag}
            </span>
            <span
              className="block w-6 h-px"
              style={{ background: "#F5A65B" }}
            />
          </div>
          <h2
            className="font-playfair font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(28px,4vw,50px)", color: "white" }}
          >
            {c.h2a}
            <br />
            <em
              className="font-playfair"
              style={{ color: "#F5A65B", fontStyle: "italic" }}
            >
              {c.h2b}
            </em>
          </h2>
          <p
            className="font-cormorant font-light leading-relaxed mb-10"
            style={{ fontSize: 19, color: "rgba(255,255,255,0.5)" }}
          >
            {c.sub}
          </p>
        </div>

        {!submitted ? (
          <form
            className="reveal flex flex-col gap-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {/* Personal info */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={c.firstName}
                required
                style={inputStyle}
              />
              <input type="text" placeholder={c.lastName} style={inputStyle} />
            </div>
            <input
              type="email"
              placeholder={c.email}
              required
              style={inputStyle}
            />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder={c.dates} style={inputStyle} />
              <input type="text" placeholder={c.groupSize} style={inputStyle} />
            </div>
            <select
              style={{ ...inputStyle, cursor: "pointer" }}
              defaultValue=""
            >
              <option value="" disabled>
                {c.interest}
              </option>
              {c.interestOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <textarea
              placeholder={c.message}
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            />

            {/* Divider */}
            <div className="flex items-center gap-4 my-2">
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {payLabel}
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
            </div>

            {/* Payment methods */}
            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((pm) => (
                <button
                  key={pm.id}
                  type="button"
                  onClick={() => setSelectedPayment(pm.id)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all text-left"
                  style={{
                    background:
                      selectedPayment === pm.id
                        ? "rgba(232,114,26,0.2)"
                        : "rgba(255,255,255,0.05)",
                    border:
                      selectedPayment === pm.id
                        ? "1px solid #E8721A"
                        : "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: 18 }}>{pm.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color:
                        selectedPayment === pm.id
                          ? "#F5A65B"
                          : "rgba(255,255,255,0.65)",
                    }}
                  >
                    {pm.label[locale as keyof typeof pm.label] ?? pm.label.en}
                  </span>
                  {selectedPayment === pm.id && (
                    <span
                      className="ml-auto text-xs"
                      style={{ color: "#E8721A" }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Deposit note */}
            <div
              className="rounded-xl px-4 py-3 flex items-start gap-3"
              style={{
                background: "rgba(232,114,26,0.1)",
                border: "1px solid rgba(232,114,26,0.25)",
              }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>ℹ️</span>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {depositLabel}
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="rounded-full font-medium transition-all mt-1"
              style={{
                background: "#E8721A",
                color: "white",
                padding: "16px",
                fontSize: 14,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#F5A65B")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#E8721A")
              }
            >
              {c.submit}
            </button>

            {/* Security badges */}
            <div className="flex items-center justify-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 14 }}>🔒</span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {secureLabel}
                </span>
              </div>
              <div
                className="w-px h-4"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 14 }}>↩️</span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {refundLabel}
                </span>
              </div>
            </div>
            <p
              className="text-xs text-center"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {refundText}
            </p>
          </form>
        ) : (
          <div className="reveal py-12">
            <div className="text-4xl mb-4">✅</div>
            <p
              className="font-cormorant italic"
              style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}
            >
              {c.thanks}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
