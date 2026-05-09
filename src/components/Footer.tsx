import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Footer() {
  const menu = [
    "Главная",
    "О компании",
    "Ключевые направления",
    "Услуги",
    "Как мы работаем",
    "FAQ",
    "Контакты",
  ];

  const directions = [
    "Регистрация лекарственных средств",
    "Регистрация медицинских изделий",
    "Клинические исследования",
    "Подготовка регистрационного досье (CTD)",
    "Регуляторный консалтинг",
  ];

  const smooth = [0.16, 1, 0.3, 1] as const;

  function HoverLink({ children }: { children: ReactNode }) {
    return (
      <motion.div
        className="relative w-fit cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.span
          variants={{
            rest: {
              y: 0,
              opacity: 0.92,
              textShadow: "0 0 0 rgba(255,255,255,0)",
            },
            hover: {
              y: -1,
              opacity: 1,
              textShadow: "0 4px 14px rgba(255,255,255,.14)",
              transition: {
                duration: 0.55,
                ease: smooth,
              },
            },
          }}
          className="block"
        >
          {children}
        </motion.span>

        <motion.div
          className="absolute left-0 bottom-[-4px] h-[1px] bg-white/70 rounded-full"
          variants={{
            rest: {
              width: 0,
              opacity: 0,
            },
            hover: {
              width: "100%",
              opacity: 1,
              transition: {
                duration: 0.65,
                ease: smooth,
              },
            },
          }}
        />
      </motion.div>
    );
  }

  return (
    <footer className="w-full bg-[#adadad] text-white">
      <div className="max-w-[1135px] mx-auto pt-[66px] pb-[67px]">
        <div className="grid grid-cols-[235px_145px_275px_300px] gap-[58px]">
          <div>
            <motion.img
              src="/logo.png"
              alt="MAXIPHARM"
              className="w-[108px] h-auto mb-[20px] cursor-pointer"
              whileHover={{
                scale: 1.018,
                y: -1,
                filter: "drop-shadow(0 8px 18px rgba(255,255,255,.08))",
              }}
              transition={{
                duration: 0.8,
                ease: smooth,
              }}
            />

            <HoverLink>
              <p className="w-[185px] text-[13px] leading-[15px] font-semibold">
                Экспертное регуляторное сопровождение в сфере фармацевтики и
                медицинских технологий
              </p>
            </HoverLink>
          </div>

          <div>
            <h4 className="text-[13px] font-bold mb-[20px]">Меню</h4>

            <div className="space-y-[11px] text-[13px] font-semibold">
              {menu.map((item) => (
                <HoverLink key={item}>{item}</HoverLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold mb-[20px]">
              Основные направления
            </h4>

            <div className="space-y-[11px] text-[13px] font-semibold">
              {directions.map((item) => (
                <HoverLink key={item}>{item}</HoverLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold mb-[20px]">
              Контактная информация
            </h4>

            <div className="space-y-[11px] text-[13px] font-semibold">
              {[
                "Республика Узбекистан, г. Ташкент",
                "ул. Сайрам, дом 26/4",
                "+998 (90) 928-22-99",
                "info@maxipharm",
                "maxipharm.reg@gmail.com",
              ].map((item) => (
                <HoverLink key={item}>{item}</HoverLink>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="w-full h-px bg-white/38 mt-[31px] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 1.2,
            ease: smooth,
          }}
        />

        <div className="flex justify-between pt-[18px]">
          <HoverLink>
            <span className="text-[12px] font-semibold opacity-90">
              © 2026 MAXIPHARM. Все права защищены.
            </span>
          </HoverLink>

          <div className="pr-[66px] space-y-[3px] text-[12px] font-semibold">
            <HoverLink>Политика конфиденциальности</HoverLink>
            <HoverLink>Условия использования</HoverLink>
          </div>
        </div>
      </div>
    </footer>
  );
}