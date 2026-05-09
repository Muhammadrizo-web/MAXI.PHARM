import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    title: "Адрес",
    text: "Республика Узбекистан, г. Ташкент,\nул. Сайрам, дом 26/4",
  },
  {
    icon: Phone,
    title: "Телефон",
    text: "+998 (90) 928-22-99",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@maxipharm.uz\nmaxipharm.reg@gmail.com",
  },
];

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex px-6 py-2.5 rounded-full border border-[#dcdcdc] bg-white text-[#183138] text-[15px] font-medium">
              Начните сотрудничество
            </div>

            <h2 className="mt-6 text-[#163037] text-[34px] md:text-[48px] font-black tracking-[-0.03em] leading-[1]">
              Свяжитесь с нами
            </h2>

            <div className="mt-10 space-y-4">
              {contacts.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="
                      rounded-2xl
                      border border-[#ececec]
                      bg-[#fafafa]
                      px-5
                      py-5
                      transition-all
                      hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]
                    "
                  >
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#ececec] flex items-center justify-center shrink-0">
                        <Icon size={19} className="text-[#183138]" />
                      </div>

                      <div>
                        <h3 className="text-[#183138] text-[15px] font-bold mb-1">
                          {item.title}
                        </h3>

                        <p className="whitespace-pre-line text-[#667171] text-[14px] leading-[1.45]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="
              rounded-[24px]
              border border-[#ececec]
              bg-[#fafafa]
              p-6 md:p-7
            "
          >
            <h3 className="text-[#183138] text-[24px] font-bold mb-6">
              Оставьте свои контакты
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Имя"
                  className="
                    h-14
                    rounded-xl
                    border border-[#e8e8e8]
                    bg-white
                    px-5
                    text-[14px]
                    outline-none
                    transition-all
                    focus:border-[#bfc9ca]
                    focus:shadow-[0_8px_20px_rgba(0,0,0,0.04)]
                  "
                />

                <input
                  placeholder="Фамилия"
                  className="
                    h-14
                    rounded-xl
                    border border-[#e8e8e8]
                    bg-white
                    px-5
                    text-[14px]
                    outline-none
                    transition-all
                    focus:border-[#bfc9ca]
                    focus:shadow-[0_8px_20px_rgba(0,0,0,0.04)]
                  "
                />
              </div>

              <input
                placeholder="Номер телефона"
                className="
                  w-full
                  h-14
                  rounded-xl
                  border border-[#e8e8e8]
                  bg-white
                  px-5
                  text-[14px]
                  outline-none
                  transition-all
                  focus:border-[#bfc9ca]
                  focus:shadow-[0_8px_20px_rgba(0,0,0,0.04)]
                "
              />

              <textarea
                placeholder="Опишите ваш запрос"
                className="
                  w-full
                  h-36
                  rounded-xl
                  border border-[#e8e8e8]
                  bg-white
                  px-5
                  py-4
                  text-[14px]
                  outline-none
                  resize-none
                  transition-all
                  focus:border-[#bfc9ca]
                  focus:shadow-[0_8px_20px_rgba(0,0,0,0.04)]
                "
              />

              <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="
                  w-full
                  h-14
                  rounded-xl
                  bg-[#183138]
                  text-white
                  text-[14px]
                  font-medium
                  transition-all
                  hover:shadow-[0_14px_30px_rgba(24,49,56,0.18)]
                "
              >
                Получить консультацию
              </motion.button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}