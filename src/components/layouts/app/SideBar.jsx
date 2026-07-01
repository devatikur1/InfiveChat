import clsx from "clsx";
import { CircleDashed, Images, MessageSquareText } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
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
  return (
    <aside className="h-full w-[55px] bg-transparent py-5 border-r border-border">
      <nav className="h-full flex flex-col justify-between">
        <ul className="flex flex-col justify-center items-center gap-3">
          {SIDEBAR_ITEM_LIST.map((item) => {
            let ICON = item.icon;
            return (
              <li key={item.id} className="relative group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(
                      "size-10 hover:bg-hover flex justify-center items-center p-2.5 rounded-full text-textPrimary",
                      isActive && "bg-active",
                    )
                  }
                >
                  <ICON />
                </NavLink>
                <span className="absolute left-14 top-1/2 -translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.title}
                </span>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col justify-center items-center gap-2">
          <li className="relative group">
            <NavLink
              to={"/media"}
              className={({ isActive }) =>
                clsx(
                  "size-10 hover:bg-hover flex justify-center items-center p-2.5 rounded-full text-textPrimary",
                  isActive && "bg-active",
                )
              }
            >
              <Images />
            </NavLink>
            <span className="absolute left-14 top-1/2 -translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              Media
            </span>
          </li>
          <li className="relative group">
            <NavLink
              to={"/you"}
              className={({ isActive }) =>
                clsx(
                  "size-10 hover:bg-hover flex justify-center items-center rounded-full text-textPrimary",
                  isActive && "bg-active",
                )
              }
            >
              <img
                className="w-[27px] rounded-full"
                src={
                  "https://i.pinimg.com/564x/bd/cc/de/bdccde33dea7c9e549b325635d2c432e.jpg"
                }
                alt="You"
              />
            </NavLink>

            <span className="absolute left-14 top-1/2 -translate-y-1/2 rounded-lg bg-surfaceSoft px-2.5 py-0.5 text-[12px] font-bold border border-boxHover text-textPrimary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              You
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
