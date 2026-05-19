import { Link } from "react-router-dom";

const benefits = [
  { icon: "💰", title: "Кредит от 0%", desc: "Специальные условия для таксистов и каршеринга" },
  { icon: "⚡", title: "Одобрение за 1 час", desc: "Быстрое рассмотрение заявки без лишних документов" },
  { icon: "🚗", title: "Авто в наличии", desc: "Большой выбор автомобилей подходящих для такси" },
  { icon: "🛡️", title: "КАСКО в подарок", desc: "Страховка включена в комплект для таксистов" },
];

export default function TaksiPage() {
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
            <Link to="/spets" className="text-gray-600 hover:text-red-600 transition">СПЕЦПРЕДЛОЖЕНИЯ</Link>
            <span className="text-red-600 font-bold border-b-2 border-red-600 pb-0.5">ТАКСИ В КРЕДИТ</span>
          </nav>
          <Link to="/" className="text-sm text-gray-500 hover:text-red-600 transition">← На главную</Link>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-red-600">Главная</Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">Такси в кредит</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Специальная программа</span>
            <h1 className="text-4xl font-black mb-3">Такси в кредит</h1>
            <p className="text-gray-300 text-lg max-w-lg">Приобретите автомобиль для работы в такси на выгодных условиях. Одобрение без справок о доходах.</p>
            <div className="flex gap-3 mt-6">
              <Link to="/credit" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition">
                Оформить кредит
              </Link>
              <Link to="/katalog" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition border border-white/20">
                Смотреть авто
              </Link>
            </div>
          </div>
          <div className="text-8xl">🚖</div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Преимущества программы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-3">{b.icon}</div>
              <h3 className="font-black text-gray-900 mb-1">{b.title}</h3>
              <p className="text-gray-500 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-2">Оставьте заявку прямо сейчас</h2>
          <p className="text-red-100 mb-6">Наш менеджер свяжется с вами в течение 15 минут</p>
          <a href="tel:+78005519431" className="inline-block bg-white text-red-600 font-black text-lg px-10 py-3 rounded-xl hover:bg-red-50 transition">
            +7 (800) 551-94-31
          </a>
        </div>
      </main>
    </div>
  );
}
