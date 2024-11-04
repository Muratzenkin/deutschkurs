import { useThemeStore } from "../zustand/store";
import Main from "../components/Main/Main";
import Benefits from "../components/Main/Benefits";

import Comment from "../components/Comment";
import Willkommen from "../components/Main/Willkommen";
import CourseContent from "../components/Main/CurseContent";

const Home = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-800" : "bg-blue-200"
      }`}
    >
      <Willkommen />
      <Main />
      <CourseContent />
      <Benefits />
      <Comment />
    </div>
  );
};

export default Home;
