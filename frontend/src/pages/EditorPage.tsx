import { useState } from "react";

import EditorHeader from "../components/editor/EditorHeader";
import FileExplorer from "../components/editor/FileExplorer";
import CodeEditor from "../components/editor/CodeEditor";
import OutputConsole from "../components/editor/OutputConsole";
import CollaboratorsPanel from "../components/editor/CollaboratorsPanel";
import ChatPanel from "../components/chat/ChatPanel";
import CodeReviewPanel from "../components/review/CodeReviewPanel";

type ActivePanel = "collaborators" | "chat" | "review" | null;

const EditorPage = () => {
  const [language, setLanguage] = useState("java");

  const [selectedFile, setSelectedFile] = useState("Main.java");

  const [code, setCode] = useState(
`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello CodeSync");
    }
}`
  );

  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const [activePanel, setActivePanel] =
    useState<ActivePanel>(null);

  const collaborators = [
    {
      id: 1,
      name: "You",
      online: true,
    },
    {
      id: 2,
      name: "Developer 2",
      online: true,
    },
  ];

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);

    setOutput("");
    setError("");

    if (newLanguage === "java") {
      setSelectedFile("Main.java");

      setCode(
`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello CodeSync");
    }
}`
      );
    } else {
      setSelectedFile("script.js");

      setCode(
`function main() {
    console.log("Hello CodeSync");
}

main();`
      );
    }
  };

  const handleFileSelect = (fileName: string) => {
    setSelectedFile(fileName);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleRun = () => {
    setError("");
    setOutput("Hello CodeSync");

    console.log("Running code...");
    console.log("Language:", language);
    console.log("File:", selectedFile);
    console.log("Code:", code);
  };

  const handlePanelChange = (panel: ActivePanel) => {
    if (activePanel === panel) {
      setActivePanel(null);
    } else {
      setActivePanel(panel);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-slate-950 text-white">

      {/* Header */}
      <div className="shrink-0">
        <EditorHeader
          roomName="ABC123"
          language={language}
          onLanguageChange={handleLanguageChange}
          onRun={handleRun}
        />
      </div>

      {/* Workspace */}
      <div className="flex min-h-0 flex-1 overflow-hidden">

        {/* File Explorer */}
        <div className="w-52 shrink-0 border-r border-slate-800">
          <FileExplorer
            language={language}
            selectedFile={selectedFile}
            onFileSelect={handleFileSelect}
          />
        </div>

        {/* Center Area */}
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">

          {/* Editor Title Bar */}
          <div className="flex h-9 shrink-0 items-center justify-between border-b border-slate-800 bg-slate-900 px-4">

            <div className="flex items-center gap-2">

              <span className="text-xs text-slate-500">
                {language === "java" ? "☕" : "JS"}
              </span>

              <span className="text-xs text-slate-300">
                {selectedFile}
              </span>

            </div>

            <span className="text-[11px] text-slate-600">
              Room ABC123
            </span>

          </div>

          {/* Code Editor */}
          <div className="min-h-0 flex-1 overflow-hidden">
            <CodeEditor
              language={language}
              value={code}
              onChange={handleCodeChange}
            />
          </div>

          {/* Output */}
          <div className="h-36 shrink-0 border-t border-slate-800">
            <OutputConsole
              output={output}
              error={error}
            />
          </div>

        </main>

        {/* Right Panel */}
        {activePanel !== null && (
          <aside className="flex w-72 shrink-0 flex-col border-l border-slate-800 bg-slate-900">

            {/* Panel Header */}
            <div className="flex h-10 shrink-0 items-center justify-between border-b border-slate-800 px-3">

              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {activePanel === "collaborators"
                  ? "Collaborators"
                  : activePanel === "chat"
                  ? "Team Chat"
                  : "Code Review"}
              </span>

              <button
                onClick={() => setActivePanel(null)}
                className="text-lg leading-none text-slate-500 transition hover:text-white"
                title="Close panel"
              >
                ×
              </button>

            </div>

            {/* Panel Content */}
            <div className="min-h-0 flex-1 overflow-hidden">

              {activePanel === "collaborators" && (
                <CollaboratorsPanel
                  collaborators={collaborators}
                />
              )}

              {activePanel === "chat" && (
                <ChatPanel />
              )}

              {activePanel === "review" && (
                <CodeReviewPanel />
              )}

            </div>

          </aside>
        )}

      </div>

      {/* Bottom Toolbar */}
      <div className="flex h-11 shrink-0 items-center justify-between border-t border-slate-800 bg-slate-900 px-3">

        {/* Status */}
        <div className="flex items-center gap-3">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs text-slate-400">
              Connected
            </span>

          </div>

          <span className="hidden text-xs text-slate-600 sm:inline">
            {selectedFile}
          </span>

        </div>

        {/* Panels */}
        <div className="flex items-center gap-2">

          <button
            onClick={() =>
              handlePanelChange("collaborators")
            }
            className={`rounded-md px-3 py-1.5 text-xs transition ${
              activePanel === "collaborators"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            }`}
          >
            👥 People
          </button>

          <button
            onClick={() =>
              handlePanelChange("chat")
            }
            className={`rounded-md px-3 py-1.5 text-xs transition ${
              activePanel === "chat"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            }`}
          >
            💬 Chat
          </button>

          <button
            onClick={() =>
              handlePanelChange("review")
            }
            className={`rounded-md px-3 py-1.5 text-xs transition ${
              activePanel === "review"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            }`}
          >
            📝 Review
          </button>

        </div>

      </div>

    </div>
  );
};

export default EditorPage;