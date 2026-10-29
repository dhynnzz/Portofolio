import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import DetailModal from "./DetailModal";

const INITIAL_CERT_COUNT = 6;

export default function CertificatesSection() {
  const { certifications, t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCertifications = showAll
    ? certifications
    : certifications.slice(0, INITIAL_CERT_COUNT);

  const remainingCount = certifications.length - INITIAL_CERT_COUNT;

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mt-8 sm:mt-12">
      <h3 className="font-adventure text-xs sm:text-sm text-onepiece-dark bg-[#E8E8E8] border-3 border-onepiece-dark px-4 py-2 inline-flex items-center gap-2 uppercase mb-4 sm:mb-6 shadow-[4px_4px_0px_0px_#111827] font-black reveal-left">
        <span>{t("certificates.badge")}</span>
      </h3>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 items-stretch">
        {displayedCertifications.map((cert, idx) => (
          <div
            key={cert.id || cert.name}
            className={`p-2 sm:p-4 md:p-6 relative flex flex-col justify-between group reveal-pop delay-${
              ((idx % 3) + 1) * 100
            } pirate-card bg-[#FFFDF8] h-full`}
          >
            <div>
              <div
                onClick={() => setSelectedCert(cert)}
                className="w-full aspect-[16/10] bg-surface-container-low border sm:border-2 mb-1.5 sm:mb-3 flex items-center justify-center overflow-hidden relative cursor-pointer group-hover:opacity-95 border-onepiece-dark shadow-inner"
              >
                {cert.images && cert.images.length > 0 && cert.images[0].src ? (
                  <img
                    src={cert.images[0].src}
                    alt={cert.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="material-symbols-outlined text-[24px] sm:text-[36px] md:text-[48px] text-onepiece-gold">
                    workspace_premium
                  </span>
                )}
              </div>

              <h4 className="uppercase mb-0.5 sm:mb-1 text-[9.5px] sm:text-[13px] md:text-[15px] leading-tight break-words font-adventure font-black text-onepiece-dark line-clamp-2">
                {cert.name}
              </h4>
              <div className="text-[7.5px] sm:text-[10px] md:text-[11px] font-bold leading-tight break-words font-adventure text-onepiece-red line-clamp-1 mb-1 sm:mb-2">
                {cert.issuer} • {cert.date}
              </div>
              <p className="font-body-md text-on-surface text-[8.5px] sm:text-[11px] md:text-[12px] leading-snug sm:leading-relaxed line-clamp-2 mb-2">
                {cert.description}
              </p>
            </div>

            <div className="mt-auto pt-1.5 sm:pt-3 border-t border-surface-container flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2">
              {cert.credentialId ? (
                <span className="text-[7px] sm:text-[9.5px] md:text-[10px] font-adventure text-[#5C3E31] truncate max-w-full">
                  ID: {cert.credentialId}
                </span>
              ) : (
                <span />
              )}

              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center justify-center gap-0.5 sm:gap-1 px-1.5 py-0.5 sm:px-3 sm:py-1 text-[7.5px] sm:text-[10px] font-bold uppercase cursor-pointer bg-[#E8E8E8] text-onepiece-dark border border-onepiece-dark font-adventure pirate-btn w-full sm:w-fit"
              >
                <span>DETAILS</span>
                <span className="material-symbols-outlined text-[10px] sm:text-[12px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All / Show Less Button */}
      {remainingCount > 0 && (
        <div className="flex justify-center mt-6 sm:mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base font-black uppercase relative cursor-pointer bg-onepiece-gold text-onepiece-dark border-3 sm:border-3.5 border-onepiece-dark font-adventure pirate-btn shadow-[4px_4px_0px_0px_#111827] sm:shadow-[5px_5px_0px_0px_#111827] tracking-wider"
          >
            {showAll
              ? `↑ ${t("certificates.showLess")}`
              : `↓ ${t("certificates.showMore")} (${remainingCount})`}
          </button>
        </div>
      )}

      {/* Detail Modal for Certification */}
      <DetailModal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        data={selectedCert}
        type="certification"
      />
    </div>
  );
}
