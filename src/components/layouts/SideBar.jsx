import clsx from "clsx";
import { CircleDashed, Images, MessageSquareText } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tooltip from "../custom/Tooltip";

const SIDEBAR_ITEM_LIST = [
  [
    {
      id: 1,
      title: "Chats",
      path: "",
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

  function detectPath(itemPath, currentPath) {
    // Special routes
    const specialPaths = ["/status", "/media", "/you"];

    // Chats
    if (itemPath === "") {
      return (
        currentPath === "/" ||
        (!specialPaths.includes(currentPath) && currentPath.startsWith("/"))
      );
    }

    // Other routes
    return currentPath === itemPath;
  }

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
                  detectPath(path, locarion.pathname) && "bg-active",
                )}
              >
                <Icon />
              </div>
              <Tooltip position={"right"}>{title}</Tooltip>
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
                    detectPath(path, locarion.pathname) && "bg-active",
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
                <Tooltip position={"right"}>{title}</Tooltip>
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
                    detectPath(path, locarion.pathname) && "bg-active",
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
