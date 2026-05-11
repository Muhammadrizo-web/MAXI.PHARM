import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";

type Service = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  sectionTitle: string;
  text: string;
};

const services: Service[] = [
  {
    slug: "drug-registration",
    title: "РЕГУЛЯТОРНОЕ СОПРОВОЖДЕНИЕ ФАРМАЦЕВТИЧЕСКОЙ ПРОДУКЦИИ",
    subtitle:
      "Помогаем фармацевтическим компаниям пройти регистрацию лекарственных средств и медицинских изделий — от подготовки досье до получения регистрационного удостоверения",
    image: "/services/drug-registration.png",
    sectionTitle: "РЕГИСТРАЦИЯ ЛЕКАРСТВЕННЫХ СРЕДСТВ",
    text:
      "Регистрация лекарственных средств — комплексное сопровождение процесса государственной регистрации лекарственных препаратов в соответствии с действующими нормативными требованиями. Услуга включает подготовку и формирование регистрационного досье, анализ и систематизацию документации, взаимодействие с государственными органами, сопровождение экспертизы и консультационную поддержку по всем этапам регистрационных и инвестиционных процедур.",
  },
  {
    slug: "medical-devices",
    title: "РЕГУЛЯТОРНОЕ СОПРОВОЖДЕНИЕ ФАРМАЦЕВТИЧЕСКОЙ ПРОДУКЦИИ",
    subtitle:
      "Профессиональное сопровождение регистрации медицинских изделий и оборудования",
    image: "/services/medical-devices.png",
    sectionTitle: "РЕГИСТРАЦИЯ МЕДИЦИНСКИХ ИЗДЕЛИЙ",
    text:
      "Профессиональное сопровождение регистрации медицинских изделий, оборудования и продукции медицинского назначения.",
  },
  {
    slug: "bad-registration",
    title: "РЕГУЛЯТОРНОЕ СОПРОВОЖДЕНИЕ ФАРМАЦЕВТИЧЕСКОЙ ПРОДУКЦИИ",
    subtitle:
      "Регистрация биологически активных добавок с подготовкой полного пакета документов",
    image: "/services/bad-registration.png",
    sectionTitle: "РЕГИСТРАЦИЯ БАД",
    text:
      "Регуляторное сопровождение регистрации биологически активных добавок с подготовкой необходимой документации.",
  },
  {
    slug: "cosmetics-registration",
    title: "РЕГУЛЯТОРНОЕ СОПРОВОЖДЕНИЕ ФАРМАЦЕВТИЧЕСКОЙ ПРОДУКЦИИ",
    subtitle: "Сопровождение регистрации косметической продукции",
    image: "/services/cosmetics-registration.png",
    sectionTitle: "РЕГИСТРАЦИЯ КОСМЕТИЧЕСКОЙ ПРОДУКЦИИ",
    text:
      "Сопровождение регистрации лечебной и косметической продукции в соответствии с установленными требованиями.",
  },
  {
    slug: "clinical-research",
    title: "РЕГУЛЯТОРНОЕ СОПРОВОЖДЕНИЕ ФАРМАЦЕВТИЧЕСКОЙ ПРОДУКЦИИ",
    subtitle: "Организация и сопровождение клинических исследований",
    image: "/services/clinical-research.png",
    sectionTitle: "КЛИНИЧЕСКИЕ ИССЛЕДОВАНИЯ",
    text:
      "Организация и сопровождение клинических исследований в рамках регистрационного процесса.",
  },
  {
    slug: "regulatory-consulting",
    title: "РЕГУЛЯТОРНОЕ СОПРОВОЖДЕНИЕ ФАРМАЦЕВТИЧЕСКОЙ ПРОДУКЦИИ",
    subtitle: "Экспертная поддержка по вопросам законодательства и регистрации",
    image: "/services/regulatory-consulting.png",
    sectionTitle: "РЕГУЛЯТОРНЫЙ КОНСАЛТИНГ",
    text:
      "Экспертная поддержка по вопросам законодательства, подготовки регистрационного досье и сопровождения.",
  },
];

const tabs = [
  { label: "Регистрация лекарственных средств", slug: "drug-registration" },
  { label: "Медицинские изделия", slug: "medical-devices" },
  { label: "БАД", slug: "bad-registration" },
  { label: "Косметическая продукция", slug: "cosmetics-registration" },
  { label: "Клинические исследования", slug: "clinical-research" },
  { label: "Регуляторный консалтинг", slug: "regulatory-consulting" },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];

  const smooth = [0.16, 1, 0.3, 1] as const;

  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#FAFAFA] pt-[74px] md:pt-[88px]">
        <section className="pb-[52px] md:pb-[64px]">
          <div className="mx-auto w-full max-w-[860px] px-[22px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: smooth }}
              className="flex justify-center"
            >
              <div className="flex h-[28px] items-center justify-center rounded-full border border-[#D7DEE2] bg-white px-[22px] text-[11px] font-medium text-[#0B2A35]">
                Наши услуги
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.04, ease: smooth }}
              className="mx-auto mt-[18px] max-w-[820px] text-[28px] font-black uppercase leading-[1.03] tracking-[-0.045em] text-[#0B2A35] md:text-[46px]"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: smooth }}
              className="mx-auto mt-[11px] max-w-[620px] text-[11px] font-medium leading-[1.45] text-[#6B767B] md:text-[14px]"
            >
              {service.subtitle}
            </motion.p>
          </div>

          <div className="mx-auto mt-[28px] w-full max-w-[1120px] px-[22px] md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: smooth }}
              className="flex flex-wrap items-center justify-center gap-[7px] md:justify-start"
            >
              {tabs.map((tab) => {
                const active = tab.slug === service.slug;

                return (
                  <Link
                    key={tab.slug}
                    to={`/services/${tab.slug}`}
                    className={[
                      "inline-flex h-[24px] items-center justify-center rounded-full px-[14px] text-[9px] font-semibold transition-all duration-500 md:text-[11px]",
                      active
                        ? "bg-[#12A05C] text-white shadow-[0_8px_18px_rgba(18,160,92,.22)]"
                        : "border border-[#DDE4E7] bg-[#F3F5F6] text-[#0B2A35] hover:border-[#12A05C] hover:text-[#12A05C]",
                    ].join(" ")}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.988 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.16, ease: smooth }}
              className="mt-[26px] w-full overflow-hidden rounded-[12px] shadow-[0_14px_34px_rgba(11,42,53,.08)]"
            >
              <img
                src={service.image}
                alt={service.sectionTitle}
                className="h-[270px] w-full object-cover md:h-[430px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: smooth }}
              className="mt-[20px] text-left"
            >
              <h2 className="text-[12px] font-black uppercase leading-[1.2] text-[#0B2A35] md:text-[16px]">
                {service.sectionTitle}
              </h2>

              <p className="mt-[8px] max-w-[1040px] text-[10px] font-medium leading-[1.55] text-[#5F6D72] md:text-[13px]">
                {service.text}
              </p>
            </motion.div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: smooth }}
          className="px-[16px] pb-[56px] md:pb-[70px]"
        >
          <div className="mx-auto max-w-[650px] text-center">
            <h3 className="text-[18px] font-black uppercase tracking-[-0.03em] text-[#0B2A35] md:text-[28px]">
              Остались вопросы?
            </h3>

            <p className="mt-[8px] text-[10px] font-medium text-[#7A858B] md:text-[12px]">
              Свяжитесь с нами — подберем идеальное решение для вашего продукта
            </p>

            <motion.a
              href="/#contact"
              whileHover={{ y: -1, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.35, ease: smooth }}
              className="mx-auto mt-[14px] inline-flex h-[28px] items-center justify-center rounded-full bg-[#12A05C] px-[22px] text-[9px] font-bold text-white shadow-[0_10px_24px_rgba(18,160,92,.24)] hover:bg-[#0C8A4F] md:h-[32px] md:px-[26px] md:text-[10px]"
            >
              КОНТАКТЫ
            </motion.a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}