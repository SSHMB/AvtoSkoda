import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Zap, Settings, Clock, CheckCircle, CreditCard } from "lucide-react";

function CarSpec({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-gray-600">
      <Icon size={12} className="text-red-500 flex-shrink-0" />
      <span>{label}</span>
    </div>
  );
}

export default function Izbrannoe() {
  const navigate = useNavigate();

  // ✅ localStorage dan o'qiydi — sahifa yangilansa ham yo'qolmaydi
  const likedCars = JSON.parse(localStorage.getItem("likedCars") || "[]");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Назад</span>
          </button>
          <div className="flex items-center gap-2">
            <Heart size={18} className="text-red-500" fill="currentColor" />
            <h1 className="text-lg font-black text-gray-900">Избранное</h1>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {likedCars.length}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {likedCars.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <Heart size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-semibold text-base">Избранных автомобилей нет</p>
            <p className="text-sm mt-1">Нажмите ❤️ на карточке, чтобы добавить</p>
            <button
              onClick={() => navigate("/katalog")}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Перейти в каталог
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {likedCars.map((car) => (
              <div
                key={car.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 bg-gray-100">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80";
                    }}
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                      {car.status}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
                      <Heart size={13} className="text-white" fill="currentColor" />
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}