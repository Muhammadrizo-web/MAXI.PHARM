import type { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
};

export default function Hero({ children }: HeroProps) {
  return (
    <section className="relative h-[calc(100vh-40px)] min-h-[820px] max-h-[980px] w-full overflow-hidden rounded-[22px] bg-[#071E22]">
      <img
        src="/hero.png"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* light overlays — less black */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-black/6 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-white/[0.03]" />

      {/* header */}
      <div className="absolute left-0 right-0 top-0 z-30 px-[34px] pt-[28px]">
        {children}
      </div>

      {/* content */}
      <div className="relative z-20 flex h-full items-center px-[34px] pt-[34px]">
        <div className="max-w-[620px]">
          <h1 className="text-[56px] md:text-[72px] font-black uppercase leading-[0.96] tracking-[-0.04em] text-white">
            Регистрация
            <br />
            фармацевтической
            <br />
            продукции
            <br />в Узбекистане!
          </h1>

          <p className="mt-[16px] max-w-[410px] text-[14px] font-medium leading-[1.35] text-white/90">
            Сопровождение регистрации лекарственных средств и медицинских
            изделий, включая клинические исследования.
          </p>

          <a
            href="#contact"
            className="mt-[22px] inline-flex rounded-full bg-[#073C46] px-[22px] py-[12px] text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,.18)] transition hover:bg-[#009B72]"
          >
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  );
}