import clsx from "clsx";
import { CircleDashed, Images, MessageSquareText } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SIDEBAR_ITEM_LIST = [
  {
    id: 1,
    title: "Chats",
    path: "/",
    icon: MessageSquareText,
  },
  {
    id: 2,
    title: "Status",
    path: "/status",
    icon: CircleDashed,
  },
];

export default function SideBar() {
  // 🔹 Navigate
  const navigate = useNavigate();
  const locarion = useLocation();

  return (
    <aside className="h-[56px] lg:h-full w-full lg:w-[55px] bg-transparent py-5 border-t lg:border-r border-border">
      <nav className="w-full h-full flex flex-row lg:flex-col lg:justify-between">
        {/* Pc Version */}
        <ul className="hidden lg:flex flex-row lg:flex-col lg:justify-center items-center gap-3">
          {SIDEBAR_ITEM_LIST.map((item) => {
            let ICON = item.icon;
            let isActive = item.path === locarion.pathname;
            return (
              <li key={item.id} className="relative z-50 group">
                <div
                  onClick={() => navigate(`${item.path}`)}
                  className={clsx(
                    "size-10 hover:bg-hover flex justify-center items-center p-2.5 rounded-full text-textPrimary",
                    isActive && "bg-active",
                  )}
                >
                  <ICON />
                </div>
                <span className="absolute z-50 left-14 top-1/2 -translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.title}
                </span>
              </li>
            );
          })}
        </ul>
        <ul className="hidden lg:flex flex-row lg:flex-col justify-center items-center gap-2">
          <li className="relative z-50 group">
            <div
              className={clsx(
                "size-10 hover:bg-hover flex justify-center items-center p-2.5 rounded-full text-textPrimary",
                false && "bg-active",
              )}
            >
              <Images />
            </div>
            <span className="absolute z-50 left-14 top-1/2 -translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              Media
            </span>
          </li>
          <li className="relative z-50 group">
            <div
              className={clsx(
                "size-10 hover:bg-hover flex justify-center items-center rounded-full text-textPrimary",
                false && "bg-active",
              )}
            >
              <img
                className="w-[27px] rounded-full"
                src={
                  "https://i.pinimg.com/564x/bd/cc/de/bdccde33dea7c9e549b325635d2c432e.jpg"
                }
                alt="You"
              />
            </div>

            <span className="absolute z-50 left-14 top-1/2 -translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              You
            </span>
          </li>
        </ul>
        {/* Mobile Version */}
        <ul className="w-full flex lg:hidden flex-row justify-between items-center gap-2  px-5">
          {SIDEBAR_ITEM_LIST.map((item) => {
            let ICON = item.icon;
            let isActive = item.path === locarion.pathname;
            return (
              <li key={item.id} className="relative z-50 group">
                <div
                  onClick={() => navigate(`/${item.path}`)}
                  className={clsx(
                    "size-10 hover:bg-hover flex flex-col justify-center items-center p-2.5 rounded-full text-textPrimary",
                    isActive && "bg-active",
                  )}
                >
                  <ICON />
                  {/* <span>{item.title}</span> */}
                </div>
              </li>
            );
          })}
          <li className="relative z-50 group">
            <div
              className={clsx(
                "size-10 hover:bg-hover flex justify-center items-center p-2.5 rounded-full text-textPrimary",
                false && "bg-active",
              )}
            >
              <Images />
            </div>
          </li>
          <li className="relative z-50 group">
            <div
              className={clsx(
                "size-10 hover:bg-hover flex justify-center items-center rounded-full text-textPrimary",
                false && "bg-active",
              )}
            >
              <img
                className="w-[27px] rounded-full"
                src={
                  "https://i.pinimg.com/564x/bd/cc/de/bdccde33dea7c9e549b325635d2c432e.jpg"
                }
                alt="You"
              />
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
