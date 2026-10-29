import { lazy, Suspense } from "react";
import { useLanguage } from "../context/LanguageContext";
import lanyardBandImg from "../assets/lanyard/lanyard1.png";

const Lanyard = lazy(() => import("./Lanyard"));

const roleConfigs = [
  {
    // Front-End Developer - Yellow
    opBadge: "bg-[#F59E0B] text-onepiece-dark border-3 border-onepiece-dark shadow-[3px_3px_0px_0px_#111827]",
  },
  {
    // 3D Artist - Blue
    opBadge: "bg-[#0284C7] text-white border-3 border-onepiece-dark shadow-[3px_3px_0px_0px_#111827]",
  },
  {
    // Machine Learning Enthusiast - Red
    opBadge: "bg-[#AF101A] text-white border-3 border-onepiece-dark shadow-[3px_3px_0px_0px_#111827]",
  },
];

export default function HeroSection() {
  const { personal, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative w-full overflow-x-clip overflow-y-visible transition-colors duration-300 min-h-0 flex items-start pt-0 lg:pt-[92px] pb-4 sm:pb-6"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(8, 24, 43, 0.25) 0%, rgba(8, 24, 43, 0.45) 55%, rgba(245, 238, 219, 0.9) 92%, #f5eedb 100%), url('/images/onepiece-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start overflow-visible">
          {/* Text Content Column: Mobile Order 2 (Below full 100dvh Lanyard), Desktop Column 1-7 (Left Column) */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7 flex flex-col gap-3 sm:gap-3.5 reveal-left pt-2 pb-12 sm:pb-16 lg:py-0">
            {/* Status / Welcome Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-onepiece-gold border-3 border-onepiece-dark shadow-[4px_4px_0px_0px_#111827] w-fit select-none">
              <span className="relative flex h-3 w-3 sm:h-3.5 sm:w-3.5 items-center justify-center shrink-0">
                <span className="animate-slow-ping absolute inline-flex h-full w-full rounded-full bg-[#BE3A2B] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-[#BE3A2B] border-2 border-onepiece-dark animate-slow-blink" />
              </span>
              <span className="font-label-caps text-label-caps font-bold text-onepiece-dark tracking-wider uppercase">
                {t("hero.statusBadge")}
              </span>
            </div>

            {/* Name / Greeting Heading */}
            <div>
              <h1 className="font-adventure text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[3px_3px_0px_#111827]">
                {t("hero.greeting")}{" "}
                <span className="text-[#fde047] font-adventure font-black tracking-wide drop-shadow-[3px_3px_0px_#281912] whitespace-normal sm:whitespace-nowrap">
                  Mhmd Aminuddin
                </span>
              </h1>
            </div>

            {/* Wanted Bio Card */}
            <div className="relative w-[calc(100%-12px)] mx-auto sm:w-full sm:mx-0 max-w-2xl lg:max-w-[660px] xl:max-w-[740px]">
              <div
                className="wanted-card p-4 sm:p-5 w-full relative z-10"
              >
                <p className="font-body-lg text-sm sm:text-base md:text-body-lg text-[#281912] leading-relaxed">
                  {personal.description}
                </p>
                <div className="flex flex-wrap gap-2.5 mt-3 sm:mt-3.5">
                  {personal.roles.map((role, idx) => {
                    const config = roleConfigs[idx % roleConfigs.length];
                    return (
                      <span
                        key={role}
                        className={`inline-block px-3 py-1.5 font-adventure text-xs font-bold uppercase cursor-pointer select-none pirate-btn tracking-wider ${config.opBadge}`}
                      >
                        {role}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Button: View Projects */}
            <div className="flex items-center gap-3 mt-1 sm:mt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-black text-sm sm:text-base uppercase transition-all duration-200 cursor-pointer bg-onepiece-red text-white font-adventure pirate-btn tracking-wider"
              >
                {t("hero.exploreBtn")}
              </a>
            </div>
          </div>

          {/* Lanyard Column: Mobile Order 1 (Full 100dvh First View like Davin portfolio), Desktop Column 8-12 (Right Column) */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 w-full h-[100dvh] min-h-[100dvh] lg:h-[880px] lg:min-h-0 relative z-30 lg:z-40 flex items-center justify-center overflow-visible pointer-events-none -mt-0 lg:-mt-[96px] mb-0 lg:-mb-[280px]">
            <div className="w-full sm:w-[500px] lg:w-[540px] h-full flex items-center lg:items-start justify-center overflow-visible pointer-events-auto">
              <Suspense fallback={null}>
                <Lanyard
                  // [Kamera 3D] Posisi kamera [X, Y, Z] (Z = 20.5 mengatur jarak pandang kamera ke kartu)
                  position={[0, 0.5, 20.5]}
                  // [Fisika 3D] Gravitasi [X, Y, Z] (Y = -60 memberi tarikan gravitasi ke bawah saat kartu berayun)
                  gravity={[0, -60, 0]}
                  // [Kamera 3D] Field of View (sudut lebar lensa kamera)
                  fov={20}
                  // [Tekstur Kartu] Mode pemasangan gambar: "fill", "cover", atau "contain"
                  imageFit="fill"
                  // [Tali Lanyard] Lebar / ketebalan fisik tali (semakin besar nilainya, tali semakin lebar)
                  lanyardWidth={1.42}
                  // [ID Card] Skala ukuran besar/kecil kartu secara keseluruhan
                  cardScale={2.45}
                  // [Proporsi Kartu] Skala lebar sumbu X agar foto tidak gepeng (0.925 pas dengan rasio foto 1024x1546)
                  cardAspectScaleX={0.925}
                  // [Gantungan Tali] Ketinggian titik jangkar/paku gantungan di sumbu Y (atas layar)
                  anchorY={4.21}
                  // [Kelenturan Tali] Panjang tiap ruas sendi fisik tali (mempengaruhi kelenturan saat ditarik)
                  segmentLength={0.7}
                  // [Panjang Tali] Ekstensi tali ke atas hingga keluar dari batas layar
                  extraStrapLength={4.5}
                  // [Motif Tali] Pengulangan tekstur [panjang, lebar] (-1 membalik arah agar teks terbaca normal)
                  repeat={[-1, 1]}
                  // [File Aset] Gambar tekstur tali lanyard (diimpor langsung dari src/assets/lanyard/)
                  lanyardImage={lanyardBandImg}
                  // [File Aset] Gambar bagian depan ID Card
                  frontImage="/images/lanyard-front-aminuddin.webp"
                  // [File Aset] Gambar bagian belakang ID Card
                  backImage="/images/lanyard-back-aminuddin.webp"
                />
              </Suspense>
            </div>

            {/* Mobile Scroll Down Indicator (Properly centered & raised higher) */}
            <div className="lg:hidden absolute bottom-28 sm:bottom-32 inset-x-0 w-full flex justify-center items-center pointer-events-none z-40">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(".wanted-card") || document.querySelector("#about");
                  if (target) {
                    if (window.lenis) {
                      window.lenis.scrollTo(target, { offset: -90, duration: 1.2 });
                    } else {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="flex flex-col items-center justify-center gap-0.5 cursor-pointer text-white hover:text-onepiece-yellow transition-colors drop-shadow-[2px_2px_0px_#111827] animate-bounce select-none pointer-events-auto"
              >
                <span className="font-adventure text-[11px] sm:text-xs font-black uppercase tracking-widest text-center">
                  Scroll Down
                </span>
                <span className="text-lg leading-none font-black text-center">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
