import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollingTicker from "./components/ScrollingTicker";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ScrollToTop from "./components/ScrollToTop";
import useScrollReveal from "./hooks/useScrollReveal";
import useSmoothScroll from "./hooks/useSmoothScroll";

// Lazy-loaded sections below the fold for fast initial load & reduced main-thread lag
const CertificatesSection = lazy(() => import("./components/CertificatesSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));

// Preload lazy chunks in background when browser is idle to ensure instant scroll
if (typeof window !== "undefined") {
  const preloadBelowFold = () => {
    import("./components/CertificatesSection");
    import("./components/SkillsSection");
    import("./components/ProjectsSection");
    import("./components/ContactSection");
    import("./components/Footer");
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(preloadBelowFold);
  } else {
    setTimeout(preloadBelowFold, 1500);
  }
}

function SectionFallback({ minHeight = "360px" }) {
  return (
    <div
      className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-center py-12"
      style={{ minHeight }}
    >
      <div className="w-7 h-7 rounded-full border-3 border-onepiece-gold border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  // Initialize Lenis smooth momentum scrolling and anchor navigation
  useSmoothScroll();

  // Initialize scroll entrance reveal system
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main className="pb-0 pt-0 relative z-40 lego-dot-bg overflow-x-clip">
        <div id="home" className="scroll-mt-24">
          <HeroSection />
        </div>
        <ScrollingTicker />
        <div id="about" className="scroll-mt-28">
          <AboutSection />
        </div>
        <ExperienceSection />

        <Suspense fallback={<SectionFallback minHeight="360px" />}>
          <CertificatesSection />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="450px" />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="600px" />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="450px" />}>
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating Log Pose Scroll-to-Top Button */}
      <ScrollToTop />
    </>
  );
}
