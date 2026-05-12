import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
  leftTitle: string;
  leftText: string;
};

const faqs: FaqItem[] = [
  {
    question: "Сколько времени занимает регистрация продукции?",
    answer:
      "Срок регистрационного процесса в среднем составляет от 6 до 24 месяцев в зависимости от категории продукции, полноты регистрационного досье, необходимости проведения дополнительных исследований и действующих регуляторных требований.",
    leftTitle: "СРОКИ РЕГИСТРАЦИИ",
    leftText:
      "Мы заранее оцениваем документацию, категорию продукции и возможные этапы согласования, чтобы клиент понимал реальный путь регистрации.",
  },
  {
    question: "С какими категориями продукции работает MAXIPHARM?",
    answer:
      "Компания сопровождает процессы регистрации лекарственных средств, медицинских изделий, биологически активных добавок, косметической продукции, а также оказывает экспертную поддержку по вопросам клинических исследований.",
    leftTitle: "КАТЕГОРИИ ПРОДУКЦИИ",
    leftText:
      "MAXIPHARM сопровождает проекты в сфере фармацевтики и медицинских технологий, где важны точность, документы и регуляторная экспертиза.",
  },
  {
    question: "Что входит в комплексное сопровождение?",
    answer:
      "Комплексное сопровождение включает анализ документации, подготовку регистрационного досье, подачу материалов в уполномоченные органы, сопровождение процесса рассмотрения и завершение регистрационной процедуры.",
    leftTitle: "ПОЛНОЕ СОПРОВОЖДЕНИЕ",
    leftText:
      "Клиент получает системную поддержку на каждом этапе: от проверки исходных материалов до завершения регистрационного процесса.",
  },
  {
    question: "Можно ли обратиться только за отдельной услугой?",
    answer:
      "Да. MAXIPHARM оказывает как полный цикл сопровождения, так и экспертную поддержку по отдельным направлениям — подготовка досье, анализ документации и консультации по регуляторным требованиям.",
    leftTitle: "ОТДЕЛЬНЫЕ УСЛУГИ",
    leftText:
      "Если нужна помощь только на одном этапе, мы можем подключиться к конкретной задаче без полного сопровождения проекта.",
  },
  {
    question: "Как компания помогает снизить риски отказа или задержек?",
    answer:
      "Благодаря глубокому анализу документации, корректной подготовке регистрационного досье и сопровождению проекта в соответствии с действующими требованиями специалисты компании помогают минимизировать регуляторные риски.",
    leftTitle: "СНИЖЕНИЕ РИСКОВ",
    leftText:
      "Мы заранее выявляем слабые места в документации и помогаем сократить вероятность доработок, задержек и отказов.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Сотрудничество начинается с первичной консультации, анализа категории продукции и оценки текущего состояния документации, после чего формируется стратегия дальнейшего сопровождения.",
    leftTitle: "НАЧАЛО РАБОТЫ",
    leftText:
      "Мы начинаем с первичного анализа задачи, после чего формируем понятный план действий, сроки и формат сопровождения.",
  },
];

function useScrollDirection() {
  const [direction, setDirection] = useState<"down" | "up">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current + 4) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY.current - 4) {
        setDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}

function RevealBlock({
  children,
  className,
  from = { opacity: 0, y: 36 },
  to = { opacity: 1, y: 0 },
  transition,
  amount = 0.18,
  delay = 0,
}: any) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    amount,
    margin: "-80px 0px -80px 0px",
  });

  const direction = useScrollDirection();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      // Сброс только если блок полностью ниже экрана
      if (rect.top > window.innerHeight + 100) {
        setVisible(false);
      }

      // Показ при входе
      if (isInView) {
        setVisible(true);
      }
    };

    checkPosition();

    window.addEventListener("scroll", checkPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={from}
      animate={visible ? to : from}
      transition={{
        duration: direction === "up" ? 0 : transition?.duration ?? 0.85,
        ease: transition?.ease ?? [0.16, 1, 0.3, 1],
        delay: direction === "up" ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  const current = active !== null ? faqs[active] : null;

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative w-full overflow-hidden bg-[#082F37] text-white py-[56px] px-[18px] md:py-[88px] md:px-0">
      <RevealBlock
        className="max-w-[1135px] mx-auto grid grid-cols-1 gap-[34px] items-start md:grid-cols-[360px_1fr] md:gap-[130px]"
        from={{ opacity: 0, y: 36 }}
        to={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
      >
        <RevealBlock
          className="pt-0 md:pt-[20px]"
          from={{ opacity: 0, x: -42 }}
          to={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease }}
        >
          <motion.div
            className="inline-flex items-center justify-center h-[36px] px-[22px] rounded-full border border-white/45 text-[15px] leading-none mb-[20px] md:h-[39px] md:px-[28px] md:text-[18px] md:mb-[24px]"
            whileHover={{
              borderColor: "rgba(255,255,255,.75)",
              backgroundColor: "rgba(255,255,255,.05)",
              y: -1,
            }}
            transition={{ duration: 0.45, ease }}
          >
            Как мы работаем
          </motion.div>

          <AnimatePresence mode="wait">
            {current ? (
              <motion.div
                key={current.leftTitle}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.15, ease }}
              >
                <h2 className="text-[23px] leading-[27px] font-bold tracking-[1px] uppercase max-w-[310px] mb-[16px] md:text-[35px] md:leading-[40px] md:tracking-[1.2px] md:mb-[14px]">
                  {current.leftTitle}
                </h2>

                <p className="text-[12px] leading-[19px] text-white/65 max-w-full md:text-[15px] md:leading-[17px] md:max-w-[315px]">
                  {current.leftText}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.15, ease }}
              >
                <h2 className="text-[23px] leading-[27px] font-bold tracking-[1px] uppercase max-w-[310px] mb-[16px] md:text-[35px] md:leading-[35px] md:tracking-[1.2px] md:mb-[14px]">
                  ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                </h2>

                <p className="text-[12px] leading-[19px] text-white/65 max-w-full md:text-[15px] md:leading-[17px] md:max-w-[315px]">
                  Ответы на наиболее распространённые вопросы о процессе
                  регистрации, сроках сопровождения и взаимодействии с компанией
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </RevealBlock>

        <RevealBlock
          className="space-y-[10px] md:space-y-[14px]"
          from={{ opacity: 0, x: 42 }}
          to={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease }}
          delay={0.08}
        >
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <RevealBlock
                key={item.question}
                amount={0.12}
                delay={index * 0.045}
                from={{ opacity: 0, y: 32 }}
                to={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease }}
              >
                <motion.div
                  layout
                  onClick={() => setActive(isOpen ? null : index)}
                  className="bg-[#F7F8F8] text-[#24404A] rounded-[8px] cursor-pointer overflow-hidden shadow-[0_14px_35px_rgba(0,0,0,.08)]"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 18px 42px rgba(0,0,0,.16)",
                  }}
                  transition={{
                    layout: { duration: 0.45, ease },
                  }}
                >
                  <div className="min-h-[54px] px-[16px] py-[12px] flex items-center justify-between gap-[14px] md:h-[48px] md:min-h-0 md:px-[20px] md:py-0">
                    <p className="text-[13px] leading-[17px] font-bold md:leading-[15px]">
                      {item.question}
                    </p>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="text-[#24404A] shrink-0"
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
                          opacity: { duration: 0.3, ease },
                        }}
                      >
                        <div className="px-[16px] pb-[18px] pt-[2px] md:px-[20px]">
                          <div className="w-full h-px bg-[#24404A]/10 mb-[13px]" />

                          <p className="text-[13px] leading-[19px] font-medium text-[#24404A]/75 max-w-[690px]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </RevealBlock>
            );
          })}
        </RevealBlock>
      </RevealBlock>
    </section>
  );
}