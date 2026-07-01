import moment from "moment";
import React from "react";

export const CHAT_LIST = [
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
    time: new Date("2026-06-27T20:25:00"),
    unreadCount: 0,
    isPinned: false,
    isMuted: true,
    isOnline: false,
    isTyping: false,
    isVerified: false,
    isGroup: false,
  },
];

export default function ChatList() {
  return (
    <article className="h-full w-[256px] bg-surface py-5 border-r border-border">
      <nav className="h-full flex flex-col justify-between">
        <ul className="flex flex-col justify-center items-center gap-3">
          {CHAT_LIST.map((item) => (
            <li key={item.id} className="relative group w-full">
              <section
                // to={`/@${item.username}`}
                className="grid grid-cols-12 items-center p-2.5 rounded-full text-textPrimary"
              >
                <article className="col-span-3 h-full flex justify-center items-center">
                  <img className="w-[55px] rounded-full" src={item.avatar} alt={item.name} />
                </article>
                <article className="col-start-3 col-span-6 flex flex-col">
                  <h1 className="text-[1rem]">{item.name}</h1>
                  <p className="text-[10px] text-textPrimary/15">{item.lastMessage}</p>
                </article>
                <article>
                  <span>{moment(item.time).format("dddd")}</span>
                </article>
              </section>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
