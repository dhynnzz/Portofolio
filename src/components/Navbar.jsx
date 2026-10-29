import { useState, useEffect, useRef } from "react";
import CvModal from "./CvModal";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [showCvModal, setShowCvModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 40
  );
  const headerRef = useRef(null);
  const prevScrollYRef = useRef(
    typeof window !== "undefined" ? Math.max(0, window.scrollY) : 0
  );
  const accumulatedScrollRef = useRef(0);
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef(null);

  const isSolid = isScrolled || menuOpen;
  const isHeaderVisible = isVisible || menuOpen;

  // Cancel programmatic navigation lock when user manually scrolls or touches
  useEffect(() => {
    const handleUserInteract = () => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        if (navTimeoutRef.current) {
          clearTimeout(navTimeoutRef.current);
          navTimeoutRef.current = null;
        }
      }
    };
    window.addEventListener("wheel", handleUserInteract, { passive: true });
    window.addEventListener("touchstart", handleUserInteract, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleUserInteract);
      window.removeEventListener("touchstart", handleUserInteract);
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleTouchOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsHovered(false);
      }
    };
    document.addEventListener("touchstart", handleTouchOutside);
    return () => document.removeEventListener("touchstart", handleTouchOutside);
  }, []);

  useEffect(() => {
    let ticking = false;
    let cachedOffsets = [];

    const measureSections = () => {
      const sectionIds = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY;
      cachedOffsets = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id, top: rect.top + scrollY };
        })
        .filter(Boolean);
    };

    measureSections();

    const updateActiveSection = () => {
      const scrollY = Math.max(0, window.scrollY);
      setIsScrolled(scrollY > 40);

      // Auto-hide on scroll down, immediately reveal on scroll up
      if (scrollY <= 50) {
        setIsVisible(true);
        accumulatedScrollRef.current = 0;
      } else if (!isNavigatingRef.current) {
        const delta = scrollY - prevScrollYRef.current;

        if (delta < 0) {
          // Scrolling UP: reveal immediately with minimal scroll distance (ultra-responsive)
          if (accumulatedScrollRef.current > 0) {
            accumulatedScrollRef.current = 0;
          }
          accumulatedScrollRef.current += delta;
          if (accumulatedScrollRef.current <= -4) {
            setIsVisible(true);
          }
        } else if (delta > 0) {
          // Scrolling DOWN: hide after a smooth buffer to prevent accidental micro-jitter
          if (accumulatedScrollRef.current < 0) {
            accumulatedScrollRef.current = 0;
          }
          accumulatedScrollRef.current += delta;
          if (accumulatedScrollRef.current >= 20) {
            setIsVisible(false);
          }
        }
      }

      prevScrollYRef.current = scrollY;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollY >= documentHeight - 100) {
        setActiveSection("#contact");
        ticking = false;
        return;
      }

      for (let i = cachedOffsets.length - 1; i >= 0; i--) {
        if (scrollY + 300 >= cachedOffsets[i].top) {
          setActiveSection(`#${cachedOffsets[i].id}`);
          ticking = false;
          return;
        }
      }
      setActiveSection("#home");
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measureSections, { passive: true });
    updateActiveSection();

    // Listen to Lenis smooth scroll if active
    let lenisUnsub = null;
    let lenisTimer = null;
    if (window.lenis && typeof window.lenis.on === "function") {
      lenisUnsub = window.lenis.on("scroll", handleScroll);
    } else {
      lenisTimer = setTimeout(() => {
        if (window.lenis && typeof window.lenis.on === "function") {
          lenisUnsub = window.lenis.on("scroll", handleScroll);
        }
      }, 200);
    }

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(measureSections);
    } else {
      setTimeout(measureSections, 1000);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureSections);
      if (typeof lenisUnsub === "function") {
        lenisUnsub();
      } else if (window.lenis && typeof window.lenis.off === "function") {
        window.lenis.off("scroll", handleScroll);
      }
      if (lenisTimer) clearTimeout(lenisTimer);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveSection(href);
    setMenuOpen(false);
    setIsVisible(true);

    isNavigatingRef.current = true;
    accumulatedScrollRef.current = 0;
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    navTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1200);

    if (href === "#home" || href === "#") {
      if (window.lenis) {
        window.lenis.scrollTo(0, { offset: 0, duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.pushState(null, "", "#home");
    } else {
      const target = document.querySelector(href);
      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, { offset: -90, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onFocusCapture={() => setIsVisible(true)}
        className={`fixed top-0 w-full z-50 transform-gpu will-change-transform transition-all ${
          isHeaderVisible
            ? "translate-y-0 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            : "-translate-y-full pointer-events-none duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        } ${
          isSolid
            ? "bg-[#FAF5EA] border-b-3 sm:border-b-4 border-onepiece-dark shadow-md"
            : "bg-transparent border-b-3 sm:border-b-4 border-transparent shadow-none"
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto px-3.5 sm:px-6 md:px-12 lg:px-16 py-2 sm:py-3.5">
          {/* Brand Logo */}
          <a
            className="relative inline-flex items-center select-none cursor-pointer group"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <span
              className={`font-adventure font-black text-lg sm:text-2xl uppercase tracking-wider transition-colors duration-200 ${
                isSolid
                  ? "text-onepiece-red"
                  : "text-onepiece-red drop-shadow-[2px_2px_0px_#FAF5EA]"
              }`}
            >
              Dhynnzz
            </span>
            <span className="relative -top-2 ml-1 text-[9px] sm:text-[11px] font-adventure font-black px-1.5 py-0.5 bg-onepiece-gold text-onepiece-dark border-2 border-onepiece-dark shadow-[1.5px_1.5px_0px_0px_#111827] sm:shadow-[2px_2px_0px_0px_#111827] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-200 uppercase leading-none">
              . dev
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-3.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-all duration-200 cursor-pointer select-none font-adventure uppercase tracking-wider ${
                    isSolid
                      ? `inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm border-3 border-onepiece-dark shadow-[3px_3px_0px_0px_#111827] pirate-btn ${
                          isActive
                            ? "bg-onepiece-gold text-onepiece-dark font-black"
                            : "bg-[#FFFDF8] text-onepiece-dark font-bold hover:bg-onepiece-gold/50 hover:text-onepiece-dark"
                        }`
                      : "px-3.5 py-1.5 text-sm sm:text-[15px] font-bold text-[#FFFDF8] hover:text-onepiece-gold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.85)] hover:-translate-y-0.5 border-3 border-transparent"
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: DOWNLOAD CV and LANGUAGE TOGGLE (Visible on sm and up) */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setShowCvModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-4.5 sm:py-2.5 font-adventure text-xs sm:text-sm font-black text-white bg-onepiece-red pirate-btn uppercase cursor-pointer tracking-wider"
            >
              <span className="material-symbols-outlined text-[18px]">
                description
              </span>
              {t("nav.downloadCv")}
            </button>
            <LanguageToggle />
          </div>

          {/* Mobile/Tablet Header: Compact Language Toggle & Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="sm:hidden">
              <LanguageToggle compact />
            </div>
            <button
              className="p-1 sm:p-1.5 flex flex-col justify-center items-center cursor-pointer select-none bg-transparent hover:opacity-75 transition-opacity"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? (
                <span className="material-symbols-outlined text-[19px] font-black text-onepiece-dark">
                  close
                </span>
              ) : (
                <div className="w-[17px] flex flex-col justify-center items-center gap-[2.5px]">
                  <span className="block w-full h-[2px] bg-onepiece-dark rounded-full"></span>
                  <span className="block w-full h-[2px] bg-onepiece-dark rounded-full"></span>
                  <span className="block w-full h-[2px] bg-onepiece-dark rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu (Image 2) */}
        {menuOpen && (
          <div className="lg:hidden border-t-3 sm:border-t-4 border-b-3 sm:border-b-4 border-onepiece-dark px-6 sm:px-8 py-6 sm:py-7 flex flex-col gap-5 bg-[#FAF5EA] shadow-lg animate-fadeIn">
            <div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    className={`transition-all duration-200 cursor-pointer font-adventure uppercase tracking-wider text-sm sm:text-base select-none ${
                      isActive
                        ? "bg-onepiece-gold text-onepiece-dark font-black px-5 py-2.5 sm:px-6 sm:py-3 border-3 border-onepiece-dark shadow-[3px_3px_0px_0px_#111827] w-fit inline-flex items-center justify-center leading-none"
                        : "text-onepiece-dark font-black px-2 py-1.5 hover:text-onepiece-red hover:translate-x-1.5 transition-all w-fit inline-flex items-center leading-none"
                    }`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                );
              })}
            </div>

            {/* Language Selector (Mobile Menu) */}
            <div className="flex items-center justify-between pt-3 pb-1 border-t-2 border-dashed border-onepiece-dark/25 w-full">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-onepiece-dark">
                {language === "id" ? "Pilih Bahasa" : "Language"}
              </span>
              <LanguageToggle />
            </div>

            {/* DOWNLOAD CV Button (Mobile) */}
            <div className="pt-3 w-full">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 uppercase cursor-pointer bg-onepiece-red text-white font-adventure text-xs sm:text-sm font-black border-3 border-onepiece-dark shadow-[4px_4px_0px_0px_#111827] pirate-btn active:translate-x-0.5 active:translate-y-0.5"
                onClick={() => {
                  setShowCvModal(true);
                  setMenuOpen(false);
                }}
              >
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
                {t("nav.downloadCv")}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* CV Preview Modal */}
      <CvModal
        isOpen={showCvModal}
        onClose={() => setShowCvModal(false)}
      />
    </>
  );
}
