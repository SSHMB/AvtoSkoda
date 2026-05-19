import { Link } from "react-router-dom";
import db from "../db.json";

const formatMoney = (v) => (v ?? 0).toLocaleString("ru-RU");

const spetsCars = (db.cars || []).filter((c) => c.badge_text || c.status === "спецпредложение" || c.status === "предложение дня");

export default function SpetsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-gray-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>📍 Москва, 38КМ МКАД, 6бс1</span>
          <span>+7 (800) 551-94-31</span>
        </div>
      </div>
      <header className="bg-white shadow-sm px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-black text-[10px] leading-none text-center">ABC<br/>AUTO</span>
            </div>
            <div>
              <p className="text-xs font-black tracking-widest text-gray-900">ABC AUTO</p>
              <p className="text-[9px] text-red-600 font-medium tracking-wider">ОФИЦИАЛЬНЫЙ ДИЛЕР</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/katalog" className="text-gray-600 hover:text-red-600 transition">КАТАЛОГ АВТО</Link>
            <Link to="/probeg" className="text-gray-600 hover:text-red-600 transition">АВТО С ПРОБЕГОМ</Link>
            <Link to="/credit" className="text-gray-600 hover:text-red-600 transition">КРЕДИТ И РАССРОЧКА</Link>
            <span className="text-red-600 font-bold border-b-2 border-red-600 pb-0.5">СПЕЦПРЕДЛОЖЕНИЯ</span>
            <Link to="/taksi" className="text-gray-600 hover:text-red-600 transition">ТАКСИ В КРЕДИТ</Link>
          </nav>
          <Link to="/" className="text-sm text-gray-500 hover:text-red-600 transition">← На главную</Link>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-red-600">Главная</Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">Спецпредложения</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-1">Только сейчас</p>
          <h1 className="text-3xl font-black text-gray-900">Спецпредложения</h1>
          <p className="text-gray-500 text-sm mt-1">{spetsCars.length} автомобилей по специальным ценам</p>
        </div>

        {spetsCars.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">Спецпредложения скоро появятся</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {spetsCars.map((car) => (
              <div key={car.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={car.image || car.img}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
                      {car.status}
                    </span>
                    {car.badge_text && (
                      <span className="bg-white/90 backdrop-blur-sm text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                        {car.badge_text}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-3 pb-2.5">
                    <p className="text-white font-black text-lg">от {formatMoney(car.price)} ₽</p>
                    <p className="text-red-300 text-xs">Кредит от {formatMoney(car.credit)} ₽/мес</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{car.brand}</p>
                  <h3 className="font-black text-gray-900 text-base">{car.model}</h3>
                  <p className="text-gray-500 text-xs mt-0.5 mb-3">{car.spec} · {car.year}</p>
                  {car.gifts && car.gifts.length > 0 && (
                    <div className="flex flex-col gap-1 mb-3">
                      {car.gifts.map((g, i) => (
                        <span key={i} className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-lg">🎁 {g}</span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-xl transition">Узнать цену</button>
                    <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold py-2.5 rounded-xl transition">Подробнее</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
