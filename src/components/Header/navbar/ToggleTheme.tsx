import { useThemeStore } from "../../../zustand/store";
import { SunMoon } from "lucide-react";

function ToggleTheme() {
  const { toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="  p-5 hover:scale-155 transform transition-transform duration-200 ease-in-out cursor-pointer"
    >
      <SunMoon />
    </button>
  );
}

export default ToggleTheme;
