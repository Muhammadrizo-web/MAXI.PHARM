import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  const navItems = [
    {
      label: t("about"),
      href: "#about_us",
    },

    {
      label: t("direction"),
      href: "#key",
    },

    {
      label: t("advantages"),
      href: "#why",
    },

    {
      label: t("services"),
      href: "#services",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50
        transition-all duration-500
        ${
          scrolled
            ? "bg-white/88 backdrop-blur-2xl"
            : "bg-transparent"
        }
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
              h-[28px]
              w-auto
              object-contain
              transition-all duration-500

              sm:h-[32px]
              md:h-[36px]
              lg:h-[40px]
            "
          />
        </a>

        {/* desktop nav */}
        <div className="hidden items-center gap-[10px] md:flex">

          {/* language switch */}
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

              ${open ? "w-[670px]" : "w-[44px]"}
            `}
          >
            <div
              className={`
                flex items-center gap-[4px]
                pl-[10px] pr-[54px]
                transition-all duration-500 ease-out

                ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[20px] opacity-0"
                }
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
                  ml-[4px]
                  rounded-full
                  bg-[#089A69]
                  px-[18px]
                  py-[10px]
                  text-[13px]
                  font-[600]
                  text-white
                  transition-all duration-300
                  hover:bg-[#00D87B]
                "
              >
                {t("request")}
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

                ${
                  scrolled
                    ? "bg-white text-[#071E22]"
                    : "bg-white/12 text-white"
                }
              `}
            >
              <div className="relative flex h-[16px] w-[16px] items-center justify-center">
                <span
                  className={`
                    absolute h-[1.5px] w-[16px] rounded-full bg-current
                    transition-all duration-300
                    ${
                      open
                        ? "rotate-45"
                        : "-translate-y-[5px]"
                    }
                  `}
                />

                <span
                  className={`
                    absolute h-[1.5px] w-[16px] rounded-full bg-current
                    transition-all duration-200
                    ${
                      open
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  `}
                />

                <span
                  className={`
                    absolute h-[1.5px] w-[16px] rounded-full bg-current
                    transition-all duration-300
                    ${
                      open
                        ? "-rotate-45"
                        : "translate-y-[5px]"
                    }
                  `}
                />
              </div>
            </button>
          </nav>
        </div>

        {/* mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            relative z-[70] flex h-[42px] w-[42px]
            items-center justify-center rounded-full
            transition-all duration-300 md:hidden

            ${
              scrolled
                ? "bg-white text-[#071E22]"
                : "bg-white/10 text-white"
            }
          `}
        >
          <div className="relative flex h-[16px] w-[16px] items-center justify-center">
            <span
              className={`
                absolute h-[1.5px] w-[16px] rounded-full bg-current
                transition-all duration-300
                ${
                  open
                    ? "rotate-45"
                    : "-translate-y-[5px]"
                }
              `}
            />

            <span
              className={`
                absolute h-[1.5px] w-[16px] rounded-full bg-current
                transition-all duration-200
                ${
                  open
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            />

            <span
              className={`
                absolute h-[1.5px] w-[16px] rounded-full bg-current
                transition-all duration-300
                ${
                  open
                    ? "-rotate-45"
                    : "translate-y-[5px]"
                }
              `}
            />
          </div>
        </button>
      </div>
    </header>
  );
}