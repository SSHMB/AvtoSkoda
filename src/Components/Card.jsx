import { useState } from "react";
import db from "../db.json";

const formatMoney = (value) => (value ?? 0).toLocaleString("ru-RU");

const cars = (db.cars || []).filter(Boolean).slice(0, 12).map((car) => {
  let brand = car.brand;
  let model = car.model;
  if (!brand && car.name) {
    const [first, ...rest] = car.name.split(" ");
    brand = first;
    model = rest.join(" ") || car.name;
  }
  const img = car.img || car.image;
  const credit = car.credit ?? Math.max(12000, Math.round((car.price || 0) * 0.045));
  return {
    ...car,
    brand,
    model,
    img,
    credit,
    discount: 300000,
    specs: [
      { label: car.korobka || car.transmission || "Автомат" },
      { label: car.kuzov || car.spec || "Седан" },
      { label: car.dvigatel || car.fuel || "2.0L" },
      { label: "ПТС в наличии" },
    ],
  };
});

function CarCard({ car, featured }) {
  const [liked, setLiked] = useState(false);
  const [compared, setCompared] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300
        ${featured
          ? "shadow-2xl ring-2 ring-red-500 scale-[1.02]"
          : "shadow-md hover:shadow-xl hover:-translate-y-1"
        }`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide shadow-lg">
            Предложение дня
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
            −{formatMoney(car.discount)} ₽
          </span>
        </div>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all shadow
              ${liked ? "bg-red-500 border-red-500 text-white" : "bg-white/80 border-white/50 text-gray-600 hover:bg-red-50 hover:border-red-300"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
          <button
            onClick={() => setCompared(!compared)}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all shadow
              ${compared ? "bg-blue-500 border-blue-500 text-white" : "bg-white/80 border-white/50 text-gray-600 hover:bg-blue-50 hover:border-blue-300"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
          </button>
        </div>

        {/* Bottom price overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <p className="text-white/70 text-xs">от</p>
          <p className="text-white font-black text-xl leading-tight">{formatMoney(car.price)} ₽</p>
          <p className="text-red-300 text-xs font-medium">Кредит от {formatMoney(car.credit)} ₽/мес</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <div className="mb-3">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{car.brand}</p>
          <h3 className="text-gray-900 font-black text-base leading-tight">{car.model}</h3>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {car.specs.map((s, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-1.5 text-xs text-gray-600 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
              {s.label}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <button className="flex-1 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-sm shadow-red-200">
            Узнать цену
          </button>
          <button className="flex-1 bg-gray-900 hover:bg-gray-800 active:scale-95 text-white text-xs font-semibold py-2.5 rounded-xl transition-all">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CarCatalog() {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section className="bg-gray-50 py-14 px-4">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-10 flex items-end justify-between">
        <div>
          <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-1">В наличии</p>
          <h2 className="text-3xl font-black text-gray-900">Автомобили с ПТС</h2>
          <p className="text-gray-500 text-sm mt-1">{cars.length} автомобилей готовы к выдаче сегодня</p>
        </div>
        <a href="/katalog" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-red-600 transition border border-gray-200 hover:border-red-300 px-4 py-2 rounded-xl">
          Все авто
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cars.slice(0, visibleCount).map((car, idx) => (
          <CarCard key={car.id || idx} car={car} featured={idx === 1} />
        ))}
      </div>

      {visibleCount < cars.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((v) => Math.min(cars.length, v + 3))}
            className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-bold px-10 py-3.5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-200 active:scale-95 text-sm tracking-widest"
          >
            ПОКАЗАТЬ ЕЩЁ
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-y-0.5">
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
