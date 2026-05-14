import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const cars = [
    {
        id: 1,
        title: "Первый автомобиль",
        percent: "1,9% по льготной ставке",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
        desc: "Первый автомобиль учун махсус автокредит таклифи.",
    },

    {
        id: 2,
        title: "Семейный автомобиль",
        percent: "1,9% по льготной ставке",
        image:
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
        desc: "Оилавий автомобиллар учун махсус кредит.",
    },

    {
        id: 3,
        title: "Экспресс-кредит",
        percent: "1,9% по льготной ставке",
        image:
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
        desc: "Тезкор автокредит хизмати.",
    },
];

const Antiqa = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const singleCar = cars.find((item) => item.id === Number(id));

    // DETAIL PAGE
    if (id && singleCar) {
        return (
            <div
                style={{
                    width: "90%",
                    margin: "40px auto",
                    fontFamily: "Arial",
                }}
            >
                <button
                    onClick={() => navigate("/")}
                    style={{
                        padding: "12px 25px",
                        border: "none",
                        borderRadius: "10px",
                        background: "red",
                        color: "white",
                        cursor: "pointer",
                        marginBottom: "30px",
                    }}
                >
                    Back
                </button>

                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <img
                        src={singleCar.image}
                        alt=""
                        style={{
                            width: "500px",
                            borderRadius: "20px",
                        }}
                    />

                    <div>
                        <h1
                            style={{
                                fontSize: "40px",
                                marginBottom: "20px",
                            }}
                        >
                            {singleCar.title}
                        </h1>

                        <h2
                            style={{
                                color: "red",
                                marginBottom: "20px",
                            }}
                        >
                            {singleCar.percent}
                        </h2>

                        <p
                            style={{
                                width: "400px",
                                color: "gray",
                                fontSize: "18px",
                                lineHeight: "28px",
                            }}
                        >
                            {singleCar.desc}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // HOME PAGE
    return (
        <div
            style={{
                width: "90%",
                margin: "40px auto",
                fontFamily: "Arial",
            }}
        >
            <h1
                style={{
                    fontSize: "40px",
                    marginBottom: "30px",
                }}
            >
                Спецпредложения
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                    gap: "20px",
                }}
            >
                {cars.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            height: "220px",
                            borderRadius: "20px",
                            overflow: "hidden",
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "rgba(255,255,255,0.75)",
                                padding: "25px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h2
                                    style={{
                                        fontSize: "24px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    {item.title}
                                </h2>

                                <p
                                    style={{
                                        color: "gray",
                                    }}
                                >
                                    {item.percent}
                                </p>
                            </div>

                            <button
                                onClick={() => navigate(`/offer/${item.id}`)}
                                style={{
                                    width: "160px",
                                    height: "45px",
                                    border: "none",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    background: "#eee",
                                }}
                            >
                                Узнать больше
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Antiqa;