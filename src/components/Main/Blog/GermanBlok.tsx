import { Lightbulb } from "lucide-react";
import { useThemeStore } from "../../../zustand/store";

function GermanBlog() {
  const { theme } = useThemeStore();

  const articles = [
    {
      title: "Almanca Öğrenme Yöntemleri",
      description: "Almanca öğreniminde etkili stratejiler ve ipuçları.",
      link: "#",
    },
    {
      title: "Almanca Dilinde Sık Yapılan Hatalar",
      description:
        "Öğrencilerin sıkça karşılaştığı hatalar ve bunlardan nasıl kaçınılır.",
      link: "#",
    },
    {
      title: "Dil Öğreniminde Motivasyon",
      description: "Dil öğrenme sürecinde motivasyonu artırmanın yolları.",
      link: "#",
    },
    {
      title: "Almanca Film ve Dizilerle Öğrenme",
      description: "Almanca öğrenimini destekleyen film ve diziler.",
      link: "#",
    },
    {
      title: "Almanca Kaynaklar",
      description: "Almanca öğrenimi için faydalı kaynakların listesi.",
      link: "#",
    },
  ];

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 text-gray-800"
      }  mt-4 p-6  rounded-lg shadow-md`}
    >
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition duration-200"
          >
            <div className="flex items-start space-x-2">
              <Lightbulb className="text-[#1E88E5] text-3xl" />
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

export default GermanBlog;
