import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (language: Language) => {},
  toggleLanguage: () => {}
});

type Language = "en" | "de";

const isLanguage = (value: string | null): value is Language => {
  return value === "en" || value === "de";
};


export const LanguageProvider = ({ children } : { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
    const stored = (localStorage.getItem("lang")) || "de";
    return isLanguage(stored) ? stored : "de";
    });

    useEffect(() => {
    localStorage.setItem("lang", language);
    document.documentElement.lang = language; 
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "de" ? "en" : "de"));
    };

    return (
        <LanguageContext.Provider
        value={{ language, setLanguage, toggleLanguage }}
        >
        {children}
        </LanguageContext.Provider>
  );
}

export const useLanguageSwitcher = () => useContext(LanguageContext);