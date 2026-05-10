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
  const smooth = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="w-full bg-white overflow-hidden py-[56px] md:py-[92px]">
      <div className="max-w-[1180px] mx-auto px-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-[505px_590px] gap-[44px] lg:gap-[85px] items-start">
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, ease: smooth }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.7, ease: smooth }}
              className="inline-flex items-center h-[40px] px-[20px] rounded-full border border-[#9FB2B8] bg-white text-[#0D3B4A] text-[17px] font-semibold leading-none"
            >
              Начните сотрудничество
            </motion.div>

            <h2 className="mt-[15px] text-[#12323B] text-[32px] md:text-[36px] lg:text-[38px] font-black uppercase tracking-[-0.04em] leading-[1.03]">
              Свяжитесь с нами
            </h2>

            <div className="mt-[26px] space-y-[15px]">
              {contacts.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24, filter: "blur(7px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.95,
                      delay: i * 0.12,
                      ease: smooth,
                    }}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 18px 36px rgba(15,50,60,0.12)",
                    }}
                    className="w-full min-h-[88px] rounded-[10px] border border-[#EEF3F4] bg-white px-[18px] py-[18px] shadow-[0_10px_26px_rgba(15,50,60,0.08)]"
                  >
                    <div className="flex items-center gap-[19px]">
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.55, ease: smooth }}
                        className="w-[39px] h-[39px] rounded-[6px] bg-[#F4F8F9] flex items-center justify-center shrink-0"
                      >
                        <Icon
                          size={25}
                          strokeWidth={2.35}
                          className="text-[#12323B]"
                        />
                      </motion.div>

                      <div>
                        <h3 className="text-[#12323B] text-[15px] font-extrabold leading-[1.1] mb-[7px]">
                          {item.title}
                        </h3>

                        <p className="whitespace-pre-line text-[#6E8086] text-[12px] font-semibold leading-[1.3]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, delay: 0.08, ease: smooth }}
            className="w-full rounded-[10px] border border-[#EEF3F4] bg-white px-[30px] pt-[30px] pb-[48px] shadow-[0_12px_30px_rgba(15,50,60,0.09)]"
          >
            <h3 className="text-[#12323B] text-[20px] font-extrabold leading-none mb-[20px]">
              Оставьте свои контакты
            </h3>

            <div className="space-y-[15px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[13px]">
                <input
                  placeholder="Имя"
                  className="h-[48px] rounded-[9px] border border-[#DFE8EB] bg-[#F3F7F8] px-[18px] text-[12px] font-semibold text-[#12323B] placeholder:text-[#7C8D92] outline-none transition-all duration-500 focus:border-[#9FB2B8] focus:bg-white focus:shadow-[0_8px_18px_rgba(15,50,60,0.07)]"
                />

                <input
                  placeholder="Фамилия"
                  className="h-[48px] rounded-[9px] border border-[#DFE8EB] bg-[#F3F7F8] px-[18px] text-[12px] font-semibold text-[#12323B] placeholder:text-[#7C8D92] outline-none transition-all duration-500 focus:border-[#9FB2B8] focus:bg-white focus:shadow-[0_8px_18px_rgba(15,50,60,0.07)]"
                />
              </div>

              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9+ ]*"
                placeholder="Номер телефона"
                className="w-full h-[48px] rounded-[9px] border border-[#DFE8EB] bg-[#F3F7F8] px-[18px] text-[12px] font-semibold text-[#12323B] placeholder:text-[#7C8D92] outline-none transition-all duration-500 focus:border-[#9FB2B8] focus:bg-white focus:shadow-[0_8px_18px_rgba(15,50,60,0.07)]"
              />

              <textarea
                placeholder="Опишите ваш запрос"
                className="w-full h-[96px] rounded-[9px] border border-[#DFE8EB] bg-[#F3F7F8] px-[18px] py-[17px] text-[12px] font-semibold text-[#12323B] placeholder:text-[#7C8D92] outline-none resize-none transition-all duration-500 focus:border-[#9FB2B8] focus:bg-white focus:shadow-[0_8px_18px_rgba(15,50,60,0.07)]"
              />

              <motion.button
                type="button"
                whileHover={{
                  y: -2,
                  boxShadow: "0 16px 30px rgba(14,155,103,0.26)",
                }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.55, ease: smooth }}
                className="w-full h-[48px] rounded-[8px] bg-[#0E9B67] text-white text-[14px] font-extrabold transition-colors duration-500 hover:bg-[#0B8B5C]"
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