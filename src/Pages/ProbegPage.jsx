import { Link } from "react-router-dom";

export default function ProbegPage() {
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
            <span className="text-red-600 font-bold border-b-2 border-red-600 pb-0.5">АВТО С ПРОБЕГОМ</span>
            <Link to="/credit" className="text-gray-600 hover:text-red-600 transition">КРЕДИТ И РАССРОЧКА</Link>
            <Link to="/spets" className="text-gray-600 hover:text-red-600 transition">СПЕЦПРЕДЛОЖЕНИЯ</Link>
            <Link to="/taksi" className="text-gray-600 hover:text-red-600 transition">ТАКСИ В КРЕДИТ</Link>
          </nav>
          <Link to="/" className="text-sm text-gray-500 hover:text-red-600 transition flex items-center gap-1">
            ← На главную
          </Link>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-red-600">Главная</Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">Авто с пробегом</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-3">Авто с пробегом</h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">Раздел в разработке. Скоро здесь появятся автомобили с пробегом по выгодным ценам.</p>
        <Link to="/katalog" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition">
          Смотреть новые авто →
        </Link>
      </main>
    </div>
  );
}
