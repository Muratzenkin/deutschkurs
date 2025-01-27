import { useLanguageStore, useThemeStore } from "../../zustand/store";
import { Facebook, Instagram, Phone, Mail, Tv } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/image/logo.jpeg";

const translations = {
  tr: {
    footer: "2024 Almanca Kursu. Tüm Hakları Saklıdır.",
    email: "E-posta:",
    phone: "Telefon:",
    socialMedia: "Bizi Takip Edin",
  },
  de: {
    footer: "2024 Deutschkurs. Alle Rechte vorbehalten.",
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
        theme === "dark"
          ? "bg-gray-900"
          : "bg-gradient-to-r from-blue-400/80 to-blue-600/80"
      } text-white py-10 shadow-lg transition-colors duration-300 ease-in-out`}
    >
      {/* Footer Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={Logo}
              alt="logo"
              className="w-20 h-20 rounded-full shadow-lg mb-2"
            />
            <h4 className="text-lg font-semibold">2 GöCeBe</h4>
          </div>

          {/* Contact Information */}
          <div>
            <p className="flex items-center justify-center md:justify-start">
              <Phone className="mr-2" />
              <span>+49 176 619 52 054</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Mail className="mr-2" />
              <span>2goecebe@gmail.com</span>
            </p>
            <a
              href="/contact"
              className="text-blue-300 hover:underline inline-block mt-2"
            >
              {translations[language].email} İletişim Formu
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-2">
              {translations[language].socialMedia}
            </h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/2gocebe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition duration-300"
              >
                <Instagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition duration-300"
              >
                <Tv />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Navigation) */}
        <div className="flex justify-center md:justify-end space-x-16">
          <div>
            <h3 className="text-ls font-semibold text-white mb-4">NAV</h3>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
              <NavLink to="privacy" className="hover:underline">
                Datenschutz
              </NavLink>
              <NavLink to="/blog" className="hover:underline">
                Blog
              </NavLink>
              <NavLink to="/news" className="hover:underline">
                News
              </NavLink>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              FAYDALI LINKLER
            </h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://beluka.de/woerterbuch/deutschtuerkisch/abnehmen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Beluka
              </a>
              <a
                href="https://www.deepl.com/tr/translator"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Deepl
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className={`${
          theme === "dark"
            ? "bg-gray-800"
            : "bg-gradient-to-r from-blue-400/80 to-blue-600/80"
        } text-center py-4 mt-8`}
      >
        <p>&copy; {translations[language].footer}</p>
      </div>
    </footer>
  );
}

export default Footer;
