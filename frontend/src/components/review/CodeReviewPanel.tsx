import { useState } from "react";
import { FaTrash, FaCommentAlt } from "react-icons/fa";

interface ReviewComment {
  id: number;
  author: string;
  line: number;
  text: string;
  time: string;
}

const CodeReviewPanel = () => {
  const [comments, setComments] = useState<ReviewComment[]>([
    {
      id: 1,
      author: "Developer 2",
      line: 3,
      text: "This line looks good, but we could improve the variable name.",
      time: "10:35 AM",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [lineNumber, setLineNumber] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "" || lineNumber.trim() === "") {
      return;
    }

    const line = Number(lineNumber);

    if (line <= 0) {
      return;
    }

    const comment: ReviewComment = {
      id: Date.now(),
      author: "You",
      line: line,
      text: newComment.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setComments([...comments, comment]);

    setNewComment("");
    setLineNumber("");
  };

  const handleDeleteComment = (id: number) => {
    setComments(
      comments.filter((comment) => comment.id !== id)
    );
  };

  return (
    <aside className="flex h-full w-80 flex-col border-l border-slate-700 bg-slate-900">

      {/* Header */}
      <div className="border-b border-slate-700 px-4 py-4">

        <div className="flex items-center gap-2">

          <FaCommentAlt className="text-blue-400" />

          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Code Review
          </h2>

        </div>

        <p className="mt-1 text-xs text-slate-500">
          Review and discuss your code
        </p>

      </div>

      {/* Comments */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">

        {comments.length === 0 ? (

          <div className="flex h-full flex-col items-center justify-center text-center">

            <FaCommentAlt className="mb-3 text-2xl text-slate-700" />

            <p className="text-sm font-medium text-slate-400">
              No review comments
            </p>

            <p className="mt-1 text-xs text-slate-600">
              Add a comment to start a code review.
            </p>

          </div>

        ) : (

          comments.map((comment) => (

            <div
              key={comment.id}
              className="rounded-lg border border-slate-700 bg-slate-800 p-3"
            >

              {/* Comment Header */}
              <div className="flex items-center justify-between">

                <span
                  className={`text-sm font-semibold ${
                    comment.author === "You"
                      ? "text-blue-400"
                      : "text-purple-400"
                  }`}
                >
                  {comment.author}
                </span>

                <span className="text-[10px] text-slate-500">
                  {comment.time}
                </span>

              </div>

              {/* Line Number */}
              <div className="mt-2">

                <span className="rounded bg-slate-700 px-2 py-1 text-xs text-slate-400">
                  Line {comment.line}
                </span>

              </div>

              {/* Comment */}
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {comment.text}
              </p>

              {/* Delete */}
              {comment.author === "You" && (
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="mt-3 flex items-center gap-2 text-xs text-slate-500 transition hover:text-red-400"
                >
                  <FaTrash />
                  Delete
                </button>
              )}

            </div>

          ))

        )}

      </div>

      {/* Add Comment */}
      <div className="border-t border-slate-700 p-3">

        <p className="mb-2 text-xs font-medium text-slate-400">
          Add Review Comment
        </p>

        {/* Line Number */}
        <input
          type="number"
          min="1"
          value={lineNumber}
          onChange={(event) =>
            setLineNumber(event.target.value)
          }
          placeholder="Line number"
          className="mb-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
        />

        {/* Comment */}
        <textarea
          value={newComment}
          onChange={(event) =>
            setNewComment(event.target.value)
          }
          placeholder="Add a review comment..."
          rows={3}
          className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
        />

        {/* Add Button */}
        <button
          onClick={handleAddComment}
          disabled={
            newComment.trim() === "" ||
            lineNumber.trim() === ""
          }
          className="mt-2 w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Add Comment
        </button>

      </div>

    </aside>
  );
};

export default CodeReviewPanel;