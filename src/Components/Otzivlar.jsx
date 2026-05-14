import React, { useState, useEffect } from 'react';

const Otzivlar = () => {
    const [otzivlar, setOtzivlar] = useState([]);
    const [yangiOtziv, setYangiOtziv] = useState({
        nomi: '',
        tavsif: '',
        reyting: 5,
        recommend: 90
    });
    const [loading, setLoading] = useState(true);

    // db.json dan otzivlarni olish
    useEffect(() => {
        fetch('http://localhost:3000/otzivlar')
            .then(res => res.json())
            .then(data => {
                setOtzivlar(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Xatolik:', err);
                setLoading(false);
            });
    }, []);

    // Yangi otziv qo'shish
    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            id: Date.now(),
            title: "Сайт отзывов",
            subtitle: yangiOtziv.nomi || "Название автосалона",
            recommend: yangiOtziv.recommend,
            rating: parseFloat(yangiOtziv.reyting),
            text: yangiOtziv.tavsif || "Отличный сервис!",
            date: new Date().toISOString().split('T')[0]
        };

        fetch('http://localhost:3000/otzivlar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                setOtzivlar([...otzivlar, data]);
                setYangiOtziv({ nomi: '', tavsif: '', reyting: 5, recommend: 90 });
                alert('Отзыв успешно добавлен!');
            })
            .catch(err => console.error('Post xatolik:', err));
    };

    if (loading) return <p className="text-center py-10">Yuklanmoqda...</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Sarlavha */}
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Нам доверяют
            </h2>

            {/* Otzivlar Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {otzivlar.map((otziv) => (
                    <div
                        key={otziv.id}
                        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-sm text-blue-600 font-medium">Сайт отзывов</p>
                                <p className="font-semibold text-lg text-gray-800 mt-1">
                                    {otziv.subtitle || "Название автосалона"}
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between mb-5">
                            <div className="text-sm">
                                <span className="text-emerald-600 font-semibold">
                                    Рекомендуют {otziv.recommend || 90}%
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400 text-xl">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i}>
                                            {i < Math.floor(otziv.rating || 4.5) ? '★' : '☆'}
                                        </span>
                                    ))}
                                </div>
                                <span className="ml-2 font-semibold text-gray-700">
                                    {otziv.rating || 4.5}
                                </span>
                            </div>
                        </div>

                        {/* Matn */}
                        {otziv.text && (
                            <p className="text-gray-600 leading-relaxed">
                                "{otziv.text}"
                            </p>
                        )}

                        <p className="text-xs text-gray-400 mt-4">
                            {otziv.date}
                        </p>
                    </div>
                ))}
            </div>

            {/* Yangi otziv qo'shish formasi */}
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                    Yangi отзыв qoldirish
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        placeholder="Avtosalon nomi"
                        value={yangiOtziv.nomi}
                        onChange={(e) => setYangiOtziv({ ...yangiOtziv, nomi: e.target.value })}
                        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />

                    <textarea
                        placeholder="O'z fikringizni yozing..."
                        value={yangiOtziv.tavsif}
                        onChange={(e) => setYangiOtziv({ ...yangiOtziv, tavsif: e.target.value })}
                        rows="5"
                        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                        required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Reyting (1-5)
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                step="0.1"
                                value={yangiOtziv.reyting}
                                onChange={(e) => setYangiOtziv({ ...yangiOtziv, reyting: e.target.value })}
                                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Recommend (%)
                            </label>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={yangiOtziv.recommend}
                                onChange={(e) => setYangiOtziv({ ...yangiOtziv, recommend: parseInt(e.target.value) || 0 })}
                                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 text-lg shadow-md hover:shadow-lg"
                    >
                        Отзывни юборish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Otzivlar;