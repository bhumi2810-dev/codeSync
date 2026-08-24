import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({
  language,
  value,
  onChange,
}: CodeEditorProps) => {
  const handleEditorChange = (newValue: string | undefined) => {
    onChange(newValue ?? "");
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <Editor
        height="100%"
        width="100%"
        language={language}
        value={value}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          fontSize: 15,
          minimap: {
            enabled: false,
          },
          automaticLayout: true,
          padding: {
            top: 16,
          },
        }}
      />
    </div>
  );
};

export default CodeEditor;