import { useThemeStore } from "../../zustand/store";
import Dropdown from "./navbar/Dropdown";
import Language from "./navbar/Language";
import ToggleTheme from "./navbar/ToggleTheme";
import LoginButton from "./navbar/LoginButton";
import Nav from "./navbar/Nav";
import Logo from "../../../public/image/logo.jpeg";
import { NavLink } from "react-router-dom";

function Header() {
  const { theme } = useThemeStore();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 to-gray-900"
            : "bg-gradient-to-r from-blue-400/80 to-blue-600/80"
        } text-white p-1 backdrop-blur-sm rounded-full mt-3 shadow-xl transition-colors duration-300 ease-in-out`}
      >
        <nav className="container mx-auto flex flex-wrap justify-between items-center  rounded-full py-3 px-4 mt-2">
          <NavLink to="/">
            <div>
              <img
                src={Logo}
                alt="logo"
                className="max-w-[80px] rounded-full"
              />
            </div>
          </NavLink>

          <div className="hidden md:flex">
            <Nav />
          </div>
          {/* Mobil  */}

          <div className="flex  items-center">
            <div className="md:hidden flex items-center">
              <Dropdown />
            </div>
            <ToggleTheme />

            <Language />
            <div className="border border-white px-4 py-2 rounded-full">
              <LoginButton />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
