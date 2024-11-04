import { useState } from "react";
import { useCommentStore, useThemeStore } from "../../zustand/store";

const CommentForm = () => {
  const { theme } = useThemeStore();

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const addComment = useCommentStore((state) => state.addComment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !content) {
      alert(
        "Sie müssen Ihren Namen und Ihren Inhalt angeben, wenn Sie einen Kommentar abgeben!"
      );
      return;
    }

    const newComment = {
      id: Date.now(),
      author,
      content,
      date: new Date().toISOString().split("T")[0],
    };

    addComment(newComment);
    setAuthor("");
    setContent("");
    alert("Ihr Kommentar wurde erfolgreich abgeschickt!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={` rounded-lg p-3 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-xl font-bold mb-2">Neue Kommentar</h2>
      <div className="mb-4">
        <label
          className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
        >
          Name
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-900"
          placeholder="Max"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
        >
          Kommentar
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-900"
          placeholder="sehr gut "
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Kommentar senden
      </button>
    </form>
  );
};

export default CommentForm;
