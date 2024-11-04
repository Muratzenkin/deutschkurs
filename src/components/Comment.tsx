import { useThemeStore } from "../zustand/store";
import CommentList from "../components/Main/Commentlist";
import CommentForm from "../components/Main/CommentFrom";

function Comment() {
  const { theme } = useThemeStore();
  return (
    <div
      className={`min-h-screen py-8 px-4 flex flex-col items-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Comments</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <CommentForm />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md md:col-span-2">
          <CommentList />
        </div>
      </div>
    </div>
  );
}

export default Comment;
