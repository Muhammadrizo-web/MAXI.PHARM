import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  const navItems = useMemo(
    () => [
      { label: t("nav.about"), href: "#about_us" },
      { label: t("nav.direction"), href: "#key" },
      { label: t("nav.advantages"), href: "#why" },
      { label: t("nav.services"), href: "#services" },
    ],
    [t, i18n.language]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-500
          ${scrolled ? "bg-white/88 backdrop-blur-2xl" : "bg-transparent"}
        `}
      >
        <div
          className="
            mx-auto flex h-[72px] items-center justify-between
            px-[16px]
            sm:px-[22px]
            md:px-[34px]
            lg:px-[42px]
          "
        >
          {/* logo */}
          <a href="/" className="relative z-[70] shrink-0">
            <img
              src={scrolled ? "/logo1.png" : "/logo.svg"}
              alt="Maxi Pharm"
              className="
                h-[28px] w-auto object-contain transition-all duration-500
                sm:h-[32px] md:h-[36px] lg:h-[40px]
              "
            />
          </a>

          {/* desktop nav */}
          <div className="hidden items-center gap-[10px] md:flex">
            <div className="flex items-center gap-[6px]">
              <button
                onClick={() => i18n.changeLanguage("ru")}
                className={`
                  rounded-full px-[12px] py-[8px]
                  text-[12px] font-[600]
                  transition-all duration-300
                  ${
                    i18n.language === "ru"
                      ? "bg-[#089A69] text-white"
                      : scrolled
                      ? "bg-black/5 text-[#071E22] hover:bg-black/10"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                RU
              </button>

              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`
                  rounded-full px-[12px] py-[8px]
                  text-[12px] font-[600]
                  transition-all duration-300
                  ${
                    i18n.language === "en"
                      ? "bg-[#089A69] text-white"
                      : scrolled
                      ? "bg-black/5 text-[#071E22] hover:bg-black/10"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                EN
              </button>
            </div>

            <nav
              className={`
                relative flex h-[44px] items-center overflow-hidden
                rounded-full
                transition-all duration-500 ease-out
                backdrop-blur-xl
                ${
                  scrolled
                    ? "bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                    : "bg-white/8"
                }
                ${open ? "w-max" : "w-[44px]"}
              `}
            >
              <div
                className={`
                  flex items-center gap-[4px]
                  pl-[10px] pr-[54px]
                  transition-all duration-500 ease-out
                  ${open ? "translate-x-0 opacity-100" : "translate-x-[20px] opacity-0"}
                `}
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      whitespace-nowrap rounded-full
                      px-[16px] py-[10px]
                      text-[13px] font-[500]
                      transition-all duration-300
                      ${
                        scrolled
                          ? "text-[#071E22] hover:bg-black/5"
                          : "text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contacts"
                  className="
                    ml-[4px] rounded-full bg-[#089A69]
                    px-[18px] py-[10px]
                    text-[13px] font-[600] text-white
                    transition-all duration-300
                    hover:bg-[#00D87B]
                  "
                >
                  {t("nav.request")}
                </a>
              </div>

              {/* desktop burger */}
              <button
                onClick={() => setOpen(!open)}
                className={`
                  absolute right-0 top-0 flex h-[44px] w-[44px]
                  items-center justify-center
                  rounded-full
                  transition-all duration-300
                  ${scrolled ? "bg-white text-[#071E22]" : "bg-white/12 text-white"}
                `}
              >
                <div className="relative flex h-[16px] w-[16px] items-center justify-center">
                  <span
                    className={`
                      absolute h-[1.5px] w-[16px] rounded-full bg-current
                      transition-all duration-300
                      ${open ? "rotate-45" : "-translate-y-[5px]"}
                    `}
                  />
                  <span
                    className={`
                      absolute h-[1.5px] w-[16px] rounded-full bg-current
                      transition-all duration-200
                      ${open ? "opacity-0" : "opacity-100"}
                    `}
                  />
                  <span
                    className={`
                      absolute h-[1.5px] w-[16px] rounded-full bg-current
                      transition-all duration-300
                      ${open ? "-rotate-45" : "translate-y-[5px]"}
                    `}
                  />
                </div>
              </button>
            </nav>
          </div>

          {/* mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Меню"
            className={`
              relative z-[70] flex h-[42px] w-[42px]
              items-center justify-center rounded-full
              transition-all duration-300 md:hidden
              ${scrolled || open ? "bg-white text-[#071E22]" : "bg-white/10 text-white"}
            `}
          >
            <div className="relative flex h-[16px] w-[16px] items-center justify-center">
              <span
                className={`
                  absolute h-[1.5px] w-[16px] rounded-full bg-current
                  transition-all duration-300
                  ${open ? "rotate-45" : "-translate-y-[5px]"}
                `}
              />
              <span
                className={`
                  absolute h-[1.5px] w-[16px] rounded-full bg-current
                  transition-all duration-200
                  ${open ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`
                  absolute h-[1.5px] w-[16px] rounded-full bg-current
                  transition-all duration-300
                  ${open ? "-rotate-45" : "translate-y-[5px]"}
                `}
              />
            </div>
          </button>
        </div>
      </header>

      {/* mobile menu — только на мобиле */}
      <div className="md:hidden">
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`
            fixed inset-0 z-40 bg-black/30 backdrop-blur-sm
            transition-opacity duration-300
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        />

        {/* bottom sheet */}
        <div
          className={`
            fixed bottom-0 left-0 right-0 z-50
            bg-white rounded-t-[24px]
            transition-transform duration-300 ease-in-out
            ${open ? "translate-y-0" : "translate-y-full"}
          `}
          style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}
        >
          {/* ручка */}
          <div className="flex justify-center pt-[10px] pb-[6px]">
            <div className="h-[4px] w-[32px] rounded-full bg-black/10" />
          </div>

          {/* ссылки */}
          <nav className="px-[16px]">
            {navItems.map((item) => (
                <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  flex items-center justify-between
                  h-[52px]
                  text-[16px] font-[500] text-[#071E22]
                  border-b border-black/[0.06]
                  last:border-none
                  transition-opacity active:opacity-60
                "
              >
                {item.label}
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                  <path
                    d="M1 1l5 5-5 5"
                    stroke="#C0C0C0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </nav>

          {/* язык + кнопка */}
          <div className="px-[16px] pt-[14px] pb-[4px] flex flex-col gap-[10px]">
            <div className="flex gap-[8px]">
              <button
                onClick={() => i18n.changeLanguage("ru")}
                className={`
                  flex-1 h-[40px] rounded-full
                  text-[13px] font-[600]
                  transition-all duration-200
                  ${i18n.language === "ru" ? "bg-[#089A69] text-white" : "bg-black/[0.05] text-[#071E22]"}
                `}
              >
                RU
              </button>
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`
                  flex-1 h-[40px] rounded-full
                  text-[13px] font-[600]
                  transition-all duration-200
                  ${i18n.language === "en" ? "bg-[#089A69] text-white" : "bg-black/[0.05] text-[#071E22]"}
                `}
              >
                EN
              </button>
            </div>

            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="
                flex items-center justify-center
                h-[48px] rounded-full
                bg-[#089A69] text-white
                text-[15px] font-[600]
                transition-colors duration-200
                active:bg-[#067a54]
              "
            >
              {t("nav.request")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}