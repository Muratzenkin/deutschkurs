import { NavLink, Outlet } from "react-router-dom";
import { Globe, Lightbulb } from "lucide-react";
import { useThemeStore } from "../zustand/store";
import { motion } from "framer-motion";

function Blog() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 text-gray-800"
      } p-6 rounded-lg shadow-lg pt-[150px] pb-[200px]`}
    >
      <h2 className="text-2xl font-bold text-[#1E88E5] mb-4 text-center"></h2>
      <nav className="mb-6 flex justify-center space-x-6">
        <NavLink
          to="german"
          className="flex items-center text-blue-600 hover:underline p-2 rounded transition duration-200 ease-in-out border-b-2 border-transparent hover:border-blue-600"
        >
          <Lightbulb className="mr-2 text-xl" />
          Deutsch Blog
        </NavLink>
        <NavLink
          to="germany"
          className="flex items-center text-blue-600 hover:underline p-2 rounded transition duration-200 ease-in-out border-b-2 border-transparent hover:border-blue-600"
        >
          <Globe className="mr-2 text-xl" />
          Deutschland Blog
        </NavLink>
      </nav>
      <Outlet />
      <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <motion.img
          src="../public/image/willkommen.jpg"
          alt="willkommen"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Blog;
