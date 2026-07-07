import { Info, Mic, Phone, Plus, SendHorizontal, Sticker, Video } from "lucide-react";
import React from "react";
import Tooltip from "../components/custom/Tooltip";
import { motion } from "framer-motion";

export default function ChatInboxPage() {
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
        <footer className="w-full min-h-[80px] flex justify-center items-center">
          <article className="w-full flex items-center bg-surface">
            <div className="flex items-center">
              <button
                type="button"
                className="flex size-10 cursor-pointer items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-hover"
                aria-label={"uplod File"}
              >
                <Plus size={21} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="flex size-10 cursor-pointer items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-hover"
                aria-label={"Add Emoji, Stiker, jif"}
              >
                <Sticker size={21} strokeWidth={2} />
              </button>
            </div>
            <div>
              <input type="text" placeholder="Type Messege" />
            </div>
            <div>
              <button
                type="button"
                className="flex size-10 cursor-pointer items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-hover"
                aria-label={"Add Emoji, Stiker, jif"}
              >
                <Mic size={21} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="flex size-10 cursor-pointer items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-hover"
                aria-label={"Add Emoji, Stiker, jif"}
              >
                <SendHorizontal size={21} strokeWidth={2} />
              </button>
            </div>
          </article>
        </footer>
      </figure>
    </article>
  );
}
