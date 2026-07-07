import React from "react";
import clsx from "clsx";

export default function Tooltip({
  children,
  position = "bottom",
  className = "",
}) {
  const positions = {
    bottom: "left-1/2 top-full mt-2 -translate-x-1/2",
    top: "left-1/2 bottom-full mb-2 -translate-x-1/2",
    right: "left-full top-1/2 ml-2 -translate-y-1/2",
    left: "right-full top-1/2 mr-2 -translate-y-1/2",
  };

  return (
    <span
      className={clsx(
        "pointer-events-none select-none absolute z-50 whitespace-nowrap rounded-lg border border-boxHover bg-surfaceSoft px-2 py-1 text-xs font-medium text-textPrimary opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:opacity-100",
        positions[position],
        className,
      )}
    >
      {children}
    </span>
  );
}
