"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LangContext";

const packagesData = {
  en: {
    tag: "Choose your experience",
    h2a: "Three journeys,",
    h2b: "one Armenia",
    badge: "Most popular",
    items: [
      {
        name: "Roots Starter",
        price: "$2,500",
        per: "per person · 4 days",
        desc: "Your first step into Armenia. A curated short journey covering the essentials — village life, forest, food, and culture.",
        features: [
          "Basic genealogy archive research",
          "1 ancestral village or region visit",
          "Private guide and driver",
          "Armenian food immersion (half day)",
          "Photo gallery (100+ photos)",
          "Research preview report",
          "Transport from Yerevan included",
        ],
        featured: false,
        cta: "Choose Starter",
      },
      {
        name: "Heritage Journey",
        price: "$4,500",
        per: "per person · 7 days",
        desc: "The complete Armenia experience. Deep research, multiple regions, village stays, forest nights, wine trails, and a handcrafted book of everything you discovered.",
        features: [
          "Deep archive research (8 weeks before travel)",
          "Multiple village and region visits",
          "Forest overnight camp in Dilijan",
          "Wine & apricot trail in Areni",
          "Armenian kitchen cooking class",
          "DNA test kit included",
          "Living relative or local family search",
          "Private photographer throughout",
          "Hardcover Heritage Book delivered after",
          "Cinematic video of your journey",
          "Free worldwide shipping of Heritage Book",
        ],
        featured: true,
        cta: "Choose Heritage",
      },
      {
        name: "Family Legacy",
        price: "$8,000+",
        per: "group of 2–6 · 10 days",
        desc: "The full Armenia story for your whole family. Multi-branch research, luxury stays, a reunion with distant relatives if found, and two beautifully bound Heritage Books.",
        features: [
          "Multi-branch family research",
          "All Heritage Journey experiences included",
          "Luxury boutique accommodation",
          "Lake Sevan overnight camp",
          "Reunion arranged if relatives found",
          "2 Hardcover Heritage Books included",
          "Documentary-quality film of the journey",
          "3 months of ongoing research after trip",
          "Custom itinerary built around your family",
          "Priority support & dedicated concierge",
          "Free priority worldwide shipping",
        ],
        featured: false,
        cta: "Choose Legacy",
      },
    ],
  },
  ru: {
    tag: "Выберите свой опыт",
    h2a: "Три путешествия,",
    h2b: "одна Армения",
    badge: "Самый популярный",
    items: [
      {
        name: "Начало пути",
        price: "$2,500",
        per: "за человека · 4 дня",
        desc: "Ваш первый шаг в Армению. Короткое путешествие, охватывающее главное — деревенская жизнь, лес, еда и культура.",
        features: [
          "Базовое генеалогическое исследование",
          "Посещение 1 деревни или региона",
          "Личный гид и водитель",
          "Погружение в армянскую кухню (полдня)",
          "Фотогалерея (100+ фото)",
          "Предварительный отчёт об исследовании",
          "Транспорт из Еревана включён",
        ],
        featured: false,
        cta: "Выбрать пакет",
      },
      {
        name: "Путешествие к наследию",
        price: "$4,500",
        per: "за человека · 7 дней",
        desc: "Полный опыт Армении. Глубокое исследование, несколько регионов, ночёвки в деревне, лес, винный маршрут и книга обо всём, что вы открыли.",
        features: [
          "Глубокое архивное исследование (8 недель)",
          "Посещение нескольких деревень и регионов",
          "Ночёвка в лесу Дилижана",
          "Винный и абрикосовый маршрут в Арени",
          "Кулинарный мастер-класс",
          "ДНК-тест включён",
          "Поиск родственников или местной семьи",
          "Личный фотограф на протяжении всего пути",
          "Книга наследия в твёрдой обложке",
          "Кинематографическое видео",
          "Бесплатная доставка книги по миру",
        ],
        featured: true,
        cta: "Выбрать пакет",
      },
      {
        name: "Семейное наследие",
        price: "$8,000+",
        per: "группа 2–6 чел · 10 дней",
        desc: "Полная история Армении для всей семьи. Многоветочное исследование, роскошное размещение, встреча с дальними родственниками и две книги наследия.",
        features: [
          "Многоветочное семейное исследование",
          "Все впечатления пакета «Наследие»",
          "Роскошное бутик-размещение",
          "Ночёвка на озере Севан",
          "Организация встречи с родственниками",
          "2 книги наследия в твёрдой обложке",
          "Документальный фильм о путешествии",
          "3 месяца продолжения исследований",
          "Индивидуальный маршрут",
          "Приоритетная поддержка и консьерж",
          "Приоритетная доставка по миру",
        ],
        featured: false,
        cta: "Выбрать пакет",
      },
    ],
  },
  hy: {
    tag: "Entrek dzer porzdaгutiunny",
    h2a: "Yerek chanaparhordutуun,",
    h2b: "mek Hayastan",
    badge: "Amenataratvats",
    items: [
      {
        name: "Armatneri skizb",
        price: "$2,500",
        per: "mek hogi · 4 or",
        desc: "Dzer arajin qaylum Hayastan: Karch chanaparhordutуun, vor nерaryum e gyughаkаn kуanq, аntaр, kerakur ev mashakuyt:",
        features: [
          "Himnakayn arhivayin hetazotutуun",
          "1 gyughi kam regioni ayts",
          "Andznakin ughektsord ev varoрd",
          "Hayаkаn khohanotsayin (kes or)",
          "Lusankаrner (100+)",
          "Hetazotutуan nakhnayin zekyуyt",
          "Transport Erevanits neraryalvats",
        ],
        featured: false,
        cta: "Entrel pakety",
      },
      {
        name: "Zharаngutyan chanaparhordutуun",
        price: "$4,500",
        per: "mek hogi · 7 or",
        desc: "Hayastani lriv porzdaрutiuny: Khor hetazotutуun, mets regionner, gyughаkаn kenats, antar, gini ev mek geghetsik girk:",
        features: [
          "Khor аrhivayin hetazotutуun (8 shabat)",
          "Mets gyughneri ev regioneri ayts",
          "Gisher Dilijani antrum",
          "Ginu ev tsirani ertugi Areniуm",
          "Hayаkаn khohanotsayin varparanutуun",
          "DNT test neraryalvats",
          "Hаrazatneri orоnum",
          "Аndznakin lusankаrich",
          "Zharangutyan girk kosht kazmov",
          "Kinomategrakayn video",
          "Anvardz arakyum ashkharhum",
        ],
        featured: true,
        cta: "Entrel pakety",
      },
      {
        name: "Yntanekаyin zharangutуun",
        price: "$8,000+",
        per: "2–6 hogi · 10 or",
        desc: "Hayastani lriv patmutуuny dzer amboghj yntaniqi hamar: Bazmashaкh hetazotutуun, lux kenats ev erku zharangutyan girk:",
        features: [
          "Bazmashaкh yntanekayin hetazotutуun",
          "Zharangutyan chanaparhordutуan amboghj porzdaрutiunnera",
          "Luxe butik kenats",
          "Gisher Sevan lchin mot",
          "Hazaratneri handipumy kazmakerpum",
          "2 zharangutyan girk neraryalvats",
          "Vaveragrakayn film",
          "3 amsе hetazotutуan sharunаkutуun",
          "Anhatat ertugi kazmakerpum",
          "Anhatat satarаrakutуun",
          "Arajnayin arakyum ashkharhum",
        ],
        featured: false,
        cta: "Entrel pakety",
      },
    ],
  },
};

export default function Packages() {
  const { locale } = useLang();
  const data = packagesData[locale as keyof typeof packagesData] ?? packagesData.en;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="packages" className="py-24 px-6 lg:px-16" style={{ background: "#FDF0E6" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#E8721A" }}>{data.tag}</span>
          </div>
          <h2 className="font-playfair font-bold leading-tight" style={{ fontSize: "clamp(28px,4vw,52px)", color: "#2C1810" }}>
            <em className="font-playfair" style={{ color: "#E8721A", fontStyle: "italic" }}>{data.h2a}</em><br />{data.h2b}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {data.items.map((pkg, i) => (
            <div key={pkg.name} className="rounded-3xl overflow-hidden transition-transform hover:-translate-y-1 flex flex-col"
              style={{ background: pkg.featured ? "#2C1810" : "white", border: pkg.featured ? "none" : "1px solid rgba(200,160,120,0.2)", position: "relative" }}>
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-4 py-1.5 rounded-full text-white whitespace-nowrap z-10"
                  style={{ background: "#E8721A", fontSize: 10 }}>{data.badge}</div>
              )}
              <div className="p-8 pb-6 flex-1 flex flex-col">
                <div className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: pkg.featured ? "#F5A65B" : "#8C8078" }}>{pkg.name}</div>
                <div className="font-playfair font-bold leading-none mb-1" style={{ fontSize: 44, color: pkg.featured ? "white" : "#2C1810" }}>{pkg.price}</div>
                <div className="text-xs mb-4" style={{ color: pkg.featured ? "rgba(255,255,255,0.45)" : "#8C8078" }}>{pkg.per}</div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: pkg.featured ? "rgba(255,255,255,0.6)" : "#5C3D2E" }}>{pkg.desc}</p>
                <div className="h-px mb-6" style={{ background: pkg.featured ? "rgba(255,255,255,0.1)" : "rgba(200,160,120,0.25)" }} />
                <ul className="flex flex-col gap-2.5 mb-8 list-none flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: pkg.featured ? "rgba(255,255,255,0.75)" : "#5C3D2E" }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
                        style={{ background: pkg.featured ? "rgba(232,114,26,0.25)" : "rgba(59,107,42,0.1)", color: pkg.featured ? "#F5A65B" : "#3B6B2A" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block text-center rounded-full py-3.5 text-sm font-medium transition-all mt-auto"
                  style={{ background: pkg.featured ? "#E8721A" : "transparent", color: pkg.featured ? "white" : "#2C1810",
                    border: pkg.featured ? "none" : "1px solid rgba(200,160,120,0.4)", textDecoration: "none" }}
                  onMouseEnter={e => { if (pkg.featured) (e.currentTarget as HTMLElement).style.background = "#C45A0A"; else (e.currentTarget as HTMLElement).style.borderColor = "#E8721A"; }}
                  onMouseLeave={e => { if (pkg.featured) (e.currentTarget as HTMLElement).style.background = "#E8721A"; else (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,160,120,0.4)"; }}>
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
