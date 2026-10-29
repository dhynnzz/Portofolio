import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { uiTranslations, dataTranslations } from "../translations";
import {
  personal as basePersonal,
  socials,
  socialIcons,
  skills as baseSkills,
  experiences as baseExperiences,
  education as baseEducation,
  organizations as baseOrganizations,
  certifications as baseCertifications,
  projectCategories as baseProjectCategories,
  projects as baseProjects,
} from "../data";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "id" || saved === "en") return saved;
    }
    return "id";
  });

  const setLanguage = (lang) => {
    if (lang === "id" || lang === "en") {
      setLanguageState(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio_lang", lang);
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Translation helper: t('nav.home')
  const t = (path, fallback = "") => {
    const keys = path.split(".");
    let current = uiTranslations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return fallback || path;
      }
    }
    return current;
  };

  // Localized Data computation
  const localizedData = useMemo(() => {
    const langData = dataTranslations[language] || dataTranslations.id;

    // 1. Personal
    const personal = {
      ...basePersonal,
      description: langData.personal?.description || basePersonal.description,
      about: {
        ...basePersonal.about,
        description:
          langData.personal?.about?.description || basePersonal.about.description,
        role: langData.personal?.about?.role || basePersonal.about.role,
      },
    };

    // 2. Education
    const education = baseEducation.map((edu) => {
      const trans = langData.education?.[edu.id];
      if (!trans) return edu;
      return {
        ...edu,
        degree: trans.degree || edu.degree,
        description: trans.description || edu.description,
        details: trans.details || edu.details,
        images: edu.images?.map((img, idx) => ({
          ...img,
          caption: trans.captions?.[idx] || img.caption,
        })),
      };
    });

    // 3. Experiences
    const experiences = baseExperiences.map((exp) => {
      const trans = langData.experiences?.[exp.id];
      if (!trans) return exp;
      return {
        ...exp,
        role: trans.role || exp.role,
        type: trans.type || exp.type,
        description: trans.description || exp.description,
        responsibilities: trans.responsibilities || exp.responsibilities,
        images: exp.images?.map((img, idx) => ({
          ...img,
          caption: trans.captions?.[idx] || img.caption,
        })),
      };
    });

    // 4. Organizations
    const organizations = baseOrganizations.map((org) => {
      const trans = langData.organizations?.[org.id];
      if (!trans) return org;
      return {
        ...org,
        role: trans.role || org.role,
        description: trans.description || org.description,
        responsibilities: trans.responsibilities || org.responsibilities,
        images: org.images?.map((img, idx) => ({
          ...img,
          caption: trans.captions?.[idx] || img.caption,
        })),
      };
    });

    // 5. Certifications
    const certifications = baseCertifications.map((cert) => {
      const trans = langData.certifications?.[cert.id];
      if (!trans) return cert;
      return {
        ...cert,
        name: trans.name || cert.name,
        description: trans.description || cert.description,
        details: trans.details || cert.details,
        images: cert.images?.map((img, idx) => ({
          ...img,
          caption: trans.captions?.[idx] || img.caption,
        })),
      };
    });

    // 6. Projects
    const projects = baseProjects.map((proj) => {
      const trans = langData.projects?.[proj.id];
      if (!trans) return proj;
      return {
        ...proj,
        title: trans.title || proj.title,
        description: trans.description || proj.description,
        overview: trans.overview || proj.overview,
        problem: trans.problem || proj.problem,
        solution: trans.solution || proj.solution,
        features: trans.features || proj.features,
        images: proj.images?.map((img, idx) => ({
          ...img,
          caption: trans.captions?.[idx] || img.caption,
        })),
      };
    });

    // 7. Skills
    const skills = baseSkills.map((cat) => {
      const catTrans = langData.skills?.[cat.id];
      if (!catTrans) return cat;
      return {
        ...cat,
        title: catTrans.title || cat.title,
        eyebrow: catTrans.eyebrow || cat.eyebrow,
        items: cat.items.map((item) => ({
          ...item,
          description:
            catTrans.descriptions?.[item.name] || item.description,
        })),
      };
    });

    return {
      personal,
      education,
      experiences,
      organizations,
      certifications,
      projects,
      skills,
      socials,
      socialIcons,
      projectCategories: baseProjectCategories,
    };
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        isId: language === "id",
        isEn: language === "en",
        setLanguage,
        toggleLanguage,
        t,
        ...localizedData,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
