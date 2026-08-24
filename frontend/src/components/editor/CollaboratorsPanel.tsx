interface Collaborator {
  id: number;
  name: string;
  online: boolean;
}

interface CollaboratorsPanelProps {
  collaborators: Collaborator[];
}

const CollaboratorsPanel = ({
  collaborators,
}: CollaboratorsPanelProps) => {
  const onlineCount = collaborators.filter(
    (collaborator) => collaborator.online
  ).length;

  const handleCopyRoom = () => {
    navigator.clipboard.writeText("ABC123");
    alert("Room code copied!");
  };

  return (
    <div className="flex h-full flex-col bg-slate-900">

      {/* Header */}
      <div className="border-b border-slate-800 p-4">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-sm font-semibold text-white">
              Collaborators
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              People working in this room
            </p>
          </div>

          <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">
            {onlineCount} online
          </span>

        </div>

      </div>

      {/* Room Code */}
      <div className="border-b border-slate-800 p-4">

        <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">
          Room Code
        </p>

        <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-950 p-3">

          <span className="font-mono text-sm font-semibold text-white">
            ABC123
          </span>

          <button
            onClick={handleCopyRoom}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-500"
          >
            Copy
          </button>

        </div>

      </div>

      {/* Members */}
      <div className="flex-1 overflow-y-auto p-4">

        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Team Members
        </p>

        <div className="space-y-2">

          {collaborators.map((collaborator) => (
            <div
              key={collaborator.id}
              className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-800/50 p-3"
            >

              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="relative">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {collaborator.name.charAt(0)}
                  </div>

                  <span
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-slate-800 ${
                      collaborator.online
                        ? "bg-green-500"
                        : "bg-slate-600"
                    }`}
                  />

                </div>

                {/* User information */}
                <div>

                  <div className="flex items-center gap-2">

                    <span className="text-sm font-medium text-white">
                      {collaborator.name}
                    </span>

                    {collaborator.name === "You" && (
                      <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-[9px] text-blue-400">
                        YOU
                      </span>
                    )}

                  </div>

                  <p className="text-xs text-slate-500">
                    {collaborator.online
                      ? "Online"
                      : "Offline"}
                  </p>

                </div>

              </div>

              {collaborator.online && (
                <span className="text-[10px] text-green-400">
                  ● Active
                </span>
              )}

            </div>
          ))}

        </div>

      </div>

      {/* Pair Programming */}
      <div className="border-t border-slate-800 p-4">

        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">

          <div className="flex gap-3">

            <span className="text-lg">
              👥
            </span>

            <div>

              <p className="text-xs font-semibold text-blue-400">
                Pair Programming
              </p>

              <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                Collaborators can work on the same code
                simultaneously.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CollaboratorsPanel;