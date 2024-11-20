import CardText from "./utility/CardText";
import Deutsch2 from "../../../../public/image/deutsch2.png";
import { useThemeStore } from "../../../zustand/store";

const courseData = {
  subtitle: "Tipp",
  title: "Wie haben wir angefangen, Deutsch zu lernen?",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, atque?",
  benefits: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
  link: "#",
};

function CourseCard2() {
  const { theme } = useThemeStore();

  return (
    <>
      <section className="py-12">
        <div
          className={`${
            theme === "dark"
              ? "bg-gray-800 text-white shadow-lg"
              : "bg-indigo-200 shadow-md"
          } hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image-Content */}
            <div className="relative">
              <img
                src={Deutsch2}
                alt="deutsch2"
                className="object-cover h-full w-full transform transition-all duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-indigo-300/60 to-transparent"></div>
            </div>
            {/* Text-Content */}
            <div className="p-12 py-16 flex flex-col justify-center">
              <CardText courseData={courseData} />
              <div className="mt-8">
                <a
                  href={courseData.link}
                  className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 transition-all"
                >
                  Kursa Başla
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseCard2;
