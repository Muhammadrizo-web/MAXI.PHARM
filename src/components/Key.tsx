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
    icon: "⚕",
    title: "РЕГИСТРАЦИЯ ЛЕКАРСТВЕННЫХ СРЕДСТВ",
    short:
      "Подготовка, формирование и комплексное сопровождение регистрационного досье",
    extra:
      " в соответствии с установленными требованиями уполномоченных органов, включая анализ документации, структурирование материалов и сопровождение на всех этапах регистрационного процесса",
  },
  {
    icon: "▣",
    title: "РЕГИСТРАЦИЯ МЕДИЦИНСКИХ ИЗДЕЛИЙ",
    short:
      "Формирование полного регистрационного досье с последующим профессиональным сопровождением",
    extra:
      ", в соответствии с действующими нормативными требованиями, включая подготовку необходимой документации, её экспертный анализ и сопровождение процесса рассмотрения",
  },
  {
    icon: "☤",
    title: "КЛИНИЧЕСКИЕ ИССЛЕДОВАНИЯ",
    short:
      "Комплексная подготовка и сопровождение регистрационного досье с учетом действующих требований",
    extra:
      ", включая систематизацию документов, проверку полноты материалов и сопровождение взаимодействия с уполномоченными органами на всех этапах рассмотрения",
  },
  {
    icon: "▤",
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
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
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
                  "transition-[height,opacity,filter,transform,box-shadow] duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                  "hover:shadow-[0_14px_34px_rgba(20,35,45,0.10)] hover:-translate-y-[6px]",
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
                      "flex shrink-0 items-center justify-center rounded-full border border-[#DDE5EA] bg-[#F7F9FA] text-[#617284]",
                      "transition-[width,height] duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                      isActive ? "h-[34px] w-[34px]" : "h-[30px] w-[30px]",
                    ].join(" ")}
                  >
                    <span className="text-[16px] leading-none">{item.icon}</span>
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

                <div
                  className={[
                    "absolute bottom-[20px] left-[88px] text-[11px] font-[700] text-[#78AABD]",
                    "transition-opacity duration-[450ms] ease-out",
                    isActive ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                >
                  Читать дальше → 
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}