import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguageStore } from "../../../zustand/store";

function LanguageDropdown() {
  const { changeLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="flex items-center p-2 border rounded-lg hover:scale-105 dark:hover:bg-gray-700 transition cursor-pointer"
      >
        <Globe className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 rounded-full shadow-lg z-50">
          <button
            onClick={() => changeLanguage("de")}
            className="w-full text-gray-800 dark:text-gray-200 px-4 py-2 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
          >
            Deutsch
          </button>
          <button
            onClick={() => changeLanguage("tr")}
            className="w-full text-gray-800 dark:text-gray-200 px-4 py-2 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
          >
            Türkçe
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
