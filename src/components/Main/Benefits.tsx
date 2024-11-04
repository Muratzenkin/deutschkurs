import { useThemeStore } from "../../zustand/store";
import { Brain, Heart, Sparkles, Star } from "lucide-react";

function Account() {
  const { theme } = useThemeStore();

  const benefits = [
    {
      icon: (
        <Brain
          className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}
        />
      ),
      title: "Regelmäßiges Üben",
      description:
        "Sprache lernen braucht Konsistenz! Täglich oder zumindest regelmäßig zu üben, ist entscheidend, um Fortschritte zu machen. Selbst kleine Lerneinheiten, wie 15-30 Minuten täglich, sind besser als lange Pausen zwischen den Lerneinheiten.",
    },
    {
      icon: (
        <Heart
          className={theme === "dark" ? "text-pink-400" : "text-pink-600"}
        />
      ),
      title: "Aktiv Mitmachen",
      description:
        "Aktiv mitzumachen, sei es durch mündliche Beteiligung oder das Stellen von Fragen, hilft, das Gelernte zu verankern. Nutze die Gelegenheit, Fragen zu stellen, wenn du etwas nicht verstehst, und scheue dich nicht vor Fehlern. Fehler sind ein natürlicher Teil des Lernprozesses",
    },
    {
      icon: (
        <Sparkles
          className={theme === "dark" ? "text-purple-400" : "text-purple-600"}
        />
      ),
      title: "Vokabeln gezielt lernen",
      description:
        "Ein regelmäßiges Vokabeltraining ist unerlässlich. Du kannst Karteikarten (z. B. Anki oder Quizlet) verwenden, um neue Wörter und Phrasen zu lernen. Fokussiere dich zunächst auf den Grundwortschatz und lerne Vokabeln, die du oft anwenden kannst.",
    },
    {
      icon: (
        <Star
          className={theme === "dark" ? "text-yellow-400" : "text-yellow-600"}
        />
      ),
      title: "Deutsch in den Alltag integrieren",
      description:
        "Versuche, Deutsch so oft wie möglich im Alltag anzuwenden, z.B. durch Gespräche, das Hören von Podcasts, das Ansehen von Filmen oder das Lesen einfacher Texte. So wirst du merken, dass du dich schneller an neue Wörter und Strukturen gewöhnst.",
    },
  ];

  return (
    <div
      className={`py-16 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-white" : "text-indigo-900"
          }`}
        ></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                theme === "dark"
                  ? "bg-gray-900 hover:bg-gray-900/80"
                  : "bg-white shadow-lg hover:shadow-xl"
              } transition-all duration-300`}
            >
              <div className="mb-4 flex justify-center w-8 h-8">
                {benefit.icon}
              </div>
              <h3
                className={`text-xl font-semibold text-center mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {benefit.title}
              </h3>
              <p
                className={`text-center ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Account;
