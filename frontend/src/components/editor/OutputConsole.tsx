interface OutputConsoleProps {
  output: string;
  error?: string;
}

const OutputConsole = ({
  output,
  error,
}: OutputConsoleProps) => {
  return (
    <div className="flex h-44 flex-col border-t border-slate-700 bg-slate-900">
      
      {/* Console Header */}
      <div className="flex items-center border-b border-slate-700 px-4 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Output
        </h2>
      </div>

      {/* Console Content */}
      <div className="flex-1 overflow-auto p-4">
        {error ? (
          <pre className="whitespace-pre-wrap font-mono text-sm text-red-400">
            {error}
          </pre>
        ) : output ? (
          <pre className="whitespace-pre-wrap font-mono text-sm text-green-400">
            {output}
          </pre>
        ) : (
          <p className="font-mono text-sm text-slate-500">
            Output will appear here after running your code...
          </p>
        )}
      </div>

    </div>
  );
};

export default OutputConsole;