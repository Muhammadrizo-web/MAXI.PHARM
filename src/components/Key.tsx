import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "РЕГИСТРАЦИЯ ЛЕКАРСТВЕННЫХ СРЕДСТВ",
    short: "Подготовка, формирование и комплексное сопровождение регистрационного досье",
    full: "Подготовка, формирование и комплексное сопровождение регистрационного досье в соответствии с установленными требованиями уполномоченных органов, включая анализ документации, структурирование материалов и сопровождение на всех этапах регистрационного процесса",
  },
  {
    title: "НУТРИТИВНАЯ ПОДДЕРЖКА",
    short: "Регистрационное сопровождение специализированных продуктов и добавок",
    full: "Регистрационное сопровождение специализированных продуктов и добавок с подготовкой необходимых материалов, проверкой документации и сопровождением процесса подачи.",
  },
  {
    title: "ЦИФРОВЫЕ ИССЛЕДОВАНИЯ",
    short: "Подготовка и сопровождение аналитических материалов и отчетности",
    full: "Подготовка и сопровождение аналитических материалов, отчетности и вспомогательной документации для экспертной оценки и регистрационных процедур.",
  },
  {
    title: "ПОДДЕРЖКА ЛЕКАРСТВЕННОГО ДОСЬЕ И СТД",
    short: "Формирование, актуализация и проверка регистрационной документации",
    full: "Формирование, актуализация и проверка регистрационного досье, СТД и сопутствующих документов для подачи в уполномоченные органы.",
  },
];

const spring = {
  type: "spring",
  stiffness: 95,
  damping: 22,
  mass: 0.9,
};

export default function PriorityDirections() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-[92px]">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-[24px] flex h-[44px] w-fit items-center justify-center rounded-[20px] border border-[#CED6DA] bg-white px-[30px] text-[20px] font-medium text-[#0B2A35]"
        >
          Приоритетные направления
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[900px] text-center text-[30px] font-[700] uppercase leading-[1.04] tracking-[-0.035em] text-[#0B2A35] md:text-[40px]"
        >
          КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ ЭКСПЕРТНОГО
          <br />
          СОПРОВОЖДЕНИЯ В СФЕРЕ ФАРМАЦЕВТИЧЕСКОЙ
          <br />
          РЕГИСТРАЦИИ
        </motion.h2>

        <motion.div
          layout
          className="relative mx-auto mt-[42px] grid max-w-[1080px] grid-cols-1 gap-[28px] md:grid-cols-2"
        >
          {items.map((item, index) => {
            const isActive = active === index;
            const isBlurred = active !== null && active !== index;

            return (
              <motion.button
                key={index}
                layout
                onClick={() => setActive(isActive ? null : index)}
                transition={spring}
                animate={{
                  opacity: isBlurred ? 0.22 : 1,
                  filter: isBlurred ? "blur(7px)" : "blur(0px)",
                  scale: isBlurred ? 0.985 : 1,
                }}
                whileHover={
                  active === null
                    ? {
                        y: -3,
                        transition: { duration: 0.25 },
                      }
                    : {}
                }
                className={[
                  "relative overflow-hidden text-left outline-none",
                  "rounded-[8px] border border-[#E2E7EB] bg-white",
                  "will-change-transform",
                  isActive
                    ? "z-20 min-h-[220px] px-[34px] py-[32px] shadow-[0_16px_34px_rgba(20,35,45,0.16)]"
                    : "min-h-[138px] px-[28px] py-[26px] shadow-[0_8px_24px_rgba(20,35,45,0.08)]",
                ].join(" ")}
              >
                <motion.div layout transition={spring} className="flex items-start gap-[22px]">
                  <motion.div
                    layout
                    transition={spring}
                    className={[
                      "flex shrink-0 items-center justify-center rounded-full border border-[#DDE5EA] bg-[#F8FAFB]",
                      isActive ? "h-[38px] w-[38px]" : "h-[30px] w-[30px]",
                    ].join(" ")}
                  >
                    <span className="text-[13px] text-[#273F52]">☤</span>
                  </motion.div>

                  <div className="w-full">
                    <motion.h3
                      layout
                      transition={spring}
                      className={[
                        "font-[900] uppercase leading-[1.2] text-[#102A34]",
                        isActive ? "text-[17px]" : "text-[14px]",
                      ].join(" ")}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      layout
                      transition={spring}
                      className={[
                        "mt-[12px] leading-[1.45] text-[#686F74]",
                        isActive
                          ? "max-w-[470px] text-[18px]"
                          : "max-w-[410px] text-[14px]",
                      ].join(" ")}
                    >
                      {isActive ? item.full : item.short}
                    </motion.p>

                    {!isActive && (
                      <motion.div
                        layout
                        transition={spring}
                        className="mt-[16px] text-[12px] font-medium text-[#8CBCCD]"
                      >
                        Learn More&nbsp;&nbsp;→
                      </motion.div>
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