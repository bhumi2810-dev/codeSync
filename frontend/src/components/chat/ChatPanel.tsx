import { useEffect, useRef, useState } from "react";

interface ChatMessage {
  id: number;
  sender: string;
  text: string;
  time: string;
  isOwn: boolean;
}

const ChatPanel = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "Developer 2",
      text: "Hey! Let's review the code together.",
      time: "10:35 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Sure! I will check the main function.",
      time: "10:37 AM",
      isOwn: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }

    const message: ChatMessage = {
      id: Date.now(),
      sender: "You",
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-full flex-col bg-slate-900">

      {/* Chat Header */}
      <div className="shrink-0 border-b border-slate-800 px-4 py-3">

        <div className="flex items-center gap-2">

          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-sm">
            💬
          </span>

          <div>
            <h2 className="text-sm font-semibold text-white">
              Team Chat
            </h2>

            <p className="text-[11px] text-slate-500">
              2 members in this room
            </p>
          </div>

        </div>

      </div>

      {/* Messages */}
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">

        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">

            <div className="text-center">

              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl">
                💬
              </div>

              <p className="text-sm text-slate-400">
                No messages yet
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Start a conversation with your team.
              </p>

            </div>

          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isOwn
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[85%] ${
                  message.isOwn
                    ? "items-end"
                    : "items-start"
                }`}
              >

                {/* Sender */}
                <div
                  className={`mb-1 flex items-center gap-2 ${
                    message.isOwn
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <span
                    className={`text-xs font-medium ${
                      message.isOwn
                        ? "text-blue-400"
                        : "text-slate-300"
                    }`}
                  >
                    {message.sender}
                  </span>

                  <span className="text-[10px] text-slate-600">
                    {message.time}
                  </span>

                </div>

                {/* Message */}
                <div
                  className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    message.isOwn
                      ? "rounded-br-sm bg-blue-600 text-white"
                      : "rounded-bl-sm bg-slate-800 text-slate-300"
                  }`}
                >
                  {message.text}
                </div>

              </div>

            </div>
          ))
        )}

        <div ref={messagesEndRef} />

      </div>

      {/* Message Input */}
      <div className="shrink-0 border-t border-slate-800 p-3">

        <div className="flex items-end gap-2">

          <textarea
            value={newMessage}
            onChange={(event) =>
              setNewMessage(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            rows={2}
            className="min-w-0 flex-1 resize-none rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
          />

          <button
            onClick={handleSendMessage}
            disabled={newMessage.trim() === ""}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
            title="Send message"
          >
            ➤
          </button>

        </div>

        <p className="mt-2 text-[10px] text-slate-600">
          Press Enter to send • Shift + Enter for a new line
        </p>

      </div>

    </div>
  );
};

export default ChatPanel;