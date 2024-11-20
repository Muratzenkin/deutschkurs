import Main from "../components/Main/Main";
import Benefits from "../components/Main/Benefits";

import Comment from "../components/Main/Comments/Comment";
import Willkommen from "../components/Main/Willkommen";
import CourseContent from "../components/Main/CurseContent";
import Niveau from "../components/Main/Niveau";
import Courses from "../components/Main/Courses/Courses";
import CourseFeatures from "../components/Main/CourseFeatures/CourseFeatures";

const Home = () => {
  return (
    <div className="bg-custom-bg bg-fixed bg-center">
      <Willkommen />
      <Niveau />
      <Main />
      <Courses />
      <CourseFeatures />

      <CourseContent />
      <Benefits />
      <Comment />
    </div>
  );
};

export default Home;
