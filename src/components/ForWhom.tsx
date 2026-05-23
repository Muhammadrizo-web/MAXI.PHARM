import { useTranslation } from "react-i18next";

export default function CompaniesSection() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: "/icons/icon-pill.svg.png",
      title: t("companies.card_1_title"),
      text: t("companies.card_1_text"),
    },
    {
      icon: "/icons/icon-device.svg.png",
      title: t("companies.card_2_title"),
      text: t("companies.card_2_text"),
    },
    {
      icon: "/icons/icon-document.svg.png",
      title: t("companies.card_3_title"),
      text: t("companies.card_3_text"),
    },
  ];

  return (
    <section
      className="
        relative w-full overflow-hidden
        px-[22px] py-[80px]
        sm:px-[28px] sm:py-[90px]
        md:px-[46px] md:py-[110px]
        lg:px-[64px] lg:py-[120px]
        xl:px-[80px]
      "
    >
      <div className="mx-auto w-full max-w-[1440px]">

        {/* TOP */}
        <div className="text-center">
          <div
            className="
              inline-flex h-[42px] items-center
              rounded-full border border-[#BCC8CD]
              px-[18px] text-[14px] font-medium text-[#0B2A34]
            "
          >
            {t("companies.label")}
          </div>

          <h2
            className="
              mx-auto mt-[22px] max-w-[760px]
              text-[30px] font-bold uppercase
              leading-[1.04] tracking-[-0.04em] text-[#0B2A34]
            "
          >
            {t("companies.title")}
          </h2>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-[46px] grid gap-[22px]
            md:grid-cols-2 xl:grid-cols-3
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                flex min-h-[250px] flex-col items-center justify-start
                rounded-[22px] border border-[#E7ECEE] bg-white
                px-[28px] pt-[42px] pb-[34px] text-center
                shadow-[0_8px_24px_rgba(15,35,45,0.04)]
                transition-all duration-300
                hover:translate-y-[-3px]
                hover:shadow-[0_18px_40px_rgba(15,35,45,0.08)]
              "
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="h-[72px] w-[72px] object-contain"
                />
              </div>

              <h3
                className="
                  mt-[18px] text-[20px] font-bold
                  leading-[1.35] text-[#0B2A34]
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  mt-[16px] text-[16px] font-[500]
                  leading-[1.45] text-[#7B8A90]
                "
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}