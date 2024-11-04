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

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error)
    return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
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
