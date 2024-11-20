import { useLanguageStore } from "../../zustand/store";
import { CheckCircle, Clock, Users } from "lucide-react";

const translations = {
  tr: {
    title: "Almanca Kursuna Hoş Geldiniz",
    intro:
      "Almanca öğrenmek için doğru yerdesiniz! Kursumuz, dil öğrenme sürecinizi etkili ve eğlenceli hale getirmek için tasarlanmıştır.",
    objectives: "Neden Bu Kurs?",
    objectivesDesc: [
      "Güçlü bir temel Almanca bilgisi oluşturma",
      "Günlük hayatta kolayca iletişim kurma",
      "Profesyonel yaşamda kullanabileceğiniz dil becerileri kazanma",
    ],
    duration: "Kurs Süresi: 3 Ay (12 Hafta)",
    targetAudience: "Kimler Katılmalı?",
    audienceDesc:
      "Bu kurs, başlangıç seviyesinde olan veya Almanca bilgilerini geliştirmek isteyen herkes için uygundur.",
    contact: "Bizimle iletişime geçin: 2goecebe@gmail.com",
  },
  de: {
    title: "Willkommen zum Deutschkurs",
    intro:
      "Sie sind hier richtig, um Deutsch zu lernen! Unser Kurs wurde entwickelt, um Ihren Lernprozess effektiv und unterhaltsam zu gestalten.",
    objectives: "Warum Dieser Kurs?",
    objectivesDesc: [
      "Starke Grundlagen in der deutschen Sprache schaffen",
      "Einfache Kommunikation im Alltag",
      "Erwerb von Sprachkenntnissen für die berufliche Nutzung",
    ],
    duration: "Kursdauer: 3 Monate (12 Wochen)",
    targetAudience: "Für Wen ist der Kurs?",
    audienceDesc:
      "Dieser Kurs ist ideal für Anfänger oder Teilnehmer, die ihre Deutschkenntnisse verbessern möchten.",
    contact: "Kontaktieren Sie uns: 2goecebe@gmail.com",
  },
};

const Main = () => {
  const { language } = useLanguageStore();
  const currentLang = translations[language];

  return (
    <main className="pt-[150px] flex flex-col items-center py-8 px-6 bg-indigo-50/60">
      {/* Üst Kısım */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-800 tracking-wide">
          {currentLang.title}
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {currentLang.intro}
        </p>
      </section>

      {/* Kurs Bilgileri Bölümü */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Neden Bu Kurs? */}
        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-indigo-600">
            {currentLang.objectives}
          </h2>
          <ul className="mt-4 space-y-3">
            {currentLang.objectivesDesc.map((objective, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="text-gray-700">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kurs Süresi */}
        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-indigo-600">
            {currentLang.duration}
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            <Clock className="text-indigo-500 w-10 h-10" />
            <p className="text-gray-700 leading-relaxed">
              12 hafta boyunca yoğun ve etkili bir öğrenim süreci sunuyoruz. Her
              hafta özel materyaller ve aktivitelerle destekleniyor.
            </p>
          </div>
        </div>

        {/* Hedef Kitle */}
        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-indigo-600">
            {currentLang.targetAudience}
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            <Users className="text-indigo-500 w-10 h-10" />
            <p className="text-gray-700 leading-relaxed">
              {currentLang.audienceDesc}
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-indigo-600">
          {currentLang.contact}
        </h3>
        <p className="mt-2 text-lg text-gray-700">
          Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
        </p>
      </section>
    </main>
  );
};

export default Main;
