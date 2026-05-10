import type { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
};

export default function Hero({ children }: HeroProps) {
  return (
    <div className="p-2">
      <section className="relative min-h-[calc(100svh-16px)] md:h-[calc(100vh-40px)] md:min-h-[700px] md:max-h-[980px] w-full overflow-hidden rounded-[22px] bg-[#071E22]">
        <img
          src="/hero.png"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent md:from-transparent md:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent md:hidden" />

        {/* header */}
        <div className="absolute left-0 right-0 top-0 z-30 px-[14px] pt-[14px] sm:px-[20px] sm:pt-[18px] md:px-[34px] md:pt-[28px]">
          {children}
        </div>

        {/* content */}
        <div className="relative z-20 flex min-h-[calc(100svh-16px)] items-end px-[18px] pb-[34px] pt-[130px] sm:px-[24px] sm:pb-[44px] md:h-full md:min-h-0 md:items-center md:px-[34px] md:pb-0 md:pt-[25px]">
          <div className="w-full max-w-[1130px]">
            <h1 className="max-w-[620px] text-[clamp(28px,8.3vw,56px)] font-bold uppercase leading-[1] tracking-[-0.045em] text-white sm:max-w-[920px]">
              Экспертное сопровождение регистрации фармацевтической продукции
            </h1>

            <p className="mt-[14px] max-w-[560px] text-[clamp(14px,3.7vw,20px)] font-medium leading-[1.35] text-white/95">
              От подготовки регистрационного досье до полного сопровождения
              процедуры регистрации и клинических исследований
            </p>

            <a
              href="#contact"
              className="mt-[18px] inline-flex rounded-2xl bg-[#0B2A34] px-[18px] py-[11px] text-[clamp(15px,3.8vw,20px)] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,.18)] transition hover:bg-[#009B72] md:px-[22px] md:py-[12px]"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}