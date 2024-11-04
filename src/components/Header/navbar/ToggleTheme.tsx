import { useThemeStore } from "../../../zustand/store";
import { SunMoon } from "lucide-react";

function ToggleTheme() {
  const { toggleTheme, theme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-blue-500"
      }  p-5 hover:scale-105 transform transition-transform duration-200 ease-in-out`}
    >
      {" "}
      <SunMoon />
    </button>
  );
}

export default ToggleTheme;
