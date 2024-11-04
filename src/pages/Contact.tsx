import { useLanguageStore, useThemeStore } from "../zustand/store";
import FormDemo from "../components/Contact/FormDemo";

const translations = {
  tr: {
    contact: "İletişim",
    announcements: "Duyurular",
    contactInfo: "Kurs ekibiyle iletişime geçmek için: 2goecebe@gmail.com",
    announcementsList: [
      "Yeni dönem kayıtları başladı!",
      "Almanca konuşma kulübü etkinlikleri her Cumartesi günü yapılacaktır.",
      "Kurs materyallerine erişim için öğrenci panelini ziyaret edin.",
    ],
  },
  de: {
    contact: "Kontakt",
    announcements: "Ankündigungen",
    contactInfo: "Kontaktieren Sie das Kursteam unter: 2goecebe@gmail.com",
    announcementsList: [
      "Die Anmeldungen für das neue Semester haben begonnen!",
      "Der deutschsprachige Klub findet jeden Samstag statt.",
      "Besuchen Sie das Studentenpanel, um auf Kursmaterialien zuzugreifen.",
    ],
  },
};

const Contact = () => {
  const { language } = useLanguageStore();
  const { theme } = useThemeStore();
  const currentLang = translations[language];

  return (
    <div
      className={`pt-[80px] flex flex-col justify-center items-center min-h-screen p-8 rounded ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">{currentLang.contact}</h2>
      <p className="mb-6">{currentLang.contactInfo}</p>
      <h3 className="text-2xl font-bold mb-4">{currentLang.announcements}</h3>
      <ul className="list-disc ml-6">
        {currentLang.announcementsList.map((announcement, index) => (
          <li key={index} className="mb-2">
            {announcement}
          </li>
        ))}
      </ul>
      <FormDemo />
    </div>
  );
};

export default Contact;
