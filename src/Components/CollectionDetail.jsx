import { useParams, useNavigate } from "react-router-dom";

const data = {
    "family-cars": {
        title: "Семейные автомобили",
        description: "Большие, комфортные и безопасные авто для всей семьи.",
        hero: {
            img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
            tagline: "Простор, удобство и надежность для каждого путешествия.",
            features: ["Большой багажник", "Зона для детей", "Полный набор безопасности"],
        },
        items: [
            {
                id: 1,
                label: "Минивэн для семьи",
                img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
                description: "Максимальный комфорт и место для 7 человек.",
                tags: ["7 мест", "Автомат", "Климат-контроль"],
            },
            {
                id: 2,
                label: "Удобный седан",
                img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
                description: "Стильный и экономичный вариант для семьи.",
                tags: ["Эконом", "Седан", "Безопасность"],
            },
            {
                id: 3,
                label: "Просторный кроссовер",
                img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
                description: "Высокая посадка и дополнительный багажник.",
                tags: ["Кроссовер", "Внедорожный", "Удобство"],
            },
        ],
    },

    "travel-cars": {
        title: "Автомобили для путешествий",
        description: "Надежные машины с отличной проходимостью для дальних маршрутов.",
        hero: {
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
            tagline: "Комфортная дорога без лишних забот.",
            features: ["Проходимость", "Длительный запас хода", "Емкий багажник"],
        },
        items: [
            {
                id: 1,
                label: "Внедорожник",
                img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
                description: "Легко преодолевает гравийные и лесные трассы.",
                tags: ["4x4", "Полный привод", "Защита днища"],
            },
            {
                id: 2,
                label: "Универсал",
                img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
                description: "Просторный салон и большой багажник для чемоданов.",
                tags: ["Универсал", "Экономичный", "Семейный"],
            },
            {
                id: 3,
                label: "Кроссовер",
                img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
                description: "Комфорт и безопасность на дальних трассах.",
                tags: ["Комфорт", "Мощность", "Высокая посадка"],
            },
        ],
    },

    "city-cars": {
        title: "Городские автомобили",
        description: "Компактные, маневренные и экономичные авто для города.",
        hero: {
            img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80",
            tagline: "Легко паркуются и отлично чувствуют себя в трафике.",
            features: ["Компактность", "Малый расход", "Идеальны для улицы"],
        },
        items: [
            {
                id: 1,
                label: "Яркий хэтчбек",
                img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
                description: "Маневренный городской автомобиль для ежедневных поездок.",
                tags: ["Хэтчбек", "Эконом", "Парковка"],
            },
            {
                id: 2,
                label: "Малолитражный седан",
                img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
                description: "Приятный дизайн и легкое управление в мегаполисе.",
                tags: ["Седан", "Легкий", "Экологичность"],
            },
            {
                id: 3,
                label: "Городской кроссовер",
                img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
                description: "Повышенный комфорт и видимость на улице.",
                tags: ["Кроссовер", "Город", "Удобство"],
            },
        ],
    },
};

export default function CollectionDetail() {
    const { collectionId } = useParams();
    const navigate = useNavigate();
    const collection = data[collectionId];

    if (!collection) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Коллекция не найдена</h1>
                    <button 
                        onClick={() => navigate("/")}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg"
                    >
                        Вернуться назад
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="py-12 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <button 
                        onClick={() => navigate("/")}
                        className="text-red-600 hover:text-red-700 font-semibold mb-4 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Назад
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl">
                        <div className="p-8">
                            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">
                                <span className="w-2 h-2 rounded-full bg-red-600" />
                                Коллекция
                            </span>
                            <h1 className="text-5xl font-black text-gray-900 mb-4">{collection.title}</h1>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">{collection.description}</p>
                            <div className="grid gap-3 sm:grid-cols-3">
                                {collection.hero.features.map((feature, idx) => (
                                    <div key={idx} className="rounded-2xl border border-gray-200 bg-red-50 px-4 py-3 text-sm font-medium text-gray-800">
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-80 overflow-hidden">
                            <img
                                src={collection.hero.img}
                                alt={collection.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/15 to-transparent" />
                            <div className="absolute left-6 bottom-6 text-white">
                                <p className="text-sm uppercase tracking-[0.24em] text-white/80">{collection.title}</p>
                                <p className="mt-2 text-xl font-semibold max-w-xs">{collection.hero.tagline}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Популярные предложения</h2>
                    <p className="text-gray-600">Выберите автомобиль из подборки, чтобы узнать больше о нем.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collection.items.map((item) => (
                        <article key={item.id} className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.img} alt={item.label} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                                <div className="absolute left-6 bottom-6 text-white">
                                    <h3 className="text-2xl font-bold">{item.label}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-2xl transition">
                                    Узнать подробнее
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
