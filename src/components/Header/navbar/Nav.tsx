import { NavLink } from "react-router-dom";
import { useThemeStore } from "../../../zustand/store";

function Nav() {
  const { theme } = useThemeStore();

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-blue-500"
      } text-white p-5 shadow-xl transition-colors duration-300 ease-in-out`}
    >
      <div className="container lg:max-w-screen-xl mx-auto flex justify-between items-center">
        <div className={"hidden md:flex items-center space-x-6 "}>
          <NavLink to="/" className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/privacy" className="text-white hover:text-gray-300">
            Datenschutz
          </NavLink>
          <NavLink to="/blog" className="text-white hover:text-gray-300">
            Blog
          </NavLink>
          <NavLink to="/news" className="text-white hover:text-gray-300">
            News
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
