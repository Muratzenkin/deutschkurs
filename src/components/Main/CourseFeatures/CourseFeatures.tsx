import { Clock, BookOpenCheck, Router } from "lucide-react";

function CourseFeatures() {
  const features = [
    {
      title: "Online oder Präsenzunterricht",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui?",
      icon: <Router className="text-indigo-600 text-5xl" />,
    },
    {
      title: "Flexible Kurszeiten",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui?",
      icon: <Clock className="text-indigo-600 text-5xl" />,
    },
    {
      title: "Praktische Materialien",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui?",
      icon: <BookOpenCheck className="text-indigo-600 text-5xl" />,
    },
    {
      title: "Qualifizierte Lehrer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui?",
      icon: <BookOpenCheck className="text-indigo-600 text-5xl" />,
    },
    {
      title: "Individuelle Unterstützung",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui?",
      icon: <BookOpenCheck className="text-indigo-600 text-5xl" />,
    },
    {
      title: "Individuelle Unterstützung",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui?",
      icon: <BookOpenCheck className="text-indigo-600 text-5xl" />,
    },
  ];

  return (
    <div className="py-12 md:py-24 ">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Başlık Bölümü */}
        <p className="text-3xl md:text-5xl font-bold md:max-w-[600px] mx-auto text-center text-indigo-900 uppercase">
          Warum wählen Sie uns?
        </p>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="bg-indigo-100 p-4 rounded-full">
                  {feature.icon}
                </div>
                <div className="text-indigo-900 text-lg font-semibold">
                  {feature.title}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseFeatures;
