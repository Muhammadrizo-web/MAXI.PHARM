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
      setScrolled(window.scrollY > 20);
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
            ? "bg-[#FFFFFF]/92 backdrop-blur-2xl shadow-[0_12px_30px_rgba(0,0,0,.12)]"
            : "bg-transparent"
        }
      `}
    >
      <div
        className={`
          mx-auto flex h-[86px] max-w-none items-center justify-between mt-[14px] ml-[14px]
          transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
          ${
            scrolled
              ? "px-[24px] md:px-[72px]"
              : "px-[20px] md:px-[40px]"
          }
        `}
      >
        <a href="/" className="relative z-30 block shrink-0">
          <img
            src={scrolled ? "/logo1.png" : "/logo.svg"}
            alt="Maxi Pharm"
            className="h-[40px] md:h-[56px] mb-[14px] w-auto object-contain transition-all duration-500"
          />
        </a>

        <div className="relative h-[48px]">
          <nav
            className={`
              absolute right-0 top-0 hidden h-[48px] items-center overflow-hidden
              rounded-full border
              backdrop-blur-xl
              shadow-[0_8px_24px_rgba(0,0,0,.12)]
              transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
              md:flex mt-[-6px]
              ${
                scrolled
                  ? "border-black/10 bg-black/5"
                  : "border-white/20 bg-white/10"
              }
              ${open ? "w-[730px]" : "w-[48px]"}
            `}
          >
            <div
              className={`
                flex items-center gap-[4px] pl-[10px] pr-[58px]
                transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                ${
                  open
                    ? "translate-x-0 opacity-100 delay-100"
                    : "translate-x-[22px] opacity-0"
                }
              `}
            >
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    transitionDelay: open ? `${100 + index * 45}ms` : "0ms",
                  }}
                  className={`
                    whitespace-nowrap rounded-full
                    px-[20px] py-[13px]
                    text-[14px] font-medium leading-none
                    transition-all duration-300 
                    hover:bg-black/5
                    ${scrolled ? "text-black" : "text-white"}
                    ${
                      open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-0"
                    }
                  `}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contacts"
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? "260ms" : "0ms",
                }}
                className={`
                  ml-[6px] whitespace-nowrap rounded-full
                  bg-[#009B72] 
                  px-[22px] py-[13px]
                  text-[14px] font-semibold leading-none text-white
                  shadow-[0_6px_18px_rgba(0,155,114,.28)]
                  transition-all duration-300
                  hover:bg-[#008866]
                  active:scale-[.98]
                  ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-2 opacity-0"
                  }
                `}
              >
                Оставить заявку →
              </a>
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="
              relative z-20 flex h-[48px] w-[48px] mt-[-6px]
              items-center justify-center
              transition duration-300
              active:scale-[.96] bg-[#9DAAAE]/70 rounded-full
            "
          >
            <span
              className={`absolute h-[3.5px] w-[24px] rounded-full transition-all duration-300 ${
                scrolled ? "bg-[#073C46]" : "bg-white"
              } ${open ? "rotate-45 translate-y-0" : "-translate-y-[8px]"}`}
            />

            <span
              className={`absolute h-[3.5px] w-[24px] rounded-full transition-all duration-300 ${
                scrolled ? "bg-[#073C46]" : "bg-white"
              } ${open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
            />

            <span
              className={`absolute h-[3.5px] w-[24px] rounded-full transition-all duration-300 ${
                scrolled ? "bg-[#073C46]" : "bg-white"
              } ${open ? "-rotate-45 translate-y-0" : "translate-y-[8px]"}`}
            />
          </button>

          <div
            className={`
              absolute right-0 top-[64px] w-[290px]
              rounded-[26px] border border-white/15
              bg-black/70 p-[8px]
              backdrop-blur-2xl
              shadow-[0_20px_50px_rgba(0,0,0,.28)]
              transition-all duration-300 ease-out
              md:hidden
              ${
                open
                  ? "translate-y-0 opacity-100 pointer-events-auto"
                  : "-translate-y-2 opacity-0 pointer-events-none"
              }
            `}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  block rounded-[18px]
                  px-[18px] py-[14px]
                  text-[15px] font-medium text-white
                  transition hover:bg-white/10
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                mt-[6px] block rounded-[18px]
                bg-[#009B72]
                px-[18px] py-[14px]
                text-center text-[15px] font-semibold text-white
                transition hover:bg-[#008866]
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
