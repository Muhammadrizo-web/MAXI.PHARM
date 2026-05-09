import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "Сколько времени занимает регистрация продукции?",
      answer:
        "Срок регистрационного процесса в среднем составляет от 6 до 24 месяцев в зависимости от категории продукции, полноты регистрационного досье, необходимости проведения дополнительных исследований и действующих регуляторных требований. На старте проекта специалисты компании помогают определить ориентировочные сроки сопровождения",
      leftTitle: "СРОКИ РЕГИСТРАЦИИ",
      leftText:
        "Мы заранее оцениваем документацию, категорию продукции и возможные этапы согласования, чтобы клиент понимал реальный путь регистрации.",
    },
    {
      question: "С какими категориями продукции работает MAXlPHARM?",
      answer:
        "Компания сопровождает процессы регистрации лекарственных средств, медицинских изделий, биологически активных добавок, косметической продукции, а также оказывает экспертную поддержку по вопросам клинических исследований и подготовки регистрационного досье",
      leftTitle: "КАТЕГОРИИ ПРОДУКЦИИ",
      leftText:
        "MAXIPHARM сопровождает проекты в сфере фармацевтики и медицинских технологий, где важны точность, документы и регуляторная экспертиза.",
    },
    {
      question: "Что входит в комплексное сопровождение?",
      answer:
        "Комплексное сопровождение включает анализ документации, подготовку регистрационного досье, подачу материалов в уполномоченные органы, сопровождение процесса рассмотрения, организацию клинических исследований (при необходимости) и завершение регистрационной процедуры в установленном порядке",
      leftTitle: "ПОЛНОЕ СОПРОВОЖДЕНИЕ",
      leftText:
        "Клиент получает системную поддержку на каждом этапе: от проверки исходных материалов до завершения регистрационного процесса.",
    },
    {
      question: "Можно ли обратиться только за отдельной услугой?",
      answer:
        "Да. MAXIPHARM оказывает как полный цикл сопровождения, так и экспертную поддержку по отдельным направлениям — подготовка регистрационного досье, анализ документации, консультации по регуляторным требованиям и сопровождение отдельных этапов регистрации",
      leftTitle: "КЛИНИЧЕСКИЕ ИССЛЕДОВАНИЯ",
      leftText:
        "Мы помогаем выстроить процесс корректно с точки зрения документов, требований, сроков и взаимодействия с ответственными сторонами.",
    },
    {
      question:
        "Как компания помогает снизить риски отказа или задержек?",
      answer:
        "Благодаря глубокому анализу документации, корректной подготовке регистрационного досье и сопровождению проекта в соответствии с действующими требованиями, специалисты компании помогают минимизировать регуляторные риски и сократить вероятность дополнительных доработок",
      leftTitle: "ТОЧЕЧНАЯ КОНСУЛЬТАЦИЯ",
      leftText:
        "Если нужна помощь только на одном этапе, мы можем подключиться к конкретной задаче без полного сопровождения проекта.",
    },
    {
      question: "Как начать сотрудничество?",
      answer:
        "Сотрудничество начинается с первичной консультации, анализа категории продукции и оценки текущего состояния документации, после чего специалисты компании предлагают оптимальную стратегию дальнейшего регистрационного сопровождения",
      leftTitle: "НАЧАЛО РАБОТЫ",
      leftText:
        "Мы начинаем с первичного анализа задачи, после чего формируем понятный план действий, сроки и формат сопровождения.",
    },
  ];

  const current = active !== null ? faqs[active] : null;
  const ease = [0.16, 1, 0.3, 1];

  return (
    <motion.section
      className="bg-[#082F37] text-white py-[88px]"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="max-w-[1135px] mx-auto grid grid-cols-[360px_1fr] gap-[130px] items-start">
        <motion.div
          className="pt-[20px]"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
        >
          <motion.div
            className="inline-flex items-center justify-center h-[39px] px-[28px] rounded-full border border-white/45 text-[18px] leading-none mb-[24px]"
            whileHover={{
              borderColor: "rgba(255,255,255,.75)",
              backgroundColor: "rgba(255,255,255,.05)",
              y: -1,
            }}
            transition={{ duration: 0.35, ease }}
          >
            Как мы работаем
          </motion.div>

          <AnimatePresence mode="wait">
            {current ? (
              <motion.div
                key={current.leftTitle}
                initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 className="text-[28px] leading-[31px] font-bold tracking-[1.2px] uppercase max-w-[310px] mb-[24px]">
                  {current.leftTitle}
                </h2>

                <p className="text-[15px] leading-[17px] text-white/65 max-w-[315px]">
                  {current.leftText}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 className="text-[28px] leading-[31px] font-bold tracking-[1.2px] uppercase max-w-[310px] mb-[24px]">
                  ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                </h2>

                <p className="text-[15px] leading-[17px] text-white/65 max-w-[315px]">
                  Ответы на наиболее распространённые вопросы о процессе
                  регистрации, сроках сопровождения и взаимодействии с компанией
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="space-y-[14px]"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
        >
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={item.question}
                layout
                onClick={() => setActive(active === index ? null : index)}
                className="bg-[#F7F8F8] text-[#24404A] rounded-[8px] cursor-pointer overflow-hidden shadow-[0_14px_35px_rgba(0,0,0,.08)]"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 18px 42px rgba(0,0,0,.16)",
                }}
                transition={{
                  duration: 0.5,
                  ease,
                  delay: index * 0.04,
                }}
              >
                <div className="h-[48px] px-[20px] flex items-center justify-between">
                  <p className="text-[13px] leading-[15px] font-bold">
                    {item.question}
                  </p>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="text-[#24404A]"
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.45, ease },
                        opacity: { duration: 0.28 },
                      }}
                    >
                      <div className="px-[20px] pb-[18px] pt-[2px]">
                        <div className="w-full h-px bg-[#24404A]/10 mb-[13px]" />
                        <p className="text-[13px] leading-[18px] font-medium text-[#24404A]/75 max-w-[690px]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}