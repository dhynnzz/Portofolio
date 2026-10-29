import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 400);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { offset: 0, duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-8 pointer-events-none scale-90"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Set Sail to Top (Log Pose)"
        className="group relative flex flex-col items-center justify-center transition-all duration-200 ease-out hover:-translate-y-1.5 active:translate-y-0.5 cursor-pointer select-none w-14 h-14 rounded-full bg-[#af101a] border-4 border-[#281912] shadow-[4px_4px_0px_0px_#281912] hover:bg-[#8e0d15] hover:shadow-[6px_6px_0px_0px_#281912] hover:rotate-6"
      >
        <div className="flex flex-col items-center justify-center z-10 text-white">
          <span className="material-symbols-outlined text-[22px] leading-none transition-transform duration-200 group-hover:-translate-y-1">
            arrow_upward
          </span>
          <span className="font-adventure font-black text-[9px] text-[#fde047] tracking-wider -mt-0.5">
            UP
          </span>
        </div>
      </button>
    </div>
  );
}
