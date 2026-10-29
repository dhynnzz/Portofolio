import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../context/LanguageContext";

export default function DetailModal({ isOpen, onClose, data, type }) {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [data]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (window.lenis) window.lenis.stop();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      if (window.lenis) window.lenis.start();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  // Normalize image list
  let images = [];
  if (data.images && data.images.length > 0) {
    images = data.images.filter((img) => typeof img === "string" ? img : img.src);
  } else if (data.image) {
    images = [{ src: data.image, caption: data.title || data.name }];
  }

  const currentImage = images[currentImageIndex];
  const currentImageSrc = typeof currentImage === "string" ? currentImage : currentImage?.src;
  const currentImageCaption = typeof currentImage === "object" ? currentImage?.caption : "";

  // Normalize titles and labels based on item type
  const title = data.title || data.degree || data.role || data.name || "Details";
  const subtitle = data.institution || data.company || data.organization || data.issuer || data.category || "";
  const period = data.period || data.year || data.date || "";
  const location = data.location || "";

  const bullets = data.details || data.responsibilities || data.features || [];
  const technologies = data.technologies || [];

  return createPortal(
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden animate-fadeIn"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Window */}
      <div className="relative z-10 w-full sm:max-w-5xl h-[82dvh] sm:h-[88vh] lg:h-[620px] max-h-[82dvh] sm:max-h-[88vh] bg-[#FAF5EA] border-3 sm:border-4 border-onepiece-dark shadow-[4px_4px_0px_0px_#111827] sm:shadow-[8px_8px_0px_0px_#111827] rounded-xl sm:rounded-2xl flex flex-col overflow-hidden animate-scaleUp">
        {/* Modal Body: Split 2-Column Grid */}
        <div data-lenis-prevent className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#FFFDF8]">
          {/* Left Column: Media / Photo Gallery (FIT PENUH, TIDAK SCROLL) */}
          <div className="lg:col-span-6 bg-[#1a1410] border-b-4 lg:border-b-0 lg:border-r-4 border-onepiece-dark p-3.5 sm:p-5 flex flex-col h-[250px] sm:h-[340px] lg:h-full min-h-0 overflow-hidden select-none flex-shrink-0">
            {images.length > 0 && currentImageSrc ? (
              <div className="w-full h-full flex flex-col gap-2.5 min-h-0 justify-between">
                {/* Image counter pill & caption */}
                <div className="w-full flex items-center gap-3 flex-shrink-0 min-w-0">
                  <span className="bg-black/70 text-onepiece-gold border border-onepiece-gold/40 px-2.5 py-0.5 text-xs font-adventure font-black rounded shadow-sm flex-shrink-0">
                    {currentImageIndex + 1} / {images.length}
                  </span>
                  {currentImageCaption && (
                    <span
                      title={currentImageCaption}
                      className="text-[#e2d5c3] text-xs font-adventure font-bold truncate flex-1 min-w-0 text-left"
                    >
                      {currentImageCaption}
                    </span>
                  )}
                </div>

                {/* Main Image Container with Floating Middle Left & Right Buttons */}
                <div className="relative w-full flex-1 min-h-0 flex items-center justify-center rounded-xl border-2 border-onepiece-gold/60 bg-black/70 p-2 group shadow-inner">
                  {/* Clipped Image Wrapper */}
                  <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                    <img
                      src={currentImageSrc}
                      alt={currentImageCaption || title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain rounded select-none max-h-full"
                      onError={(e) => {
                        e.currentTarget.src = "/images/profile-hero.jpg";
                      }}
                    />
                  </div>

                  {images.length > 1 && (
                    <>
                      {/* Floating Prev Button (Tengah-Tengah Garis/Grid Kiri & Sedikit Transparan) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) =>
                            prev === 0 ? images.length - 1 : prev - 1
                          );
                        }}
                        aria-label={t("modal.photoPrev")}
                        className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-white/80 hover:bg-onepiece-gold/90 text-onepiece-dark backdrop-blur-sm border-2 border-onepiece-dark rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_#111827] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[20px] sm:text-[22px] font-black select-none">
                          chevron_left
                        </span>
                      </button>

                      {/* Floating Next Button (Tengah-Tengah Garis/Grid Kanan & Sedikit Transparan) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) =>
                            prev === images.length - 1 ? 0 : prev + 1
                          );
                        }}
                        aria-label={t("modal.photoNext")}
                        className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-white/80 hover:bg-onepiece-gold/90 text-onepiece-dark backdrop-blur-sm border-2 border-onepiece-dark rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_#111827] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[20px] sm:text-[22px] font-black select-none">
                          chevron_right
                        </span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-white/60 p-8 text-center my-auto">
                <div className="w-20 h-20 rounded-2xl bg-[#281912] border-2 border-onepiece-gold/40 flex items-center justify-center text-onepiece-gold">
                  <span className="material-symbols-outlined text-[48px]">
                    {type === "education"
                      ? "school"
                      : type === "certification"
                        ? "workspace_premium"
                        : type === "organization"
                          ? "groups"
                          : "work"}
                  </span>
                </div>
                <div className="font-adventure text-sm text-onepiece-gold uppercase font-bold">
                  {subtitle || title}
                </div>
                <p className="text-xs text-[#e2d5c3]/70 max-w-xs font-body-md">
                  Official verified record from {personal_info(data)}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Detailed Information (HANYA INI YANG DI-SCROLL) */}
          <div className="lg:col-span-6 p-6 md:p-8 flex flex-col gap-5 overflow-y-auto h-full min-h-0">
            {/* Category & Period Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {period && (
                <div className="inline-block bg-onepiece-gold border-2 border-onepiece-dark px-3 py-0.5 text-xs font-adventure font-black text-onepiece-dark w-fit shadow-[2px_2px_0px_0px_#111827]">
                  {period}
                </div>
              )}
            </div>

            {/* Main Header */}
            <div>
              <h2 className="font-adventure text-onepiece-dark uppercase font-black text-xl md:text-2xl leading-tight">
                {title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm font-bold font-adventure">
                {subtitle && <span className="text-onepiece-red font-black">{subtitle}</span>}
                {location && (
                  <span className="text-[#5B3E31] flex items-center gap-1 text-xs">
                    <span className="material-symbols-outlined text-[14px] text-onepiece-red">
                      location_on
                    </span>
                    {location}
                  </span>
                )}
              </div>
            </div>

            {/* Description / Summary Callout Box */}
            {data.description && (
              <div className="p-4 bg-onepiece-parchment border-l-4 border-onepiece-red rounded-r-lg border border-onepiece-dark/20">
                <p className="font-body-md text-[#281912] text-[13px] md:text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>
            )}

            {/* Problem & Solution for Projects */}
            {data.problem && (
              <div className="flex flex-col gap-1.5">
                <h4 className="font-adventure text-xs font-black text-onepiece-red uppercase tracking-wider">
                  {t("modal.projectChallenge")}
                </h4>
                <p className="font-body-md text-[#281912] text-xs md:text-[13px] leading-relaxed">
                  {data.problem}
                </p>
              </div>
            )}

            {data.solution && (
              <div className="flex flex-col gap-1.5">
                <h4 className="font-adventure text-xs font-black text-onepiece-dark uppercase tracking-wider">
                  {t("modal.solutionImplemented")}
                </h4>
                <p className="font-body-md text-[#281912] text-xs md:text-[13px] leading-relaxed">
                  {data.solution}
                </p>
              </div>
            )}

            {/* Bullet Points / Highlights */}
            {bullets.length > 0 && (
              <div className="flex flex-col gap-2.5 pt-2">
                <h4 className="font-adventure text-xs font-black text-onepiece-dark uppercase flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-onepiece-red text-[16px]">
                    check_circle
                  </span>
                  {t("modal.keyHighlights")}
                </h4>
                <ul className="space-y-2 text-xs md:text-[13px] text-[#281912]">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-onepiece-blue font-bold mt-0.5 select-none text-xs flex-shrink-0">
                        ■
                      </span>
                      <span className="leading-relaxed font-body-md">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies / Arsenal */}
            {technologies.length > 0 && (
              <div className="flex flex-col gap-2 pt-2 border-t-2 border-onepiece-dark/20">
                <h4 className="font-adventure text-xs font-black text-onepiece-dark uppercase flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-onepiece-red text-[16px]">
                    terminal
                  </span>
                  {t("modal.techArsenal")}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-onepiece-parchment border-2 border-onepiece-dark text-[11px] font-adventure font-black text-onepiece-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Credential ID / Links */}
            {data.credentialId && (
              <div className="pt-2 border-t border-onepiece-dark/20 flex items-center gap-2 text-xs font-adventure text-[#5B3E31] font-bold">
                <span>{t("modal.credentialId")}</span>
                <span className="font-mono text-onepiece-dark bg-onepiece-parchment px-2 py-0.5 border border-onepiece-dark">
                  {data.credentialId}
                </span>
              </div>
            )}

            {/* Action Links */}
            {data.links && (data.links.github || data.links.demo) && (
              <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-onepiece-dark mt-auto">
                {data.links.github && (
                  <a
                    href={data.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111827] text-white font-adventure text-xs font-black uppercase shadow-[3px_3px_0px_#000] hover:bg-[#1f2937] transition-colors cursor-pointer"
                  >
                    <span>{t("projects.githubRepo")}</span>
                    <span className="material-symbols-outlined text-[14px]">
                      open_in_new
                    </span>
                  </a>
                )}
                {data.links.demo && (
                  <a
                    href={data.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-onepiece-gold text-onepiece-dark border-2 border-onepiece-dark font-adventure text-xs font-black uppercase pirate-btn shadow-[3px_3px_0px_0px_#111827] cursor-pointer"
                  >
                    <span>
                      {data.links.demo.includes("figma.com")
                        ? t("projects.figmaPrototype")
                        : data.links.demo.includes("roblox.com")
                        ? t("projects.playRoblox")
                        : t("projects.liveDemo")}
                    </span>
                    <span className="material-symbols-outlined text-[14px]">
                      {data.links.demo.includes("roblox.com") ? "sports_esports" : "launch"}
                    </span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3. Footer Bar */}
        <div
          className="bg-[#FAF5EA] border-t-3 sm:border-t-4 border-onepiece-dark px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between select-none flex-shrink-0"
        >
          <div className="font-adventure text-[9.5px] sm:text-[11px] md:text-xs text-[#5B3E31] font-bold uppercase tracking-wider flex items-center gap-1 min-w-0 mr-2 select-none">
            <span className="hidden sm:inline">{t("modal.showcase")}</span>
            <span className="sm:hidden">SHOWCASE //</span>
            <span className="truncate">Mhmd Aminuddin</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-onepiece-red text-white border-2 border-onepiece-dark font-adventure text-xs font-black uppercase pirate-btn cursor-pointer"
          >
            {t("modal.close")}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function personal_info(item) {
  return item.institution || item.company || item.organization || item.issuer || "Mhmd Aminuddin";
}
