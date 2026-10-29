import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import DetailModal from "./DetailModal";

const getCategoryColor = (category) => {
  switch (category) {
    case "UI/UX Design":
      return "bg-[#0284C7] text-white border sm:border-2 border-onepiece-dark font-adventure text-[7.5px] sm:text-[11px] font-black";
    case "Machine Learning":
      return "bg-onepiece-red text-white border sm:border-2 border-onepiece-dark font-adventure text-[7.5px] sm:text-[11px] font-black";
    case "Web":
      return "bg-onepiece-gold text-onepiece-dark border sm:border-2 border-onepiece-dark font-adventure text-[7.5px] sm:text-[11px] font-black";
    case "Mobile App":
      return "bg-[#7C3AED] text-white border sm:border-2 border-onepiece-dark font-adventure text-[7.5px] sm:text-[11px] font-black";
    case "Game Development":
      return "bg-[#EA580C] text-white border sm:border-2 border-onepiece-dark font-adventure text-[7.5px] sm:text-[11px] font-black";
    case "IoT":
      return "bg-[#059669] text-white border sm:border-2 border-onepiece-dark font-adventure text-[7.5px] sm:text-[11px] font-black";
    default:
      return "bg-onepiece-parchment text-onepiece-dark border sm:border-2 border-onepiece-dark font-adventure text-[7.5px] sm:text-[11px] font-black";
  }
};

const DESKTOP_INITIAL_COUNT = 6; // 3 atas, 3 bawah di Desktop
const MOBILE_INITIAL_COUNT = 4;  // 2 atas, 2 bawah di Mobile

export default function ProjectsSection() {
  const { projects, projectCategories, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => setIsDesktop(e.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const initialCount = isDesktop ? DESKTOP_INITIAL_COUNT : MOBILE_INITIAL_COUNT;

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialCount);

  const remainingCount = Math.max(0, filteredProjects.length - initialCount);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-24 sm:mb-32 scroll-mt-28" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 border-b-4 pb-4 border-onepiece-dark">
        <div className="reveal-left flex-shrink-0">
          <div className="font-adventure text-xs sm:text-sm text-onepiece-red mb-1 font-black uppercase tracking-wider">
            FEATURED WORKS &amp; PORTFOLIO
          </div>
          <h2 className="font-adventure text-lg sm:text-xl md:text-2xl lg:text-[26px] text-onepiece-dark uppercase font-black whitespace-normal sm:whitespace-nowrap">
            PROJECT ARCHIVE <span className="text-onepiece-gold font-adventure font-black">// SHOWCASE</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 md:mt-0 reveal-right">
          {projectCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
              className={`px-2.5 py-1.5 sm:px-4 sm:py-2 uppercase transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:-rotate-1.5 hover:shadow-[5px_5px_0px_0px_#111827] active:translate-y-0.5 active:rotate-0 text-[11px] sm:text-xs ${activeFilter === filter
                  ? "bg-onepiece-gold text-onepiece-dark border-3 border-onepiece-dark font-adventure font-black shadow-[4px_4px_0px_0px_#111827] -translate-y-1 -rotate-1.5"
                  : "bg-[#FFFDF7] text-[#4A3228] border-3 border-onepiece-dark/40 font-adventure font-bold hover:border-onepiece-dark hover:bg-onepiece-parchment"
                }`}
            >
              {t(`projects.categories.${filter}`, filter)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid - 2 Kotak Ke Kanan */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
        {displayedProjects.map((project, idx) => (
          <div
            key={project.id || project.slug}
            className={`overflow-hidden group flex flex-col justify-between reveal-pop delay-${((idx % 3) + 1) * 100
              } pirate-card bg-[#FFFDF8] h-full`}
          >
            <div className="flex-1 flex flex-col">
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[16/10] bg-surface-container-low overflow-hidden cursor-pointer border-b-2 sm:border-b-4 border-onepiece-dark"
              >
                <img
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src={project.image}
                  onError={(e) => {
                    e.currentTarget.src = "/images/profile-hero.jpg";
                  }}
                />
                <div
                  className={`absolute top-1.5 sm:top-3 left-1.5 sm:left-3 px-1.5 sm:px-3 py-0.5 sm:py-1 ${getCategoryColor(
                    project.category
                  )} uppercase shadow-sm`}
                >
                  {project.category}
                </div>
                <div className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 px-1 sm:px-2 py-0.5 uppercase font-bold text-[7.5px] sm:text-[10px] bg-[#FFF8E7] border sm:border-2 border-onepiece-dark font-adventure text-onepiece-dark">
                  {project.year}
                </div>
              </div>

              <div className="p-2.5 sm:p-5 md:p-6 bg-[#FFFDF8] flex-1 flex flex-col">
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="uppercase mb-1 sm:mb-2 cursor-pointer transition-colors font-adventure font-black text-[11px] sm:text-[14px] md:text-[16px] text-onepiece-dark hover:text-onepiece-red leading-tight line-clamp-2"
                >
                  {project.title}
                </h3>
                <p className="font-body-md text-on-surface-variant text-[9px] sm:text-[12px] md:text-[13px] line-clamp-2 sm:line-clamp-3 leading-snug sm:leading-relaxed mb-2 sm:mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-1 sm:px-2 py-0.5 text-[7.5px] sm:text-[10px] font-bold bg-onepiece-parchment border border-onepiece-dark/60 font-adventure text-onepiece-dark leading-none truncate max-w-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1 sm:px-1.5 py-0.5 text-[7.5px] sm:text-[10px] font-bold bg-onepiece-gold border border-onepiece-dark font-adventure text-onepiece-dark leading-none">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Links footer & View Details */}
            <div className="px-2.5 sm:px-6 pb-2.5 sm:pb-5 pt-2 sm:pt-3 flex items-center justify-between gap-1.5 sm:gap-3 border-t mt-auto border-onepiece-dark/20">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-xs cursor-pointer hover:underline text-onepiece-red font-adventure font-black truncate"
              >
                <span>VIEW PROJECT</span>
                <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                  arrow_forward
                </span>
              </button>

              {project.links && (project.links.github || project.links.demo) && (
                <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface hover:text-onepiece-red transition-colors"
                      title="GitHub Repository"
                    >
                      <span className="material-symbols-outlined text-[15px] sm:text-[18px]">
                        code
                      </span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface hover:text-onepiece-red transition-colors"
                      title={project.links.demo.includes("roblox.com") ? "Play on Roblox" : "Live Demo"}
                    >
                      <span className="material-symbols-outlined text-[15px] sm:text-[18px]">
                        {project.links.demo.includes("roblox.com") ? "sports_esports" : "open_in_new"}
                      </span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All / Show Less Button */}
      {filteredProjects.length > initialCount && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 sm:px-10 sm:py-4.5 text-base sm:text-lg font-black uppercase relative cursor-pointer bg-onepiece-gold text-onepiece-dark border-3.5 border-onepiece-dark font-adventure pirate-btn shadow-[5px_5px_0px_0px_#111827] tracking-wider"
          >
            {showAll
              ? `↑ ${t("projects.showLess")}`
              : `↓ ${t("projects.showMore")} (${remainingCount})`}
          </button>
        </div>
      )}

      {/* Detail Modal for Project */}
      <DetailModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        data={selectedProject}
        type="project"
      />
    </section>
  );
}
