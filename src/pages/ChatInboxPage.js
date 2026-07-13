/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";
import useFunction from "../hooks/useFunction";
import MsgBox from "../components/chatInbox/MsgBox";
import ChatHeader from "../components/chatInbox/ChatHeader";
import ChatMsgsBox from "../components/chatInbox/ChatMsgsBox";
import moment from "moment";

export default function ChatInboxPage() {
  // 🔹 custom hook
  const [formatDateTime, createChatMessages] = useFunction();

  //🔹 All state
  const [msgs, setMsgs] = useState(createChatMessages(500));

  //🔹 comment likhee daww
  function groupedMessages() {
    const sorted = [...msgs].sort((a, b) => {
      const diffA = moment().diff(moment(a.createdAt), "minutes");
      const diffB = moment().diff(moment(b.createdAt), "minutes");

      return diffB - diffA;
    });

    console.log(sorted);

    return sorted.reduce((acc, msg) => {
      const date = formatDateTime(msg.createdAt, true);

      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(msg);
      return acc;
    }, {});
  }
  //  Ekhanee o
  const grouped = useMemo(() => groupedMessages(), [msgs]);
  console.log(grouped);

  return (
    <article className="w-full h-full flex justify-start items-center">
      <figure className="relative  w-full h-full flex flex-col">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none text-textPrimary"
          style={{
            backgroundImage: "../../public/chatImage.svg",
            backgroundSize: "100%",
          }}
        />
        <div className="relative z-10 w-full h-full flex flex-col">
          {/*🔹 Chat Header */}
          <ChatHeader />

          {/*🔹 Chat Show box */}
          <ChatMsgsBox grouped={grouped} />

          {/*🔹 Message Inbox */}
          <MsgBox msgs={msgs} setMsgs={setMsgs} />
        </div>
      </figure>
    </article>
  );
}
