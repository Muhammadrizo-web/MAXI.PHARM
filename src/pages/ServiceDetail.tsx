import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
 
import Header from "../components/Header";
import Footer from "../components/Footer";
 
export default function ServiceDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
 
  const slugs = [
    "drug-registration",
    "medical-devices",
    "bad-registration",
    "cosmetics-registration",
    "clinical-research",
    "regulatory-consulting",
  ];
 
  const tabs = slugs.map((s) => ({
    slug: s,
    label: t(`serviceDetail.tabs.${s}`),
  }));
 
  const services = slugs.map((s) => ({
    slug: s,
    title:        t("serviceDetail.header.title"),
    subtitle:     t("serviceDetail.header.subtitle"),
    image:        `/services/${s}.png`,
    sectionTitle: t(`serviceDetail.services.${s}.sectionTitle`),
    text:         t(`serviceDetail.services.${s}.text`),
  }));
 
  const service = services.find((item) => item.slug === slug) || services[0];
 
  const smooth = [0.16, 1, 0.3, 1] as const;
 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);
 
  // re-render on language change
  useEffect(() => {}, [i18n.language]);
 
  return (
    <>
      <Header />
 
      <main className="overflow-hidden bg-[#FAFAFA] pt-[78px] md:pt-[92px]">
        <section
          className="
            relative w-full overflow-hidden
            px-[22px] pb-[80px]
            sm:px-[28px] sm:pb-[90px]
            md:px-[46px] md:pb-[110px]
            lg:px-[64px] lg:pb-[120px]
            xl:px-[80px]
          "
        >
          <div className="mx-auto w-full max-w-[1440px]">
 
            {/* TOP */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: smooth }}
                className="flex justify-center"
              >
                <div className="flex h-[38px] items-center justify-center rounded-full border border-[#D7DEE2] bg-white px-[24px] text-[13px] font-medium text-[#0B2A35]">
                  {t("services.badge")}
                </div>
              </motion.div>
 
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.04, ease: smooth }}
                className="mx-auto mt-[22px] max-w-[920px] text-[30px] font-bold uppercase leading-[1.04] tracking-[-0.045em] text-[#0B2A35]"
              >
                {service.title}
              </motion.h1>
 
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: smooth }}
                className="mx-auto mt-[18px] max-w-[720px] text-[16px] font-medium leading-[1.45] text-[#6B767B]"
              >
                {service.subtitle}
              </motion.p>
            </div>
 
            {/* TABS */}
            <div className="mt-[46px] flex flex-wrap items-center justify-start gap-[10px]">
              {tabs.map((tab) => {
                const active = tab.slug === service.slug;
                return (
                  <Link
                    key={tab.slug}
                    to={`/services/${tab.slug}`}
                    className={[
                      "inline-flex h-[38px] items-center justify-center rounded-full px-[18px] text-[12px] font-semibold transition-all duration-300",
                      active
                        ? "bg-[#12A05C] text-white shadow-[0_10px_24px_rgba(18,160,92,.22)]"
                        : "border border-[#DDE4E7] bg-[#F3F5F6] text-[#0B2A35] hover:border-[#12A05C] hover:text-[#12A05C]",
                    ].join(" ")}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
 
            {/* IMAGE + TEXT */}
            <motion.div
              key={service.slug + i18n.language}
              initial={{ opacity: 0, y: 24, scale: 0.988 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: smooth }}
              className="mt-[34px] w-full max-w-[980px]"
            >
              <div className="overflow-hidden rounded-[18px] border border-[#E7ECEE] bg-[#F5F7F8] shadow-[0_14px_34px_rgba(11,42,53,.08)]">
                <img
                  src={service.image}
                  alt={service.sectionTitle}
                  className="h-auto w-full object-cover"
                />
              </div>
 
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: smooth }}
                className="mt-[24px] text-left"
              >
                <h2 className="text-[20px] font-bold uppercase leading-[1.2] text-[#0B2A35]">
                  {service.sectionTitle}
                </h2>
                <p className="mt-[16px] text-[16px] font-medium leading-[1.55] text-[#5F6D72]">
                  {service.text}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
 
        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: smooth }}
          className="
            px-[22px] pb-[80px]
            sm:px-[28px] sm:pb-[90px]
            md:px-[46px] md:pb-[110px]
            lg:px-[64px] lg:pb-[120px]
            xl:px-[80px]
          "
        >
          <div className="mx-auto max-w-[650px] text-center">
            <h3 className="text-[30px] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-[#0B2A35]">
              {t("serviceDetail.cta.title")}
            </h3>
            <p className="mx-auto mt-[16px] max-w-[560px] text-[16px] font-medium leading-[1.5] text-[#7A858B]">
              {t("serviceDetail.cta.subtitle")}
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ y: -1, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.35, ease: smooth }}
              className="mx-auto mt-[28px] inline-flex h-[52px] items-center justify-center rounded-full bg-[#12A05C] px-[34px] text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(18,160,92,.24)] hover:bg-[#0C8A4F]"
            >
              {t("serviceDetail.cta.button")}
            </motion.a>
          </div>
        </motion.section>
      </main>
 
      <Footer />
    </>
  );
}