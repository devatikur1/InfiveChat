import { Mic, Plus, SendHorizontal, Sticker } from "lucide-react";
import React, { useState } from "react";

export default function MsgBox({ msgs, setMsgs }) {
  //🔹 All state
  const [msg, setMsg] = useState("");

  // 🔹 Send message handler
  function setMessages() {
    const now = new Date();
    const dateTime = now.toISOString().slice(0, 19);
    setMsgs((p) => [
      ...p,
      {
        id: msgs.length + 1,
        text: msg,
        senderId: "user_1",
        createdAt: dateTime,
      },
    ]);
    setMsg("");
  }
  return (
    <footer className="w-full px-2 md:px-3 lg:px-6 xl:px-9 py-2">
      <article className="w-full h-auto flex justify-center items-center rounded-[30px] bg-surface border border-border p-1 md:p-1.5">
        <section
          data-message-wrapper
          className="w-full h-auto flex items-center gap-2"
        >
          {/* Left Actions */}
          <div className="h-full flex items-center gap-1">
            <button
              type="button"
              className="flex size-9 md:size-10 items-center justify-center rounded-full text-textMuted transition-colors hover:bg-hover hover:text-textPrimary"
            >
              <Plus size={19} />
            </button>

            <button
              type="button"
              className="flex size-9 md:size-10 items-center justify-center rounded-full text-textMuted transition-colors hover:bg-hover hover:text-textPrimary"
            >
              <Sticker size={19} />
            </button>
          </div>
          {/* Message Input */}
          <div className="flex-1 flex items-center">
            <textarea
              rows={1}
              value={msg}
              placeholder="Type a message"
              onChange={(e) => {
                const textarea = e.target;
                const wrapper = textarea.closest("[data-message-wrapper]");

                textarea.style.height = "24px";
                textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;

                if (textarea.scrollHeight > 24) {
                  wrapper.classList.remove("items-center");
                  wrapper.classList.add("items-end");
                } else {
                  wrapper.classList.remove("items-end");
                  wrapper.classList.add("items-center");
                }

                setMsg(textarea.value);
              }}
              className="w-full min-h-[24px] max-h-[120px] resize-none overflow-y-auto bg-transparent py-0 text-[14px] leading-6 text-textPrimary placeholder:text-textMuted outline-none custom-scroll"
            />
          </div>

          {/* Right Actions */}
          <div className="h-full flex items-center gap-1">
            {msg.trim() ? (
              <button
                onClick={() => setMessages()}
                type="button"
                className="flex size-9 md:size-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:opacity-90"
              >
                <SendHorizontal size={20} />
              </button>
            ) : (
              <button
                type="button"
                className="flex size-9 md:size-10 items-center justify-center rounded-full text-textMuted transition-colors hover:bg-hover hover:text-textPrimary"
              >
                <Mic size={20} />
              </button>
            )}
          </div>
        </section>
      </article>
    </footer>
  );
}
