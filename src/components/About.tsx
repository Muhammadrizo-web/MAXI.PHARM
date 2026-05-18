export default function AboutSection() {
  return (
    <section
      id="about_us"
      className="
        relative w-full overflow-hidden

        px-[22px]
        py-[80px]

        sm:px-[28px]
        sm:py-[90px]

        md:px-[46px]
        md:py-[110px]

        lg:px-[64px]
        lg:py-[120px]

        xl:px-[80px]
      "
    >
      {/* GLOBAL CONTAINER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
        "
      >
        {/* CONTENT WRAPPER */}
        <div
          className="
            grid
            items-center

            gap-[56px]

            lg:grid-cols-[520px_minmax(0,1fr)]
            lg:gap-[90px]
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              relative

              w-full
              max-w-[520px]

              mx-auto
              lg:mx-0
            "
          >
            {/* BACK IMAGE */}
            <div
              className="
                relative
                h-[360px]
                w-[78%]
                overflow-hidden
                rounded-[22px]

                sm:h-[430px]

                md:h-[470px]

                lg:h-[520px]
              "
            >
              <img
                src="/image-01.png"
                alt="Office"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* FRONT IMAGE */}
            <div
              className="
                absolute
                bottom-[-16px]
                right-0

                h-[220px]
                w-[62%]
                overflow-hidden
                rounded-[20px]

                shadow-[0_24px_60px_rgba(0,0,0,0.14)]

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
              О компании
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
              ЭКСПЕРТНОЕ СОПРОВОЖДЕНИЕ В СФЕРЕ ФАРМАЦЕВТИКИ И МЕДИЦИНСКИХ ТЕХНОЛОГИЙ
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
              Maxipharm expert специализируется на профессиональном сопровождении
              регистрации лекарственных средств, медицинских изделий и
              сопутствующей продукции на территории Республики Узбекистан
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
                "Экспертиза со стороны специалистов с опытом работы более 20 лет",
                "Полный цикл сопровождения регистрации",
                "Более 80 зарегистрированных наименований препаратов в 2025 году",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-start
                    gap-[12px]
                  "
                >
                  {/* ICON */}
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

                  {/* TEXT */}
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
                Услуги
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
                Контакт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}