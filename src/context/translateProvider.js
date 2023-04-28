import { createContext, useState } from "react";

export const TranslateContext = createContext();

export const TranslateProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    if (language === "es") {
      setLanguage("en");
      
    } else {
      setLanguage("es");
    }
  };


  return (
    <TranslateContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        language,
        setLanguage,
        toggleLanguage
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
};
