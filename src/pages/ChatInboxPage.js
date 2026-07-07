import {
  Info,
  Mic,
  Phone,
  Plus,
  SendHorizontal,
  Sticker,
  Video,
} from "lucide-react";
import React, { useState } from "react";
import Tooltip from "../components/custom/Tooltip";
import { motion } from "framer-motion";

//🔹 Chat Header Action
const CHAT_HEADER_ACTIONS = [
  {
    id: 1,
    title: "Audio Call",
    icon: Phone,
    className: "",
  },
  {
    id: 2,
    title: "Video Call",
    icon: Video,
    className: "",
  },
  {
    id: 3,
    title: "Contact Info",
    icon: Info,
    className: "left-2",
  },
];

export default function ChatInboxPage() {
  //🔹 All state
  const [msg, setMsg] = useState("");

  return (
    <article className="w-full h-full flex justify-start items-center">
      <figure className="w-full h-full flex flex-col">
        <header className="w-full min-h-[60px] bg-bgSecondary flex items-center justify-between px-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=51"
              alt="Design Team"
              className="size-9 rounded-full object-cover"
            />

            <div className="flex flex-col overflow-hidden">
              <h2 className="truncate text-base font-semibold text-textPrimary">
                Mymuna
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="truncate text-xs text-textMuted"
              >
                Click here for contact info
              </motion.p>
            </div>
          </div>

          <ul className="flex items-center gap-2">
            {CHAT_HEADER_ACTIONS.map(({ id, title, className, icon: Icon }) => (
              <li key={id} className="relative group">
                <button
                  type="button"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-hover"
                  aria-label={title}
                >
                  <Icon size={21} strokeWidth={2} />
                </button>

                <Tooltip position={"bottom"} className={className}>
                  {title}
                </Tooltip>
              </li>
            ))}
          </ul>
        </header>
        <main className="flex-1"></main>
        <footer className="w-full px-9 py-2">
          <article className="w-full h-auto flex justify-center items-center rounded-[30px] bg-surface border border-border px-2 py-1.5">
            <section
              data-message-wrapper
              className="w-full h-auto flex items-center gap-2"
            >
              {/* Left Actions */}
              <div className="h-full flex items-center gap-1">
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full text-textMuted transition-colors hover:bg-hover hover:text-textPrimary"
                >
                  <Plus size={20} />
                </button>

                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full text-textMuted transition-colors hover:bg-hover hover:text-textPrimary"
                >
                  <Sticker size={20} />
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
                  className="w-full min-h-[24px] max-h-[120px] resize-none overflow-y-auto bg-transparent py-0 text-[15px] leading-6 text-textPrimary placeholder:text-textMuted outline-none custom-scroll"
                />
              </div>

              {/* Right Actions */}
              <div className="h-full flex items-center gap-1">
                {msg.trim() ? (
                  <button
                    type="button"
                    className="flex size-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:opacity-90"
                  >
                    <SendHorizontal size={18} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="flex size-10 items-center justify-center rounded-full text-textMuted transition-colors hover:bg-hover hover:text-textPrimary"
                  >
                    <Mic size={20} />
                  </button>
                )}
              </div>
            </section>
          </article>
        </footer>
      </figure>
    </article>
  );
}
