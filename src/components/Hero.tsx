import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type HeroProps = {
  children: ReactNode;
};

export default function Hero({ children }: HeroProps) {
  const { t } = useTranslation();

  return (
    <div className="p-2">
      <section className="relative h-[68svh] min-h-[560px] w-full overflow-hidden rounded-[22px] bg-[#071E22] p-3 md:h-[calc(100vh-40px)] md:min-h-[700px] md:max-h-[980px]">
        <img
          src="/hero.png"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
        />

        {/* mobile overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent md:hidden" />

        {/* desktop overlay */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black/45 via-black/20 to-transparent md:block" />

        {/* header */}
        <div className="absolute left-0 right-0 top-0 z-30 px-[14px] pt-[14px] sm:px-[20px] sm:pt-[18px] md:px-[34px] md:pt-[28px]">
          {children}
        </div>

        {/* content */}
        <div className="relative z-20 flex h-full items-end px-[18px] pb-[26px] pt-[120px] sm:px-[24px] sm:pb-[34px] md:items-center md:px-[34px] md:pb-0 md:pt-[25px]">
          <div className="w-full max-w-[1130px]">
            <h4 className="max-w-[320px] text-[clamp(26px,7vw,46px)] font-bold uppercase leading-[1.15] tracking-[-0.045em] text-white sm:max-w-[500px] md:max-w-[750px]">
              {t("hero_title")}
            </h4>

            <p className="mt-[12px] max-w-[320px] text-[clamp(13px,3.8vw,20px)] font-medium leading-[1.35] text-white/90 sm:max-w-[430px] md:mt-[14px] md:max-w-[700px]">
              {t("hero_description")}
            </p>

            <a
              href="#contacts"
              className="mt-[30px] inline-flex rounded-3xl bg-[#0B2A34] px-[28px] py-[11px] text-[15px] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,.18)] transition hover:bg-[#007935] md:px-[30px] md:py-[14px] md:text-[20px]"
            >
              {t("consultation")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}