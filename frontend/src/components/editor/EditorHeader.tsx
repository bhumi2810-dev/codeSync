import { FaPlay, FaUsers } from "react-icons/fa";

interface EditorHeaderProps {
  roomName?: string;
  language: string;
  onLanguageChange: (language: string) => void;
  onRun: () => void;
}

const EditorHeader = ({
  roomName = "ABC123",
  language,
  onLanguageChange,
  onRun,
}: EditorHeaderProps) => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-700 bg-slate-900 px-6">
      
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold">
          <span className="text-white">Code</span>
          <span className="text-blue-500">Sync</span>
        </h1>

        <div className="h-6 w-px bg-slate-700" />

        <div className="text-sm text-slate-400">
          Room:
          <span className="ml-2 font-medium text-white">
            {roomName}
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Language Selector */}
        <select
          value={language}
          onChange={(event) =>
            onLanguageChange(event.target.value)
          }
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white outline-none transition focus:border-blue-500"
        >
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
        </select>

        {/* Collaborators */}
        <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300">
          <FaUsers className="text-blue-400" />
          <span>2</span>
        </div>

        {/* Run Button */}
        <button
          onClick={onRun}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-700"
        >
          <FaPlay className="text-xs" />
          Run
        </button>

      </div>
    </header>
  );
};

export default EditorHeader;