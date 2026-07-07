import React from "react";
import ChatList from "../components/layouts/ChatList";
import { Outlet } from "react-router-dom";

export default function ChatLayout() {
  return (
    <section className="flex h-full flex-1 overflow-auto md:overflow-hidden">
      <ChatList />
      <Outlet />
    </section>
  );
}
