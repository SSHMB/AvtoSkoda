import React, { useState } from 'react';

const AutoKredit = () => {
    // State for form fields
    const [creditAmount, setCreditAmount] = useState(1700000);
    const [creditTerm, setCreditTerm] = useState(36);
    const [downPaymentPercent, setDownPaymentPercent] = useState(20);
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');

    // Car details
    const [carBrand, setCarBrand] = useState('Toyota');
    const [carModel, setCarModel] = useState('Camry');
    const [carTrim, setCarTrim] = useState('Premium');

    // Available amounts (in RUB)
    const amountPresets = [500000, 600000, 1100000, 1700000, 2000000, 2500000, 2700000, 3000000];
    const termPresets = [6, 12, 24, 36, 48, 60, 72, 84];

    // Calculate down payment amount
    const downPayment = (creditAmount * downPaymentPercent) / 100;
    const remainingLoan = creditAmount - downPayment;

    // Calculate "benefit" (simulated savings - e.g., 10% of remaining loan)
    const benefitAmount = Math.round(remainingLoan * 0.1);

    // Format currency
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
    };

    // Handle amount slider change
    const handleAmountChange = (e) => {
        setCreditAmount(Number(e.target.value));
    };

    // Handle term slider change
    const handleTermChange = (e) => {
        setCreditTerm(Number(e.target.value));
    };

    // Handle down payment percent change
    const handleDownPaymentChange = (e) => {
        setDownPaymentPercent(Number(e.target.value));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            carBrand,
            carModel,
            carTrim,
            creditAmount,
            creditTerm,
            downPaymentPercent,
            downPayment,
            remainingLoan,
            fullName,
            phone,
        };
        console.log('Application submitted:', formData);
        alert('Заявка отправлена! Мы свяжемся с вами.');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl font-sans">
            <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">Заявка на автокредит</h1>
            <p className="text-center text-gray-500 mb-6">Рассчитайте условия и получите предложение</p>

            {/* Car Selection */}
            <div className="bg-white rounded-xl p-5 mb-6 shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">Автомобиль</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Марка</label>
                        <select
                            value={carBrand}
                            onChange={(e) => setCarBrand(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option>Toyota</option>
                            <option>Hyundai</option>
                            <option>Kia</option>
                            <option>Volkswagen</option>
                            <option>BMW</option>
                            <option>Mercedes-Benz</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Модель</label>
                        <input
                            type="text"
                            value={carModel}
                            onChange={(e) => setCarModel(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="Модель"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Комплектация</label>
                        <input
                            type="text"
                            value={carTrim}
                            onChange={(e) => setCarTrim(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="Комплектация"
                        />
                    </div>
                </div>
            </div>

            {/* Credit Amount Slider */}
            <div className="bg-white rounded-xl p-5 mb-6 shadow-md">
                <div className="flex justify-between items-center mb-2">
                    <label className="text-lg font-semibold text-gray-800">Сумма кредита, руб</label>
                    <span className="text-2xl font-bold text-blue-600">{formatCurrency(creditAmount)}</span>
                </div>
                <input
                    type="range"
                    min={amountPresets[0]}
                    max={amountPresets[amountPresets.length - 1]}
                    step={10000}
                    value={creditAmount}
                    onChange={handleAmountChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    {amountPresets.map((amount) => (
                        <button
                            key={amount}
                            onClick={() => setCreditAmount(amount)}
                            className="hover:text-blue-600 hover:underline"
                        >
                            {amount >= 1000000 ? (amount / 1000000).toFixed(1) + 'м' : (amount / 1000).toFixed(0) + 'к'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Credit Term Slider */}
            <div className="bg-white rounded-xl p-5 mb-6 shadow-md">
                <div className="flex justify-between items-center mb-2">
                    <label className="text-lg font-semibold text-gray-800">Срок кредита, мес.</label>
                    <span className="text-2xl font-bold text-blue-600">{creditTerm} мес.</span>
                </div>
                <input
                    type="range"
                    min={termPresets[0]}
                    max={termPresets[termPresets.length - 1]}
                    step={1}
                    value={creditTerm}
                    onChange={handleTermChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    {termPresets.map((term) => (
                        <button
                            key={term}
                            onClick={() => setCreditTerm(term)}
                            className="hover:text-blue-600 hover:underline"
                        >
                            {term}
                        </button>
                    ))}
                </div>
            </div>

            {/* Down Payment Slider */}
            <div className="bg-white rounded-xl p-5 mb-6 shadow-md">
                <div className="flex justify-between items-center mb-2">
                    <label className="text-lg font-semibold text-gray-800">Первоначальный взнос</label>
                    <span className="text-2xl font-bold text-green-600">{formatCurrency(downPayment)}</span>
                </div>
                <input
                    type="range"
                    min={0}
                    max={60}
                    step={1}
                    value={downPaymentPercent}
                    onChange={handleDownPaymentChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>20%</span>
                    <span>40%</span>
                    <span>60%</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Процент от суммы кредита: {downPaymentPercent}%</p>
            </div>

            {/* Remaining Loan */}
            <div className="bg-gray-100 rounded-xl p-5 mb-6 text-center">
                <p className="text-gray-600">Остаток по кредиту</p>
                <p className="text-3xl font-bold text-gray-900">{formatCurrency(remainingLoan)}</p>
            </div>

            {/* Benefit Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-5 mb-6 border border-yellow-200">
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <div>
                        <p className="text-sm text-yellow-700 uppercase tracking-wide">Специальное предложение</p>
                        <p className="text-2xl font-bold text-orange-700">Получить выгоду</p>
                    </div>
                    <div className="text-3xl font-extrabold text-green-600">{formatCurrency(benefitAmount)}</div>
                </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-xl p-5 mb-6 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Иван Иванов"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ваш телефон</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="+7 (999) 123-45-67"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition duration-200 shadow-lg hover:shadow-xl"
                >
                    ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                    Нажимая кнопку "Получить предложение" Вы даете согласие на обработку своих персональных данных
                </p>
            </form>
        </div>
    );
};

export default AutoKredit;