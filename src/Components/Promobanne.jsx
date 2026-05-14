import { useState } from "react";

// Tailwind + DaisyUI CDN injected via style tag
const GlobalStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700&display=swap');

    @keyframes punchIn {
      0%   { transform: translateX(-100px) rotate(-20deg) scale(0.8); opacity: 0; }
      60%  { transform: translateX(8px) rotate(-3deg) scale(1.05); opacity: 1; }
      100% { transform: translateX(0px) rotate(-6deg) scale(1); opacity: 1; }
    }

    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulseRed {
      0%, 100% { box-shadow: 0 0 0 0 rgba(229,34,34,0.5); }
      50%       { box-shadow: 0 0 0 8px rgba(229,34,34,0); }
    }

    .glove-anim {
      animation: punchIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    .content-anim {
      animation: fadeSlideUp 0.5s 0.35s ease both;
    }

    .pulse-btn:not(:disabled):hover {
      animation: pulseRed 1.2s infinite;
    }

    .bebas { font-family: 'Bebas Neue', sans-serif; }
    .nunito { font-family: 'Nunito', sans-serif; }

    /* diagonal clip on glove area */
    .clip-diagonal {
      clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
    }
  `}</style>
);

export default function PromoBannerDaisy() {
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if (!phone.trim() || phone.trim().length < 6) {
            setError(true);
            setTimeout(() => setError(false), 2000);
            return;
        }
        setSubmitted(true);
        setPhone("");
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>
            <GlobalStyles />

            {/* Banner wrapper */}
            <div className="nunito w-full px-4 sm:px-6 lg:px-0">
                <div
                    className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl mx-auto"
                    style={{ background: "linear-gradient(110deg, #181818 0%, #272727 60%, #1c1c1c 100%)" }}
                >
                    {/* Red left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-red-600" />

                    {/* Inner flex layout */}
                    <div className="flex items-end relative overflow-visible">

                        {/* ── Glove area ── */}
                        <div
                            className="relative shrink-0 self-end"
                            style={{ width: 190, height: 130 }}
                        >
                            {/* Red diagonal bg slice */}
                            <div
                                className="clip-diagonal absolute inset-0"
                                style={{ background: "rgba(229,34,34,0.07)" }}
                            />
                            {/* Emoji glove (replace with <img> for real asset) */}
                            <div
                                className="glove-anim absolute bottom-0 left-0 select-none"
                                style={{ fontSize: 110, lineHeight: 1, filter: "drop-shadow(-4px 6px 16px rgba(0,0,0,0.7))" }}
                            >
                                🥊
                            </div>
                        </div>

                        {/* ── Content ── */}
                        <div className="content-anim flex-1 px-6 py-5 flex flex-col gap-3">

                            {/* Headline */}
                            <div>
                                <h2
                                    className="bebas text-white tracking-widest leading-none"
                                    style={{ fontSize: "clamp(18px, 3vw, 26px)" }}
                                >
                                    ПЕРЕБЬЕМ ПРЕДЛОЖЕНИЯ ОТ КОНКУРЕНТОВ!
                                </h2>
                                <p className="text-xs mt-1 text-gray-400 font-normal">
                                    Скидки{" "}
                                    <span className="text-red-500 font-bold">от 10 до 35%</span>{" "}
                                    на стоимость автомобиля
                                </p>
                            </div>

                            {/* Form row */}
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <div className="flex-1 min-w-42.5">
                                    <input
                                        type="tel"
                                        placeholder="Ваш телефон"
                                        className={`w-full h-10 rounded-xl border border-gray-700 bg-white px-4 text-sm text-gray-900 placeholder-gray-500 outline-none transition focus:ring-2 focus:ring-red-500 ${error ? "ring-2 ring-red-500" : ""}`}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                                    />
                                    {error && (
                                        <p className="mt-1 text-[10px] text-red-400">Emailingizni raqamini kiriting</p>
                                    )}
                                </div>

                                <button
                                    className={`h-10 rounded-xl px-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-200 ${submitted
                                            ? "bg-green-600 hover:bg-green-700"
                                            : "bg-red-600 hover:bg-red-700"
                                        }`}
                                    onClick={handleSubmit}
                                >
                                    {submitted ? (
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            ОТПРАВЛЕНО
                                        </span>
                                    ) : (
                                        "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ"
                                    )}
                                </button>
                            </div>

                            {/* Disclaimer */}
                            <p className="text-[10px] text-gray-600 leading-relaxed">
                                Нажимая кнопку «Отправить», Вы даете согласие на обработку своих{" "}
                                <a href="#" className="underline text-gray-500 hover:text-gray-400 transition-colors">
                                    персональных данных
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Bottom red accent line */}
                    <div className="h-0.75 w-full bg-linear-to-r from-red-700 via-red-500 to-transparent rounded-b-xl" />
                </div>
            </div>
        </>
    );
}