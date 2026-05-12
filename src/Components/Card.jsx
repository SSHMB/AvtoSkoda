import { useState } from "react";
import db from "../db.json";

const CAR_SVG = ({ color = "#1a1a1a" }) => (
    <svg viewBox="0 0 340 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
        <ellipse cx="170" cy="138" rx="155" ry="12" fill="rgba(0,0,0,0.10)" />
        {/* Body */}
        <path d="M30 105 Q38 78 80 65 L115 45 Q140 33 170 30 Q200 33 225 45 L260 65 Q302 78 310 105 L318 120 Q318 130 308 130 L32 130 Q22 130 22 120 Z" fill={color} />
        {/* Roof */}
        <path d="M112 65 Q138 28 170 24 Q202 28 228 65 Z" fill={color} />
        <path d="M116 65 Q142 32 170 27 Q198 32 224 65" fill="rgba(255,255,255,0.10)" />
        {/* Windows */}
        <path d="M120 63 Q140 36 164 32 L164 63 Z" fill="#9ec8e0" opacity="0.82" />
        <path d="M220 63 Q200 36 176 32 L176 63 Z" fill="#9ec8e0" opacity="0.82" />
        <rect x="167" y="32" width="6" height="31" fill="#9ec8e0" opacity="0.82" />
        {/* Wheels */}
        <circle cx="88" cy="130" r="24" fill="#111" />
        <circle cx="88" cy="130" r="14" fill="#444" />
        <circle cx="88" cy="130" r="6" fill="#888" />
        <circle cx="252" cy="130" r="24" fill="#111" />
        <circle cx="252" cy="130" r="14" fill="#444" />
        <circle cx="252" cy="130" r="6" fill="#888" />
        {/* Headlights */}
        <ellipse cx="311" cy="100" rx="7" ry="4" fill="#fffbe0" opacity="0.85" />
        <ellipse cx="29" cy="100" rx="7" ry="4" fill="#fffbe0" opacity="0.85" />
        {/* Grille */}
        <rect x="295" y="107" width="18" height="10" rx="2" fill="#111" opacity="0.45" />
        <rect x="27" y="107" width="18" height="10" rx="2" fill="#111" opacity="0.45" />
        {/* Door line */}
        <line x1="165" y1="65" x2="162" y2="128" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" />
        <line x1="175" y1="65" x2="178" y2="128" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" />
        {/* Shine */}
        <path d="M122 70 Q155 55 200 53" stroke="rgba(255,255,255,0.28)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* City silhouette bg */}
        <rect x="60" y="55" width="8" height="30" fill="rgba(200,200,200,0.13)" />
        <rect x="72" y="45" width="6" height="40" fill="rgba(200,200,200,0.10)" />
        <rect x="255" y="50" width="7" height="35" fill="rgba(200,200,200,0.10)" />
        <rect x="266" y="40" width="5" height="45" fill="rgba(200,200,200,0.13)" />
    </svg>
);

const gifts = [
    { icon: "🔧", label: "Оборудование в подарок" },
    { icon: "🛡️", label: "КАСКО в подарок" },
    { icon: "🔘", label: "Комплект резины в подарок" },
];

const formatMoney = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const cars = db.cars.slice(0, 12).map((car) => {
    const [brand, ...rest] = car.name.split(" ");
    return {
        ...car,
        brand,
        model: rest.join(" ") || car.name,
        credit: Math.max(12000, Math.round(car.price * 0.045)),
        discount: 300000,
        specs: [
            { icon: "⚙️", label: car.korobka || "Автомат" },
            { icon: "🚘", label: car.kuzov || "Седан" },
            { icon: "🛠️", label: car.dvigatel || "2.0L" },
            { icon: "📄", label: "ПТС в наличии" },
        ],
    };
});

function CarCard({ car, featured }) {
    const [liked, setLiked] = useState(false);
    const [compared, setCompared] = useState(false);

    return (
        <div
            className={`bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl ${featured
                    ? "ring-2 ring-purple-500 shadow-xl scale-[1.01]"
                    : "shadow-md hover:scale-[1.01]"
                }`}
        >
            {/* Header */}
            <div className="p-4 pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-black text-sm">{car.brand}</div>
                        <div className="font-bold text-black text-base leading-tight">{car.model}</div>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                        <button
                            onClick={() => setLiked(!liked)}
                            className={`text-lg transition ${liked ? "text-red-500" : "hover:text-red-400"}`}
                        >♡</button>
                        <button
                            onClick={() => setCompared(!compared)}
                            className={`text-lg transition ${compared ? "text-blue-500" : "hover:text-blue-400"}`}
                        >⊘</button>
                    </div>
                </div>

                {/* Badges */}
                <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">Предложение дня</span>
                    <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded">
                        Выгода до {car.discount} ₽
                    </span>
                </div>
            </div>

            {/* Image + gifts */}
            <div className="relative px-4 pt-2">
                {/* Gifts */}
                <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
                    {gifts.map((g, i) => (
                        <div key={i} className="flex items-center gap-1 bg-red-600 text-white text-[10px] font-semibold px-2 py-1 rounded-lg shadow-lg">
                            <span>{g.icon}</span>
                            <span className="leading-tight">{g.label}</span>
                        </div>
                    ))}
                </div>

                {/* Car image */}
                <div className="overflow-hidden rounded-[28px] shadow-xl mt-3">
                    <img src={car.img} alt={car.name} className="w-full h-56 object-cover" />
                </div>
            </div>

            {/* Price */}
            <div className="px-4 pt-4 pb-1 flex flex-col gap-1">
                <div className="text-xs text-gray-500">от {formatMoney(car.price)} ₽</div>
                <div className="text-lg font-bold text-gray-900">Кредит от {formatMoney(car.credit)} ₽/мес.</div>
            </div>

            {/* Specs */}
            <div className="px-4 pb-3 grid grid-cols-2 gap-3 text-xs text-gray-600">
                {car.specs.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-2xl px-3 py-2">
                        <span>{s.icon}</span>
                        <span>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="px-4 pb-4 flex gap-0 mt-auto">
                <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-l-full transition flex-1">
                    Резерв онлайн
                </button>
                <button className="bg-gray-800 hover:bg-gray-900 text-white text-xs font-semibold px-4 py-2 transition flex-1">
                    Купить
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2 rounded-r-full transition flex-1">
                    Подробнее
                </button>
            </div>
        </div>
    );
}

export default function CarCatalog() {
    const [visibleCount, setVisibleCount] = useState(6);

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
                Автомобили в наличии с ПТС
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cars.slice(0, visibleCount).map((car, idx) => (
                    <CarCard key={idx} car={car} featured={idx === 1} />
                ))}
            </div>

            {visibleCount < cars.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setVisibleCount((v) => Math.min(cars.length, v + 3))}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-16 py-3 rounded-lg transition shadow-lg hover:shadow-red-200 active:scale-95 text-sm tracking-widest"
                    >
                        ПОКАЗАТЬ ЕЩЁ
                    </button>
                </div>
            )}
        </div>
    );
}