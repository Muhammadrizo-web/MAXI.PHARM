import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Item = {
  icon: string;
  title: string;
  short: string;
  extra: string;
};

const items: Item[] = [
  {
    icon: "/icons/icon-1.png",
    title: "РЕГИСТРАЦИЯ ЛЕКАРСТВЕННЫХ СРЕДСТВ",
    short:
      "Подготовка, формирование и комплексное сопровождение регистрационного досье",
    extra:
      " в соответствии с установленными требованиями уполномоченных органов, включая анализ документации, структурирование материалов и сопровождение на всех этапах регистрационного процесса",
  },
  {
    icon: "/icons/icon-2.png",
    title: "РЕГИСТРАЦИЯ МЕДИЦИНСКИХ ИЗДЕЛИЙ",
    short:
      "Формирование полного регистрационного досье с последующим профессиональным сопровождением",
    extra:
      ", в соответствии с действующими нормативными требованиями, включая подготовку необходимой документации, её экспертный анализ и сопровождение процесса рассмотрения",
  },
  {
    icon: "/icons/icon-3.png",
    title: "КЛИНИЧЕСКИЕ ИССЛЕДОВАНИЯ",
    short:
      "Комплексная подготовка и сопровождение регистрационного досье с учетом действующих требований",
    extra:
      ", включая систематизацию документов, проверку полноты материалов и сопровождение взаимодействия с уполномоченными органами на всех этапах рассмотрения",
  },
  {
    icon: "/icons/icon 4.png",
    title: "ПОДГОТОВКА РЕГИСТРАЦИОННОГО ДОСЬЕ (CTD)",
    short:
      "Формирование полного регистрационного досье с учетом требований уполномоченных органов",
    extra:
      ", с обеспечением полноты документации, корректности оформления и сопровождения процесса регистрации до получения итогового решения.",
  },
];

export default function PriorityDirections() {
  const [active, setActive] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef(null);
  const smooth = [0.19, 1, 0.22, 1] as const;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.97, 1, 0.97]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={isMobile ? undefined : { y, scale }}
      className="relative w-full overflow-hidden bg-white px-4 py-[72px] md:px-6 md:pt-[85px] md:pb-[70px]"
    >
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 18 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: isMobile ? 0.08 : 0.18 }}
        transition={{ duration: isMobile ? 0.55 : 0.85, ease: smooth }}
        className="mx-auto max-w-[1180px] transform-gpu will-change-transform"
      >
        <div className="mx-auto mb-[22px] flex h-[34px] w-fit items-center justify-center rounded-[16px] border border-[#D6DCDD] bg-white px-[24px] text-[15px] font-medium text-[#0B2A35]">
          Приоритетные направления
        </div>

        <h2 className="mx-auto max-w-[800px] text-center text-[18px] font-[700] uppercase leading-[1.12] tracking-[-0.025em] text-[#0B2A35] md:text-[27px] md:leading-[1.08]">
          КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ ЭКСПЕРТНОГО
          <br className="hidden md:block" />
          СОПРОВОЖДЕНИЯ В СФЕРЕ ФАРМАЦЕВТИЧЕСКОЙ
          <br className="hidden md:block" />
          РЕГИСТРАЦИИ
        </h2>

        <div className="relative mx-auto mt-[34px] grid max-w-[1070px] grid-cols-1 gap-x-[32px] gap-y-[20px] md:grid-cols-2 md:gap-y-[28px]">
          {items.map((item, index) => {
            const isActive = active === index;
            const isBlurred = active !== null && active !== index;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(isActive ? null : index)}
                className={[
                  "group relative overflow-hidden rounded-[12px] border border-[#D9DFE2] bg-white text-left outline-none transform-gpu will-change-transform",
                  "transition-[height,opacity,transform,box-shadow,border-color] duration-[650ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                  "md:rounded-[7px] md:hover:-translate-y-[3px] md:hover:border-[#B8C3C8] md:hover:shadow-[0_14px_30px_rgba(11,42,52,0.10)]",
                  "active:scale-[0.99]",
                  isActive
                    ? "z-20 h-[285px] shadow-[0_18px_42px_rgba(20,35,45,0.12)] md:h-[240px]"
                    : "h-[230px] shadow-[0_10px_26px_rgba(11,42,52,0.06)] md:h-[190px] md:shadow-none",
                  isBlurred
                    ? "scale-[0.99] opacity-[0.55] md:opacity-[0.32]"
                    : "scale-100 opacity-100",
                ].join(" ")}
              >
                <div className="flex h-full items-start gap-[18px] px-[22px] pb-[48px] pt-[26px] md:gap-[24px] md:px-[28px] md:pb-[42px] md:pt-[28px]">
                  <div
                    className={[
                      // "flex shrink-0 items-center justify-center rounded-full border border-[#DDE5EA] bg-[#F7F9FA]",
                      "transition-[width,height,transform,background-color,border-color] duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                      // "md:group-hover:-translate-y-[1px] md:group-hover:scale-[1.05] md:group-hover:border-[#C7D8D3] md:group-hover:bg-[#F1FAF7]",
                      isActive
                        ? "h-[54px] w-[54px] md:h-[70px] md:w-[70px]"
                        : "h-[50px] w-[50px] md:h-[65px] md:w-[65px]",
                    ].join(" ")}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-[70px] w-[70px] object-contain md:h-[70px] md:w-[70px]"
                    />
                  </div>

                  <div className="min-w-0 flex-1 pt-[1px]">
                    <h3 className="text-[16px] font-[700] uppercase leading-[1.16] tracking-[-0.01em] text-[#102A34] md:text-[14px] md:leading-[1.18]">
                      {item.title}
                    </h3>

                    <p className="mt-[12px] max-w-[430px] text-[15px] leading-[1.34] text-[#6F7377] md:mt-[10px] md:text-[14px] md:leading-[1.28]">
                      {item.short}
                      <span
                        className={[
                          "inline transition-opacity duration-[500ms] ease-out",
                          isActive ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                      >
                        {item.extra}
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className={[
                    "absolute bottom-[18px] left-[90px] text-[13px] font-extrabold leading-none text-[#009B72]",
                    "transition-all duration-[500ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                    "md:bottom-[15px] md:left-[79px] md:text-[12px] md:group-hover:left-[84px] md:group-hover:text-[#00B383]",
                    isActive
                      ? "translate-y-[10px] opacity-0 pointer-events-none"
                      : "translate-y-0 opacity-100",
                  ].join(" ")}
                >
                  Читать дальше&nbsp; →
                </a>
              </button>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
}