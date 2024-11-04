import { useCommentStore } from "../../zustand/store";
import { useEffect } from "react";
import { useThemeStore } from "../../zustand/store";

const CommentList = () => {
  const { theme } = useThemeStore();

  const comments = useCommentStore((state) => state.comments);
  const loadComments = useCommentStore((state) => state.loadComments);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="scroll-container">
        <div className="scroll-wrapper text-lg">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`scroll-item p-4 rounded shadow-md mb-4 ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <h4 className="font-semibold">{comment.author}</h4>
              <p>{comment.content}</p>
              <small>{comment.date}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CommentList;
