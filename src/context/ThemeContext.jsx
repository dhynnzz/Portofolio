import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const theme = "onepiece";

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.add("theme-onepiece");
    body.classList.add("theme-onepiece");
    root.classList.remove("theme-lego");
    body.classList.remove("theme-lego");

    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_theme", "onepiece");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: "onepiece",
        setTheme: () => {},
        toggleTheme: () => {},
        isOnePiece: true,
        isLego: false,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
