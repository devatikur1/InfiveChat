import {
  CalendarDays,
  Camera,
  FileText,
  Headphones,
  Image,
  List,
  Sticker,
  UserRound,
} from "lucide-react";
import React from "react";

const MEDIA_OPTIONS = [
  {
    id: 1,
    title: "Document",
    type: "document",
    icon: FileText,
  },
  {
    id: 2,
    title: "Photos & videos",
    type: "media",
    icon: Image,
  },
  {
    id: 3,
    title: "Camera",
    type: "camera",
    icon: Camera,
  },
  {
    id: 4,
    title: "Audio",
    type: "audio",
    icon: Headphones,
  },
  {
    id: 5,
    title: "Contact",
    type: "contact",
    icon: UserRound,
  },
  {
    id: 6,
    title: "Poll",
    type: "poll",
    icon: List,
  },
  {
    id: 7,
    title: "Event",
    type: "event",
    icon: CalendarDays,
  },
  {
    id: 8,
    title: "New sticker",
    type: "sticker",
    icon: Sticker,
  },
];

export default function MediaOptions() {
  return (
    <ul className="flex flex-col gap-1.5 absolute z-50 min-w-[190px] whitespace-nowrap rounded-xl border border-border bg-surface p-1 shadow-xl left-1/2 bottom-full mb-3 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2">
      {MEDIA_OPTIONS.map((item) => {
        const Icon = item.icon;

        return (
          <li
            key={item.id}
            className="group flex items-center gap-2 cursor-pointer rounded-lg px-1.5 py-1 transition-all duration-200 hover:bg-hover"
          >
            <div className="flex py-1.5 px-2 items-center justify-center ">
              <Icon
                size={15}
                className="text-textMuted transition-colors"
              />
            </div>

            <span className="text-[13px] font-medium text-textPrimary">
              {item.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
