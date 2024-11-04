import { useLanguageStore, useThemeStore } from "../../zustand/store";
import Dropdown from "./navbar/Dropdown";
import Language from "./navbar/Language";
import ToggleTheme from "./navbar/ToggleTheme";
import LoginButton from "./navbar/LoginButton";
import Nav from "./navbar/Nav";

const translations = {
  tr: {
    name: "Almanca Kursu",
  },
  de: {
    name: "Deutschkurs",
  },
};

function Header() {
  const { language } = useLanguageStore();
  const { theme } = useThemeStore();

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 to-gray-900"
            : "bg-gradient-to-r from-blue-400 to-blue-600"
        } text-white p-5 shadow-xl transition-colors duration-300 ease-in-out`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {translations[language].name}
            </h1>
          </div>

          <div className="hidden md:flex">
            <Nav />
          </div>
          {/* Mobil  */}

          <div className="flex space-x-3 items-center">
            <div className="md:hidden flex items-center">
              <Dropdown />
            </div>
            <ToggleTheme />

            <Language />

            <LoginButton />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
