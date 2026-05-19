import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  GitCompare,
  Phone,
  ChevronDown,
  Star,
  ShoppingCart,
  Search,
  Menu,
  Zap,
  Settings,
  CreditCard,
  Clock,
  CheckCircle,
  ArrowRight,
  X,
} from "lucide-react";

const BRANDS = [
  { name: "Kia", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCmK-ot2oK_nqlmYfAnTkzvS91ViUY2-qJw&s" },
  { name: "Brilliance", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedGhObyImCdyTz04Pk-i3gWchd3XBzC3m6Q&s" },
  { name: "Citroen", logo: "https://thumbs.dreamstime.com/z/citroen-logo-editorial-illustrative-white-background-logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-210441874.jpg" },
  { name: "Ford", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5ybJ3BnhnTG99W_YbQb8_KyuMHHx9MZkQw&s" },
  { name: "Haima", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6G0WDVGY2-7aXihJ-5jJyUhg3lM-bdNdXg&s" },
  { name: "Lifan", logo: "https://koleso.ru/articles/wp-content/uploads/2023/07/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-2.jpg" },
  { name: "Peugeot", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Peugeot_2021_Logo.svg/1280px-Peugeot_2021_Logo.svg.png" },
  { name: "UAZ", logo: "https://cdn.worldvectorlogo.com/logos/uaz.svg" },
  { name: "Hyundai", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_I1YnqSct9R9IKSxRQdj9ZeES5B6Tgar1Sg&s" },
  { name: "Changan", logo: "https://i.pinimg.com/736x/29/ca/d0/29cad0b32b66a34dcacc0094b8948e2a.jpg" },
  { name: "Datsun", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMuZ2DgKoIiWg14RhQZD_yE2aTFT3l5hmEQ&s" },
  { name: "Foton", logo: "https://1000logos.net/wp-content/uploads/2021/01/Foton-emblem.png" },
  { name: "Haval", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa5ZXH31ZU-LvHgOeaAvhDRRVtxg5Q89oDA&s" },
  { name: "Mazda", logo: "https://logos-world.net/wp-content/uploads/2020/05/Mazda-Logo.png" },
  { name: "Ravon", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNOtQrXjpFf2a_BsC93ew6VBhtjNdDn6XFw&s" },
  { name: "Zotye", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqroYbCD3U9s6xxomYcBdVJAhqXF-dtkgyQ&s" },
  { name: "Skoda", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ByNtlXDYZrQ8A2z59C43R1_447nBTaSkfQ&s" },
  { name: "Chery", logo: "https://cdn.renderhub.com/3d-logoman/chery-logo-1/chery-logo-1-01.jpg" },
  { name: "Dongfeng", logo: "https://koleso.ru/articles/wp-content/uploads/2023/07/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-5.jpg" },
  { name: "GAC", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTij_IZhkIYTlR6sCOeAoaGVcdboeBfzfoRTg&s" },
  { name: "Honda", logo: "https://i.pinimg.com/736x/da/9c/a5/da9ca5610b6a94b59294e9cc37657cb1.jpg" },
  { name: "Mitsubishi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mitsubishi_logo.svg/960px-Mitsubishi_logo.svg.png" },
  { name: "Renault", logo: "https://1000logos.net/wp-content/uploads/2021/03/Renault-logo.png" },
  { name: "Volkswagen", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMp83COMkOw05zlNZ1xF602rs6Z2fhvzhew&s" },
  { name: "CheryExeed", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfd_aLx13_8THNtRKodLbMdqOyJoUAiACHA&s" },
  { name: "DW Hower", logo: "https://www.hower-nsk.ru/wp-content/themes/hower/img/logo_w_1422.png" },
  { name: "Geely", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUjssr17PTEFS8UkF1-KV09rSRm_aXQjR3w&s" },
  { name: "JAC", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrWR_208fOakkYaEJocw5U3tMZhgmRRnIAg&s" },
  { name: "Nissan", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Nissan_logo.jpg" },
  { name: "SsangYong", logo: "https://w7.pngwing.com/pngs/945/584/png-transparent-ssangyong-motor-ssangyong-rexton-car-ssangyong-korando-car-text-logo-vehicle-thumbnail.png" },
  { name: "Toyota", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnG49Ht9722p0eCdIwm0YoZj0IGBzmI5D49Q&s" },
  { name: "Chevrolet", logo: "https://logos-world.net/wp-content/uploads/2021/03/Chevrolet-Logo.png" },
  { name: "FAW", logo: "https://upload.wikimedia.org/wikipedia/ru/d/dd/FAW_%28%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%29.png" },
  { name: "Great Wall", logo: "https://i.pinimg.com/736x/14/52/c9/1452c93bda830f1364b950533deca6e5.jpg" },
  { name: "Lada", logo: "https://cdn.worldvectorlogo.com/logos/lada-logo.svg" },
  { name: "Opel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Opel-Logo_2017.png" },
  { name: "Suzuki", logo: "https://www.globalsuzuki.com/globalnews/2025/img/0922.jpg" },
];

const FOOTER_LINKS = {
  "КАТАЛОГ АВТО": ["Все", "Hyundai", "Kia", "Volkswagen", "Skoda", "Audi", "BMW"],
  "АВТ О ПРОГРАМ": ["Трейд-ин", "Кредит", "Лизинг", "Страхование"],
  "КРЕДИТ И РАССРОЧКА": ["Калькулятор", "Заявка на кредит", "Партнёры банки"],
  "КОНТАКТЫ": ["Москва, ул. Примерная, 1", "+7 (903) 551-54-31", "info@abcauto.ru"],
};

function NavLink({ label }) {
  return (
    <button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
      {label}
      <ChevronDown size={14} className="text-gray-500" />
    </button>
  );
}

function BrandLogo({ brand, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all cursor-pointer gap-1
        ${active
          ? "border-red-500 bg-red-50"
          : "border-gray-200 bg-white hover:border-red-300 hover:bg-red-50"
        }`}
      style={{ minWidth: 72, minHeight: 60 }}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="w-8 h-8 object-contain"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "block";
        }}
      />
      <span className="text-[10px] font-bold text-gray-700 hidden" style={{ display: "none" }}>
        {brand.name.substring(0, 2).toUpperCase()}
      </span>
      <span className="text-[10px] text-gray-500 leading-none">{brand.name}</span>
    </button>
  );
}

function StatusBadge({ status }) {
  return (
    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
      {status}
    </span>
  );
}

function CarSpec({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-gray-600">
      <Icon size={12} className="text-red-500 flex-shrink-0" />
      <span>{label}</span>
    </div>
  );
}

function CarCard({ car, onLikeToggle, initialLiked }) {
  // ✅ localStorage dan boshlang'ich liked holat
  const [liked, setLiked] = useState(initialLiked);
  const [compared, setCompared] = useState(false);

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onLikeToggle(car, newLiked);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative">
        <div className="h-40 relative overflow-hidden bg-gray-100">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80";
            }}
          />
          <div className="absolute top-2 left-2">
            <StatusBadge status={car.status} />
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            <button
              onClick={handleLike}
              className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all
                ${liked
                  ? "bg-red-500 border-red-500 text-white"
                  : "bg-white border-gray-300 text-gray-400 hover:border-red-400"
                }`}
            >
              <Heart size={13} fill={liked ? "currentColor" : "none"} />
            </button>
            <button
              onClick={() => setCompared(!compared)}
              className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all
                ${compared
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "bg-white border-gray-300 text-gray-400 hover:border-blue-400"
                }`}
            >
              <GitCompare size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-bold text-gray-900 text-sm leading-tight">
          {car.brand} {car.model}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{car.spec}</p>

        <div className="grid grid-cols-2 gap-1 mb-3">
          <CarSpec icon={Zap} label={car.fuel} />
          <CarSpec icon={Settings} label={car.transmission} />
          <CarSpec icon={Clock} label={car.mileage} />
          <CarSpec icon={CheckCircle} label={car.color} />
        </div>

        <div className="border-t pt-2 mb-3">
          <p className="text-lg font-extrabold text-gray-900 leading-tight">
            от {car.price} <span className="text-sm font-normal">₽</span>
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
            <CreditCard size={11} className="text-red-500" />
            Кредит от {car.credit} ₽/мес
          </p>
        </div>

        <div className="flex gap-1">
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1.5 rounded transition-colors">
            Узнать цену
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-1.5 rounded transition-colors">
            Купить
          </button>
          <button className="px-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-1.5 rounded transition-colors">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AbcAutoCatalog({ cars = [] }) {
  const navigate = useNavigate();
  const [activeBrand, setActiveBrand] = useState(null);
  const [priceMax, setPriceMax] = useState(500000);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // ✅ localStorage dan o'qib boshlanadi
  const [likedCars, setLikedCars] = useState(() => {
    return JSON.parse(localStorage.getItem("likedCars") || "[]");
  });

  // ✅ cartCount ham localStorage dan
  const [cartCount, setCartCount] = useState(() => {
    return JSON.parse(localStorage.getItem("likedCars") || "[]").length;
  });

  const handleLikeToggle = (car, isLiked) => {
    setLikedCars((prev) => {
      const updated = isLiked
        ? [...prev, car]
        : prev.filter((c) => c.id !== car.id);
      // ✅ localStorage ga saqlanadi
      localStorage.setItem("likedCars", JSON.stringify(updated));
      setCartCount(updated.length);
      return updated;
    });
  };

  const goToIzbrannoe = () => {
    navigate("/izbrannoe");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="bg-gray-900 text-white text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="hidden md:flex items-center gap-4 text-gray-400">
              <span className="hover:text-white cursor-pointer transition-colors">Подбор авто</span>
              <span className="hover:text-white cursor-pointer transition-colors">Технический</span>
              <span className="hover:text-white cursor-pointer transition-colors">Страхование</span>
              <span className="hover:text-white cursor-pointer transition-colors">Отзывы</span>
              <span className="hover:text-white cursor-pointer transition-colors">Блог</span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <a href="tel:+79035515431" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
                <Phone size={12} />
                <span className="font-medium">+7 (903) 551-54-31</span>
              </a>
              <a href="tel:+71234567890" className="text-gray-400 hover:text-white transition-colors hidden sm:block">
                +7 (123) 456-78-90
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-black text-xs leading-none text-center">ABC<br />AUTO</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-black tracking-widest text-gray-900 leading-none">ABC AUTO</p>
              <p className="text-[9px] text-red-600 font-medium tracking-wider">ОФИЦИАЛЬНЫЙ ДИЛЕР</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-5 flex-1">
            <NavLink label="КАТАЛОГ АВТО" />
            <NavLink label="АВТО С ПРОБЕГОМ" />
            <NavLink label="КРЕДИТ И РАССРОЧКА" />
            <NavLink label="СПЕЦПРЕДЛОЖЕНИЯ" />
            <NavLink label="ТАКСИ В КРЕДИТ" />
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <button className="text-gray-600 hover:text-red-600 transition-colors">
              <Search size={18} />
            </button>

            {/* ✅ Savatcha tugmasi */}
            <button
              onClick={goToIzbrannoe}
              className="relative text-gray-600 hover:text-red-600 transition-colors"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="hidden sm:flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors">
              <CreditCard size={13} />
              <span>КУПИТЬ В КРЕДИТ</span>
            </button>
            <button
              className="md:hidden text-gray-600"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
            {["КАТАЛОГ АВТО", "АВТО С ПРОБЕГОМ", "КРЕДИТ И РАССРОЧКА", "СПЕЦПРЕДЛОЖЕНИЯ"].map(item => (
              <div key={item} className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-800">{item}</span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            ))}
          </div>
        )}
      </header>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <p className="text-xs text-gray-400">
            Главная <span className="mx-1">›</span> <span className="text-gray-700">Каталог авто</span>
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-black text-gray-900 mb-6">Каталог авто</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex flex-wrap gap-2">
              {BRANDS.map((brand) => (
                <BrandLogo
                  key={brand.name}
                  brand={brand}
                  active={activeBrand === brand.name}
                  onClick={() => setActiveBrand(activeBrand === brand.name ? null : brand.name)}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 text-base mb-4">Быстрый подбор авто</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Цена</span>
                  <span className="text-sm font-semibold text-gray-900">
                    0 — {priceMax >= 1000000
                      ? (priceMax / 1000000).toFixed(1).replace(".0", "") + "м"
                      : (priceMax / 1000).toFixed(0) + "т"} ₽
                  </span>
                </div>
                <div className="relative mb-3">
                  <input
                    type="range"
                    min={0}
                    max={3000000}
                    step={100000}
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="w-full h-1 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${(priceMax / 3000000) * 100}%, #e5e7eb ${(priceMax / 3000000) * 100}%, #e5e7eb 100%)`,
                      WebkitAppearance: "none",
                    }}
                  />
                  <style>{`
                    input[type=range]::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      width: 18px; height: 18px;
                      border-radius: 50%;
                      background: #dc2626;
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 1px 4px rgba(0,0,0,0.25);
                    }
                    input[type=range]::-moz-range-thumb {
                      width: 18px; height: 18px;
                      border-radius: 50%;
                      background: #dc2626;
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 1px 4px rgba(0,0,0,0.25);
                    }
                  `}</style>
                </div>
                <div className="flex justify-between">
                  {[0, "500т", "800т", "1,1м", "1,4м", "1,7м", "2м", "2,3м", "2,7м", "3м"].map((label) => (
                    <span key={label} className="text-[9px] text-gray-400">{label}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <select className="w-full border text-gray-700 border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 bg-white appearance-none cursor-pointer">
                    <option>Тип кузова</option>
                    <option>Седан</option>
                    <option>Хэтчбек</option>
                    <option>Универсал</option>
                    <option>Внедорожник</option>
                    <option>Купе</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
                <div className="flex-1 relative">
                  <select className="w-full border text-gray-700 border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 bg-white appearance-none cursor-pointer">
                    <option>Коробка</option>
                    <option>Механика</option>
                    <option>Автомат</option>
                    <option>Робот</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg text-sm tracking-wider transition-colors">
                ПОКАЗАТЬ {cars.length}
              </button>
            </div>
          </div>
        </div>

        {cars.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium text-sm">Машины не найдены</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {cars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                // ✅ localStorage dagi liked holatni uzatamiz
                initialLiked={likedCars.some((c) => c.id === car.id)}
                onLikeToggle={handleLikeToggle}
              />
            ))}
          </div>
        )}

        <div className="text-center mb-12">
          <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-gray-800 text-white font-bold px-8 py-3 rounded transition-colors">
            ПОКАЗАТЬ ЕЩЁ
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-12">
          <h2 className="text-xl font-black text-gray-900 mb-3">Заголовок</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
          <h3 className="text-base font-bold text-gray-900 mb-2">Подзаголовок</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2021 Автосалон ABC AUTO. Официальный дилер
            </p>
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={12} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-900 font-bold text-sm">5.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}