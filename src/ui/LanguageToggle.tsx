import { useState, useEffect } from "react";
import { useLanguageSwitcher } from "../contexts/LanguageContext"
import { Languages, Moon, Sun } from "lucide-react";

export default function LanguageToggle() {

    const { language, toggleLanguage } = useLanguageSwitcher();

    return (
   
        <button
                  onClick={toggleLanguage}
                  className="rounded-full px-3 hover:bg-[#cdc7e5] dark:hover:bg-[#5b507a]/30"
                  title={language === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
                >
                  <Languages className="size-4 mr-1.5 text-gray-700 dark:text-gray-300" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language.toUpperCase()}
                  </span>
                </button>
        // <button onClick={toggleLanguage}>
        // {language === "de" ? "🇩🇪 Deutsch" : "🇬🇧 English"}
        // </button>
    );
}