import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../context/LanguageContext";

export default function CvModal({ isOpen, onClose }) {
  const { personal, t } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Handle ESC key, body lock, and pause smooth scroll / animations
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
      if (window.lenis) window.lenis.stop();

      // Defer iframe rendering slightly to allow the modal opening animation to complete at smooth 60fps
      const timer = setTimeout(() => {
        setIsMounted(true);
      }, 150);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", handleKeyDown);
        document.body.classList.remove("modal-open");
        document.body.style.overflow = "unset";
        if (window.lenis) window.lenis.start();
      };
    } else {
      setIsMounted(false);
      setIsIframeLoaded(false);
    }
  }, [isOpen, onClose]);

  // Safety fallback: ensure spinner hides even if mobile browser delays or suppresses iframe onLoad event
  useEffect(() => {
    if (isMounted && !isIframeLoaded) {
      const fallbackTimer = setTimeout(() => {
        setIsIframeLoaded(true);
      }, 1800);
      return () => clearTimeout(fallbackTimer);
    }
  }, [isMounted, isIframeLoaded]);

  if (!isOpen) return null;

  const basePdfUrl = personal.cv || "/cv/CV_Mhmd_Aminuddin.pdf";
  const pdfUrl = `${basePdfUrl}?v=2`;

  return createPortal(
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden animate-fadeIn"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative z-10 w-full sm:max-w-5xl lg:max-w-6xl h-[88dvh] sm:h-[92vh] max-h-[88dvh] sm:max-h-[92vh] bg-[#FAF5EA] border-3 sm:border-4 border-onepiece-dark shadow-[4px_4px_0px_0px_#111827] sm:shadow-[8px_8px_0px_0px_#111827] rounded-xl sm:rounded-2xl flex flex-col overflow-hidden animate-scaleUp">
        {/* Header Bar */}
        <div className="bg-onepiece-gold border-b-3 sm:border-b-4 border-onepiece-dark px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between select-none gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <span className="text-base sm:text-xl shrink-0">📜</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5 min-w-0">
              <span className="font-adventure text-[9px] sm:text-sm font-bold sm:font-black text-onepiece-dark tracking-wider uppercase leading-tight shrink-0">
                CURRICULUM VITAE <span className="hidden sm:inline">//</span>
              </span>
              <span className="font-adventure text-[11px] sm:text-sm font-black text-onepiece-dark tracking-wider uppercase leading-tight whitespace-nowrap">
                {personal.name.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-onepiece-dark bg-onepiece-red text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-[2px_2px_0px_0px_#111827] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 w-full h-full bg-[#374151] relative overflow-hidden flex flex-col items-center justify-center">
          {/* Smooth One Piece loader while PDF initializes in background */}
          {!isIframeLoaded && (
            <div className="absolute inset-0 z-10 bg-[#FAF5EA] flex flex-col items-center justify-center p-6 text-center select-none">
              <div className="w-10 h-10 border-4 border-onepiece-gold border-t-onepiece-red rounded-full animate-spin mb-3" />
              <p className="font-adventure text-xs sm:text-sm font-black text-onepiece-dark tracking-wider uppercase">
                {t("cvModal.loading")}
              </p>
              <p className="text-[11px] text-[#5B3E31] mt-1 font-semibold">
                {t("cvModal.subtitle")}
              </p>
            </div>
          )}

          {isMounted && (
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className={`w-full h-full border-none bg-white transition-opacity duration-300 ${
                isIframeLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsIframeLoaded(true)}
              title={`CV ${personal.name}`}
            />
          )}
        </div>

        {/* Modal Footer Bar: Responsive for both Mobile and Desktop */}
        <div className="bg-[#FAF5EA] border-t-3 sm:border-t-4 border-onepiece-dark px-3 sm:px-6 py-2.5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 select-none">
          <div className="font-adventure text-[10px] sm:text-xs text-[#5B3E31] font-bold uppercase truncate">
            PORTFOLIO RESUME // {personal.location.toUpperCase()}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 bg-white text-onepiece-dark border-2 border-onepiece-dark font-adventure text-[11px] sm:text-xs font-bold uppercase shadow-[2px_2px_0px_0px_#111827] hover:bg-[#FFFDF8] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px] sm:text-[16px]">
                open_in_new
              </span>
              {t("cvModal.openInTab")}
            </a>
            <a
              href={pdfUrl}
              download="CV_Mhmd_Aminuddin.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 bg-onepiece-red text-white border-2 border-onepiece-dark font-adventure text-[11px] sm:text-xs font-black uppercase pirate-btn active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px] sm:text-[16px]">
                download
              </span>
              {t("cvModal.download")}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
