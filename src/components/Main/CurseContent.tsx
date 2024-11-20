function CourseContent() {
  const courses = [
    {
      level: "A1-A2",
      description:
        "Einführung in die deutsche Sprache, grundlegende Grammatik und Wortschatz. Dieser Kurs ist ideal für Anfänger, die eine solide Grundlage in der deutschen Sprache aufbauen möchten.",
      details:
        "Schwerpunkte: Begrüßungen, grundlegende Phrasen, tägliche Kommunikation und einfache grammatikalische Strukturen.",
    },
    {
      level: "B1-B2",
      description:
        "Selbstständige Kommunikation, Verständnis komplexer Texte und Diskussionen. Entwickeln Sie Ihre Sprachfähigkeiten für Alltag und Beruf.",
      details:
        "Schwerpunkte: Fortgeschrittene Grammatik, schriftliche Kommunikation und mündlicher Ausdruck.",
    },
  ];

  const teachers = [
    {
      name: "Hatice Nur Zenkin",
      photo: "/image/frau.png", // Add the correct path for your project
      expertise: "Deutsch als Fremdsprache (A1-B1)",
      feedback:
        "Ich liebe es, mit meinen Schülern zu arbeiten und ihre Fortschritte zu sehen. Jedes Lächeln eines Schülers ist für mich eine Belohnung.",
    },
    {
      name: "Jörg Rauen",
      photo: "/image/mann.png", // Add the correct path for your project
      expertise: "Wirtschaftsdeutsch, B1-C1",
      feedback:
        "Meine Erfahrung mit Business-Deutsch-Kursen hat gezeigt, wie wichtig Sprache im Berufsleben ist. Es bereitet mir Freude, Wissen weiterzugeben.",
    },
  ];

  return (
    <div className="py-12 bg-indigo-50 px-6 lg:px-20">
      {/* Başlık */}
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-10 text-center">
        Kursangebote und Lehrer
      </h2>

      {/* İçerik */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Kurslar */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
            Unsere Kurse
          </h3>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h4 className="text-xl font-semibold text-indigo-700">
                  Niveau: {course.level}
                </h4>
                <p className="text-gray-700 mt-3">{course.description}</p>
                <p className="text-gray-500 mt-2 italic">{course.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Öğretmenler */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
            Unsere Lehrer
          </h3>
          <div className="space-y-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col items-center"
              >
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-24 h-24 rounded-full mb-4 border-2 border-indigo-500"
                />
                <h4 className="text-lg font-semibold text-indigo-700">
                  {teacher.name}
                </h4>
                <p className="text-gray-500 mt-1 text-sm">
                  {teacher.expertise}
                </p>
                <p className="text-gray-600 mt-4 italic text-center">
                  "{teacher.feedback}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
