import { useParams, useNavigate } from "react-router-dom";

const brandTitle = (slug) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const getBrandContent = (slug) => {
  const title = brandTitle(slug);

  return {
    title,
    subtitle: `Лучшие автомобили ${title} на рынке с подробным описанием и фото.`,
    description: `Мы собрали актуальные предложения ${title} для тех, кто ищет проверенное авто с качественным обслуживанием. Откройте полный перечень моделей, их характеристики и реальное состояние.`,
    highlights: [
      `Гарантия на все автомобили ${title}`,
      "Проверка по истории и ПТС",
      "Финансирование и скидки в наличии",
    ],
    images: [
      `https://source.unsplash.com/1200x800/?${encodeURIComponent(title)},car`,
      `https://source.unsplash.com/1200x800/?${encodeURIComponent(title)},auto`,
      `https://source.unsplash.com/1200x800/?${encodeURIComponent(title)},vehicle`,
    ],
    models: [
      {
        id: 1,
        name: `${title} Comfort`,
        description: "Сбалансированный выбор для ежедневной езды и города.",
        img: `https://source.unsplash.com/900x600/?${encodeURIComponent(title)},sedan`,
      },
      {
        id: 2,
        name: `${title} Sport`,
        description: "Динамика и стиль для тех, кто ценит мощность.",
        img: `https://source.unsplash.com/900x600/?${encodeURIComponent(title)},sport-car`,
      },
      {
        id: 3,
        name: `${title} Premium`,
        description: "Максимальный комфорт и безопасность для семьи.",
        img: `https://source.unsplash.com/900x600/?${encodeURIComponent(title)},luxury-car`,
      },
    ],
  };
};

export default function BrandDetail() {
  const { brandName } = useParams();
  const navigate = useNavigate();
  const brand = brandName ? brandTitle(brandName) : null;

  if (!brandName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-xl text-center rounded-3xl border border-gray-200 bg-white p-10 shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Марка не выбрана</h1>
          <p className="text-gray-600 mb-6">Выберите автомобиль на главной странице, чтобы увидеть подробные данные.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  const content = getBrandContent(brandName);

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
        >
          ← Вернуться назад
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] items-start">
          <div className="space-y-6">
            <div className="rounded-4xl overflow-hidden shadow-xl">
              <img
                src={content.images[0]}
                alt={content.title}
                className="h-96 w-full object-cover"
              />
            </div>

            <div className="rounded-4xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 mb-6">
                {content.highlights.map((item) => (
                  <span key={item} className="rounded-full border border-gray-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                    {item}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
              <p className="text-gray-600 leading-relaxed mb-6">{content.description}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {content.images.slice(1).map((src, idx) => (
                  <div key={idx} className="overflow-hidden rounded-3xl bg-gray-100">
                    <img src={src} alt={`${content.title} ${idx + 1}`} className="h-44 w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-4xl border border-gray-200 bg-white p-8 shadow-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                Марка</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">{content.title}</h2>
              <p className="mt-3 text-gray-600">{content.subtitle}</p>
              <div className="mt-6 grid gap-3">
                {content.models.map((model) => (
                  <div key={model.id} className="rounded-3xl border border-gray-200 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{model.name}</h3>
                      <span className="text-xs uppercase tracking-[0.24em] text-gray-500">Популярно</span>
                    </div>
                    <p className="mt-2 text-gray-600">{model.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Характеристики</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Проводим тест-драйв перед покупкой</li>
                <li>• Полная история автомобилей</li>
                <li>• Сервисная поддержка после продажи</li>
                <li>• Помощь с кредитом и страховкой</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
