import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Анализ досье",
    text: "Первичный анализ документов, состава и данных, оценка соответствия требованиям регистрационного процесса.",
    side: "left",
  },
  {
    id: 2,
    title: "Формирование досье",
    text: "Подготовка, структурирование и оформление регистрационного досье с учетом установленных требований.",
    side: "right",
  },
  {
    id: 3,
    title: "Подача на рассмотрение",
    text: "Сопровождение подачи заявления и регистрационных материалов в уполномоченные органы.",
    side: "left",
  },
  {
    id: 4,
    title: "Сопровождение регистрации",
    text: "Коммуникация с органами, ответы на дополнительные запросы и контроль прохождения этапов.",
    side: "right",
  },
  {
    id: 5,
    title: "Регистрация в Министерстве здравоохранения РУз",
    text: "Завершение регистрационного процесса с получением регистрационного удостоверения.",
    side: "left",
  },
  {
    id: 6,
    title: "Клинические исследования",
    text: "Организация и сопровождение клинической апробации для оценки безопасности и эффективности.",
    side: "right",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative w-full bg-[#f7f7f4] overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-8 md:px-16 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#ddddda] bg-white/80 text-[14px] text-[#4c5a5b] font-medium mb-7 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
            Как мы работаем
          </div>

          <h2 className="mx-auto max-w-[1280px] text-[#0b252a] text-[30px] md:text-[40px] font-bold uppercase tracking-[-0.045em] leading-[0.94]">
            Пошаговое сопровождение регистрационного
            <br />
             процесса
          </h2>

          <p className="mt-7 mx-auto max-w-[820px] text-[#687172] text-[17px] md:text-[20px] leading-[1.45]">
            Системный подход к сопровождению регистрационного процесса —
            от первичного анализа документации до получения итогового
            регистрационного решения.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-[1180px]">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
            className="absolute left-1/2 top-[10px] bottom-[10px] w-px bg-[#d4d4cf] origin-top -translate-x-1/2"
          />

          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{
                  opacity: 0,
                  x: step.side === "left" ? -80 : 80,
                  y: 34,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.42 }}
                transition={{
                  duration: 0.78,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-[1fr_112px_1fr] items-center min-h-[170px]"
              >
                <div
                  className={
                    step.side === "left"
                      ? "text-right pr-12"
                      : "opacity-0 pointer-events-none"
                  }
                >
                  <h3 className="text-[#203438] text-[21px] md:text-[27px] font-bold tracking-[-0.03em] leading-[1]">
                    {step.title}
                  </h3>

                  <p className="mt-4 ml-auto max-w-[440px] text-[#667171] text-[14.5px] md:text-[16.5px] leading-[1.38]">
                    {step.text}
                  </p>
                </div>

                <div className="relative flex justify-center">
                  <motion.div
                    initial={{ scale: 0.76, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-20 w-[44px] h-[44px] rounded-full bg-[#089A69] text-white flex items-center justify-center text-[16px] font-bold shadow-[0_12px_32px_rgba(0,0,0,0.14)]"
                  >
                    {step.id}
                  </motion.div>
                </div>

                <div
                  className={
                    step.side === "right"
                      ? "text-left pl-12"
                      : "opacity-0 pointer-events-none"
                  }
                >
                  <h3 className="text-[#203438] text-[21px] md:text-[27px] font-bold tracking-[-0.03em] leading-[1]">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-[440px] text-[#667171] text-[14.5px] md:text-[16.5px] leading-[1.38]">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}