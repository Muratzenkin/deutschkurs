import { NavLink } from "react-router-dom";
import { useThemeStore } from "../../../zustand/store";

function Nav() {
  const { theme } = useThemeStore();

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-blue-500"
      } container text-white p-5 shadow-xl transition-colors duration-300 ease-in-out`}
    >
      <div className="container lg:max-w-screen-xl mx-auto flex justify-between items-center">
        <ul className={"flex items-center gap-4 uppercase"}>
          <NavLink to="/" className=" hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/privacy" className="hover:text-gray-300">
            Datenschutz
          </NavLink>
          <NavLink to="/blog" className="hover:text-gray-300">
            Blog
          </NavLink>
          <NavLink to="/news" className=" hover:text-gray-300">
            News
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-300">
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
