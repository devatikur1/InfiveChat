import clsx from "clsx";
import { CircleDashed, Images, MessageSquareText } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SIDEBAR_ITEM_LIST = [
  [
    {
      id: 1,
      title: "Chats",
      path: /^\/(status|media|you)$/,
      isIcon: true,
      icon: MessageSquareText,
    },
    {
      id: 2,
      title: "Status",
      path: "/status",
      isIcon: true,
      icon: CircleDashed,
    },
  ],
  [
    {
      id: 3,
      title: "Images",
      path: "/media",
      isIcon: true,
      icon: Images,
    },
    {
      id: 4,
      title: "You",
      path: "/you",
      isIcon: false,
      link: "https://i.pinimg.com/564x/bd/cc/de/bdccde33dea7c9e549b325635d2c432e.jpg",
    },
  ],
];

export default function SideBar() {
  // 🔹 Navigate
  const navigate = useNavigate();
  const locarion = useLocation();

  return (
    <aside className="h-[56px] md:h-full w-full md:w-[55px] bg-transparent py-5 border-t md:border-r border-border">
      <nav className="w-full h-full flex flex-row md:flex-col md:justify-between">
        {/* Pc Version */}
        <ul
          key={1}
          className="hidden md:flex flex-row md:flex-col md:justify-center items-center gap-3"
        >
          {SIDEBAR_ITEM_LIST[0].map(({ id, path, title, icon: Icon }) => (
            <li key={id} className="relative z-50 group">
              <div
                onClick={() => navigate(path)}
                className={clsx(
                  "size-10 hover:bg-hover flex justify-center items-center p-2.5 rounded-full text-textPrimary",
                  path === locarion.pathname && "bg-active",
                )}
              >
                <Icon />
              </div>
              <span className="absolute z-50 left-14 top-1/2 -translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {title}
              </span>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex flex-row md:flex-col justify-center items-center gap-2">
          {SIDEBAR_ITEM_LIST[1].map(
            ({ id, path, title, link, isIcon, icon: Icon }) => (
              <li key={id} className="relative z-50 group">
                <div
                  onClick={() => navigate(path)}
                  className={clsx(
                    "size-10 hover:bg-hover flex justify-center items-center rounded-full text-textPrimary",
                    path === locarion.pathname && "bg-active",
                    isIcon ? "p-2.5" : "p-1",
                  )}
                >
                  {isIcon ? (
                    <Icon />
                  ) : (
                    <img
                      className="w-[27px] rounded-full"
                      src={link}
                      alt="You"
                    />
                  )}
                </div>
                <span className="absolute z-50 left-14 top-1/2 -translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {title}
                </span>
              </li>
            ),
          )}
        </ul>
        {/* Mobile Version */}
        <ul className="w-full flex md:hidden flex-row justify-between items-center gap-2  px-5">
          {SIDEBAR_ITEM_LIST.flat().map(
            ({ id, path, title, link, isIcon, icon: Icon }) => (
              <li key={id} className="relative z-50 group">
                <div
                  onClick={() => navigate(path)}
                  className={clsx(
                    "size-10 hover:bg-hover flex flex-col justify-center items-center p-2.5 rounded-full text-textPrimary",
                    path === locarion.pathname && "bg-active",
                  )}
                >
                  {isIcon ? (
                    <Icon />
                  ) : (
                    <img
                      className="w-[27px] rounded-full"
                      src={link}
                      alt="You"
                    />
                  )}
                </div>
              </li>
            ),
          )}
        </ul>
      </nav>
    </aside>
  );
}
