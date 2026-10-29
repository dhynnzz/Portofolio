import { socials, socialIcons } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { personal, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 w-full bg-onepiece-navy border-onepiece-gold text-white relative z-40">
      <div className="flex flex-row justify-between items-center w-full max-w-[1600px] mx-auto px-3.5 sm:px-6 md:px-12 lg:px-16 py-5 sm:py-8 gap-3 sm:gap-6 text-left">
        {/* Left Side: Heading, Subtitle & Socials */}
        <div className="flex-1 min-w-0 pr-2 sm:pr-4 flex flex-col items-start text-left">
          <h2 className="text-xs sm:text-base md:text-2xl font-adventure text-onepiece-gold mb-1 sm:mb-2 uppercase font-black tracking-wide leading-tight text-left">
            {t("footer.headline")}
          </h2>
          <p className="text-white/80 text-[9px] sm:text-xs font-body-md leading-relaxed mb-2.5 sm:mb-4 text-left line-clamp-2 sm:line-clamp-none max-w-md">
            {t("footer.subtitle")}
          </p>
          <div className="flex gap-2 sm:gap-3.5 items-center justify-start">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  className="opacity-85 hover:opacity-100 hover:scale-110 transition-all active:scale-95 bg-white/20 p-1.5 sm:p-2.5 rounded-full border border-white/40 text-white inline-flex items-center justify-center hover:bg-onepiece-gold hover:text-onepiece-dark hover:border-onepiece-dark"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current" />}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side: Copyright & Location (Side-by-side horizontally just like desktop) */}
        <div className="flex-shrink-0 text-right pl-2 sm:pl-4 flex flex-col items-end justify-center">
          <div className="text-[9.5px] sm:text-xs md:text-sm flex items-center justify-end gap-1 font-adventure text-onepiece-gold font-bold whitespace-nowrap">
            <span className="font-sans font-normal text-xs sm:text-sm leading-none">©</span>
            <span>
              {currentYear} {personal.name.toUpperCase()}
            </span>
          </div>
          <div className="text-[8.5px] sm:text-[10px] md:text-xs mt-0.5 sm:mt-1 font-adventure text-white/70 whitespace-nowrap uppercase">
            {t("footer.location")}: {personal.location.toUpperCase()}
          </div>
        </div>
      </div>
    </footer>
  );
}
