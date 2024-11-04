import { BookOpenCheck, Clock, Router } from "lucide-react";
import { useThemeStore } from "../../zustand/store";

function CourseContent() {
  const { theme } = useThemeStore();

  const courses = [
    {
      level: "A1-A2",
      description:
        "Einführung in die deutsche Sprache, grundlegende Grammatik und Wortschatz.",
    },
    {
      level: "B1-B2",
      description:
        "Selbstständige Kommunikation, Verständnis komplexer Texte und Diskussionen.",
    },
  ];

  const teachers = [
    {
      name: "Hatice Nur Zenkin",
      photo: "../public/image/frau.png",
      expertise: "Deutsch als Fremdsprache, A1-B1",
      feedback:
        "Ich liebe es, mit meinen Schülern zu arbeiten und ihre Fortschritte zu sehen.",
    },
    {
      name: "Jörg Rauen",
      photo: "../public/image/mann.png",
      expertise: "Wirtschaftsdeutsch, B1-C1",
      feedback: "Meine Erfahrung mit Business-Deutsch-Kursen ist großartig.",
    },
  ];

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 text-gray-800"
      } p-8 rounded-lg shadow-lg pt-[150px]`}
    >
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center tracking-wide">
        Kursangebote
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ul className="space-y-4">
          {courses.map((course, index) => (
            <li
              key={index}
              className={`${
                theme === "dark" ? "bg-gray-800 " : "bg-white "
              }  p-6 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105`}
            >
              <h3 className="font-semibold text-indigo-600 text-xl">
                Niveau: {course.level}
              </h3>
              <p className="text-gray-700 mt-2">{course.description}</p>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className={`${
                theme === "dark" ? "bg-gray-800 " : "bg-white "
              } p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center transition-transform transform hover:scale-105`}
            >
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-24 h-24 rounded-full mb-4 border-2 border-indigo-500"
              />
              <h3 className="font-semibold text-indigo-600 text-lg">
                {teacher.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{teacher.expertise}</p>
              <p className="text-gray-700 mt-3 italic text-center">
                "{teacher.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-indigo-700 mt-8 mb-6 text-center tracking-wide">
        Kursmerkmale
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className={`flex flex-col items-center ${
            theme === "dark" ? "bg-gray-800 " : "bg-white "
          } p-6 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105`}
        >
          <Router className="text-indigo-500 w-8 h-8 mb-2" />
          <p className="text-gray-700 text-center">
            Online oder Präsenzunterricht
          </p>
        </div>
        <div
          className={`flex flex-col items-center ${
            theme === "dark" ? "bg-gray-800 " : "bg-white "
          } p-6 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105`}
        >
          <BookOpenCheck className="text-indigo-500 w-8 h-8 mb-2" />
          <p className="text-gray-700 text-center">Wöchentliche Programme</p>
        </div>
        <div
          className={`flex flex-col items-center ${
            theme === "dark" ? "bg-gray-800 " : "bg-white "
          } p-6 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105`}
        >
          <Clock className="text-indigo-500 w-8 h-8 mb-2" />
          <p className="text-gray-700 text-center">
            Flexible Unterrichtszeiten
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
