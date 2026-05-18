import { useState } from 'react';
import logo from '../assets/logo1 1 (1).png';
import group from '../assets/Group.png';

export default function CreditFinancePage() {
  const reviews = [1, 2, 3];
  const advantages = [
    { id: 1, type: 'text', value: '0%', text: 'Первоначальный взнос' },
    { id: 2, type: 'text', value: '30 мин', text: 'Ответ кредитных специалистов' },
    { id: 3, type: 'text', value: '1,9%', text: 'Ставка по кредиту' },
    { id: 4, type: 'text', value: '98%', text: 'Одобрение кредита' },
  ];
  const [loanPeriod, setLoanPeriod] = useState(12);
  const [selectedBank, setSelectedBank] = useState('sber');
  const [tradeInEnabled, setTradeInEnabled] = useState(true);
  const banks = [
    { id: 1, isSber: true },
    { id: 2, isVtb: true },
    { id: 3, isAlfa: true },
    { id: 4, isSber: false, isVtb: false, isAlfa: false },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black font-sans">
<header>
        <div className="flex">
          <img className="p-5" src={logo} alt="logo" />
          <div className="flex items-center gap-6 ml-auto">
            <button className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700 transition">10 лет</button>
            <h6>превосходим ваши ожидания</h6>
            <ul className="flex items-center gap-6 ml-auto">
              <li>Подбор авто</li>
              <li>О компании</li>
              <li>Техцентр</li>
              <li>Отзывы</li>
              <li>Контакты</li>
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
            <a href="/">КРЕДИТ И РАССРОЧКА</a>
            <a href="/">СПЕЦПРЕДЛОЖЕНИЯ</a>
            <a href="/">ТАКСИ В КРЕДИТ</a>
          </nav>

          <div className="flex gap-5 text-xl">
            <span>♡</span>
            <span>🛒</span>
            <span>⌕</span>
          </div>
        </div>
</header>

      <section className="relative max-w-7xl mx-auto mt-5 px-4 pb-40 mb-40px">
        <div
          className="relative overflow-visible rounded-[30px] min-h-[640px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>

          <div className="relative z-10 p-16 text-white">
            <div className="text-sm opacity-80 mb-8">Главная → Кредит и рассрочка → Экспресс-кредит</div>

            <h1 className="text-6xl font-extrabold mb-5 leading-tight">Экспресс-кредит</h1>

            <p className="max-w-2xl text-xl leading-relaxed mb-10">
              Воплотите мечту о новом автомобиле уже сегодня с выгодным предложением. Заполните заявку, чтобы получить уникальное предложение.
            </p>

            <div className="inline-flex items-center gap-4 bg-red-600 rounded-full px-10 py-5 mb-14">
              <span className="text-6xl font-black">от 1,9%</span>
              <div className="text-lg font-semibold leading-tight">По льготной<br />ставке</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
              <Advantage icon="👍" text="Компенсируем дорогу до автосалона всем покупателям" />
              <Advantage icon="🕒" text="БЫСТРОЕ оформление КАСКО и ОСАГО за 15 минут" />
              <Advantage icon="%" text="Скидка 30 000 рублей" />
              <Advantage icon="🤝" text="98% одобрение кредита" />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center">
            <div className="w-full max-w-[92%] bg-white border-4 border-blue-400 rounded-[28px] shadow-2xl p-8 -translate-y-1/2">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
                <div>
                  <h3 className="text-3xl font-bold leading-tight text-gray-900">Получите<br />специальную цену</h3>
                  <div className="inline-block mt-3 bg-red-600 text-white text-sm px-4 py-1 rounded-full font-bold">Только до 10.10.21</div>
                </div>

                <input type="text" placeholder="Ваше имя" className="h-16 px-5 bg-gray-100 rounded-md outline-none border border-gray-200" />

                <input type="text" placeholder="Ваш телефон" className="h-16 px-5 bg-gray-100 rounded-md outline-none border border-gray-200" />

                <button className="h-16 bg-red-600 hover:bg-red-700 transition-all rounded-md text-white font-bold text-lg">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
              </div>

              <p className="text-xs text-gray-400 mt-4">Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих персональных данных</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pt-32 pb-24 px-6">
        <h2 className="text-center text-5xl font-extrabold text-gray-800 mb-20">Преимущества программы</h2>

        <div className="grid grid-cols-4 gap-10">
          <Feature icon="💰" title="от 0%" subtitle="Первоначальный взнос" />
          <Feature icon="📞" title="30 минут" subtitle="Ответ кредитных специалистов" />
          <Feature icon="📉" title="от 1,9%" subtitle="Ставка по кредиту" />
          <Feature icon="🤝" title="98%" subtitle="Одобрение кредита" />
        </div>
      </section>


<div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">


        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
          <div className="absolute top-6 left-6 bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">
            1
          </div>
          
          <div className="pl-10 md:flex md:justify-between md:items-start gap-6">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">Ваш будущий автомобиль</h2>
              <div className="text-sm text-gray-500 font-medium">Kia Comfort 1.4 100 л.с. 6MT 2WD (2020)</div>
              
        
              <div className="space-y-3 max-w-md pt-2">
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg p-3 pr-10 appearance-none text-gray-700 focus:outline-none focus:border-blue-500">
                    <option>Марка</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">▼</div>
                </div>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg p-3 pr-10 appearance-none text-gray-700 focus:outline-none focus:border-blue-500">
                    <option>Модель</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">▼</div>
                </div>
                <div className="relative border-2 border-blue-500 rounded-lg">
                  <select className="w-full bg-white rounded-md p-3 pr-10 appearance-none text-gray-700 focus:outline-none">
                    <option>Комплектация</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-blue-500">▼</div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex flex-col items-end text-right min-w-[280px]">
              <img
                src="https://via.placeholder.com/300x130.png?text=Kia+Rio"
                alt="Kia Rio"
                className="w-full max-w-[280px] object-contain mb-4"
              />
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
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
          <div className="absolute top-6 left-6 bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">
            2
          </div>

          <div className="pl-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
       
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold">Купить в кредит</h2>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">Срок кредита, месяцев</span>
                  <span className="text-lg font-bold">{loanPeriod} мес.</span>
                </div>
                <input 
                  type="range" 
                  min="6" 
                  max="84" 
                  step="6"
                  value={loanPeriod} 
                  onChange={(e) => setLoanPeriod(e.target.value)}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1 px-1">
                  <span>6</span><span>12</span><span>24</span><span>36</span><span>48</span><span>60</span><span>72</span><span>84</span>
                </div>
              </div>

           
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-500">Выберите банк</div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setSelectedBank('sber')} className={`px-4 py-2 rounded-lg border text-xs font-bold transition-all ${selectedBank === 'sber' ? 'border-green-600 bg-green-50 text-green-700' : 'border-gray-200 bg-gray-50'}`}>СБЕРБАНК</button>
                  <button onClick={() => setSelectedBank('vtb')} className={`px-4 py-2 rounded-lg border text-xs font-bold transition-all ${selectedBank === 'vtb' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-gray-50'}`}>ВТБ</button>
                  <button onClick={() => setSelectedBank('alfa')} className={`px-4 py-2 rounded-lg border text-xs font-bold transition-all ${selectedBank === 'alfa' ? 'border-red-600 bg-red-50 text-red-700' : 'border-gray-200 bg-gray-50'}`}>Альфа Банк</button>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-0 lg:pt-8">
              <div className="space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs">
                  <input type="checkbox" defaultChecked className="mt-0.5 rounded border-gray-300 text-red-600 focus:ring-red-500 accent-red-600" />
                  <div>
                    <span className="text-gray-500">Скидка </span>
                    <span className="font-bold text-gray-700">70 000 ₽</span>
                  </div>
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer text-xs">
                  <input type="checkbox" defaultChecked className="mt-0.5 rounded border-gray-300 text-red-600 focus:ring-red-500 accent-red-600" />
                  <div>
                    <span className="text-gray-500">Акция "Выгодный кредит" </span>
                    <span className="font-bold text-gray-700 block">Скидка 30 000 ₽</span>
                  </div>
                </label>
              </div>

              <input 
                type="text" 
                placeholder="Первоначальный взнос" 
                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-gray-50/50"
              />
            </div>
          </div>
        </div>



        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
          <div className="absolute top-6 left-6 bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">
            3
          </div>

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
                <input type="checkbox" defaultChecked={tradeInEnabled} className="rounded border-gray-300 text-red-600 accent-red-600" />
                <div>
                  <span className="text-gray-500">Скидка </span>
                  <span className="font-bold text-gray-700">120 000 ₽</span>
                </div>
              </label>
            </div>

        
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-opacity duration-300 ${tradeInEnabled ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-lg p-3 pr-10 appearance-none text-gray-700 focus:outline-none">
                  <option>Марка</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">▼</div>
              </div>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-lg p-3 pr-10 appearance-none text-gray-700 focus:outline-none">
                  <option>Год выпуска</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">▼</div>
              </div>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-lg p-3 pr-10 appearance-none text-gray-700 focus:outline-none">
                  <option>Модель</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">▼</div>
              </div>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-lg p-3 pr-10 appearance-none text-gray-700 focus:outline-none">
                  <option>Коробка передач</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">▼</div>
              </div>
              <div className="relative md:col-span-2">
                <select className="w-full bg-white border border-gray-200 rounded-lg p-3 pr-10 appearance-none text-gray-700 focus:outline-none">
                  <option>Комплектация</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">▼</div>
              </div>
            </div>
          </div>
        </div>


    
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
          <div className="absolute top-6 left-6 bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">
            4
          </div>

          <div className="pl-10 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold">Персональные данные</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400"
                />
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Номер телефона" 
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-xs">▼</div>
                </div>
                
                <p className="text-[10px] text-gray-400 leading-relaxed">
                  Нажимая кнопку "Получить лучшие условия" Вы даете согласие на обработку своих{' '}
                  <a href="#privacy" className="underline hover:text-gray-600">персональных данных</a>
                </p>
              </div>

          
              <div className="space-y-4 flex flex-col justify-between">
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg p-3 pr-10 appearance-none text-sm text-gray-600 focus:outline-none">
                    <option>Выберите подарок</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">▼</div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-lg shadow-md transition-colors mt-auto">
                  ПОЛУЧИТЬ ЛУЧШИЕ УСЛОВИЯ
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



<div className="bg-white py-12 px-4 md:px-10 text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-left">
          Преимущества автокредита
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {advantages.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-50/70 p-4 rounded-xl flex items-center gap-4 min-h-110px overflow-hidden"
            >
              {item.type === 'text' ? (
          
                <div className="text-3xl md:text-4xl font-black text-red-600 tracking-tight min-w-[75px] text-center">
                  {item.value}
                </div>
              ) : (
            
                <img 
                  src={item.src} 
                  alt="" 
                  className="w-20 h-20 object-cover object-center rounded-lg flex-shrink-0 mix-blend-multiply"
                />
              )}
              
              <p className="text-xs md:text-[13px] text-gray-500 font-medium leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

  
        <hr className="border-gray-100 mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
      
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6">Условия покупки</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Взнос 0 ₽</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Автокредит для медицинских работников</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Срок кредита до 7 лет</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Скидка 60 000 на покупку нового авто</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Госпрограмма первое авто</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>10% скидки по Trade-in на покупку нового авто</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Семейный автомобиль</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Более 30 банков партнеров</span>
              </div>
            </div>
          </div>

       
          <div className="lg:border-l lg:border-gray-200 lg:pl-10">
            <h3 className="text-lg font-bold mb-6">Необходимые документы</h3>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Паспорт</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-600 mt-0.5 text-xs">✔</span>
                <span>Водительское удостоверение</span>
              </div>
            </div>
          </div>

        </div>

      </div>
      </div>

  <div className="bg-white py-12 px-4 md:px-10 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        

        <div className="relative bg-gray-50 rounded-3xl p-6 md:p-10 md:pb-16 overflow-hidden border border-gray-100">

          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
            <div className="lg:col-span-7 space-y-6 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Условия получения кредита
              </h2>

              <div className="space-y-5">
              
                <div className="flex items-start gap-3.5">
                  <div className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-gray-900">Без подтверждения дохода</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Чтобы получить кредит, вам нужны паспорт и водительское удостоверение. Банк не требует подтверждение дохода, информацию о продавце и оформление КАСКО.
                    </p>
                  </div>
                </div>

               
                <div className="flex items-start gap-3.5">
                  <div className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-gray-900">Без первоначального взноса</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Кредит выдаётся без первоначального взноса на карту, с которой без процентов можно снять наличные. Банк доставит карту бесплатно.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-gray-900">Без сложностей с регистрацией</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Для регистрации автомобиля после покупки нужны только копии договора купли-продажи и паспорта транспортного средства. Да, это всё.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative w-full max-w-[440px] h-[200px] md:h-[240px]">
            
                <img
                  src="https://via.placeholder.com/280x140.png?text=Skoda"
                  alt="Седан"
                  className="absolute top-2 left-4 w-[65%] object-contain z-10"
                />
             
                <img
                  src="https://via.placeholder.com/300x160.png?text=Hyundai+Creta"
                  alt="Красный кроссовер"
                  className="absolute bottom-2 right-0 w-[75%] object-contain z-20"
                />
              </div>
            </div>

          </div>
        </div>

     
        <div className="space-y-6">
      
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Банки-партнеры</h3>
            
          
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-400 text-xs hover:bg-gray-100 transition-colors">
                ⟨
              </button>
              <button className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs hover:bg-red-700 transition-colors shadow-sm">
                ⟩
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {banks.map((bank) => (
              <div 
                key={bank.id} 
                className="bg-gray-50 border border-gray-50 rounded-2xl p-5 flex items-center justify-center min-h-[75px] hover:shadow-sm transition-shadow"
              >
   
                {bank.isSber && (
                  <div className="flex items-center gap-1.5 font-bold text-xs tracking-tight text-slate-700">
                    <span className="text-green-500 text-base">✔</span>
                    <span className="text-green-600">СБЕР</span>
                    <span className="text-green-600">БАНК</span>
                  </div>
                )}
                
                {bank.isVtb && (
                  <div className="flex items-center gap-1 font-black text-sm tracking-tighter text-blue-800">
                    <span className="text-blue-500 inline-block scale-y-75 font-mono">☰</span> ВТБ
                  </div>
                )}

                {bank.isAlfa && (
                  <div className="flex items-center gap-1.5 font-bold text-xs text-gray-800">
                    <span className="bg-red-600 text-white px-1.5 py-0.5 rounded font-serif text-sm">А</span>
                    <span className="text-red-600 font-medium">Альфа-Банк</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>



      <main className="max-w-7xl mx-auto px-6 pb-16">
        <section>
          <h3 className="mb-6 text-3xl font-bold">Отзывы</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((item) => (
              <div key={item} className="overflow-hidden rounded-3xl bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                  alt="review"
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h4 className="mb-2 text-lg font-semibold">Сергей Васильев</h4>
                  <p className="mb-4 text-sm leading-6 text-gray-600">Всё прошло быстро и удобно. Менеджеры помогли подобрать лучший вариант кредита.</p>

                  <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 transition">Подробнее</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-12">
          <div>
            <h4 className="mb-4 text-xl font-bold">Каталог авто</h4>
            <ul className="space-y-2 text-gray-400">
              <li>KIA</li>
              <li>BMW</li>
              <li>Toyota</li>
              <li>Audi</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-bold">Кредит</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Первый автомобиль</li>
              <li>Trade-In</li>
              <li>Рассрочка</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-bold">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (800) 555-44-31</li>
              <li>info@abc-auto.ru</li>
              <li>Москва</li>
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
