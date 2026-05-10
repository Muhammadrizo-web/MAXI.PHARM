import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Анализ досье",
    text: "Первичный анализ предоставленной документации, оценка полноты материалов и определение дальнейшей стратегии регистрационного сопровождения",
    side: "left",
  },
  {
    id: 2,
    title: "Формирование досье",
    text: "Подготовка, структурирование и оформление регистрационного досье в соответствии с установленными требованиями уполномоченных органов",
    side: "right",
  },
  {
    id: 3,
    title: "Подача на рассмотрение",
    text: "организация подачи полного регистрационного пакета в уполномоченный государственный орган с сопровождением процедуры рассмотрения",
    side: "left",
  },
  {
    id: 4,
    title: "Сопровождение регистрации",
    text: "Комплексное сопровождение регистрационного процесса на всех этапах экспертного рассмотрения и взаимодействия с профильными структурами",
    side: "right",
  },
  {
    id: 5,
    title: "Регистрация в Министерстве здравоохранения РУз",
    text: "Завершение регистрационного процесса с получением регистрационного решения и официальным оформлением продукции в установленном порядке",
    side: "left",
  },
  {
    id: 6,
    title: "Клинические исследования",
    text: "рганизация и сопровождение клинических исследований в рамках регистрационного процесса в соответствии с действующимиормативными нормативных требованиями",
    side: "right",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative w-full bg-[#f7f7f4] overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-16 py-16 sm:py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full border border-[#ddddda] bg-white/80 text-[13px] sm:text-[14px] text-[#4c5a5b] font-medium mb-6 sm:mb-7 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
            Как мы работаем
          </div>

          <h2 className="mx-auto max-w-[1280px] text-[#0b252a] text-[28px] sm:text-[34px] md:text-[40px] font-bold uppercase tracking-[-0.045em] leading-[0.98] sm:leading-[0.94]">
            Пошаговое сопровождение регистрационного
            <br className="hidden sm:block" />
            процесса
          </h2>

          <p className="mt-6 sm:mt-7 mx-auto max-w-[640px] text-[#687172] text-[15.5px] sm:text-[17px] md:text-[20px] leading-[1.5] sm:leading-[1.45]">
            Системный подход к сопровождению регистрационных процедур —
            от первичного анализа документации до получения итогового
            регистрационного решения
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-[1180px]">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
            className="absolute left-[22px] md:left-1/2 top-[10px] bottom-[10px] w-px bg-[#d4d4cf] origin-top md:-translate-x-1/2"
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
                className="grid grid-cols-[44px_1fr] md:grid-cols-[1fr_112px_1fr] items-start md:items-center gap-x-5 md:gap-x-0 min-h-auto md:min-h-[170px] mb-6 md:mb-0"
              >
                <div
                  className={
                    step.side === "left"
                      ? "order-2 md:order-none text-left md:text-right md:pr-12 bg-white/70 md:bg-transparent rounded-[24px] md:rounded-none px-5 py-5 md:px-0 md:py-0 shadow-[0_16px_40px_rgba(11,37,42,0.06)] md:shadow-none border border-[#ecece8] md:border-none"
                      : "hidden md:block opacity-0 pointer-events-none"
                  }
                >
                  <h3 className="text-[#203438] text-[20px] sm:text-[22px] md:text-[27px] font-bold tracking-[-0.03em] leading-[1.05]">
                    {step.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 md:ml-auto max-w-[440px] text-[#667171] text-[14.5px] sm:text-[15px] md:text-[16.5px] leading-[1.45] md:leading-[1.38]">
                    {step.text}
                  </p>
                </div>

                <div className="order-1 md:order-none relative flex justify-center pt-5 md:pt-0">
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
                      ? "order-2 md:order-none text-left md:pl-12 bg-white/70 md:bg-transparent rounded-[24px] md:rounded-none px-5 py-5 md:px-0 md:py-0 shadow-[0_16px_40px_rgba(11,37,42,0.06)] md:shadow-none border border-[#ecece8] md:border-none"
                      : "hidden md:block opacity-0 pointer-events-none"
                  }
                >
                  <h3 className="text-[#203438] text-[20px] sm:text-[22px] md:text-[27px] font-bold tracking-[-0.03em] leading-[1.05]">
                    {step.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 max-w-[440px] text-[#667171] text-[14.5px] sm:text-[15px] md:text-[16.5px] leading-[1.45] md:leading-[1.38]">
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