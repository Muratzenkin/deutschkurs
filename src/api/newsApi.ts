const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsdata.io/api";
type NewsResult = {
  title: string;
  description: string;
  link: string;
};
export const fetchNews = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/1/latest?&apikey=${API_KEY}&country=tr`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data.results as NewsResult[];
  } catch (error) {
    throw new Error(
      `An error occurred while fetching news. ${(error as Error).message}`
    );
  }
};
