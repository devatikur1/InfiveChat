import React, { useRef } from "react";
import { backIn, motion } from "motion/react";
import useClickOutside from "../../hooks/useClickOutside";

export default function ChatContextMenu({ menuPositionData, setIsMenuClose }) {
  // 🔹 Context Menu Ref
  const menuRef = useRef(null);

  // 🔹 Handle Outside Click
  useClickOutside(menuRef, setIsMenuClose);

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
      className="fixed bottom-0 sm:bottom-auto left-0 sm:left-auto right-0 sm:right-auto z-[110] sm:mx-0 w-[99%] sm:w-[240px] bg-surface backdrop-blur-2xl border-t sm:border border-border rounded-t-xl sm:rounded-md shadow-2xl shadow-shadow/40 p-2 overflow-hidden pb-32 sm:pb-2"
    >
      {/* Drag Handle for mobile */}
      <div className="w-full flex sm:hidden justify-center py-2">
        <div className="rounded-full bg-textMuted h-1 w-10"></div>
      </div>
      <div className="flex flex-col gap-3 pt-3 sm:pt-0 sm:gap-0.5"></div>
    </motion.div>
  );
}
