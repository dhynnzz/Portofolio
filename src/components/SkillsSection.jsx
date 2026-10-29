import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const allSkills = [
  // ─── Development ────────────────────────────────────────────────────────────
  {
    name: "REACT.JS",
    category: "Frontend Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JAVASCRIPT",
    category: "Programming Language",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    category: "Markup Language",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "Stylesheet",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "LARAVEL",
    category: "Backend Framework",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "PHP",
    category: "Backend Language",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "TAILWIND CSS",
    category: "CSS Framework",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "BOOTSTRAP",
    category: "CSS Framework",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "REACT NATIVE",
    category: "Mobile App Dev",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "VITE",
    category: "Frontend Tool",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },

  // ─── Design ─────────────────────────────────────────────────────────────────
  {
    name: "FIGMA",
    category: "UI/UX Design",
    group: "Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "BLENDER",
    category: "3D Creation Suite",
    group: "Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
  {
    name: "UI/UX DESIGN",
    category: "User Experience",
    group: "Design",
    logo: "/images/logos/uiux.svg",
  },
  {
    name: "3D MODELING",
    category: "3D & Visual Assets",
    group: "Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },

  // ─── Machine Learning ───────────────────────────────────────────────────────
  {
    name: "PYTHON",
    category: "Language & AI",
    group: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TENSORFLOW",
    category: "Deep Learning",
    group: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "KERAS",
    category: "Neural Networks",
    group: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
  },
  {
    name: "OPENCV",
    category: "Computer Vision",
    group: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    name: "PANDAS",
    category: "Data Analysis",
    group: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "NUMPY",
    category: "Numerical Computing",
    group: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },

  // ─── Database ───────────────────────────────────────────────────────────────
  {
    name: "MYSQL",
    category: "Relational Database",
    group: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "DATABASE MANAGEMENT",
    category: "DB Architecture",
    group: "Database",
    logo: "https://cdn.simpleicons.org/dbeaver/382923",
  },

  // ─── Tools ──────────────────────────────────────────────────────────────────
  {
    name: "GIT",
    category: "Version Control",
    group: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GITHUB",
    category: "Code Hosting",
    group: "Tools",
    logo: "https://cdn.simpleicons.org/github/1a1c1c",
  },
  {
    name: "VS CODE",
    category: "Code Editor",
    group: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "ANTIGRAVITY",
    category: "AI Coding Assistant",
    group: "Tools",
    logo: "/images/logos/antigravity.svg",
  },
  {
    name: "GOOGLE COLAB",
    category: "Cloud Jupyter",
    group: "Tools",
    logo: "https://cdn.simpleicons.org/googlecolab/F9AB00",
  },
  {
    name: "KAGGLE",
    category: "ML & Data Science",
    group: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg",
  },
];

const categories = ["ALL", "Development", "Design", "Machine Learning", "Database", "Tools"];
const INITIAL_SKILLS_COUNT = 9; // 3 rows on 3-column grid

export default function SkillsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills =
    activeTab === "ALL"
      ? allSkills
      : allSkills.filter((s) => s.group === activeTab);

  const displayedSkills =
    showAll || activeTab !== "ALL"
      ? filteredSkills
      : filteredSkills.slice(0, INITIAL_SKILLS_COUNT);

  const remainingCount =
    activeTab === "ALL" && !showAll
      ? filteredSkills.length - INITIAL_SKILLS_COUNT
      : 0;

  return (
    <div
      className="flex flex-col gap-6 mt-16 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-24 sm:mb-32 scroll-mt-28"
      id="skills"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-4 pb-4 border-onepiece-dark">
        <div className="reveal-left flex-shrink-0">
          <div className="font-adventure text-xs sm:text-sm text-onepiece-red mb-1 font-black uppercase tracking-wider">
            {t("skills.badge")}
          </div>
          <h2 className="font-adventure text-lg sm:text-xl md:text-2xl lg:text-[26px] text-onepiece-dark uppercase font-black whitespace-normal sm:whitespace-nowrap">
            TECH STACK <span className="text-onepiece-gold font-adventure font-black">// SKILLS</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 reveal-right">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setShowAll(false);
              }}
              className={`px-2.5 py-1.5 sm:px-4 sm:py-2 border-3 uppercase transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:-rotate-1.5 hover:shadow-[5px_5px_0px_0px_#111827] active:translate-y-0.5 active:rotate-0 text-[11px] sm:text-xs ${
                activeTab === cat
                  ? "bg-onepiece-gold text-onepiece-dark border-onepiece-dark font-adventure font-black shadow-[4px_4px_0px_0px_#111827] -translate-y-1 -rotate-1.5"
                  : "bg-[#FFFDF7] text-[#4A3228] border-onepiece-dark/40 font-adventure font-bold hover:border-onepiece-dark hover:bg-onepiece-parchment"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid - 3 Kotak Ke Kanan */}
      <div
        key={activeTab}
        className="grid grid-cols-3 gap-2 sm:gap-3.5 md:gap-5 mt-4"
      >
        {displayedSkills.map((skill, idx) => (
          <div
            key={`${activeTab}-${skill.name}`}
            style={{ animationDelay: `${(idx % 9) * 40}ms` }}
            className="rounded-xl sm:rounded-2xl p-1.5 sm:p-3.5 flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3.5 hover:-translate-y-1.5 transition-transform group select-none min-w-0 animate-skill-pop pirate-card bg-[#FFFDF8] text-center sm:text-left justify-center sm:justify-start"
          >
            {/* Logo Icon Box */}
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl border sm:border-2 flex items-center justify-center p-1 sm:p-1.5 flex-shrink-0 transition-colors border-onepiece-dark bg-white shadow-sm group-hover:bg-onepiece-parchment">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Content Text */}
            <div className="flex flex-col items-center sm:items-start min-w-0 w-full flex-grow">
              <h3
                title={skill.name}
                className="font-black text-[9px] sm:text-[13px] md:text-[15px] tracking-tight sm:tracking-wide uppercase truncate w-full font-adventure text-onepiece-dark text-center sm:text-left leading-tight"
              >
                {skill.name}
              </h3>
              <span
                title={skill.category}
                className="px-1 sm:px-2 py-0.5 rounded text-[7.5px] sm:text-[10px] md:text-[11px] font-bold inline-block mt-0.5 sm:mt-1 truncate max-w-full bg-onepiece-gold text-onepiece-dark border border-onepiece-dark/80 font-adventure text-center sm:text-left leading-none"
              >
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All / Show Less Button */}
      {(remainingCount > 0 || (showAll && activeTab === "ALL")) && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 sm:px-10 sm:py-4.5 text-base sm:text-lg font-black uppercase relative cursor-pointer bg-onepiece-gold text-onepiece-dark border-3.5 border-onepiece-dark font-adventure pirate-btn shadow-[5px_5px_0px_0px_#111827] tracking-wider"
          >
            {showAll
              ? `↑ ${t("skills.showLess")}`
              : `↓ ${t("skills.showMore")} (${remainingCount})`}
          </button>
        </div>
      )}
    </div>
  );
}
