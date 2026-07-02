import React from "react";
import { motion } from "motion/react";

export default function ChatContextMenu({ menuPositionData, setIsMenuOpen }) {
  return (
    <footer className="fixed inset-0 z-[60]">
      {/* Backdrop-BG */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsMenuOpen(false)}
        className="absolute inset-0 bg-surface/35 sm:bg-transparent h-screen overflow-y-auto"
      />

      {/* Menu Options */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          height: 0,
          ...(menuPositionData.isMobile
            ? {}
            : { top: menuPositionData.x, left: menuPositionData.y }),
        }}
        animate={{
          opacity: 1,
          scale: 1,
          height: "auto",
          ...(menuPositionData.isMobile
            ? {}
            : { top: menuPositionData.x, left: menuPositionData.y }),
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          height: 0,
          ...(menuPositionData.isMobile
            ? {}
            : { top: menuPositionData.x, left: menuPositionData.y }),
        }}
        transition={{
          duration: 0.25,
          ease: [0.4, 0, 0.2, 1],
        }}
        drag={"y"}
        dragConstraints={{ top: 0, bottom: -20 }}
        dragElastic={{ top: 0, bottom: 0.4 }}
        onDragEnd={(e, info) => {
          if (info.offset.y > 10) {
            setIsMenuOpen(false);
          }
        }}
        className="fixed bottom-0 sm:bottom-auto left-0 sm:left-auto right-0 sm:right-auto z-[110] sm:mx-0 w-[99%] sm:w-[240px] bg-surface backdrop-blur-2xl border-t sm:border border-border rounded-t-xl sm:rounded-md shadow-2xl shadow-shadow/40 p-2 overflow-hidden pb-32 sm:pb-2"
      >
        {/* Drag Handle for mobile */}
        <div className="w-full flex sm:hidden justify-center py-2">
          <div className="rounded-full bg-textMuted h-1 w-10"></div>
        </div>
        <div className="flex flex-col gap-3 pt-3 sm:pt-0 sm:gap-0.5">
          
        </div>
      </motion.div>
    </footer>
  );
}
