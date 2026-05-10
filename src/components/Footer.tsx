import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Footer() {
  const menu = ["О компании", "Услуги", "Как мы работаем", "FAQ", "Контакты"];

  const contacts = [
    "Республика Узбекистан, г. Ташкент",
    "ул. Сайрам, дом 26/4",
    "+998 (90) 928-22-99",
    "info@maxipharm",
    "maxipharm.reg@gmail.com",
  ];

  const smooth = [0.16, 1, 0.3, 1] as const;

  function HoverLink({ children }: { children: ReactNode }) {
    return (
      <motion.div className="relative w-fit cursor-pointer text-white/48 hover:text-white/80 transition-colors duration-500">
        <motion.span whileHover={{ y: -1 }} transition={{ duration: 0.5, ease: smooth }}>
          {children}
        </motion.span>
      </motion.div>
    );
  }

  return (
    <footer className="w-full bg-[#07333B] text-white">
      <div className="max-w-[1180px] mx-auto px-[20px] sm:px-[24px] pt-[38px] sm:pt-[56px] pb-[28px] sm:pb-[38px]">
        <div className="grid grid-cols-1 md:grid-cols-[430px_180px_1fr] gap-[34px] md:gap-[86px]">
          <div>
            <motion.img
              src="/logo1.png"
              alt="MAXIPHARM EXPERT"
              className="w-[138px] sm:w-[160px] h-auto mb-[20px] sm:mb-[26px]"
              whileHover={{ scale: 1.015, y: -1 }}
              transition={{ duration: 0.7, ease: smooth }}
            />

            <p className="w-full max-w-[310px] text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] font-medium text-white/42">
              Экспертное регуляторное сопровождение
              <br />
              в сфере фармацевтики и медицинских
              <br />
              технологий
            </p>
          </div>

          <div className="pt-0 md:pt-[4px]">
            <h4 className="text-[14px] sm:text-[16px] leading-none font-bold mb-[18px] sm:mb-[28px] text-white/92">
              Меню
            </h4>

            <div className="space-y-[12px] sm:space-y-[15px] text-[12px] sm:text-[14px] leading-none font-medium">
              {menu.map((item) => (
                <HoverLink key={item}>{item}</HoverLink>
              ))}
            </div>
          </div>

          <div className="pt-0 md:pt-[4px]">
            <h4 className="text-[14px] sm:text-[16px] leading-none font-bold mb-[18px] sm:mb-[28px] text-white/92">
              Контактная информация
            </h4>

            <div className="space-y-[12px] sm:space-y-[15px] text-[12px] sm:text-[14px] leading-none font-medium">
              {contacts.map((item) => (
                <HoverLink key={item}>{item}</HoverLink>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="w-full h-px bg-white/16 mt-[34px] sm:mt-[48px] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: smooth }}
        />

        <div className="flex flex-col sm:flex-row justify-between items-start gap-[14px] sm:gap-0 pt-[16px] sm:pt-[18px]">
          <span className="text-[11px] sm:text-[12px] font-medium text-white/38">
            © 2026 MAXIPHARM. Все права защищены.
          </span>

          <div className="sm:mr-[120px] space-y-[4px] sm:space-y-[5px] text-[11px] sm:text-[12px] leading-[14px] sm:leading-[15px] font-medium">
            <HoverLink>Политика конфиденциальности</HoverLink>
            <HoverLink>Условия использования</HoverLink>
          </div>
        </div>
      </div>
    </footer>
  );
}