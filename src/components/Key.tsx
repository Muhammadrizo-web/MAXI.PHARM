import { useRef, useState } from "react";
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
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y, opacity, scale }}
      className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-[105px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-[22px] flex h-[34px] w-fit items-center justify-center rounded-[16px] border border-[#D6DCDD] bg-white px-[24px] text-[15px] font-medium text-[#0B2A35]">
          Приоритетные направления
        </div>

        <h2 className="mx-auto max-w-[800px] text-center text-[30px] font-[700] uppercase leading-[1.08] tracking-[-0.025em] text-[#0B2A35] md:text-[27px]">
          КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ ЭКСПЕРТНОГО
          <br />
          СОПРОВОЖДЕНИЯ В СФЕРЕ ФАРМАЦЕВТИЧЕСКОЙ
          <br />
          РЕГИСТРАЦИИ
        </h2>

        <div className="relative mx-auto mt-[34px] grid max-w-[1070px] grid-cols-1 gap-x-[32px] gap-y-[28px] md:grid-cols-2">
          {items.map((item, index) => {
            const isActive = active === index;
            const isBlurred = active !== null && active !== index;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(isActive ? null : index)}
                className={[
                  "group relative overflow-hidden rounded-[7px] border border-[#D9DFE2] bg-white text-left outline-none",
                  "transition-[height,opacity,filter,transform,box-shadow,border-color] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                  "hover:-translate-y-[3px] hover:border-[#B8C3C8] hover:shadow-[0_14px_30px_rgba(11,42,52,0.10)]",
                  "active:scale-[0.99]",
                  isActive
                    ? "z-20 h-[240px] shadow-[0_18px_42px_rgba(20,35,45,0.14)]"
                    : "h-[190px] shadow-none",
                  isBlurred
                    ? "scale-[0.985] opacity-[0.25] blur-[7px]"
                    : "scale-100 opacity-100 blur-0",
                ].join(" ")}
              >
                <div className="flex h-full items-start gap-[24px] px-[28px] pb-[42px] pt-[28px]">
                  <div
                    className={[
                      "flex shrink-0 items-center justify-center rounded-full border border-[#DDE5EA] bg-[#F7F9FA]",
                      "transition-[width,height,transform,background-color,border-color] duration-[1900ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                      "group-hover:-translate-y-[1px] group-hover:scale-[1.05] group-hover:border-[#C7D8D3] group-hover:bg-[#F1FAF7]",
                      isActive ? "h-[34px] w-[34px]" : "h-[30px] w-[30px]",
                    ].join(" ")}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-[28px] w-[28px] object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1 pt-[1px]">
                    <h3 className="text-[14px] font-[900] uppercase leading-[1.18] tracking-[-0.01em] text-[#102A34]">
                      {item.title}
                    </h3>

                    <p className="mt-[10px] max-w-[430px] text-[14px] leading-[1.28] text-[#6F7377]">
                      {item.short}
                      <span
                        className={[
                          "inline transition-opacity duration-[750ms] ease-out",
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
                    "absolute bottom-[15px] left-[79px]",
                    "text-[12px] font-extrabold leading-none text-[#009B72]",
                    "transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
                    "group-hover:left-[84px] group-hover:text-[#00B383]",
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
      </div>
    </motion.section>
  );
}