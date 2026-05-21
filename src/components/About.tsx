import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-[90px]">
      <div className="mx-auto max-w-[1320px] px-[18px]">
        <div
          className="
            grid
            gap-[50px]

            lg:grid-cols-[560px_1fr]
            lg:items-center
          "
        >
          {/* LEFT SIDE */}
          <div className="relative">
            <div
              className="
                relative
                overflow-hidden
                rounded-[34px]

                h-[230px]

                sm:h-[270px]

                md:h-[310px]

                lg:h-[520px]
              "
            >
              <img
                src="/image-01.png"
                alt="About"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            <div
              className="
                absolute
                bottom-[-14px]
                right-[-6px]

                overflow-hidden
                rounded-[28px]

                border-[8px]
                border-white

                h-[210px]
                w-[180px]

                shadow-[0_20px_50px_rgba(0,0,0,0.14)]

                sm:h-[270px]

                md:h-[310px]

                lg:bottom-[-22px]
                lg:h-[340px]
              "
            >
              <img
                src="/image-02.png"
                alt="Documents"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              w-full
              max-w-[690px]

              mx-auto
              lg:mx-0
            "
          >
            {/* LABEL */}
            <div
              className="
                inline-flex
                h-[42px]
                items-center
                rounded-full
                border border-[#BCC8CD]
                px-[18px]

                text-[14px]
                font-medium
                text-[#0B2A34]
              "
            >
              {t("about_label")}
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-[22px]

                text-[30px]
                font-bold
                uppercase
                leading-[1.04]
                tracking-[-0.04em]
                text-[#0B2A34]
              "
            >
              {t("about_title")}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[18px]
                max-w-[620px]

                text-[16px]
                font-medium
                leading-[1.45]
                text-[#6B7A80]
              "
            >
              {t("about_description")}
            </p>

            {/* LIST */}
            <div
              className="
                mt-[28px]
                flex flex-col
                gap-[16px]
              "
            >
              {[
                t("about_item_1"),
                t("about_item_2"),
                t("about_item_3"),
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-start
                    gap-[12px]
                  "
                >
                  <svg
                    className="mt-[2px] shrink-0"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12L10 17L19 7"
                      stroke="#11A36A"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p
                    className="
                      text-[16px]
                      font-semibold
                      leading-[1.4]
                      text-[#0B2A34]
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-[34px]
                flex flex-wrap
                items-center
                gap-[14px]
              "
            >
              <a
                href="#services"
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#11A36A]
                  px-[30px]

                  text-[15px]
                  font-semibold
                  text-white

                  transition-all duration-300
                  hover:bg-[#159764]
                "
              >
                {t("services")}
              </a>

              <a
                href="#contacts"
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2A34]
                  px-[30px]

                  text-[15px]
                  font-semibold
                  text-white

                  transition-all duration-300
                  hover:bg-[#123844]
                "
              >
                {t("contacts")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}