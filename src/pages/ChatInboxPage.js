import { Info, Phone, Video } from "lucide-react";
import React from "react";

export default function ChatInboxPage() {
  const CHAT_HEADER_ACTIONS = [
    {
      id: 1,
      title: "Audio Call",
      icon: Phone,
    },
    {
      id: 2,
      title: "Video Call",
      icon: Video,
    },
    {
      id: 3,
      title: "Chat Info",
      icon: Info,
    },
  ];
  return (
    <article className="w-full h-full flex justify-start items-center">
      <figure className="w-full h-full flex flex-col">
        <header className="w-full min-h-[60px] bg-bgSecondary flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <img
              alt="Design Team"
              src={"https://i.pravatar.cc/150?img=51"}
              className="w-[35px] rounded-full"
            />
            <h2 className="text-base text-textPrimary font-bold">
              Design Team
            </h2>
          </div>
          <ul className="flex gap-8 items-center">
            {CHAT_HEADER_ACTIONS.map(({ id, title, icon: Icon }) => (
              <li key={id} className="group relative">
                <span className="size-10 hover:bg-hover flex justify-center items-center p-2.5 rounded-full text-textPrimary">
                  <Icon size={22} />
                </span>
                <span className="w-20 absolute z-50 -right-5 top-9 translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </header>
        <main></main>
        <footer></footer>
      </figure>
    </article>
  );
}
