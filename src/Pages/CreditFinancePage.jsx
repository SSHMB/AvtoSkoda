import { useState, useMemo } from 'react';
import logo from '../assets/logo1 1 (1).png';
import group from '../assets/Group.png';
import db from '../db.json';
import { sendToTelegram } from '../utils/sendToTelegram';

const TRANSMISSIONS = ['Автомат', 'Механика', 'Робот', 'Вариатор'];
const YEARS = Array.from({ length: 25 }, (_, i) => new Date().getFullYear() - i);
const GIFTS = ['Коврики в подарок', 'Тонировка', 'Сигнализация', 'Шины в подарок'];

const advantages = [
  { id: 1, value: '0%', text: 'Первоначальный взнос' },
  { id: 2, value: '30 мин', text: 'Ответ кредитных специалистов' },
  { id: 3, value: '1,9%', text: 'Ставка по кредиту' },
  { id: 4, value: '98%', text: 'Одобрение кредита' },
];

export default function CreditFinancePage() {
  const { cars, loanTerm: loanTermCfg } = db.credit;
  const reviews = db.reviews;

  // Блок 1 — Автомобиль
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carConfig, setCarConfig] = useState('');

  const carModels = useMemo(() => cars.find(c => c.brand === carBrand)?.models ?? [], [carBrand]);
  const carConfigs = useMemo(() => carModels.find(m => m.name === carModel)?.configurations ?? [], [carModel, carModels]);

  const handleBrandChange = (val) => { setCarBrand(val); setCarModel(''); setCarConfig(''); };
  const handleModelChange = (val) => { setCarModel(val); setCarConfig(''); };

  // Блок 2 — Кредит
  const [loanPeriod, setLoanPeriod] = useState(loanTermCfg.default);
  const [selectedBank, setSelectedBank] = useState('sber');
  const [downPayment, setDownPayment] = useState('');
  const [discount70k, setDiscount70k] = useState(true);
  const [discount30k, setDiscount30k] = useState(true);

  // Блок 3 — Trade-in
  const [tradeInEnabled, setTradeInEnabled] = useState(true);
  const [tradeInBrand, setTradeInBrand] = useState('');
  const [tradeInModel, setTradeInModel] = useState('');
  const [tradeInConfig, setTradeInConfig] = useState('');
  const [tradeInYear, setTradeInYear] = useState('');
  const [tradeInTransmission, setTradeInTransmission] = useState('');

  const tradeInModels = useMemo(() => cars.find(c => c.brand === tradeInBrand)?.models ?? [], [tradeInBrand]);
  const tradeInConfigs = useMemo(() => tradeInModels.find(m => m.name === tradeInModel)?.configurations ?? [], [tradeInModel, tradeInModels]);

  const handleTradeInBrandChange = (val) => { setTradeInBrand(val); setTradeInModel(''); setTradeInConfig(''); };
  const handleTradeInModelChange = (val) => { setTradeInModel(val); setTradeInConfig(''); };

  // Блок 4 — Персональные данные
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gift, setGift] = useState('');

  // Отправка
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');

  const BANK_LABELS = { sber: 'Сбербанк', vtb: 'ВТБ', alfa: 'Альфа Банк' };

  const handleSubmit = async () => {
    if (!name || !phone) { setSendError('Укажите имя и телефон'); return; }
    setSending(true);
    setSendError('');

    const text = [
      '🚗 <b>Новая заявка на кредит</b>',
      '',
      '1️⃣ <b>Автомобиль</b>',
      `  • Марка: ${carBrand || '—'}`,
      `  • Модель: ${carModel || '—'}`,
      `  • Комплектация: ${carConfig || '—'}`,
      '',
      '2️⃣ <b>Кредит</b>',
      `  • Срок: ${loanPeriod} мес.`,
      `  • Банк: ${BANK_LABELS[selectedBank] || selectedBank}`,
      `  • Первоначальный взнос: ${downPayment ? downPayment + ' ₽' : '0 ₽'}`,
      `  • Скидка 70 000 ₽: ${discount70k ? '✅' : '❌'}`,
      `  • Акция −30 000 ₽: ${discount30k ? '✅' : '❌'}`,
      '',
      '3️⃣ <b>Trade-in</b>',
      `  • Программа: ${tradeInEnabled ? 'Включена ✅' : 'Выключена ❌'}`,
      ...(tradeInEnabled ? [
        `  • Марка: ${tradeInBrand || '—'}`,
        `  • Модель: ${tradeInModel || '—'}`,
        `  • Комплектация: ${tradeInConfig || '—'}`,
        `  • Год выпуска: ${tradeInYear || '—'}`,
        `  • КПП: ${tradeInTransmission || '—'}`,
      ] : []),
      '',
      '4️⃣ <b>Клиент</b>',
      `  • Имя: ${name}`,
      `  • Телефон: ${phone}`,
      `  • Подарок: ${gift || '—'}`,
    ].join('\n');

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${import.meta.env.VITE_TOKEN_BOT}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: import.meta.env.VITE_CHAT_ID,
            text,
            parse_mode: 'HTML',
          }),
        }
      );
      if (!res.ok) throw new Error('Ошибка отправки');
      setSent(true);
    } catch (e) {
      setSendError(e.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black font-sans">

      {/* ── Шапка ── */}
      <header>
        <div className="flex">
          <img className="p-5" src={logo} alt="logo" />
          <div className="flex items-center gap-6 ml-auto">
            <button className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700 transition">10 лет</button>
            <h6>превосходим ваши ожидания</h6>
            <ul className="flex items-center gap-6 ml-auto">
              <li>Подбор авто</li><li>О компании</li><li>Техцентр</li><li>Отзывы</li><li>Контакты</li>
            </ul>
            <div>
              <img src={group} alt="Group" />
              <h6>+7 (800) 551-94-31</h6>
            </div>
            <button className="rounded-lg bg-red-600 px-5 py-4 text-white hover:bg-red-700 transition">Обратный звонок</button>
          </div>
        </div>
      </header>

      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm font-semibold text-gray-800">
          <nav className="flex gap-10">
            <a href="/">КАТАЛОГ АВТО</a>
            <a href="/">АВТО С ПРОБЕГОМ</a>
            <a href="/credit">КРЕДИТ И РАССРОЧКА</a>
            <a href="/">СПЕЦПРЕДЛОЖЕНИЯ</a>
            <a href="/">ТАКСИ В КРЕДИТ</a>
          </nav>
          <div className="flex gap-5 text-xl">
            <span>♡</span><span>🛒</span><span>⌕</span>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto mt-5 px-4">
        <div
          className="relative overflow-hidden rounded-[30px] min-h-[560px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10 p-16 text-white">
            <div className="text-sm opacity-80 mb-8">Главная → Кредит и рассрочка → Экспресс-кредит</div>
            <h1 className="text-6xl font-extrabold mb-5">Экспресс-кредит</h1>
            <p className="max-w-2xl text-xl leading-relaxed mb-10">
              Воплотите мечту о новом автомобиле уже сегодня с выгодным предложением.
            </p>
            <div className="inline-flex items-center gap-4 bg-red-600 rounded-full px-10 py-5 mb-14">
              <span className="text-6xl font-black">от 1,9%</span>
              <div className="text-lg font-semibold leading-tight">По льготной<br />ставке</div>
            </div>
            <div className="grid grid-cols-4 gap-8 max-w-5xl">
              <Advantage icon="👍" text="Компенсируем дорогу до автосалона всем покупателям" />
              <Advantage icon="🕒" text="БЫСТРОЕ оформление КАСКО и ОСАГО за 15 минут" />
              <Advantage icon="%" text="Скидка 30 000 рублей" />
              <Advantage icon="🤝" text="98% одобрение кредита" />
            </div>
          </div>

          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[90%] bg-white border-4 border-blue-400 rounded-md shadow-2xl p-8">
            <div className="grid grid-cols-4 gap-5 items-center">
              <div>
                <h3 className="text-3xl font-bold leading-tight text-gray-900">Получите<br />специальную цену</h3>
                <div className="inline-block mt-3 bg-red-600 text-white text-sm px-4 py-1 rounded-full font-bold">Только до 10.10.21</div>
              </div>
              <input type="text" placeholder="Ваше имя" className="h-16 px-5 bg-gray-100 rounded-md outline-none border border-gray-200" />
              <input type="text" placeholder="Ваш телефон" className="h-16 px-5 bg-gray-100 rounded-md outline-none border border-gray-200" />
              <button className="h-16 bg-red-600 hover:bg-red-700 transition-all rounded-md text-white font-bold text-lg">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
            </div>
            <p className="text-xs text-gray-400 mt-4">Нажимая кнопку вы даёте согласие на обработку персональных данных</p>
          </div>
        </div>
      </section>

      {/* ── Преимущества ── */}
      <section className="max-w-7xl mx-auto pt-32 pb-24 px-6">
        <h2 className="text-center text-5xl font-extrabold text-gray-800 mb-20">Преимущества программы</h2>
        <div className="grid grid-cols-4 gap-10">
          <Feature icon="💰" title="от 0%" subtitle="Первоначальный взнос" />
          <Feature icon="📞" title="30 минут" subtitle="Ответ кредитных специалистов" />
          <Feature icon="📉" title="от 1,9%" subtitle="Ставка по кредиту" />
          <Feature icon="🤝" title="98%" subtitle="Одобрение кредита" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          ФОРМА ЗАЯВКИ
      ══════════════════════════════════════ */}
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10 text-gray-800 font-sans">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* ── Блок 1: Автомобиль ── */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
            <StepBadge n={1} />
            <div className="pl-10 md:flex md:justify-between md:items-start gap-6">
              <div className="flex-1 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold">Ваш будущий автомобиль</h2>
                <div className="text-sm text-gray-500 font-medium">
                  {carBrand && carModel ? `${carBrand} ${carModel}${carConfig ? ' — ' + carConfig : ''}` : 'Выберите марку и модель'}
                </div>

                <div className="space-y-3 max-w-md pt-2">
                  {/* Марка */}
                  <Select value={carBrand} onChange={handleBrandChange} placeholder="Марка" highlighted={!!carBrand}>
                    {cars.map(c => <option key={c.brand} value={c.brand}>{c.brand}</option>)}
                  </Select>

                  {/* Модель */}
                  <Select value={carModel} onChange={handleModelChange} placeholder="Модель" disabled={!carBrand}>
                    {carModels.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                  </Select>

                  {/* Комплектация */}
                  <Select value={carConfig} onChange={setCarConfig} placeholder="Комплектация" disabled={!carModel} highlighted={!!carConfig}>
                    {carConfigs.map(cfg => <option key={cfg} value={cfg}>{cfg}</option>)}
                  </Select>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex flex-col items-end text-right min-w-[280px]">
                <img src="https://via.placeholder.com/300x130.png?text=Kia+Rio" alt="car" className="w-full max-w-[280px] object-contain mb-4" />
                <div className="text-xs text-gray-400 uppercase tracking-wider">Цена со скидками</div>
                <div className="text-2xl md:text-3xl font-black text-gray-900">2 200 000 ₽</div>
                <div className="text-sm text-gray-400 line-through mt-1">Базовая цена 2 500 000 ₽</div>
                <div className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg text-right font-bold shadow-sm">
                  <div className="text-[10px] uppercase tracking-wide opacity-80">Платеж</div>
                  <div className="text-lg">70 000 ₽/мес.</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Блок 2: Кредит ── */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
            <StepBadge n={2} />
            <div className="pl-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl md:text-2xl font-bold">Купить в кредит</h2>

                {/* Срок кредита */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-500">Срок кредита, месяцев</span>
                    <span className="text-lg font-bold">{loanPeriod} мес.</span>
                  </div>
                  <input
                    type="range"
                    min={loanTermCfg.min}
                    max={loanTermCfg.max}
                    step="6"
                    value={loanPeriod}
                    onChange={e => setLoanPeriod(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1 px-1">
                    {loanTermCfg.marks.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>

                {/* Банки */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-500">Выберите банк</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'sber', label: 'СБЕРБАНК', color: 'green' },
                      { key: 'vtb', label: 'ВТБ', color: 'blue' },
                      { key: 'alfa', label: 'Альфа Банк', color: 'red' },
                    ].map(b => (
                      <button
                        key={b.key}
                        onClick={() => setSelectedBank(b.key)}
                        className={`px - 4 py - 2 rounded - lg border text - xs font - bold transition - all ${selectedBank === b.key
                          ? `border-${b.color}-600 bg-${b.color}-50 text-${b.color}-700`
                          : 'border-gray-200 bg-gray-50'
                          }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-0 lg:pt-8">
                <div className="space-y-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs">
                    <input type="checkbox" checked={discount70k} onChange={e => setDiscount70k(e.target.checked)} className="mt-0.5 accent-red-600" />
                    <div><span className="text-gray-500">Скидка </span><span className="font-bold text-gray-700">70 000 ₽</span></div>
                  </label>
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs">
                    <input type="checkbox" checked={discount30k} onChange={e => setDiscount30k(e.target.checked)} className="mt-0.5 accent-red-600" />
                    <div>
                      <span className="text-gray-500">Акция «Выгодный кредит» </span>
                      <span className="font-bold text-gray-700 block">Скидка 30 000 ₽</span>
                    </div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Первоначальный взнос"
                  value={downPayment}
                  onChange={e => setDownPayment(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-gray-50/50"
                />
              </div>
            </div>
          </div>

          {/* ── Блок 3: Trade-in ── */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
            <StepBadge n={3} />
            <div className="pl-10">
              <div className="flex flex-wrap items-center gap-4 justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl md:text-2xl font-bold">Программа Trade-in</h2>
                  <button
                    onClick={() => setTradeInEnabled(!tradeInEnabled)}
                    className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded transition-colors"
                  >
                    {tradeInEnabled ? 'УБРАТЬ' : 'ДОБАВИТЬ'}
                  </button>
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-xs">
                  <input type="checkbox" checked={tradeInEnabled} onChange={e => setTradeInEnabled(e.target.checked)} className="accent-red-600" />
                  <div><span className="text-gray-500">Скидка </span><span className="font-bold text-gray-700">120 000 ₽</span></div>
                </label>
              </div>

              <div className={`grid grid - cols - 1 md: grid - cols - 2 gap - 4 transition - opacity duration - 300 ${tradeInEnabled ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                {/* Марка */}
                <Select value={tradeInBrand} onChange={handleTradeInBrandChange} placeholder="Марка">
                  {cars.map(c => <option key={c.brand} value={c.brand}>{c.brand}</option>)}
                </Select>

                {/* Год выпуска */}
                <Select value={tradeInYear} onChange={setTradeInYear} placeholder="Год выпуска">
                  {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                </Select>

                {/* Модель */}
                <Select value={tradeInModel} onChange={handleTradeInModelChange} placeholder="Модель" disabled={!tradeInBrand}>
                  {tradeInModels.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                </Select>

                {/* Коробка передач */}
                <Select value={tradeInTransmission} onChange={setTradeInTransmission} placeholder="Коробка передач">
                  {TRANSMISSIONS.map(t => <option key={t} value={t}>{t}</option>)}
                </Select>

                {/* Комплектация */}
                <Select value={tradeInConfig} onChange={setTradeInConfig} placeholder="Комплектация" disabled={!tradeInModel} className="md:col-span-2">
                  {tradeInConfigs.map(cfg => <option key={cfg} value={cfg}>{cfg}</option>)}
                </Select>
              </div>
            </div>
          </div>

          {/* ── Блок 4: Персональные данные ── */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
            <StepBadge n={4} />
            <div className="pl-10 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold">Персональные данные</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="Номер телефона"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400"
                  />
                  {sendError && <p className="text-xs text-red-500">{sendError}</p>}
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Нажимая кнопку вы даёте согласие на обработку{' '}
                    <a href="#privacy" className="underline hover:text-gray-600">персональных данных</a>
                  </p>
                </div>

                <div className="space-y-4 flex flex-col justify-between">
                  <Select value={gift} onChange={setGift} placeholder="Выберите подарок">
                    {GIFTS.map(g => <option key={g} value={g}>{g}</option>)}
                  </Select>

                  <button
                    onClick={handleSubmit}
                    disabled={sending || sent}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-lg shadow-md transition-colors mt-auto"
                  >
                    {sent ? '✅ ЗАЯВКА ОТПРАВЛЕНА' : sending ? 'ОТПРАВКА...' : 'ПОЛУЧИТЬ ЛУЧШИЕ УСЛОВИЯ'}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Преимущества автокредита ── */}
      <div className="bg-white py-12 px-4 md:px-10 text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Преимущества автокредита</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {advantages.map(item => (
              <div key={item.id} className="bg-gray-50/70 p-4 rounded-xl flex items-center gap-4 min-h-[110px]">
                <div className="text-3xl md:text-4xl font-black text-red-600 tracking-tight min-w-[75px] text-center">
                  {item.value}
                </div>
                <p className="text-xs md:text-[13px] text-gray-500 font-medium leading-snug">{item.text}</p>
              </div>
            ))}
          </div>

          <hr className="border-gray-100 mb-10" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-6">Условия покупки</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                {['Взнос 0 ₽', 'Автокредит для медицинских работников', 'Срок кредита до 7 лет', 'Скидка 60 000 на покупку нового авто', 'Госпрограмма первое авто', '10% скидки по Trade-in на покупку нового авто', 'Семейный автомобиль', 'Более 30 банков партнеров'].map(text => (
                  <div key={text} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-red-600 mt-0.5 text-xs">✔</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:border-l lg:border-gray-200 lg:pl-10">
              <h3 className="text-lg font-bold mb-6">Необходимые документы</h3>
              <div className="space-y-3.5">
                {['Паспорт', 'Водительское удостоверение'].map(text => (
                  <div key={text} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-red-600 mt-0.5 text-xs">✔</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Отзывы из db.json ── */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <section>
          <h3 className="mb-6 text-3xl font-bold">Отзывы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="overflow-hidden rounded-3xl bg-white shadow-md">
                <img src={review.avatar} alt={review.name} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h4 className="mb-1 text-lg font-semibold">{review.name}</h4>
                  <div className="mb-2 text-yellow-400 text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                  <p className="mb-4 text-sm leading-6 text-gray-600">{review.text}</p>
                  <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 transition">Подробнее</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="mt-16 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-12">
          <div>
            <h4 className="mb-4 text-xl font-bold">Каталог авто</h4>
            <ul className="space-y-2 text-gray-400">
              {cars.map(c => <li key={c.brand}>{c.brand}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-bold">Кредит</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Первый автомобиль</li><li>Trade-In</li><li>Рассрочка</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-bold">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (800) 555-44-31</li><li>info@abc-auto.ru</li><li>Москва</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-bold">Подписка</h4>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Ваш Email" className="rounded-xl border border-gray-700 bg-transparent px-4 py-3 outline-none" />
              <button className="rounded-xl bg-red-600 px-5 py-3">Подписаться</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* ── Вспомогательные компоненты ── */

function StepBadge({ n }) {
  return (
    <div className="absolute top-6 left-6 bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">
      {n}
    </div>
  );
}

function Select({ value, onChange, placeholder, children, disabled = false, highlighted = false, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className={`w - full bg - white rounded - lg p - 3 pr - 10 appearance - none text - gray - 700 focus: outline - none disabled: opacity - 40 disabled: cursor - not - allowed ${highlighted ? 'border-2 border-blue-500' : 'border border-gray-200'
          }`}
      >
        <option value="">{placeholder}</option>
        {children}
      </select>
      <div className={`absolute inset - y - 0 right - 3 flex items - center pointer - events - none text - xs ${highlighted ? 'text-blue-500' : 'text-gray-400'}`}>▼</div>
    </div>
  );
}

function Advantage({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl shadow-lg">{icon}</div>
      <p className="text-sm font-semibold leading-snug">{text}</p>
    </div>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-3xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
}
