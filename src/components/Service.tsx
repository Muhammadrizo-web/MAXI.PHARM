import React from "react";
import { motion, type Transition } from "framer-motion";
import {
  Pill,
  Monitor,
  ClipboardList,
  FlaskConical,
  Microscope,
  ShieldCheck,
} from "lucide-react";

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  text: string;
};

const services: ServiceItem[] = [
  {
    icon: Pill,
    title: "РЕГИСТРАЦИЯ\nЛЕКАРСТВЕННЫХ СРЕДСТВ",
    text: "Полное сопровождение государственной регистрации лекарственных препаратов, включая подготовку документации...",
  },
  {
    icon: Monitor,
    title: "РЕГИСТРАЦИЯ\nМЕДИЦИНСКИХ ИЗДЕЛИЙ",
    text: "Профессиональное сопровождение регистрации медицинских изделий, оборудования и продукции медицинского назначения...",
  },
  {
    icon: ClipboardList,
    title: "РЕГИСТРАЦИЯ\nБАД",
    text: "Регуляторное сопровождение регистрации биологически активных добавок с подготовкой необходимой документации...",
  },
  {
    icon: FlaskConical,
    title: "РЕГИСТРАЦИЯ\nКОСМЕТИЧЕСКОЙ ПРОДУКЦИИ",
    text: "Сопровождение регистрации лечебной и косметической продукции в соответствии с установленными требованиями...",
  },
  {
    icon: Microscope,
    title: "КЛИНИЧЕСКИЕ\nИССЛЕДОВАНИЯ",
    text: "Организация и сопровождение клинических исследований в рамках регистрационного процесса с соблюдением...",
  },
  {
    icon: ShieldCheck,
    title: "РЕГУЛЯТОРНЫЙ\nКОНСАЛТИНГ",
    text: "Экспертная поддержка по вопросам законодательства, подготовки регистрационного досье и сопровождения...",
  },
];

const transition: Transition = {
  duration: 0.45,
  ease: [0.19, 1, 0.22, 1],
};

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-6 py-[84px]">
      <div className="mx-auto max-w-[1220px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={transition}
          className="mx-auto mb-[24px] flex h-[40px] w-fit items-center justify-center rounded-[20px] border border-[#CDD6DA] bg-white px-[30px] text-[15px] font-medium text-[#0B2A35]"
        >
          Наши услуги
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ ...transition, delay: 0.04 }}
          className="mx-auto max-w-[980px] text-center text-[30px] font-[700] uppercase leading-[1.08] tracking-[-0.03em] text-[#0B2A35] md:text-[36px]"
        >
          КОМПЛЕКСНОЕ РЕГУЛЯТОРНОЕ СОПРОВОЖДЕНИЕ
          <br />
          ФАРМАЦЕВТИЧЕСКОЙ ПРОДУКЦИИ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ ...transition, delay: 0.08 }}
          className="mx-auto mt-[18px] max-w-[650px] text-center text-[18px] font-semi leading-[1.4] text-[#6B747B]"
        >
          Профессиональное сопровождение на всех этапах регистрации —
          <br />
          от подготовки документов до получения разрешения
        </motion.p>

        <div className="mt-[38px] grid grid-cols-1 gap-[32px] md:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                transition={{
                  ...transition,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.012,
                  borderColor: "#C8D7DF",
                  boxShadow:
                    "0 24px 60px rgba(20,35,45,0.10), 0 8px 22px rgba(20,35,45,0.06), 0 0 0 1px rgba(11,42,53,0.02)",
                  transition: {
                    duration: 0.28,
                    ease: [0.19, 1, 0.22, 1],
                  },
                }}
                className="group min-h-[205px] rounded-[8px] border border-[#DDE4E8] bg-white px-[28px] py-[26px] shadow-[0_8px_22px_rgba(20,35,45,0.06)] transition-all duration-300"
              >
                <div className="flex items-start gap-[20px]">
                  <motion.div
                    whileHover={{ scale: 1.045 }}
                    transition={{
                      duration: 0.25,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="shrink-0"
                  >
                    <Icon
                      size={44}
                      strokeWidth={1.75}
                      className="mt-[2px] text-[#0B2A35]"
                    />
                  </motion.div>

                  <div>
                    <h3 className="whitespace-pre-line text-[16px] font-[700] uppercase leading-[1.08] tracking-[-0.01em] text-[#0B2A35]">
                      {item.title}
                    </h3>

                    <p className="mt-[18px] max-w-[290px] text-[16px] font-medium leading-[1.28] text-[#5F6870]">
                      {item.text}
                    </p>

                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{
                        duration: 0.22,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      className="mt-[22px] text-[12px] font-bold text-[#6EABC1]"
                    >
                      Подробнее →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}