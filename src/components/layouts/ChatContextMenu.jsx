import React, { useRef } from "react";
import { motion } from "motion/react";
import useClickOutside from "../../hooks/useClickOutside";
import { Ban, BellOff, EyeOff, Heart, Pin, Trash2 } from "lucide-react";
import clsx from "clsx";

export default function ChatContextMenu({ menuPositionData, setIsMenuClose }) {
  // 🔹 Context Menu Reference
  const menuRef = useRef(null);

  // 🔹 Close menu when clicking outside
  useClickOutside(menuRef, setIsMenuClose);

  // 🔹 Chat Context Menu Items
  const CHAT_CONTEXT_MENU = [
    {
      id: 1,
      title: "Mute notifications",
      icon: BellOff,
    },
    {
      id: 2,
      title: "Pin chat",
      icon: Pin,
    },
    {
      id: 3,
      title: "Mark as unread",
      icon: EyeOff,
    },
    {
      id: 4,
      title: "Add to Favorites",
      icon: Heart,
    },
    {
      id: 5,
      title: "Block",
      icon: Ban,
      danger: true,
    },
    {
      id: 6,
      title: "Delete chat",
      icon: Trash2,
      danger: true,
    },
  ];

  return (
    <motion.div
      ref={menuRef}
      style={
        menuPositionData.isMobile
          ? {}
          : {
              top: menuPositionData.x,
              left: menuPositionData.y,
            }
      }
      initial={{
        opacity: 0,
        scale: 0.85,
        height: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
        height: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      drag={"y"}
      dragConstraints={{ top: 0, bottom: -20 }}
      dragElastic={{ top: 0, bottom: 0.4 }}
      onDragEnd={(e, info) => {
        if (info.offset.y > 10) setIsMenuClose();
      }}
      className="fixed -bottom-1 md:bottom-auto left-0.5 md:left-auto right-0 md:right-auto z-[110] md:mx-0 w-[99%] md:w-[240px] bg-surface backdrop-blur-2xl border-t md:border border-border rounded-t-xl md:rounded-xl shadow-2xl shadow-shadow/40 px-3 pb-10 md:p-1 overflow-hidden"
    >
      {/* Drag Handle for mobile */}
      <div className="w-full flex md:hidden justify-center py-2">
        <div className="rounded-full bg-textMuted h-1 w-10"></div>
      </div>
      <nav className="flex flex-col pt-5 md:pt-0 gap-4 md:gap-0.5">
        <ul className="flex flex-col gap-1.5">
          {CHAT_CONTEXT_MENU.map(({ id, title, icon: Icon }) => (
            <React.Fragment key={id}>
              <li
                className={clsx(
                  id > 4
                    ? "hover:bg-error/10 hover:text-error"
                    : "hover:bg-hover",
                  "w-full py-2 px-3 flex items-center justify-between rounded-md text-textPrimary transition-colors",
                )}
              >
                <div className="flex items-center gap-3 md:gap-2">
                  <Icon
                    size={menuPositionData.isMobile ? 18 : 17}
                    strokeWidth={1.8}
                  />
                  <span className="text-[14.5px] md:text-[13px]">{title}</span>
                </div>
              </li>
              {id === 4 && (
                <div className="w-full flex justify-center items-center py-1">
                  <div className="w-[90%] bg-border h-[1px] rounded-full"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
