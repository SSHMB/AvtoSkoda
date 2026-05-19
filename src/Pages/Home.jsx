import CarCatalog from "../Components/Card";
import Collections from "../Components/Collections";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PromoBannerDaisy from "../Components/Promobanne";
import Antiqa from "../Components/Antiqa";
import AutoKredit from "../Components/AutoKredit";
import Otzivlar from "../Components/Otzivlar";
import Footer from "../Components/Footer";


const slides = [
  {
    badge: "Qoldi atigi 10 avto!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    bg: "from-gray-100 to-gray-200",
    carColor: "#CC0000",
  },
  {
    badge: "Maxsus taklif!",
    title: "Yangi modellar — eng yaxshi narxlarda!",
    subtitle: "Bugun buyurtma bering!",
    bg: "from-slate-100 to-slate-200",
    carColor: "#1a1a2e",
  },
  {
    badge: "Kredit 0%!",
    title: "Avtomobildagi eng qulay kreditlar!",
    subtitle: "Hoziroq ariza topshiring!",
    bg: "from-red-50 to-red-100",
    carColor: "#8B0000",
  },
];

const brands = [
  { name: "Kia", logo: "🚗" },
  { name: "Hyundai", logo: "🚙" },
  { name: "Skoda", logo: "🚘" },
  { name: "Volkswagen", logo: "🚗" },
  { name: "Toyota", logo: "🚙" },
  { name: "Brilliance", logo: "🚘" },
  { name: "Changan", logo: "🚗" },
  { name: "Chery", logo: "🚙" },
  { name: "CheryExeed", logo: "🚘" },
  { name: "Chevrolet", logo: "🚗" },
  { name: "Citroen", logo: "🚙" },
  { name: "Datsun", logo: "🚘" },
  { name: "Dongfeng", logo: "🚗" },
  { name: "DW Hower", logo: "🚙" },
  { name: "FAW", logo: "🚘" },
  { name: "Ford", logo: "🚗" },
  { name: "Foton", logo: "🚙" },
  { name: "GAC", logo: "🚘" },
  { name: "Geely", logo: "🚗" },
  { name: "Great Wall", logo: "🚙" },
  { name: "Haima", logo: "🚘" },
  { name: "Haval", logo: "🚗" },
  { name: "Honda", logo: "🚙" },
  { name: "JAC", logo: "🚘" },
  { name: "Lada", logo: "🚗" },
  { name: "Lifan", logo: "🚙" },
  { name: "Mazda", logo: "🚘" },
  { name: "Mitsubishi", logo: "🚗" },
  { name: "Nissan", logo: "🚙" },
  { name: "Opel", logo: "🚘" },
  { name: "Peugeot", logo: "🚗" },
  { name: "Ravon", logo: "🚙" },
  { name: "Renault", logo: "🚘" },
  { name: "SsangYong", logo: "🚗" },
  { name: "Suzuki", logo: "🚙" },
  { name: "UAZ", logo: "🚘" },
  { name: "Zotye", logo: "🚗" },
];

const toBrandSlug = (name) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const bodyTypes = ["Sedan", "SUV", "Hatchback", "Minivan", "Pickup", "Coupe"];
const gearTypes = ["Avtomat", "Mexanik", "Variator", "Robot"];

const headerLinks = [
  { label: "Подбор авто", href: "#podbor" },
  { label: "О компании", href: "#company" },
  { label: "Техцентр", href: "#techcenter" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const CAR_SVG = ({ color = "#CC0000" }) => (
  <svg viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
    <ellipse cx="260" cy="200" rx="230" ry="18" fill="rgba(0,0,0,0.13)" />
    {/* Body */}
    <path d="M60 155 Q70 120 120 105 L170 80 Q200 65 260 60 Q320 65 350 80 L400 105 Q450 120 460 155 L470 175 Q470 185 460 185 L60 185 Q50 185 50 175 Z" fill={color} />
    {/* Roof */}
    <path d="M165 105 Q195 60 260 55 Q325 60 355 105 Z" fill={color} />
    <path d="M170 105 Q200 68 260 63 Q320 68 350 105" fill="rgba(255,255,255,0.13)" />
    {/* Windows */}
    <path d="M178 103 Q200 72 248 68 L248 103 Z" fill="#b8d4e8" opacity="0.85" />
    <path d="M342 103 Q320 72 272 68 L272 103 Z" fill="#b8d4e8" opacity="0.85" />
    <rect x="252" y="68" width="16" height="35" fill="#b8d4e8" opacity="0.85" />
    {/* Wheels */}
    <circle cx="140" cy="185" r="32" fill="#222" />
    <circle cx="140" cy="185" r="20" fill="#555" />
    <circle cx="140" cy="185" r="10" fill="#888" />
    <circle cx="380" cy="185" r="32" fill="#222" />
    <circle cx="380" cy="185" r="20" fill="#555" />
    <circle cx="380" cy="185" r="10" fill="#888" />
    {/* Headlights */}
    <ellipse cx="462" cy="150" rx="10" ry="6" fill="#fffbe0" opacity="0.9" />
    <ellipse cx="58" cy="150" rx="10" ry="6" fill="#fffbe0" opacity="0.9" />
    {/* Grille */}
    <rect x="440" y="155" width="25" height="14" rx="3" fill="#111" opacity="0.5" />
    <rect x="55" y="155" width="25" height="14" rx="3" fill="#111" opacity="0.5" />
    {/* Door lines */}
    <line x1="253" y1="105" x2="248" y2="183" stroke="rgba(0,0,0,0.18)" strokeWidth="2" />
    <line x1="267" y1="105" x2="272" y2="183" stroke="rgba(0,0,0,0.18)" strokeWidth="2" />
    {/* Shine */}
    <path d="M180 110 Q220 90 280 88" stroke="rgba(255,255,255,0.35)" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export default function AbcAuto() {
  const [current, setCurrent] = useState(0);
  const [priceRange, setPriceRange] = useState(500);
  const [bodyType, setBodyType] = useState("");
  const [gearType, setGearType] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const intervalRef = useRef(null);

  const maxPrice = 3000;

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (idx) => {
    clearInterval(intervalRef.current);
    setCurrent(idx);
    startAuto();
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const formatPrice = (val) => {
    if (val >= 1000) return (val / 1000).toFixed(1).replace(".0", "") + "м";
    return val + "т";
  };

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Top bar */}
      <div className="bg-gray-100 text-xs text-gray-600 px-4 py-1 flex justify-between items-center">
        <span>📍 Москва, 38КМ МКАД, 6бс1</span>
        <span>🕐 08:00 – 21:00</span>
        <span>💬 WhatsApp</span>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">A</div>
            <div>
              <div className="font-bold text-sm leading-tight">ABC AUTO</div>
              <div className="text-xs text-gray-500">Официальный дилер</div>
            </div>
            <div className="bg-red-600 text-white text-xs px-2 py-1 rounded ml-2 leading-tight hidden sm:block">
              <div className="font-bold">10 лет</div>
              <div>превосходим</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex gap-5 text-sm text-gray-700">
            {headerLinks.map((item) => (
              <a key={item.label} href={item.href} className={`hover:text-red-600 transition ${item.label === "Подбор авто" ? "text-red-600 font-medium" : ""}`}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <div className="font-bold text-gray-900">+7 (800) 551-94-31</div>
              <div className="text-xs text-gray-500">+7 (495) 292-18-67</div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-2 rounded transition hidden sm:block">
              ОБРАТНЫЙ ЗВОНОК
            </button>
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>

        {/* Sub nav */}
        <div className="hidden lg:flex max-w-7xl mx-auto mt-2 gap-6 text-sm border-t pt-2 items-center">
          {[
            { label: "КАТАЛОГ АВТО", to: "/katalog" },
            { label: "АВТО С ПРОБЕГОМ", to: "/probeg" },
            { label: "КРЕДИТ И РАССРОЧКА", to: "/credit" },
            { label: "СПЕЦПРЕДЛОЖЕНИЯ", to: "/spets" },
            { label: "ТАКСИ В КРЕДИТ", to: "/taksi" },
          ].map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-red-600 text-gray-700 transition font-medium whitespace-nowrap">{n.label}</Link>
          ))}
          <div className="ml-auto flex items-center gap-3 text-gray-600">
            <Link to="/izbrannoe" className="cursor-pointer hover:text-red-600">♡ <sup className="text-red-600 font-bold">10</sup></Link>
            <span className="cursor-pointer hover:text-red-600">🔍</span>
          </div>
        </div>
      </header>

      {/* HERO SWIPER */}
      <div className="relative overflow-hidden bg-gray-100" style={{ height: 360 }}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out bg-linear-to-r ${slide.bg}`}
            style={{
              opacity: idx === current ? 1 : 0,
              transform: `translateX(${(idx - current) * 100}%)`,
              zIndex: idx === current ? 1 : 0,
              transition: "opacity 0.6s, transform 0.6s",
            }}
          >
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between w-full h-full">
              <div className="max-w-md z-10">
                <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-4 animate-pulse">
                  {slide.badge}
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">{slide.title}</h1>
                <p className="text-gray-600 text-lg mb-6">{slide.subtitle}</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition shadow-lg">
                  Узнать цену →
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-center pb-4 pr-8">
                <CAR_SVG color={slide.carColor} />
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow flex items-center justify-center text-gray-700 transition"
        >‹</button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow flex items-center justify-center text-gray-700 transition"
        >›</button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all ${idx === current ? "w-6 h-3 bg-red-600" : "w-3 h-3 bg-gray-400"}`}
            />
          ))}
        </div>
      </div>




      <div id="podbor" className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 scroll-mt-24">

        <div className="flex-1">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {brands.map((b) => (
              <Link
                key={b.name}
                to={`/brand/${toBrandSlug(b.name)}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition text-sm text-gray-700 text-left border border-transparent hover:border-red-100"
              >
                <span className="text-base">{b.logo}</span>
                <span className="truncate font-medium">{b.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-gray-200" />

        {/* Quick Filter */}
        <div className="w-full lg:w-72 shrink-0">
          <h2 className="font-bold text-xl text-gray-900 mb-5">Быстрый подбор авто</h2>

          {/* Price Range */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Цена</span>
              <span className="text-sm font-bold text-red-600">0 – {formatPrice(priceRange)}</span>
            </div>

            {/* Custom Range Slider */}
            <div className="relative pt-1">
              <input
                type="range"
                min={0}
                max={maxPrice}
                step={50}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1 appearance-none cursor-pointer rounded"
                style={{
                  background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${(priceRange / maxPrice) * 100}%, #e5e7eb ${(priceRange / maxPrice) * 100}%, #e5e7eb 100%)`,
                  outline: "none",
                }}
              />
              {/* Tick labels */}
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                {[0, 500, 700, "1.1м", "1.4м", "1.7м", "2м", "2.3м", "2.7м", "3м"].map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Body Type */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Тип кузова</label>
            <select
              value={bodyType}
              onChange={(e) => setBodyType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-red-500 bg-white"
            >
              <option value="">Тип кузова</option>
              {bodyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Gear Type */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Коробка</label>
            <select
              value={gearType}
              onChange={(e) => setGearType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-red-500 bg-white"
            >
              <option value="">Коробка</option>
              {gearTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Submit */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-sm transition shadow-lg hover:shadow-red-200 active:scale-95">
            ПОКАЗАТЬ 73
          </button>
        </div>
      </div>

      {/* Range slider custom styles */}
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #DC2626;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(220,38,38,0.4);
          border: 2px solid white;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #DC2626;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(220,38,38,0.4);
          border: 2px solid white;
        }
      `}</style>

      <CarCatalog />
      <Collections />
      <div id="company" className="scroll-mt-24">
        <PromoBannerDaisy />
      </div>
      <Antiqa />
      <div id="techcenter" className="scroll-mt-24">
        <AutoKredit />
      </div>
      <div id="reviews" className="scroll-mt-24">
        <Otzivlar />
      </div>
      <div id="contacts" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-24">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-gray-500 mb-2">Связаться с нами</div>
              <h2 className="text-2xl font-bold text-gray-900">Готовы ответить на любые вопросы</h2>
              <p className="mt-2 text-gray-600">Мы предлагаем помощь в подборе, пробеге, кредитах и сервисе.</p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <a href="tel:+78005519431" className="text-xl font-bold text-red-600">+7 (800) 551-94-31</a>
              <p className="text-sm text-gray-500">+7 (495) 292-18-67</p>
              <button className="bg-red-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-red-700 transition">
                ОБРАТНЫЙ ЗВОНОК
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}