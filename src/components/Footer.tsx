import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
 
export default function Footer() {
  const { t, i18n } = useTranslation(); // uses default "translation" namespace
 
  const menu = [
    { key: "about",    href: "#about" },
    { key: "services", href: "#services" },
    { key: "process",  href: "#process" },
    { key: "faq",      href: "#faq" },
    { key: "contacts", href: "#contacts" },
  ];
 
  const contacts = [
    { key: "city",   href: "https://www.google.com/maps/place/41%C2%B020'11.9%22N+69%C2%B018'12.5%22E/@41.336651,69.303464,17z" },
    { key: "street", href: "https://www.google.com/maps/place/41%C2%B020'11.9%22N+69%C2%B018'12.5%22E/@41.336651,69.303464,17z" },
    { key: "phone",  href: "tel:+998909282299" },
    { key: "email",  href: "mailto:maxipharm.reg@gmail.com" },
  ];
 
  const languages = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ];
 
  const smooth = [0.16, 1, 0.3, 1] as const;
 
  function HoverLink({ children, href }: { children: ReactNode; href: string }) {
    return (
      <motion.a
        href={href}
        className="relative block w-fit cursor-pointer text-white/48 hover:text-white/85 transition-colors duration-500"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.45, ease: smooth }}
      >
        {children}
      </motion.a>
    );
  }
 
  return (
    <footer className="w-full bg-[#07333B] text-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-[18px] sm:px-[24px] lg:px-[20px] pt-[42px] sm:pt-[56px] pb-[26px] sm:pb-[38px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[430px_180px_1fr] gap-[36px] sm:gap-[48px] lg:gap-[86px]">
 
          {/* LEFT */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.a
              href="#hero"
              className="block w-fit"
              whileHover={{ scale: 1.015, y: -1 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.7, ease: smooth }}
            >
              <img
                src="/logo.svg"
                alt="MAXIPHARM EXPERT"
                className="w-[132px] sm:w-[160px] h-auto mb-[18px] sm:mb-[26px]"
              />
            </motion.a>
 
            <p className="w-full max-w-[320px] text-[12px] sm:text-[14px] leading-[17px] sm:leading-[19px] font-medium text-white/42">
              {t("footer.tagline")}
            </p>
 
            {/* Language switcher */}
            <div className="flex gap-[8px] mt-[20px] sm:mt-[28px]">
              {languages.map(({ code, label }) => (
                <motion.button
                  key={code}
                  onClick={() => i18n.changeLanguage(code)}
                  className={`text-[11px] sm:text-[12px] font-semibold leading-none px-[10px] py-[5px] rounded-[4px] border transition-colors duration-300 cursor-pointer ${
                    i18n.language === code
                      ? "border-white/40 text-white/90 bg-white/10"
                      : "border-white/16 text-white/38 hover:text-white/60 hover:border-white/28"
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: smooth }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
 
          {/* MENU */}
          <div>
            <h4 className="text-[15px] sm:text-[16px] leading-none font-bold mb-[18px] sm:mb-[28px] text-white/92">
              {t("footer.menu.title")}
            </h4>
 
            <nav className="space-y-[13px] sm:space-y-[15px] text-[13px] sm:text-[14px] leading-none font-medium">
              {menu.map((item) => (
                <HoverLink key={item.key} href={item.href}>
                  {t(`footer.menu.${item.key}`)}
                </HoverLink>
              ))}
            </nav>
          </div>
 
          {/* CONTACTS */}
          <div id="contacts">
            <h4 className="text-[15px] sm:text-[16px] leading-none font-bold mb-[18px] sm:mb-[28px] text-white/92">
              {t("footer.contacts.title")}
            </h4>
 
            <div className="space-y-[13px] sm:space-y-[15px] text-[13px] sm:text-[14px] leading-none font-medium">
              {contacts.map((item) => (
                <HoverLink key={item.key} href={item.href}>
                  {t(`footer.contacts.${item.key}`)}
                </HoverLink>
              ))}
            </div>
          </div>
        </div>
 
        {/* LINE */}
        <motion.div
          className="w-full h-px bg-white/16 mt-[36px] sm:mt-[48px] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: smooth }}
        />
 
        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[18px] pt-[18px]">
          <span className="text-[11px] sm:text-[12px] leading-[15px] font-medium text-white/38">
            {t("footer.copyright")}
          </span>
 
          <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[24px] text-[11px] sm:text-[12px] leading-[15px] font-medium">
            <HoverLink href="#privacy">{t("footer.privacy")}</HoverLink>
            <HoverLink href="#terms">{t("footer.terms")}</HoverLink>
          </div>
        </div>
      </div>
    </footer>
  );
}