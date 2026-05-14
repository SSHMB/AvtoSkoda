// Collections.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const collections = [
    { id: "family-cars", label: "Семейные автомобили", img: "/images/family.jpg" },
    { id: "travel-cars", label: "Автомобили для путешествий", img: "/images/travel.jpg" },
    { id: "city-cars", label: "Городские автомобили", img: "/images/city.jpg" },
];

export default function Collections() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % collections.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + collections.length) % collections.length);
    };

    const visibleCards = [
        collections[currentIndex],
        collections[(currentIndex + 1) % collections.length],
        collections[(currentIndex + 2) % collections.length],
    ];

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Наши подборки</h2>
                    <div className="flex gap-2">
                        <button 
                            onClick={handlePrev}
                            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                            aria-label="Previous"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={handleNext}
                            className="p-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-white"
                            aria-label="Next"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleCards.map((col, idx) => (
                        <div 
                            key={`${col.id}-${idx}`} 
                            className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition"
                        >
                            {/* Background Image */}
                            <img 
                                src={col.img} 
                                alt={col.label} 
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6">
                                {/* Label */}
                                <div className="flex items-start">
                                    <span className="text-white font-semibold text-lg leading-tight max-w-xs">
                                        {col.label}
                                    </span>
                                </div>

                                {/* Button */}
                                <button
                                    onClick={() => navigate(`/collections/${col.id}`)}
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg w-fit transition"
                                >
                                    Посмотреть
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}