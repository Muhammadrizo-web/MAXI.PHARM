import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".left-image", {
        opacity: 0,
        x: -80,
        duration: 1.4,
        ease: "power4.out",
      });

      gsap.from(".floating-card", {
        opacity: 0,
        x: 80,
        y: 40,
        duration: 1.6,
        ease: "power4.out",
      });

      gsap.to(".left-image", {
        y: -25,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });

      gsap.to(".floating-card", {
        y: 25,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFF] overflow-hidden py-[110px] px-[20px] md:px-[40px] lg:px-[70px] "
    >
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-[70px] items-center mt-[50px]">
        {/* LEFT SIDE */}

        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[560px] h-[620px] sm:h-[680px]">
            {/* MAIN IMAGE */}

            <div className="left-image absolute left-0 top-0 w-[440px] h-[560px] mt-[50px] rounded-[26px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src="/image-01.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* FLOATING IMAGE */}

            <div className="floating-card absolute right-0 bottom-[60px] w-[320px] h-[340px] rounded-[22px] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.10)] border border-white/70">
              <img
                src="/image-02.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="max-w-[650px]">
          {/* TAG */}

          <div className="fade-up inline-flex items-center justify-center border border-[#b9c5ca] rounded-full h-[48px] px-[26px] text-[18px] font-[600] text-[#11495e] mb-[34px] bg-white/40 backdrop-blur-md">
            О компании
          </div>

          {/* TITLE */}

          <h1 className="fade-up text-[#0d2d39] text-[32px] sm:text-[30px] lg:text-[30px] leading-[1.2] tracking-[-1.5px] font-bold uppercase mb-[10px]">
            ЭКСПЕРТНОЕ СОПРОВОЖДЕНИЕ В СФЕРЕ ФАРМАЦЕВТИКИ И МЕДИЦИНСКИХ
            ТЕХНОЛОГИЙ
          </h1>

          {/* DESCRIPTION */}

          <p className="fade-up text-[#7b8a91] text-[16px] sm:text-[16px] leading-[1.7] mb-[42px] max-w-[620px]">
            Maxipharm expert специализируется на профессиональном сопровождении
            регистрации лекарственных средств, медицинских изделий и
            сопутствующей продукции на территории Республики Узбекистан
          </p>

          {/* FEATURES */}

          <div className="flex flex-col gap-[22px] mb-[48px]">
            <div className="fade-up flex items-start gap-[14px]">
              <div className="w-[24px] h-[24px] rounded-full bg-[#11b77a] flex items-center justify-center text-white text-[13px] font-bold mt-[2px]">
                ✓
              </div>

              <span className="text-[#3C555D] text-[16px] sm:text-[16px] font-[600] leading-[1.5]">
                Экспертиза специалистов от 10 до 30 лет
              </span>
            </div>

            <div className="fade-up flex items-start gap-[14px]">
              <div className="w-[24px] h-[24px] rounded-full bg-[#11b77a] flex items-center justify-center text-white text-[13px] font-bold mt-[2px]">
                ✓
              </div>

              <span className="text-[#3C555D] text-[16px] sm:text-[16px] font-[600] leading-[1.5]">
                Полный цикл сопровождения регистрации
              </span>
            </div>

            <div className="fade-up flex items-start gap-[14px]">
              <div className="w-[24px] h-[24px] rounded-full bg-[#11b77a] flex items-center justify-center text-white text-[13px] font-bold mt-[2px]">
                ✓
              </div>

              <span className="text-[#3C555D] text-[16px] sm:text-[16px] font-[600] leading-[1.5]">
                Более 80 зарегистрированных наименований препаратов в 2025 году
              </span>
            </div>
          </div>

          {/* BUTTONS */}

          <div className="fade-up flex flex-wrap gap-[18px]">
            <a href="#services" className="h-[52px] px-[38px] flex items-center justify-center rounded-[24px] bg-[#089A69] text-white text-[20px] font-bold transition-all duration-300 hover:bg-[#007935] hover:text-grey hover:scale-[1.03]  shadow-[0_12px_30px_rgba(16,183,122,0.25)]">
              Услуги
            </a>

            <a href="#contacts" className="h-[52px] px-[38px] flex items-center justify-center rounded-[24px] bg-[#072c3a] text-white text-[20px] font-bold transition-all duration-300 hover:text-[#072c3a] hover:scale-[1.03] hover:bg-[#9DAAAE]/50 shadow-[0_12px_30px_rgba(7,44,58,0.20)]">
              Контакт
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}