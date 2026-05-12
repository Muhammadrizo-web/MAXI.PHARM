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
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      setVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.25,
        rootMargin: "-60px 0px -80px 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="for-whom"
      className="relative overflow-hidden bg-white px-4 py-[56px] sm:px-6 md:py-[74px] lg:py-[82px]"
    >
      <div className="mx-auto max-w-[1120px] text-center">
        <div
          className={`
            inline-flex h-[34px] items-center justify-center rounded-full
            border border-[#AAB7BC] bg-white px-[18px]
            text-[14px] font-medium leading-none text-[#073C46]
            md:transition-all md:duration-700 md:ease-[cubic-bezier(.22,1,.36,1)]
            ${
              visible
                ? "translate-y-0 opacity-100 blur-0"
                : "md:translate-y-4 md:opacity-0 md:blur-[2px]"
            }
          `}
        >
          Для кого мы работаем
        </div>

        <h2
          className={`
            mx-auto mt-[22px] max-w-[780px]
            text-[24px] font-bold uppercase leading-[1.12]
            tracking-[-0.035em] text-[#0B2A34]
            sm:text-[28px] md:text-[32px]
            md:transition-all md:duration-700 md:delay-75 md:ease-[cubic-bezier(.22,1,.36,1)]
            ${
              visible
                ? "translate-y-0 opacity-100 blur-0"
                : "md:translate-y-5 md:opacity-0 md:blur-[2px]"
            }
          `}
        >
          Мы предоставляем экспертные решения для компаний фармацевтической
          отрасли
        </h2>

        <div className="mt-[34px] grid grid-cols-1 gap-[18px] sm:gap-[22px] md:grid-cols-3 lg:gap-[34px]">
          {cards.map((card, index) => (
            <article
              key={card.title}
              style={{
                transitionDelay: visible ? `${140 + index * 90}ms` : "0ms",
              }}
              className={`
                group relative min-h-[190px] overflow-hidden rounded-[16px]
                bg-white px-[28px] pb-[24px] pt-[22px]
                text-center
                shadow-[0_8px_24px_rgba(11,42,52,0.12)]
                md:transition-all md:duration-700 md:ease-[cubic-bezier(.22,1,.36,1)]
                md:hover:-translate-y-[8px]
                md:hover:shadow-[0_22px_44px_rgba(11,42,52,0.18)]
                sm:px-[34px]
                md:min-h-[204px]
                ${
                  visible
                    ? "translate-y-0 scale-100 opacity-100 blur-0"
                    : "md:translate-y-8 md:scale-[0.97] md:opacity-0 md:blur-[2px]"
                }
              `}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-[140px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#009B72]/10 blur-[36px]" />
              </div>

              <img
                src={card.icon}
                alt=""
                aria-hidden="true"
                className="
                  relative mx-auto h-[42px] w-[42px] object-contain
                  md:transition-all md:duration-500 md:ease-[cubic-bezier(.22,1,.36,1)]
                  md:group-hover:-translate-y-[3px] md:group-hover:scale-110
                "
              />

              <h3
                className="
                  relative mx-auto mt-[22px] max-w-[260px]
                  text-[20px] font-bold leading-[1.12]
                  tracking-[-0.025em] text-[#0B2A34]
                  transition-colors duration-300
                  md:group-hover:text-[#009B72]
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  relative mx-auto mt-[14px] max-w-[270px]
                  text-[16px] font-medium leading-[1.22]
                  tracking-[-0.02em] text-[#7A8A91]
                "
              >
                {card.text}
              </p>

              <div className="absolute inset-x-[24px] bottom-0 h-[2px] origin-center scale-x-0 rounded-full bg-[#009B72] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] md:group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}