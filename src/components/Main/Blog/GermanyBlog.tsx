import { Globe } from "lucide-react";
import { useThemeStore } from "../../../zustand/store";

function GermanyBlog() {
  const { theme } = useThemeStore();

  const articles = [
    {
      title: "Almanya'nın Kültürü ve Geleneği",
      description:
        "Alman kültürü, gelenekleri ve yaşam tarzı hakkında bilgiler.",
      link: "#",
    },
    {
      title: "Almanya'da Seyahat Rehberi",
      description: "Almanya'nın en güzel şehirleri ve gezilecek yerler.",
      link: "#",
    },
    {
      title: "Alman Mutfağı",
      description: "Alman mutfağının en popüler yemekleri.",
      link: "#",
    },
    {
      title: "Almanya'da Eğitim",
      description: "Almanya'da eğitim almak isteyenler için bilgiler.",
      link: "#",
    },
    {
      title: "Almanya'da Çalışmak",
      description: "Almanya'da çalışma fırsatları ve süreçleri.",
      link: "#",
    },
  ];

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 text-gray-800"
      } mt-4 p-6  rounded-lg shadow-md`}
    >
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition duration-200"
          >
            <div className="flex items-start space-x-2">
              <Globe className="text-[#1E88E5] text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">{article.title}</h4>
                <p className="text-gray-600">{article.description}</p>
                <a
                  href={article.link}
                  className="mt-2 inline-block text-blue-600 hover:underline"
                >
                  Daha Fazla
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GermanyBlog;
