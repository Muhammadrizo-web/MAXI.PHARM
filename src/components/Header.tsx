import { useState } from "react";

const navItems = [
  { label: "О компании", href: "#about" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Услуги", href: "#services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-start justify-between static top-0 left-0 right-0 px-6 py-4 z-50">
      <a href="/" className="block">
        <img
          src="/logo.png"
          alt="Maxi Pharm"
          className="h-[62px] w-auto object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,.12)]"
        />
      </a>

      <div className="relative">
        <div
          className={`
            absolute right-0 top-0 flex h-[56px] items-center overflow-hidden
            rounded-full border border-white/30
            bg-white/10 backdrop-blur-xl
            shadow-[0_12px_35px_rgba(0,0,0,.12)]
            transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
            ${
              open
                ? "w-[680px] opacity-100"
                : "w-[56px] opacity-0 pointer-events-none"
            }
          `}
        >
          <div
            className={`
              flex items-center gap-[6px] pl-[14px] pr-[64px]
              transition-all duration-500
              ${
                open
                  ? "translate-x-0 opacity-100 delay-100"
                  : "translate-x-8 opacity-0"
              }
            `}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  whitespace-nowrap rounded-full
                  px-[22px] py-[13px]
                  text-[16px] font-semibold text-white
                  transition duration-300
                  hover:bg-white/18
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                whitespace-nowrap rounded-full
                bg-[#009B72]
                px-[24px] py-[13px]
                text-[15px] font-bold text-white
                shadow-[0_10px_28px_rgba(0,155,114,.28)]
                transition duration-300
                hover:bg-[#008866]
              "
            >
              Оставить заявку →
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open menu"
          className="
            relative z-20 flex h-[56px] w-[56px]
            items-center justify-center
            rounded-full bg-white/28
            backdrop-blur-xl
            shadow-[0_10px_30px_rgba(0,0,0,.12)]
            transition hover:bg-white/36
          "
        >
          <span
            className={`absolute h-[3px] w-[24px] rounded-full bg-[#073C46] transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[8px]"
            }`}
          />
          <span
            className={`absolute h-[3px] w-[24px] rounded-full bg-[#073C46] transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[3px] w-[24px] rounded-full bg-[#073C46] transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[8px]"
            }`}
          />
        </button>
      </div>
    </div>
  );
}