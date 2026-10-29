import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import DetailModal from "./DetailModal";

// Fast Counter component with rolling odometer feel
function FastCounter({ target, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animRef = useRef(null);

  const startCounting = (customDuration = duration) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / customDuration, 1);

      // Fast-forward acceleration and smooth deceleration curve like a sped-up clock / odometer
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      setCount(current);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    animRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [target, duration]);

  return (
    <span
      ref={elementRef}
      onMouseEnter={() => startCounting(700)}
      className="tabular-nums font-extrabold select-none inline-block transition-transform group-hover:scale-110"
      title="Hover to spin again!"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const { personal, education, t } = useLanguage();
  const [selectedEdu, setSelectedEdu] = useState(null);

  const statsData = [
    { value: 6, suffix: "+", label: t("about.stats.projects"), delay: "delay-100", duration: 1200 },
    { value: 3, suffix: "+", label: t("about.stats.experience"), delay: "delay-200", duration: 1000 },
    { value: 15, suffix: "+", label: t("about.stats.tech"), delay: "delay-300", duration: 1400 },
    { value: 100, suffix: "%", label: t("about.stats.passion"), delay: "delay-400", duration: 1700 },
  ];

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-8 sm:mb-12 lg:mb-16">
      <div className="flex flex-col gap-8 sm:gap-12">
        {/* About Heading */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 reveal-pop">
            <h2 className="font-adventure text-lg sm:text-xl text-onepiece-dark bg-onepiece-gold border-3 border-onepiece-dark px-4 py-2 inline-flex items-center gap-2 shadow-[4px_4px_0px_0px_#111827] uppercase font-black">
              <span>{t("about.badge")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/*  */}
            <div className="wanted-card p-5 sm:p-8 h-full flex flex-col justify-center relative reveal-left delay-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-adventure text-xs text-onepiece-red tracking-widest font-black uppercase">
                  {t("about.introBadge")}
                </span>
              </div>
              <h3 className="font-adventure font-black text-xl sm:text-2xl text-onepiece-dark uppercase mb-3 leading-tight">
                {personal.about.intro}
              </h3>
              <p className="font-body-md text-[#281912] mb-4 leading-relaxed text-sm sm:text-base">
                {personal.about.description}
              </p>
              <div className="mt-auto pt-4 border-t-2 border-[#281912]/25 flex items-center gap-2 text-xs font-black text-[#4A3228] font-adventure">
                <span className="material-symbols-outlined text-onepiece-red text-[18px]">
                  explore
                </span>
                {personal.location}
              </div>
            </div>

            {/* Education & Stats */}
            <div className="flex flex-col gap-6 reveal-right delay-150">
              <h3 className="font-adventure text-xs sm:text-sm text-onepiece-dark bg-[#E8E8E8] border-3 border-onepiece-dark px-3.5 py-1.5 inline-flex items-center gap-1.5 uppercase font-black shadow-[3px_3px_0px_0px_#111827] w-fit">
                <span>{t("about.educationBadge")}</span>
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-4 items-stretch">
                {education.map((edu, idx) => (
                  <div
                    key={edu.id}
                    className={`p-3 sm:p-4 lg:p-6 relative flex flex-col lg:flex-row gap-2.5 sm:gap-3 lg:gap-4 items-stretch lg:items-start justify-between group reveal-pop delay-${(idx + 1) * 100
                      } pirate-card bg-[#FFFDF7] h-full`}
                  >
                    {/* Top Row on Mobile (Logo + Period Badge) / Left Column on Desktop (Logo only) */}
                    <div className="flex items-center justify-between lg:justify-center w-full lg:w-auto flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex-shrink-0 flex items-center justify-center">
                        {edu.logo ? (
                          <img
                            src={edu.logo}
                            alt={edu.institution}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain drop-shadow-sm"
                          />
                        ) : (
                          <span className="material-symbols-outlined text-[24px] sm:text-[28px] lg:text-[32px] text-onepiece-red">
                            school
                          </span>
                        )}
                      </div>

                      {/* Period badge visible on mobile/tablet top-right */}
                      <div className="lg:hidden px-1.5 sm:px-2 py-0.5 font-bold text-[9px] sm:text-[10px] w-fit flex-shrink-0 bg-onepiece-gold border-2 border-onepiece-dark font-adventure text-onepiece-dark whitespace-nowrap">
                        {edu.period}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex-grow min-w-0 flex flex-col justify-between w-full h-full">
                      <div>
                        {/* Desktop Header Row (Institution + Period) */}
                        <div className="hidden lg:flex items-start justify-between gap-2 mb-1">
                          <h4 className="uppercase text-[16px] md:text-[18px] leading-snug break-words font-adventure font-black text-onepiece-dark flex-1 min-w-0">
                            {edu.institution}
                          </h4>
                          <div className="px-2 py-1 font-bold text-[10px] w-fit flex-shrink-0 bg-onepiece-gold border-2 border-onepiece-dark font-adventure text-onepiece-dark whitespace-nowrap self-start">
                            {edu.period}
                          </div>
                        </div>

                        {/* Mobile Institution Header */}
                        <h4 className="lg:hidden uppercase text-[12px] sm:text-[14px] leading-tight break-words font-adventure font-black text-onepiece-dark line-clamp-2 mb-1">
                          {edu.institution}
                        </h4>

                        {/* Degree */}
                        <div className="uppercase text-[10px] sm:text-[12px] lg:text-[14px] leading-tight break-words font-adventure font-bold text-onepiece-red line-clamp-2 mb-1.5 sm:mb-2">
                          {edu.degree}
                        </div>

                        {/* Description */}
                        <p className="font-body-md text-on-surface text-[10px] sm:text-[12px] lg:text-[13px] leading-snug lg:leading-relaxed line-clamp-2 lg:line-clamp-2 mb-2 sm:mb-3">
                          {edu.description}
                        </p>
                      </div>

                      {/* View Details Button */}
                      <button
                        type="button"
                        onClick={() => setSelectedEdu(edu)}
                        className="mt-auto inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-bold uppercase cursor-pointer bg-[#E8E8E8] text-onepiece-dark border-2 border-onepiece-dark font-adventure pirate-btn w-full lg:w-fit"
                      >
                        <span>VIEW DETAILS</span>
                        <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Cards with Fast Counter Odometer Animation (4 across on all devices) */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 md:gap-3 mt-auto">
                {statsData.map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-2 sm:p-3 md:p-4 text-center transition-all group reveal-pop ${stat.delay} cursor-default wanted-card hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#111827] flex flex-col justify-center`}
                  >
                    <div className="text-[17px] sm:text-[21px] md:text-[26px] font-extrabold mb-0.5 font-adventure text-onepiece-dark leading-tight">
                      <FastCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        duration={stat.duration}
                      />
                    </div>
                    <div className="text-[8px] sm:text-[9.5px] md:text-[11px] font-bold uppercase leading-tight font-adventure text-[#5B3E31] break-words">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal for Education */}
      <DetailModal
        isOpen={Boolean(selectedEdu)}
        onClose={() => setSelectedEdu(null)}
        data={selectedEdu}
        type="education"
      />
    </section>
  );
}
