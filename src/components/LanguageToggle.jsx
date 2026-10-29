import { useLanguage } from "../context/LanguageContext";

/**
 * Interactive Neo-Brutalist Language Toggle Button
 * Lightweight, pure CSS GPU-accelerated animations (slot-machine roll, 360° globe spin, tactile spring press).
 */
export default function LanguageToggle({ compact = false, className = "" }) {
  const { language, setLanguage } = useLanguage();

  const isId = language === "id";
  const toggleLanguage = () => {
    setLanguage(isId ? "en" : "id");
  };

  const currentLabel = isId ? "ID" : "EN";
  const tooltip = isId ? "Switch to English" : "Ganti ke Bahasa Indonesia";

  if (compact) {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={tooltip}
        title={tooltip}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFFDF8] hover:bg-white text-[#111827] border-2 border-[#111827] shadow-[1.5px_1.5px_0px_0px_#111827] hover:shadow-[2.5px_2.5px_0px_0px_#111827] hover:-translate-y-0.5 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none rounded-sm transition-all duration-200 select-none cursor-pointer group overflow-hidden ${className}`}
      >
        {/* Animated Globe Icon */}
        <span
          key={`globe-c-${language}`}
          className="material-symbols-outlined text-[15px] leading-none text-[#111827] animate-globe-spin group-hover:rotate-[360deg] transition-transform duration-700 ease-out"
        >
          language
        </span>

        {/* Slot-machine rolling label with color dot */}
        <span className="relative inline-flex items-center overflow-hidden h-[15px]">
          <span
            key={`txt-c-${language}`}
            className="inline-flex items-center gap-1 font-mono text-[11px] font-black tracking-wider leading-none text-[#111827] animate-slot-in"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full border border-[#111827] shadow-[0.5px_0.5px_0px_#111827] transition-colors duration-300 ${
                isId ? "bg-onepiece-red" : "bg-onepiece-blue"
              }`}
              aria-hidden="true"
            />
            {currentLabel}
          </span>
        </span>

        {/* Animated Swap Arrow */}
        <span
          key={`arrow-c-${language}`}
          className="material-symbols-outlined text-[13px] text-[#111827]/60 group-hover:text-[#111827] leading-none animate-arrow-swap group-hover:translate-x-0.5 transition-all duration-200"
        >
          swap_horiz
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={tooltip}
      title={tooltip}
      className={`inline-flex items-center gap-2 px-3.5 py-2 bg-[#FFFDF8] hover:bg-[#FFFDF2] text-[#111827] border-2 border-[#111827] shadow-[2.5px_2.5px_0px_0px_#111827] hover:shadow-[4px_4px_0px_0px_#111827] hover:-translate-y-1 hover:-translate-x-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#111827] rounded-sm transition-all duration-200 select-none cursor-pointer group overflow-hidden ${className}`}
    >
      {/* Animated Globe Icon */}
      <span
        key={`globe-${language}`}
        className="material-symbols-outlined text-[17px] sm:text-[19px] leading-none text-[#111827] animate-globe-spin group-hover:rotate-[360deg] transition-transform duration-700 ease-out"
      >
        language
      </span>

      {/* Slot-machine rolling label with color dot */}
      <span className="relative inline-flex items-center overflow-hidden h-[18px]">
        <span
          key={`txt-${language}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-[13px] font-black tracking-wider leading-none text-[#111827] animate-slot-in"
        >
          <span
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-[#111827] shadow-[0.5px_0.5px_0px_#111827] transition-colors duration-300 ${
              isId ? "bg-onepiece-red" : "bg-onepiece-blue"
            }`}
            aria-hidden="true"
          />
          {currentLabel}
        </span>
      </span>

      {/* Animated Swap Arrow */}
      <span
        key={`arrow-${language}`}
        className="material-symbols-outlined text-[15px] sm:text-[17px] text-[#111827]/60 group-hover:text-[#111827] leading-none animate-arrow-swap group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200"
      >
        swap_horiz
      </span>
    </button>
  );
}
