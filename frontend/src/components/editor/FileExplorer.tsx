import { FaFileCode, FaPlus } from "react-icons/fa";

interface FileExplorerProps {
  language: string;
  selectedFile: string;
  onFileSelect: (fileName: string) => void;
}

const FileExplorer = ({
  language,
  selectedFile,
  onFileSelect,
}: FileExplorerProps) => {
  // Decide which file to show based on selected language
  const fileName =
    language === "java" ? "Main.java" : "script.js";

  return (
    <aside className="flex h-full w-60 flex-col border-r border-slate-700 bg-slate-900">
      
      {/* Explorer Header */}
      <div className="flex items-center justify-between border-b border-slate-700 px-4 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Explorer
        </h2>

        <button
          className="rounded p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          title="Create new file"
        >
          <FaPlus className="text-xs" />
        </button>
      </div>

      {/* File List */}
      <div className="p-3">
        <button
          onClick={() => onFileSelect(fileName)}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
            selectedFile === fileName
              ? "bg-blue-600/20 text-blue-400"
              : "text-slate-300 hover:bg-slate-800"
          }`}
        >
          <FaFileCode className="text-blue-400" />

          <span>{fileName}</span>
        </button>
      </div>

    </aside>
  );
};

export default FileExplorer;