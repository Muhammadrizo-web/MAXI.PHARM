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
    title: "Наименований препаратов",
    text: "Зарегистрировано специалистами компании в 2025 году, экспертного рассмотрения и полного регистрационного процесса",
  },
  {
    icon: "/icons/Group-2.png",
    number: "6–24",
    title: "Регистрационный процесс",
    text: "Средний срок сопровождения регистрационного процесса в зависимости от категории продукции, объёма документации и регуляторных требований",
  },
  {
    icon: "/icons/Group-3.png",
    number: "10–30",
    title: "Многолетняя практика",
    text: "Практический опыт руководящего состава и специалистов компании в сфере фармацевтического законодательства",
  },
  {
    icon: "/icons/Group-4.png",
    number: "Полный цикл",
    title: "Комплексный подход",
    text: "От анализа регистрационного досье и подготовки необходимой документации до сопровождения клинических исследований и завершения процедуры",
  },
];

const transition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export default function WhyChooseUs() {
  return (
    <section
      className="
        w-full 
        overflow-hidden
        bg-[#0B2A34] 
        
        px-[22px]
        py-[80px]

        sm:px-[28px]
        sm:py-[90px]

        md:px-[46px]
        md:py-[110px]

        lg:px-[64px]
        lg:py-[120px]

        xl:px-[80px]
      "
    >
      <div
        className="
          mx-auto 
          w-full
          max-w-[1440px] 

          mt-[20px]
          sm:mt-[35px]
          lg:mt-[50px]
        "
      >
        {/* TOP TAG */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={transition}
          className="
            mx-auto 
            mb-[24px] 

            flex 
            w-fit 
            items-center 
            justify-center 

            rounded-[18px] 
            border 
            border-white/45 

            h-[40px]
            sm:h-[42px]

            px-[20px]
            sm:px-[30px]

            text-[14px]
            sm:text-[17px]

            font-medium 
            text-white
          "
        >
          Почему выбирают нас
        </motion.div>

        {/* TITLE */}

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ ...transition, delay: 0.06 }}
          className="
            mx-auto 
            max-w-[850px] 

            text-center 
            font-bold 
            uppercase 

            leading-[1.2] 
            tracking-[-0.03em] 
            text-white

            text-[24px]
            sm:text-[28px]
          "
        >
          МЫ ПРЕДОСТАВЛЯЕМ ЭКСПЕРТНЫЕ РЕШЕНИЯ
          <br />
          ДЛЯ КОМПАНИЙ ФАРМАЦЕВТИЧЕСКОЙ ОТРАСЛИ
        </motion.h2>

        {/* CARDS */}

        <div
          className="
            mt-[40px]

            grid 
            grid-cols-1 

            gap-[20px]

            justify-items-center

            sm:grid-cols-2
            sm:gap-[24px]

            md:grid-cols-2

            lg:grid-cols-4
            lg:gap-[30px]
          "
        >
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
                className="
                  flex 
                  flex-col 
                  items-center 

                  text-center 

                  rounded-[14px] 
                  bg-white 

                  shadow-[0_12px_28px_rgba(0,0,0,0.18)]

                  px-[16px]
                  py-[22px]

                  w-full
                  max-w-[320px]

                  min-h-[260px]

                  lg:w-[270px]
                "
              >
                {/* ICON */}

                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="
                    mb-[18px] 

                    h-[46px]
                    w-[46px]

                    sm:h-[50px]
                    sm:w-[50px]

                    object-contain
                  "
                />

                {/* NUMBER */}

                <div
                  className="
                    text-[#0B2A34]

                    text-[24px]
                    sm:text-[26px]

                    font-[500] 
                    leading-[1.05]
                  "
                >
                  {item.number}
                </div>

                {/* TITLE */}

                <div
                  className="
                    mt-[8px] 

                    whitespace-pre-line 

                    text-[#3C555D]

                    text-[18px]
                    sm:text-[20px]

                    font-[500] 
                    leading-[1.08]
                  "
                >
                  {item.title}
                </div>

                {/* TEXT */}

                <p
                  className="
                    mt-[18px]

                    max-w-[240px]

                    text-[#5C6670]

                    text-[14px]
                    sm:text-[15px]

                    font-medium 
                    leading-[1.45]
                  "
                >
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