import React from "react";
import SideBar from "../components/chats/SideBar";
import ChatList from "../components/chats/ChatList";
import EmptyChatBox from "../components/custom/EmptyChatBox";
import { MessageSquareText } from "lucide-react";

export default function ChatsPage() {
  return (
    <section className="h-full w-full flex justify-start items-center">
      <figure className="w-full lg:w-auto h-full flex flex-col-reverse lg:flex-row justify-start items-center">
        <SideBar />
        <ChatList />
      </figure>
      <EmptyChatBox
        icon={MessageSquareText}
        heading={"Welcome to Infive Chat"}
        para={
          "Select a conversation from the sidebar or start a new chat to begin messaging."
        }
      />
    </section>
  );
}
