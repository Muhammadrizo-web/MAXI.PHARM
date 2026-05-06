import { useState } from "react";
import { motion, type Transition } from "framer-motion";

type Item = {
  title: string;
  short: string;
  full: string;
};

const items: Item[] = [
  {
    title: "РЕГИСТРАЦИЯ ЛЕКАРСТВЕННЫХ СРЕДСТВ",
    short:
      "Подготовка, формирование и комплексное сопровождение регистрационного досье",
    full:
      "Подготовка, формирование и комплексное сопровождение регистрационного досье в соответствии с установленными требованиями уполномоченных органов, включая анализ документации, структурирование материалов и сопровождение на всех этапах регистрационного процесса.",
  },
  {
    title: "РЕГИСТРАЦИЯ МЕДИЦИНСКИХ ИЗДЕЛИЙ",
    short:
      "Формирование полного регистрационного досье с последующим профессиональным сопровождением",
    full:
      "Формирование полного регистрационного досье, проверка документации, подготовка материалов и последующее профессиональное сопровождение регистрационного процесса.",
  },
  {
    title: "КЛИНИЧЕСКИЕ ИССЛЕДОВАНИЯ",
    short:
      "Комплексная подготовка и сопровождение регистрационного досье с учетом действующих требований",
    full:
      "Комплексная подготовка и сопровождение регистрационного досье с учетом действующих требований уполномоченных органов и нормативной документации.",
  },
  {
    title: "ПОДГОТОВКА РЕГИСТРАЦИОННОГО ДОСЬЕ (CTD)",
    short:
      "Формирование полного регистрационного досье с учетом требований уполномоченных органов",
    full:
      "Формирование полного регистрационного досье в формате CTD, актуализация документов и проверка соответствия требованиям уполномоченных органов.",
  },
];

const spring: Transition = {
  type: "spring",
  stiffness: 95,
  damping: 22,
  mass: 0.9,
};

export default function PriorityDirections() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-[90px]">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-[26px] flex h-[44px] w-fit items-center justify-center rounded-[22px] border border-[#CED6DA] bg-white px-[30px] text-[18px] font-medium text-[#0B2A35]"
        >
          Приоритетные направления
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[1100px] text-center text-[30px] font-[700] uppercase leading-[1.05] tracking-[-0.035em] text-[#0B2A35] md:text-[42px]"
        >
          КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ ЭКСПЕРТНОГО
          <br />
          СОПРОВОЖДЕНИЯ В СФЕРЕ ФАРМАЦЕВТИЧЕСКОЙ
          <br />
          РЕГИСТРАЦИИ
        </motion.h2>

        <motion.div
          layout
          className="relative mx-auto mt-[44px] grid max-w-[1060px] grid-cols-1 gap-[28px] md:grid-cols-2"
        >
          {items.map((item, index) => {
            const isActive = active === index;
            const isBlurred = active !== null && active !== index;

            return (
              <motion.button
                key={item.title}
                layout
                onClick={() => setActive(isActive ? null : index)}
                transition={spring}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                animate={{
                  opacity: isBlurred ? 0.22 : 1,
                  filter: isBlurred ? "blur(8px)" : "blur(0px)",
                  scale: isBlurred ? 0.985 : 1,
                }}
                whileHover={
                  active === null
                    ? {
                        y: -4,
                        boxShadow: "0 16px 35px rgba(20,35,45,.12)",
                      }
                    : undefined
                }
                className={[
                  "relative overflow-hidden text-left outline-none rounded-[8px] border border-[#DDE4E8] bg-white",
                  isActive
                    ? "z-20 min-h-[235px] px-[36px] py-[34px] shadow-[0_16px_38px_rgba(20,35,45,0.14)]"
                    : "min-h-[150px] px-[32px] py-[30px] shadow-[0_10px_28px_rgba(20,35,45,0.08)]",
                ].join(" ")}
              >
                <motion.div
                  layout
                  transition={spring}
                  className="flex items-start gap-[18px]"
                >
                  <motion.div
                    layout
                    transition={spring}
                    className={[
                      "flex shrink-0 items-center justify-center rounded-full border border-[#DDE5EA] bg-[#F8FAFB]",
                      isActive ? "h-[40px] w-[40px]" : "h-[32px] w-[32px]",
                    ].join(" ")}
                  >
                    <span className="text-[14px] text-[#273F52]">☤</span>
                  </motion.div>

                  <div className="w-full">
                    <motion.h3
                      layout
                      transition={spring}
                      className={[
                        "font-[900] uppercase leading-[1.2] text-[#102A34]",
                        isActive ? "text-[18px]" : "text-[15px]",
                      ].join(" ")}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      layout
                      transition={spring}
                      className={[
                        "mt-[12px] leading-[1.5] text-[#686F74]",
                        isActive
                          ? "max-w-[520px] text-[18px]"
                          : "max-w-[430px] text-[15px]",
                      ].join(" ")}
                    >
                      {isActive ? item.full : item.short}
                    </motion.p>

                    {!isActive && (
                      <div className="mt-[18px] text-[12px] font-medium text-[#8CBCCD]">
                        Читать дальше →
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}