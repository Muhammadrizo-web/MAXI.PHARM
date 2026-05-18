import { useEffect, useState } from "react";

const navItems = [
  { label: "О компании", href: "#about_us" },
  { label: "Направление", href: "#key" },
  { label: "Преимущества", href: "#why" },
  { label: "Услуги", href: "#services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className="hidden items-center md:flex">
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
                Оставить заявку →
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

        {/* mobile dropdown */}
        <div
          className={`
            absolute right-[16px] top-[74px] z-[60]
            w-[260px]
            rounded-[26px]
            border border-white/10
            bg-[#0A232B]/95
            p-[10px]
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            backdrop-blur-2xl
            transition-all duration-300 ease-out
            md:hidden

            ${
              open
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none translate-y-[-8px] opacity-0"
            }
          `}
        >
          <div className="flex flex-col gap-[6px]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  rounded-[18px]
                  px-[16px]
                  py-[14px]
                  text-[14px]
                  font-[500]
                  text-white
                  transition-all duration-300
                  hover:bg-white/8
                  active:scale-[0.99]
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="
                mt-[4px]
                flex h-[48px]
                items-center justify-center
                rounded-full
                tracking-widest
                bg-[#089A69]
                text-[14px]
                font-[600]
                text-white
                transition-all duration-300
                hover:bg-[#00D87B]
              "
            >
              Оставить заявку →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}