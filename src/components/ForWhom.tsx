import { useEffect, useRef, useState } from "react";

const cards = [
    {
        icon: "/icons/icon-pill.svg.png",
        title: "Фармацевтические компании",
        text: "Производители лекарственных средств и фармацевтической продукции",
    },
    {
        icon: "/icons/icon-device.svg.png",
        title: "Производители медицинских изделий",
        text: "Компании в сфере производства медицинской техники, медицинских изделий",
    },
    {
        icon: "/icons/icon-document.svg.png",
        title: "Компании фармацевтической отрасли",
        text: "Производители БАДов, косметической продукции и сопутствующих товаров",
    },
];

export default function ForWhom() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                threshold: 0.28,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative overflow-hidden bg-[#F4F4F4] px-5 py-28"
        >
            <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#009B72]/10 blur-[100px]" />
            <div className="pointer-events-none absolute right-[-180px] bottom-10 h-[420px] w-[420px] rounded-full bg-[#0B2A34]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-[1180px] text-center">
                <div
                    className={`
            inline-flex rounded-[26px] border border-[#D7D7D7] bg-white/70 px-8 py-3
            text-[22px] font-semibold tracking-[-0.02em] text-[#0B2A34]
            shadow-[0_10px_30px_rgba(11,42,52,0.06)] backdrop-blur-xl
            transition-all duration-700
            ${visible
                            ? "translate-y-0 opacity-100 blur-0"
                            : "translate-y-6 opacity-0 blur-sm"
                        }
          `}
                >
                    Для кого мы работаем
                </div>

                <h2
                    className={`
            mx-auto mt-7 max-w-[1000px] text-[30px] font-bold uppercase leading-[1.04]
            tracking-[-0.045em] text-[#0B2A34] md:text-[42px]
            transition-all duration-700 delay-100
            ${visible
                            ? "translate-y-0 opacity-100 blur-0"
                            : "translate-y-8 opacity-0 blur-sm"
                        }
          `}
                >
                    Мы предоставляем экспертные решения для компаний фармацевтической отрасли
                </h2>

                <div className="mt-16 grid gap-9 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <div
                            key={card.title}
                            className={`
                group relative overflow-hidden rounded-[26px] bg-white px-8 py-12 text-center
                shadow-[0_16px_42px_rgba(11,42,52,0.08)]
                transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                hover:-translate-y-4 hover:shadow-[0_32px_80px_rgba(11,42,52,0.16)]
                ${visible
                                    ? "translate-y-0 scale-100 opacity-100 blur-0"
                                    : "translate-y-14 scale-[0.96] opacity-0 blur-sm"
                                }
              `}
                            style={{
                                transitionDelay: visible ? `${220 + index * 140}ms` : "0ms",
                            }}
                        >
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute left-1/2 top-0 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#009B72]/12 blur-[45px]" />
                            </div>

                            <div className="relative mx-auto flex h-[104px] w-[104px] items-center justify-center rounded-[28px] bg-[#F2FAF7] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#E5F6F1]">
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="h-[76px] w-[76px] object-contain transition-all duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="relative mx-auto mt-8 max-w-[320px] text-[25px] font-black leading-[1.08] tracking-[-0.03em] text-[#0B2A34]">
                                {card.title}
                            </h3>

                            <p className="relative mx-auto mt-7 max-w-[315px] text-[18px] font-medium leading-[1.28] tracking-[-0.015em] text-[#666]">
                                {card.text}
                            </p>

                            <div className="absolute inset-x-8 bottom-0 h-[3px] scale-x-0 rounded-full bg-[#009B72] transition-transform duration-500 group-hover:scale-x-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}