import { motion, type Transition } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const slugs = [
  "drug-registration",
  "medical-registration",
  "bad-registration",
  "cosmetics-registration",
  "clinical-research",
  "regulatory-consulting",
] as const;

const icons = [
  "/icons/ic-1.png",
  "/icons/ic-2.png",
  "/icons/ic-3.png",
  "/icons/ic-4.png",
  "/icons/ic-5.png",
  "/icons/ic-6.png",
];

const transition: Transition = {
  duration: 0.45,
  ease: [0.19, 1, 0.22, 1],
};

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = slugs.map((slug, i) => ({
    icon: icons[i],
    title: t(`services.items.${slug}.title`),
    text: t(`services.items.${slug}.text`),
    slug,
  }));

  return (
    <section
      className="
        relative w-full overflow-hidden bg-white
        px-[22px] py-[80px]
        sm:px-[28px] sm:py-[90px]
        md:px-[46px] md:py-[110px]
        lg:px-[64px] lg:py-[120px]
        xl:px-[80px]
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          mt-[20px] sm:mt-[35px] lg:mt-[50px]
        "
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={transition}
          className="
            mx-auto mb-[20px]
            flex w-fit items-center justify-center
            rounded-[20px] border border-[#CDD6DA] bg-white
            h-[36px] sm:h-[40px]
            px-[18px] sm:px-[30px]
            text-[13px] sm:text-[15px]
            font-medium text-[#0B2A35]
          "
        >
          {t("services.badge")}
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ ...transition, delay: 0.04 }}
          className="
            mx-auto max-w-[980px]
            text-center font-bold uppercase
            leading-[1.2] tracking-[-0.03em] text-[#0B2A35]
            text-[18px] sm:text-[24px] md:text-[30px]
            whitespace-pre-line
          "
        >
          {t("services.title")}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ ...transition, delay: 0.08 }}
          className="
            mx-auto max-w-[650px]
            text-center
            text-[14px] sm:text-[16px]
            leading-[1.5] text-[#6B747B]
            mt-[16px] sm:mt-[18px]
          "
        >
          {t("services.subtitle")}
        </motion.p>

        {/* Cards */}
        <div
          className="
            mt-[30px] sm:mt-[38px]
            grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
            gap-[18px] sm:gap-[24px] xl:gap-[30px]
            justify-items-center items-start
          "
        >
          {services.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 36, scale: 0.97, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
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
              className="
                group flex flex-col
                rounded-[8px] border border-[#DDE4E8] bg-white
                shadow-[0_8px_22px_rgba(20,35,45,0.06)]
                px-[18px] py-[20px] sm:px-[20px] sm:py-[26px]
                w-full max-w-[420px]
              "
            >
              <div className="flex items-start gap-[14px] sm:gap-[20px]">
                <motion.div
                  whileHover={{ scale: 1.045 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className="
                      mt-[2px]
                      h-[34px] w-[34px]
                      sm:h-[44px] sm:w-[44px]
                      object-contain
                    "
                  />
                </motion.div>

                <div className="flex flex-col flex-1">
                  <h3
                    className="
                      whitespace-pre-line
                      text-[13px] sm:text-[16px]
                      font-[700] uppercase
                      leading-[1.12] tracking-[-0.01em]
                      text-[#0B2A35]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-[12px] sm:mt-[18px]
                      max-w-[290px]
                      text-[13px] sm:text-[16px]
                      font-medium
                      leading-[1.45] sm:leading-[1.28]
                      text-[#5F6870]
                      break-words
                    "
                  >
                    {item.text}
                  </p>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.22 }}
                    className="mt-[16px] sm:mt-[22px]"
                  >
                    <Link
                      to={`/services/${item.slug}`}
                      className="
                        text-[12px] font-bold
                        text-[#0E9B67]
                        transition-colors duration-300
                        hover:text-[#0a7a51]
                      "
                    >
                      {t("services.more")}
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