import { Globe } from "lucide-react";
import { useLanguageStore, useThemeStore } from "../../../zustand/store";

function Language() {
  const { theme } = useThemeStore();

  const { language, changeLanguage } = useLanguageStore();

  return (
    <div className="flex items-center border rounded-lg p-1">
      <Globe />
      <select
        value={language}
        onChange={(event) => changeLanguage(event.target.value as "de" | "tr")}
        className={`bg-blue-500 text-white p-4 focus:outline-none cursor-pointer ${
          theme === "dark" ? "bg-gray-800" : "bg-blue-500"
        }`}
      >
        <option value="de">Deutsch</option>
        <option value="tr">Türkçe</option>
      </select>
    </div>
  );
}

export default Language;
