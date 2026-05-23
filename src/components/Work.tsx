import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const stepIds = [1, 2, 3, 4, 5, 6] as const;
const sides = ["left", "right", "left", "right", "left", "right"] as const;

export default function ProcessTimeline() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const steps = stepIds.map((id, i) => ({
    id,
    title: t(`process.steps.${id}.title`),
    text: t(`process.steps.${id}.text`),
    side: sides[i],
  }));

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-16 py-16 sm:py-20 md:py-28 mt-[50px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: isMobile, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full border border-[#ddddda] bg-white/80 text-[13px] sm:text-[14px] text-[#4c5a5b] font-medium mb-6 sm:mb-7 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
            {t("process.badge")}
          </div>

          <h2 className="mx-auto max-w-[1280px] text-[#0b252a] text-[22px] sm:text-[34px] md:text-[30px] font-bold uppercase tracking-[-0.045em] leading-[0.98] sm:leading-[1.2] whitespace-pre-line">
            {t("process.title")}
          </h2>

          <p className="mt-3 sm:mt-2 mx-auto max-w-[640px] text-[#687172] text-[15.5px] sm:text-[17px] md:text-[16px] leading-[1.5] sm:leading-[1.45]">
            {t("process.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-[1180px]">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: isMobile, amount: 0.12 }}
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
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: isMobile, amount: 0.42 }}
                transition={{
                  duration: 0.78,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-[44px_1fr] md:grid-cols-[1fr_112px_1fr] items-start md:items-center gap-x-5 md:gap-x-0 md:min-h-[170px] mb-6 md:mb-0"
              >
                {/* Left slot */}
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

                {/* Center dot */}
                <div className="order-1 md:order-none relative flex justify-center pt-5 md:pt-0">
                  <motion.div
                    initial={{ scale: 0.76, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: isMobile, amount: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-20 w-[44px] h-[44px] rounded-full bg-[#089A69] text-white flex items-center justify-center text-[16px] font-bold"
                  >
                    {step.id}
                  </motion.div>
                </div>

                {/* Right slot */}
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