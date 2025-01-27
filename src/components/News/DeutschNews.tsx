import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../../api/newsApi";
import { useNewsStore } from "../../zustand/store";

const DeutschNews: React.FC = () => {
  const category = useNewsStore((state) => state.category);
  console.log(category);
  const {
    data: news,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["news", category],
    queryFn: () => fetchNews(category),
  });

  if (isLoading)
    return (
      <div className="mt-16 space-y-4 p-4 animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      </div>
    );

  if (error instanceof Error)
    return (
      <div className="mt-16 text-center">
        <img
          src="/image/error.jpg"
          alt="Error"
          className="mx-auto w-1/2 rounded shadow-md"
        />
        <p className="text-gray-600 mt-4 text-lg">
          We are currently working on bringing you the latest news. Please check
          back soon!
        </p>
      </div>
    );

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold">Deutsch News</h1>
      <div className="news-list space-y-4">
        {news?.map((article, index) => (
          <div key={index} className="p-4 border-b">
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p>{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeutschNews;
