import { useLanguageStore, useThemeStore } from "../../zustand/store";
import { Facebook, Instagram, Phone, Mail, Tv } from "lucide-react";

const translations = {
  tr: {
    footer: "2024 Almanca Kursu. Tüm Hakları Saklıdır.",
    contact: "İletişim Bilgileri",
    email: "E-posta:",
    phone: "Telefon:",
    socialMedia: "Bizi Takip Edin",
  },
  de: {
    footer: "2024 Deutschkurs. Alle Rechte vorbehalten.",
    contact: "Kontaktinformationen",
    email: "E-Mail:",
    phone: "Telefon:",
    socialMedia: "Folgen Sie uns",
  },
};

function Footer() {
  const { language } = useLanguageStore();
  const { theme } = useThemeStore();

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-blue-500"
      } text-white p-5 shadow-lg transition-colors duration-300 ease-in-out position-absolute bottom-0 left-0 right-0`}
    >
      <div className="container mx-auto text-center">
        <p>&copy; {translations[language].footer}</p>

        <div className="mt-4">
          <h4 className="font-bold">{translations[language].contact}</h4>
          <p className="flex items-center justify-center">
            <Phone className="mr-2" />
            <span>+49 176 619 52 054</span>
          </p>
          <p className="flex items-center justify-center">
            <Mail className="mr-2" />
            <span>2goecebe@gmail.com</span>
          </p>
          <a href="/contact" className="text-blue-300 hover:underline">
            İletişim Formu
          </a>
        </div>

        <div className="mt-4">
          <h4 className="font-bold">{translations[language].socialMedia}</h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-white hover:text-blue-400 transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com/2gocebe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-white hover:text-pink-500 transition duration-300" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tv className="text-white hover:text-red-500 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
