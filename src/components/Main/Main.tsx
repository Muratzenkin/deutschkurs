import { useLanguageStore, useThemeStore } from "../../zustand/store";
import { CheckCircle } from "lucide-react";

const translations = {
  tr: {
    title: "Almanca Kursu Hakkında",
    intro:
      "Bu kurs, Almanca dil seviyenizi B1 seviyesine kadar geliştirmeniz için tasarlanmıştır.",
    objectives: "Kursun Amaçları",
    objectivesDesc: [
      "Almanca konuşma becerilerini geliştirmek",
      "Dilbilgisi ve kelime dağarcığını genişletmek",
      "Günlük ve iş hayatında kullanılan Almanca becerilerini geliştirmek",
    ],
    duration: "Kurs Süresi: 3 Ay",
    targetAudience:
      "Bu kurs, Almanca öğrenme konusunda orta düzeyde bilgi sahibi olan katılımcılara hitap eder.",
    contact: "İletişim: 2goecebe@gmail.com",
  },
  de: {
    title: "Über den Deutschkurs",
    intro:
      "Dieser Kurs wurde entwickelt, um Ihr Deutsch auf das B1-Niveau zu verbessern.",
    objectives: "Kursziele",
    objectivesDesc: [
      "Deutschsprachige Kommunikationsfähigkeiten verbessern",
      "Wortschatz und Grammatik erweitern",
      "Deutschkenntnisse für Alltag und Beruf verbessern",
    ],
    duration: "Kursdauer: 3 Monate",
    targetAudience:
      "Dieser Kurs richtet sich an Teilnehmer mit mittleren Deutschkenntnissen.",
    contact: "Kontakt: 2goecebe@gmail.com",
  },
};

const Main = () => {
  const { language } = useLanguageStore();
  const { theme } = useThemeStore();
  const currentLang = translations[language];

  return (
    <main
      className={`pt-[150px] flex flex-col items-center py-8 px-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } transition-colors duration-300 ease-in-out`}
    >
      <h2 className="text-4xl font-extrabold mb-6 text-center tracking-wide">
        {currentLang.title}
      </h2>
      <p className="mb-6 text-lg text-center max-w-xl leading-relaxed">
        {currentLang.intro}
      </p>

      <section className="my-8 max-w-2xl w-full text-left">
        <h3 className="text-2xl font-semibold mb-6 text-indigo-500">
          {currentLang.objectives}
        </h3>
        <ul className="space-y-4 pl-4">
          {currentLang.objectivesDesc.map((objective, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-green-500 w-5 h-5 mt-[2px]" />
              <span className="text-lg leading-relaxed">{objective}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-semibold mt-6 text-indigo-600">
          {currentLang.duration}
        </p>
      </section>

      <section className="my-8 max-w-2xl w-full text-left">
        <h3 className="text-xl font-semibold mb-4 text-indigo-500">
          {currentLang.targetAudience}
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {currentLang.contact}
        </p>
      </section>
    </main>
  );
};

export default Main;
