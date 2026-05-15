import { Link } from "react-router-dom";
import { motion, type Transition } from "framer-motion";

type ServiceItem = {
  icon: string;
  title: string;
  text: string;
  slug: string;
};

const services: ServiceItem[] = [
  {
    icon: "/icons/ic-1.png",
    title: "РЕГИСТРАЦИЯ\nЛЕКАРСТВЕННЫХ СРЕДСТВ",
    text: "Полное сопровождение государственной регистрации лекарственных препаратов, включая подготовку документации...",
    slug: "drug-registration",
  },
  {
    icon: "/icons/ic-2.png",
    title: "РЕГИСТРАЦИЯ\nМЕДИЦИНСКИХ ИЗДЕЛИЙ",
    text: "Профессиональное сопровождение регистрации медицинских изделий, оборудования и продукции медицинского назначения...",
    slug: "medical-devices",
  },
  {
    icon: "/icons/ic-3.png",
    title: "РЕГИСТРАЦИЯ\nБАД",
    text: "Регуляторное сопровождение регистрации биологически активных добавок с подготовкой необходимой документации...",
    slug: "bad-registration",
  },
  {
    icon: "/icons/ic-4.png",
    title: "РЕГИСТРАЦИЯ\nКОСМЕТИЧЕСКОЙ ПРОДУКЦИИ",
    text: "Сопровождение регистрации лечебной и косметической продукции в соответствии с установленными требованиями...",
    slug: "cosmetics-registration",
  },
  {
    icon: "/icons/ic-5.png",
    title: "КЛИНИЧЕСКИЕ\nИССЛЕДОВАНИЯ",
    text: "Организация и сопровождение клинических исследований в рамках регистрационного процесса с соблюдением...",
    slug: "clinical-research",
  },
  {
    icon: "/icons/ic-6.png",
    title: "РЕГУЛЯТОРНЫЙ\nКОНСАЛТИНГ",
    text: "Экспертная поддержка по вопросам законодательства, подготовки регистрационного досье и сопровождения...",
    slug: "regulatory-consulting",
  },
];

const transition: Transition = {
  duration: 0.45,
  ease: [0.19, 1, 0.22, 1],
};

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-4 py-[58px] sm:px-6 sm:py-[70px] md:py-[84px]">
      <div className="mx-auto max-w-[1220px] mt-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={transition}
          className="mx-auto mb-[20px] flex h-[36px] w-fit items-center justify-center rounded-[20px] border border-[#CDD6DA] bg-white px-[22px] text-[14px] font-medium text-[#0B2A35] sm:mb-[24px] sm:h-[40px] sm:px-[30px] sm:text-[15px]"
        >
          Наши услуги
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ ...transition, delay: 0.04 }}
          className="mx-auto max-w-[980px] text-center text-[18px] font-bold uppercase leading-[1.2] tracking-[-0.03em] text-[#0B2A35] sm:text-[30px] md:text-[30px]"
        >
          КОМПЛЕКСНОЕ РЕГУЛЯТОРНОЕ СОПРОВОЖДЕНИЕ
          <br className="hidden sm:block" />
          ФАРМАЦЕВТИЧЕСКОЙ ПРОДУКЦИИ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ ...transition, delay: 0.08 }}
          className="mx-auto max-w-[650px] text-center text-[15px] leading-[1.4] text-[#6B747B] sm:mt-[18px] sm:text-[16px]"
        >
          Профессиональное сопровождение на всех этапах регистрации —
          <br className="hidden sm:block" />
          от подготовки документов до получения разрешения
        </motion.p>

        <div className="mt-[30px] grid grid-cols-1 gap-[18px] sm:mt-[38px] sm:gap-[24px] md:grid-cols-2 xl:grid-cols-3 xl:gap-[30px] pl-[20px]">
          {services.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{
                opacity: 0,
                y: 36,
                scale: 0.97,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.018,
                borderColor: "#BFD4DE",
                backgroundColor: "#FBFDFE",
                boxShadow:
                  "0 30px 70px rgba(11,42,53,0.13), 0 12px 28px rgba(11,42,53,0.08), 0 0 0 1px rgba(110,171,193,0.18)",
              }}
              transition={{
                ...transition,
                delay: index * 0.04,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group min-h-[185px] rounded-[8px] border border-[#DDE4E8] bg-white px-[20px] py-[22px] shadow-[0_8px_22px_rgba(20,35,45,0.06)] sm:min-h-[200px] sm:px-[20px] sm:py-[26px]"
            >
              <div className="flex items-start gap-[16px] sm:gap-[20px]">
                <motion.div
                  whileHover={{ scale: 1.045 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className="mt-[2px] h-[38px] w-[38px] object-contain sm:h-[44px] sm:w-[44px]"
                  />
                </motion.div>

                <div>
                  <h3 className="whitespace-pre-line text-[14px] font-[700] uppercase leading-[1.08] tracking-[-0.01em] text-[#0B2A35] sm:text-[16px]">
                    {item.title}
                  </h3>

                  <p className="mt-[14px] max-w-[290px] text-[14px] font-medium leading-[1.3] text-[#5F6870] sm:mt-[18px] sm:text-[16px] sm:leading-[1.28]">
                    {item.text}
                  </p>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.22 }}
                    className="mt-[18px] sm:mt-[22px]"
                  >
                    <Link
                      to={`/services/${item.slug}`}
                      className="text-[12px] font-bold text-[#0E9B67] transition-colors duration-300 hover:text-[#0E9B67]"
                    >
                      Подробнее →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}