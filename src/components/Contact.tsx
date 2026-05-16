"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    title: "Адрес",
    text: "г.Ташкент, Юнусабадский район, ул.Янгитарнов, 1-й проезд, дом 12",
  },
  {
    icon: Phone,
    title: "Телефон",
    text: "+998 (90) 928-22-99",
  },
  {
    icon: Mail,
    title: "Email",
    text: "nmaxipharm.reg@gmail.com",
  },
];

export default function ContactSection() {
  const smooth = [0.16, 1, 0.3, 1] as const;

  const [phone, setPhone] = useState("");
  const [result, setResult] = useState("");

  const formatPhone = (rawValue: string) => {
    let digits = rawValue.replace(/\D/g, "");

    if (digits.startsWith("998")) {
      digits = digits.slice(3);
    }

    digits = digits.slice(0, 9);

    if (!digits.length) return "+998 ";

    let result = "+998 ";

    if (digits.length > 0) result += `(${digits.slice(0, 2)}`;
    if (digits.length >= 2) result += `) ${digits.slice(2, 5)}`;
    if (digits.length >= 5) result += `-${digits.slice(5, 7)}`;
    if (digits.length >= 7) result += `-${digits.slice(7, 9)}`;

    return result;
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhone(formatPhone(e.target.value));
  };

  const handlePhoneFocus = () => {
    if (!phone) {
      setPhone("+998 ");
    }
  };

  const handlePhoneBlur = () => {
    if (phone === "+998 ") {
      setPhone("");
    }
  };

  const handlePhoneKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key !== "Backspace") return;

    const digits = phone.replace(/\D/g, "").replace(/^998/, "");

    if (!digits.length) {
      e.preventDefault();
      setPhone("");
      return;
    }

    const lastChar = phone[phone.length - 1];

    if ([" ", ")", "-", "("].includes(lastChar)) {
      e.preventDefault();
      const newDigits = digits.slice(0, -1);
      setPhone(newDigits ? formatPhone("+998" + newDigits) : "+998 ");
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setResult("Отправка...");

    const formData = new FormData(e.currentTarget);

    formData.append(
      "access_key",
      "0e234390-0e6c-41da-b4f2-c101fc8a0180"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Сообщение отправлено!");
      e.currentTarget.reset();
      setPhone("");
    } else {
      setResult("Ошибка отправки");
    }
  };

  return (
    <section
      id="contacts"
      className="
        relative w-full overflow-hidden bg-white

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
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-start

            gap-[34px]

            md:gap-[50px]

            lg:grid-cols-[505px_590px]
            lg:gap-[260px]
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, ease: smooth }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.7, ease: smooth }}
              className="
                inline-flex
                items-center

                h-[40px]

                rounded-full
                border border-[#9FB2B8]
                bg-white

                px-[20px]

                text-[14px]
                font-medium
                leading-none
                text-[#0D3B4A]
              "
            >
              Начните сотрудничество
            </motion.div>

            <h2
              className="
                mt-[18px]

                text-[30px]
                font-bold
                uppercase
                leading-[1.04]
                tracking-[-0.04em]
                text-[#12323B]
              "
            >
              Свяжитесь с нами
            </h2>

            <div className="mt-[28px] space-y-[15px]">
              {contacts.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24, filter: "blur(7px)" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.95,
                      delay: i * 0.12,
                      ease: smooth,
                    }}
                    whileHover={{
                      y: -4,
                      boxShadow:
                        "0 18px 36px rgba(15,50,60,0.12)",
                    }}
                    className="
                      w-full
                      rounded-[10px]
                      border border-[#EEF3F4]
                      bg-white

                      px-[18px]
                      py-[18px]

                      shadow-[0_10px_26px_rgba(15,50,60,0.08)]
                    "
                  >
                    <div className="flex items-center gap-[18px]">
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{
                          duration: 0.55,
                          ease: smooth,
                        }}
                        className="
                          flex
                          h-[42px]
                          w-[42px]
                          shrink-0
                          items-center
                          justify-center

                          rounded-[7px]
                          bg-[#F4F8F9]
                        "
                      >
                        <Icon
                          size={22}
                          strokeWidth={2.35}
                          className="text-[#12323B]"
                        />
                      </motion.div>

                      <div>
                        <h3
                          className="
                            mb-[6px]

                            text-[15px]
                            font-bold
                            leading-[1.1]
                            text-[#12323B]
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            whitespace-pre-line

                            text-[15px]
                            font-semibold
                            leading-[1.35]
                            text-[#6E8086]
                          "
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* FORM */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.05,
              delay: 0.08,
              ease: smooth,
            }}
            className="
              w-full
              rounded-[12px]
              border border-[#EEF3F4]
              bg-white

              px-[22px]
              pt-[24px]
              pb-[32px]

              shadow-[0_12px_30px_rgba(15,50,60,0.09)]

              md:px-[30px]
              md:pt-[30px]
              md:pb-[48px]
            "
          >
            <h3
              className="
                mb-[22px]

                text-[20px]
                font-bold
                leading-none
                text-[#12323B]
              "
            >
              Оставьте свои контакты
            </h3>

            <div className="space-y-[15px]">
              <div
                className="
                  grid
                  grid-cols-1

                  gap-[13px]

                  sm:grid-cols-2
                "
              >
                <input
                  name="name"
                  placeholder="Имя"
                  required
                  className="
                    h-[50px]
                    rounded-[9px]
                    border border-[#DFE8EB]
                    bg-[#F3F7F8]

                    px-[18px]

                    text-[13px]
                    font-semibold
                    text-[#12323B]

                    placeholder:text-[#7C8D92]

                    outline-none

                    transition-all duration-500

                    focus:border-[#9FB2B8]
                    focus:bg-white
                    focus:shadow-[0_8px_18px_rgba(15,50,60,0.07)]
                  "
                />

                <input
                  name="surname"
                  placeholder="Фамилия"
                  required
                  className="
                    h-[50px]
                    rounded-[9px]
                    border border-[#DFE8EB]
                    bg-[#F3F7F8]

                    px-[18px]

                    text-[13px]
                    font-semibold
                    text-[#12323B]

                    placeholder:text-[#7C8D92]

                    outline-none

                    transition-all duration-500

                    focus:border-[#9FB2B8]
                    focus:bg-white
                    focus:shadow-[0_8px_18px_rgba(15,50,60,0.07)]
                  "
                />
              </div>

              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                autoComplete="tel"
                value={phone}
                onChange={handlePhoneChange}
                onFocus={handlePhoneFocus}
                onBlur={handlePhoneBlur}
                onKeyDown={handlePhoneKeyDown}
                placeholder="Номер телефона"
                required
                className="
                  w-full
                  h-[50px]

                  rounded-[9px]
                  border border-[#DFE8EB]
                  bg-[#F3F7F8]

                  px-[18px]

                  text-[13px]
                  font-semibold
                  text-[#12323B]

                  placeholder:text-[#7C8D92]

                  outline-none

                  transition-all duration-500

                  focus:border-[#9FB2B8]
                  focus:bg-white
                  focus:shadow-[0_8px_18px_rgba(15,50,60,0.07)]
                "
              />

              <textarea
                name="message"
                placeholder="Опишите ваш запрос"
                required
                className="
                  h-[110px]
                  w-full
                  resize-none

                  rounded-[9px]
                  border border-[#DFE8EB]
                  bg-[#F3F7F8]

                  px-[18px]
                  py-[17px]

                  text-[13px]
                  font-semibold
                  text-[#12323B]

                  placeholder:text-[#7C8D92]

                  outline-none

                  transition-all duration-500

                  focus:border-[#9FB2B8]
                  focus:bg-white
                  focus:shadow-[0_8px_18px_rgba(15,50,60,0.07)]
                "
              />

              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                  boxShadow:
                    "0 16px 30px rgba(14,155,103,0.26)",
                }}
                whileTap={{ scale: 0.985 }}
                transition={{
                  duration: 0.55,
                  ease: smooth,
                }}
                className="
                  h-[50px]
                  w-full

                  rounded-[9px]

                  bg-[#0E9B67]

                  text-[14px]
                  font-bold
                  text-white

                  transition-colors duration-500
                  hover:bg-[#007935]
                "
              >
                Получить консультацию
              </motion.button>

              <p className="text-[13px] font-medium text-[#12323B]">
                {result}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}