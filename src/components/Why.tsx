import { motion, type Transition } from "framer-motion";

type StatItem = {
  icon: string;
  number: string;
  title: string;
  text: string;
};

const stats: StatItem[] = [
  {
    icon: "/icons/Group-1.png",
    number: "80+",
    title: "Наименований\nпрепаратов",
    text: "Зарегистрировано специалистами компании в 2025 году, экспертного рассмотрения и полного регистрационного процесса",
  },
  {
    icon: "/icons/Group-2.png",
    number: "6–24",
    title: "Месяцев",
    text: "Средний срок сопровождения регистрационного процесса в зависимости от категории продукции, объёма документации и регуляторных требований",
  },
  {
    icon: "/icons/Group-3.png",
    number: "10–30",
    title: "Лет опыта",
    text: "Практический опыт руководящего состава и специалистов компании в сфере фармацевтического законодательства",
  },
  {
    icon: "/icons/Group-4.png",
    number: "Полный цикл",
    title: "Комплексное\nсопровождение",
    text: "От анализа регистрационного досье и подготовки необходимой документации до сопровождения клинических исследований и завершения процедуры",
  },
];

const transition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0B2A34] px-6 py-[70px]">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={transition}
          className="mx-auto mb-[30px] flex h-[42px] w-fit items-center justify-center rounded-[18px] border border-white/45 px-[30px] text-[17px] font-medium text-white"
        >
          Почему выбирают нас
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ ...transition, delay: 0.06 }}
          className="mx-auto max-w-[850px] text-center text-[32px] font-[600] uppercase leading-[1.08] tracking-[-0.03em] text-white"
        >
          МЫ ПРЕДОСТАВЛЯЕМ ЭКСПЕРТНЫЕ РЕШЕНИЯ
          <br />
          ДЛЯ КОМПАНИЙ ФАРМАЦЕВТИЧЕСКОЙ ОТРАСЛИ
        </motion.h2>

        <div className="mt-[58px] grid grid-cols-1 gap-[36px] md:grid-cols-4">
          {stats.map((item, index) => {
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 38, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                  ...transition,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: "0 22px 42px rgba(0,0,0,0.22)",
                }}
                className="flex min-h-[260px] flex-col items-center rounded-[14px] bg-white px-[28px] py-[28px] text-center shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="mb-[18px] h-[50px] w-[50px] object-contain text-[#0B2A34]"
                />

                <div className="text-[26px] font-[500] leading-[1.05] text-[#0B2A34]">
                  {item.number}
                </div>

                <div className="mt-[8px] whitespace-pre-line text-[20px] font-[500] leading-[1.08] text-[#3C555D]">
                  {item.title}
                </div>

                <p className="mt-[22px] max-w-[220px] text-[15px] font-medium leading-[1.32] text-[#5C6670]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}