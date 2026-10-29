import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import DetailModal from "./DetailModal";

const INITIAL_EXP_COUNT = 4; // 2 rows on 2-column desktop grid
const INITIAL_ORG_COUNT = 4; // 2 rows on 2-column desktop grid

export default function ExperienceSection() {
  const { experiences, organizations, t } = useLanguage();
  const [showAllExp, setShowAllExp] = useState(false);
  const [showAllOrg, setShowAllOrg] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState("experience");

  const displayedExperiences = showAllExp
    ? experiences
    : experiences.slice(0, INITIAL_EXP_COUNT);

  const remainingExpCount = experiences.length - INITIAL_EXP_COUNT;

  const displayedOrganizations = showAllOrg
    ? organizations
    : organizations.slice(0, INITIAL_ORG_COUNT);

  const remainingOrgCount = organizations.length - INITIAL_ORG_COUNT;

  const openModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Experience */}
      <div className="mt-0 sm:mt-2">
        <h3 className="font-adventure text-xs sm:text-sm text-onepiece-dark bg-[#E8E8E8] border-3 border-onepiece-dark px-4 py-2 inline-flex items-center gap-2 uppercase mb-4 sm:mb-6 shadow-[4px_4px_0px_0px_#111827] font-black reveal-left">
          <span>{t("experience.expBadge")}</span>
        </h3>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8 mb-8 items-stretch">
          {displayedExperiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`p-2.5 sm:p-5 md:p-7 relative flex flex-col justify-between group reveal-pop delay-${
                ((idx % 4) + 1) * 100
              } pirate-card bg-[#FFFDF8] h-full`}
            >
              <div>
                {/* Header: Logo left, Badges right */}
                <div className="flex justify-between items-start gap-1.5 sm:gap-3 mb-2 sm:mb-4">
                  <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex-shrink-0 flex items-center justify-center p-1 sm:p-2 overflow-hidden border-2 sm:border-3 border-onepiece-dark bg-white shadow-[2px_2px_0px_0px_#111827]">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-[18px] sm:text-[28px] text-onepiece-red">
                        work
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1 min-w-0">
                    <div className="inline-block px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[10px] uppercase w-fit max-w-full truncate bg-[#E8E8E8] border border-onepiece-dark font-adventure font-black text-onepiece-dark">
                      {exp.type}
                    </div>
                    <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[7.5px] sm:text-[10px] w-fit max-w-full truncate flex-shrink-0 bg-[#FFF8E7] border border-onepiece-dark font-adventure font-black text-onepiece-dark">
                      {exp.period}
                    </div>
                  </div>
                </div>

                {/* Company & Role */}
                <h3 className="uppercase text-[11px] sm:text-[15px] md:text-[18px] leading-tight break-words font-adventure font-black text-onepiece-dark mb-0.5 sm:mb-1">
                  {exp.company}
                </h3>
                <div className="uppercase text-[9px] sm:text-[12px] md:text-[14px] leading-tight break-words font-adventure font-bold text-onepiece-red mb-1.5 sm:mb-3">
                  {exp.role}
                </div>

                {/* Description */}
                <p className="font-body-md text-on-surface text-[10px] sm:text-[12px] md:text-[14px] leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-4">
                  {exp.description}
                </p>
              </div>

              {/* View Details Button */}
              <div className="mt-auto pt-1 sm:pt-2">
                <button
                  type="button"
                  onClick={() => openModal(exp, "experience")}
                  className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-4 sm:py-1.5 text-[9px] sm:text-[11px] font-bold uppercase cursor-pointer bg-[#E8E8E8] text-onepiece-dark border-2 border-onepiece-dark font-adventure pirate-btn w-full sm:w-fit"
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

        {/* View All Experiences Button */}
        {remainingExpCount > 0 && (
          <div className="flex justify-center mb-8 sm:mb-12 reveal-pop">
            <button
              onClick={() => setShowAllExp(!showAllExp)}
              className="px-6 py-3.5 text-sm font-bold uppercase relative cursor-pointer bg-onepiece-red text-white border-3 border-onepiece-dark font-adventure pirate-btn shadow-[4px_4px_0px_0px_#111827]"
            >
              {showAllExp
                ? `↑ ${t("experience.showLessExp")}`
                : `↓ ${t("experience.showMoreExp")} (${remainingExpCount})`}
            </button>
          </div>
        )}

        {/* Organizations */}
        <div className="mt-8 sm:mt-12">
          <h3 className="font-adventure text-xs sm:text-sm text-onepiece-dark bg-[#E8E8E8] border-3 border-onepiece-dark px-4 py-2 inline-flex items-center gap-2 uppercase mb-4 sm:mb-6 shadow-[4px_4px_0px_0px_#111827] font-black reveal-left">
            <span>{t("experience.orgBadge")}</span>
          </h3>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-6 mb-8 items-stretch">
            {displayedOrganizations.map((org, idx) => (
              <div
                key={org.id}
                className={`p-2.5 sm:p-5 md:p-6 flex flex-col justify-between relative group reveal-pop delay-${
                  ((idx % 4) + 1) * 100
                } pirate-card bg-[#FFFDF8] h-full`}
              >
                <div>
                  {/* Header: Logo left, Period right */}
                  <div className="flex justify-between items-start gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex-shrink-0 flex items-center justify-center p-1 sm:p-1.5 overflow-hidden border-2 sm:border-3 border-onepiece-dark bg-white shadow-[2px_2px_0px_0px_#111827]">
                      {org.logo ? (
                        <img
                          src={org.logo}
                          alt={org.organization}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-[18px] sm:text-[24px] text-onepiece-red">
                          groups
                        </span>
                      )}
                    </div>
                    <span className="px-1.5 py-0.5 sm:px-2 text-[8px] sm:text-[10px] font-bold flex-shrink-0 bg-onepiece-gold border border-onepiece-dark font-adventure text-onepiece-dark whitespace-nowrap self-start max-w-[65%] truncate">
                      {org.period}
                    </span>
                  </div>

                  {/* Organization & Role */}
                  <h4 className="uppercase text-[11px] sm:text-[14px] md:text-[15px] leading-tight break-words font-adventure font-black text-onepiece-dark mb-0.5 sm:mb-1">
                    {org.organization}
                  </h4>
                  <div className="uppercase font-bold text-[9px] sm:text-[11px] md:text-xs leading-tight break-words font-adventure text-onepiece-red mb-1.5 sm:mb-2">
                    {org.role}
                  </div>

                  {/* Description */}
                  <p className="font-body-md text-on-surface text-[10px] sm:text-[12px] md:text-[13px] leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3">
                    {org.description}
                  </p>
                </div>

                {/* View Details Button */}
                <div className="mt-auto pt-1 sm:pt-2">
                  <button
                    type="button"
                    onClick={() => openModal(org, "organization")}
                    className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-bold uppercase cursor-pointer bg-[#E8E8E8] text-onepiece-dark border-2 border-onepiece-dark font-adventure pirate-btn w-full sm:w-fit"
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

          {/* View All Organizations Button */}
          {remainingOrgCount > 0 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllOrg(!showAllOrg)}
                className="px-6 py-3.5 text-sm font-bold uppercase relative cursor-pointer bg-[#E8E8E8] text-onepiece-dark border-3 border-onepiece-dark font-adventure pirate-btn shadow-[4px_4px_0px_0px_#111827]"
              >
                {showAllOrg
                  ? `↑ ${t("experience.showLessOrg")}`
                  : `↓ ${t("experience.showMoreOrg")} (${remainingOrgCount})`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      <DetailModal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        data={selectedItem}
        type={modalType}
      />
    </div>
  );
}
