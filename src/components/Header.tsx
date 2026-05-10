import { useState } from "react";

const navItems = [
  { label: "О компании", href: "#about" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Услуги", href: "#services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-[28px] pt-[18px]">
      <div className="mx-auto flex max-w-none items-start justify-between">
        <a href="/" className="relative z-30 block shrink-0">
          <img
            src="/logo.png"
            alt="Maxi Pharm"
            className="h-[58px] w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,.12)]"
          />
        </a>

        <div className="relative h-[48px]">
          {/* Desktop animated capsule */}
          <nav
            className={`
              absolute right-0 top-0 hidden h-[48px] items-center overflow-hidden
              rounded-full border border-white/25
              bg-white/10 backdrop-blur-xl
              shadow-[0_8px_24px_rgba(0,0,0,.10)]
              transition-[width] duration-500 ease-[cubic-bezier(.22,1,.36,1)]
              md:flex
              ${open ? "w-[620px]" : "w-[48px]"}
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
                    text-[14px] font-medium leading-none text-white
                    transition-all duration-300
                    hover:bg-white/15
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
                href="#contact"
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

          {/* Toggle */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="
              relative z-20 flex h-[48px] w-[48px]
              items-center justify-center
              rounded-full border border-white/25
              bg-white/20 backdrop-blur-xl
              shadow-[0_8px_22px_rgba(0,0,0,.10)]
              transition duration-300
              hover:bg-white/30
              active:scale-[.96]
            "
          >
            <span
              className={`absolute h-[2.5px] w-[21px] rounded-full bg-[#073C46] transition-all duration-300 ${
                open ? "rotate-45 translate-y-0" : "-translate-y-[7px]"
              }`}
            />

            <span
              className={`absolute h-[2.5px] w-[21px] rounded-full bg-[#073C46] transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />

            <span
              className={`absolute h-[2.5px] w-[21px] rounded-full bg-[#073C46] transition-all duration-300 ${
                open ? "-rotate-45 translate-y-0" : "translate-y-[7px]"
              }`}
            />
          </button>

          {/* Mobile */}
          <div
            className={`
              absolute right-0 top-[60px] w-[280px]
              rounded-[24px] border border-white/25
              bg-white/15 p-[8px]
              backdrop-blur-xl
              shadow-[0_14px_40px_rgba(0,0,0,.16)]
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
                  transition hover:bg-white/15
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