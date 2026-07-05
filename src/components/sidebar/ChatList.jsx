import clsx from "clsx";
import {
  ChevronDown,
  Loader2,
  MessageSquarePlus,
  Pin,
  Search,
  X,
} from "lucide-react";
import moment from "moment";
import React, { useMemo, useState } from "react";
import ChatContextMenu from "./ChatContextMenu";
import { NavLink } from "react-router-dom";

//🔹 Chat Listt
const CHAT_LIST = [
  {
    id: "c1",
    name: "Rakib Hasan",
    username: "rakibhasan",
    avatar: "https://i.pravatar.cc/150?img=11",
    lastMessage: "Are you free tonight?",
    lastMessageType: "text",
    time: new Date("2026-07-01T09:45:00"),
    unreadCount: 3,
    isPinned: true,
    isMuted: false,
    isOnline: true,
    isTyping: false,
    isVerified: false,
    isGroup: false,
  },
  {
    id: "c2",
    name: "Infive Team",
    username: "infive_team",
    avatar: "https://i.pravatar.cc/150?img=22",
    lastMessage: "Meeting starts in 10 minutes.",
    lastMessageType: "text",
    time: new Date("2026-07-01T09:20:00"),
    unreadCount: 0,
    isPinned: true,
    isMuted: false,
    isOnline: false,
    isTyping: false,
    isVerified: true,
    isGroup: true,
  },
  {
    id: "c3",
    name: "Nusrat Jahan",
    username: "nusrat_jahan",
    avatar: "https://i.pravatar.cc/150?img=32",
    lastMessage: "📷 Photo",
    lastMessageType: "image",
    time: new Date("2026-06-30T08:15:00"),
    unreadCount: 1,
    isPinned: false,
    isMuted: false,
    isOnline: false,
    isTyping: false,
    isVerified: false,
    isGroup: false,
  },
  {
    id: "c4",
    name: "Programming Community",
    username: "programming_community",
    avatar: "https://i.pravatar.cc/150?img=45",
    lastMessage: "🔥 React 20 is awesome!",
    lastMessageType: "text",
    time: new Date("2026-06-30T18:40:00"),
    unreadCount: 12,
    isPinned: false,
    isMuted: true,
    isOnline: false,
    isTyping: false,
    isVerified: false,
    isGroup: true,
  },
  {
    id: "c5",
    name: "Mahin",
    username: "mahin",
    avatar: "https://i.pravatar.cc/150?img=15",
    lastMessage: "🎤 Voice message",
    lastMessageType: "voice",
    time: new Date("2026-06-29T22:10:00"),
    unreadCount: 0,
    isPinned: false,
    isMuted: false,
    isOnline: true,
    isTyping: true,
    isVerified: false,
    isGroup: false,
  },
  {
    id: "c6",
    name: "Rifat",
    username: "rifat",
    avatar: "https://i.pravatar.cc/150?img=17",
    lastMessage: "😂😂😂",
    lastMessageType: "text",
    time: new Date("2026-06-29T11:35:00"),
    unreadCount: 0,
    isPinned: false,
    isMuted: false,
    isOnline: false,
    isTyping: false,
    isVerified: false,
    isGroup: false,
  },
  {
    id: "c7",
    name: "Design Team",
    username: "design_team",
    avatar: "https://i.pravatar.cc/150?img=51",
    lastMessage: "🎨 New Figma file shared",
    lastMessageType: "file",
    time: new Date("2026-06-28T16:50:00"),
    unreadCount: 5,
    isPinned: false,
    isMuted: false,
    isOnline: false,
    isTyping: false,
    isVerified: true,
    isGroup: true,
  },
  {
    id: "c8",
    name: "Tamim",
    username: "tamim",
    avatar: "https://i.pravatar.cc/150?img=28",
    lastMessage: "See you tomorrow.",
    lastMessageType: "text",
    time: new Date("2025-07-01T09:20:00"),
    unreadCount: 0,
    isPinned: false,
    isMuted: true,
    isOnline: false,
    isTyping: false,
    isVerified: false,
    isGroup: false,
  },
  {
    id: "c9",
    name: "Tamim",
    username: "tamim",
    avatar: "https://i.pravatar.cc/150?img=28",
    lastMessage: "See you tomorrow.",
    lastMessageType: "text",
    time: new Date("2025-07-01T09:20:00"),
    unreadCount: 0,
    isPinned: false,
    isMuted: true,
    isOnline: false,
    isTyping: false,
    isVerified: false,
    isGroup: false,
  },
];

//🔹Filler Arr
const FILTER_METH_ARR = [
  { id: "all", name: "All" },
  { id: "unread", name: "Unread" },
  { id: "favorites", name: "Favorites" },
];

export default function ChatList() {
  //🔹 All state
  const [chatListData] = useState(CHAT_LIST);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPositionData, setMenuPositionData] = useState({});

  // 🔹 Filter Chat List
  const filterChatList = useMemo(() => {
    let chats = chatListData.filter((chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    switch (activeFilter) {
      case "unread":
        chats = chats.filter((chat) => chat.unreadCount > 0);
        break;

      case "favorites":
        chats = chats.filter((chat) => chat.isPinned);
        break;

      default:
        break;
    }

    return chats;
  }, [chatListData, searchQuery, activeFilter]);

  //🔹 Open chat context menu & calculate its position
  function openChatContextMenu(e) {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPositionData({
      isMobile: false,
      x: false ? undefined : rect.top + rect.height + 4,
      y: false ? undefined : Math.max(8, rect.right - 240),
    });
    setIsMenuOpen(true);
  }

  //🔹 Format chat timestamp for chat list display
  // Today      -> 10:30 AM
  // Yesterday  -> Yesterday
  // Within 7 days -> Monday
  // Older      -> MM/DD/YYYY
  function formatDateTime(time) {
    let days = moment().diff(moment(time), "days");

    if (days === 0) {
      return moment(time).format("LT");
    } else if (days === 1) {
      return "Yesterday";
    } else if (days < 8) {
      return moment(time).format("dddd");
    } else {
      return moment(time).format("L");
    }
  }

  return (
    <article className="flex flex-col flex-1 lg:h-full w-full lg:w-[400px] 2xl:w-[500px] bg-surface pt-5 border-r border-border px-0.5 overflow-auto">
      <header className="relative z-40 flex flex-col gap-4 px-5">
        <section className="flex justify-between items-center select-none">
          <div>
            <h2 className="font-bold text-xl text-textPrimary">Infive Chat</h2>
          </div>
          <span>
            <div>
              <span className="size-10 hover:bg-hover flex justify-center items-center p-2.5 rounded-full text-textPrimary">
                <MessageSquarePlus />
              </span>
            </div>
          </span>
        </section>
        <section>
          <div className="relative z-40 flex items-center gap-3 rounded-full bg-transparent text-textMuted">
            <label
              htmlFor="Search"
              className="absolute z-40 left-2.5 cursor-text"
            >
              <Search size={20} />
            </label>

            <input
              id="Search"
              type="text"
              value={searchQuery}
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full pl-9 pr-4 py-2 bg-surfaceSoft rounded-full outline-none text-sm text-textPrimary placeholder:text-textMuted transition-all duration-200 hover:ring-2 hover:ring-surfaceSoft focus:ring-2 focus:ring-accent"
            />

            <footer className="absolute z-40 right-2.5 top-1/2 -translate-y-1/2">
              <div className="relative z-40 size-6 flex items-center justify-center">
                <Loader2
                  size={24}
                  className="absolute z-40 animate-spin text-accent"
                />

                <X size={12} className="relative z-30 text-textPrimary" />
              </div>
            </footer>
          </div>
          <ul className="flex items-center gap-3 py-2.5">
            {FILTER_METH_ARR.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveFilter(item.id)}
                className={clsx(
                  "flex items-center cursor-pointer rounded-full border px-3 py-1 text-[13px] font-semibold transition-all duration-200 select-none",
                  activeFilter === item.id
                    ? "border-accent bg-accent/15 text-accent"
                    : "border-border bg-surfaceSoft text-textMuted hover:bg-boxHover",
                )}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </header>
      <nav className="w-full h-full flex flex-col overflow-auto custom-scroll">
        <ul className="w-full h-full flex flex-col gap-3 py-1.5 px-2">
          {filterChatList.map((item) => (
            <li
              className="group"
              onContextMenu={openChatContextMenu}
              key={item.id}
            >
              <NavLink
                to={`@${item.username}`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-boxHover"
              >
                {/* Avatar */}
                <div className="relative z-40 shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="size-14 rounded-full object-cover"
                  />

                  {item.isOnline && (
                    <span className="absolute z-40 bottom-0 right-0 size-3.5 rounded-full bg-success border-2 border-surface" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[15px] truncate text-textPrimary">
                      {item.name}
                    </h3>

                    <span className="text-[11px] text-textMuted whitespace-nowrap">
                      {formatDateTime(item.time)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-1">
                    <p className="truncate text-sm text-textMuted">
                      {item.isTyping ? (
                        <span className="text-accent font-medium">
                          typing...
                        </span>
                      ) : (
                        item.lastMessage
                      )}
                    </p>

                    <div className="flex justify-center items-center gap-2">
                      {item.isPinned && (
                        <span className="text-textMuted w-5 h-5 flex justify-center items-center">
                          <Pin size={18} />
                        </span>
                      )}
                      {item.unreadCount > 0 && (
                        <span className="min-w-5 h-5 rounded-full bg-accent text-white text-[11px] font-semibold flex items-center justify-center px-1.5">
                          {item.unreadCount}
                        </span>
                      )}
                      <span className="text-textMuted w-5 h-5 hidden group-hover:flex justify-center items-center transition-all duration-200">
                        <ChevronDown size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
          {filterChatList.length === 0 && (
            <li className="w-full h-full flex justify-center items-center">
              <span className="text-textMuted font-normal text">
                No chats, contacts or messages found
              </span>
            </li>
          )}
        </ul>
      </nav>
      {isMenuOpen && (
        <ChatContextMenu
          menuPositionData={menuPositionData}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </article>
  );
}
