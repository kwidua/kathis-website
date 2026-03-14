import { useLanguageSwitcher } from "../contexts/LanguageContext"
import { Languages } from "lucide-react";

export default function LanguageToggle() {

    const { language, toggleLanguage } = useLanguageSwitcher();

    return (
   
        <button
          onClick={toggleLanguage}
          className="rounded-full p-2 px-3 hover:bg-[#cdc7e5] dark:hover:bg-[#5b507a]/30"
          title={language === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
        >
          <div className="flex items-center gap-1">
          <Languages className="size-4 mr-1.5 text-gray-700 dark:text-gray-300" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {language.toUpperCase()}
          </span>
          </div>
        </button>
    );
}