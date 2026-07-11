/* eslint-disable react-hooks/exhaustive-deps */
import { Info, Phone, Video } from "lucide-react";
import React, { useMemo, useState } from "react";
import Tooltip from "../components/custom/Tooltip";
import { motion } from "framer-motion";
import useFunction from "../hooks/useFunction";
import clsx from "clsx";
import MsgBox from "../components/chatInbox/MsgBox";
import moment from "moment";
import ChatHeader from "../components/chatInbox/ChatHeader";
import ChatMsgsBox from "../components/chatInbox/ChatMsgsBox";

export default function ChatInboxPage() {
  //🔹 All state
  const [msgs, setMsgs] = useState([
    {
      id: 1,
      text: "Hi there!",
      senderId: "user_1",
      createdAt: "2026-07-09T10:00:00",
    },
    {
      id: 2,
      text: "Hello! How are you?",
      senderId: "user_2",
      createdAt: "2026-07-09T10:02:15",
    },
    {
      id: 3,
      text: "I'm doing great, thanks for asking.",
      senderId: "user_1",
      createdAt: "2026-07-09T10:04:30",
    },
    {
      id: 4,
      text: "What are you up to today?",
      senderId: "user_2",
      createdAt: "2026-07-09T10:06:10",
    },
    {
      id: 5,
      text: "Just working on a project. You?",
      senderId: "user_1",
      createdAt: "2026-07-09T10:08:45",
    },
    {
      id: 6,
      text: "Same here. Lots of coding.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:10:05",
    },
    {
      id: 7,
      text: "Nice! What stack are you using?",
      senderId: "user_1",
      createdAt: "2026-07-09T10:12:20",
    },
    {
      id: 8,
      text: "React and Node.js mainly.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:14:50",
    },
    {
      id: 9,
      text: "Awesome. I love React.",
      senderId: "user_1",
      createdAt: "2026-07-09T10:16:15",
    },
    {
      id: 10,
      text: "Yeah, it's pretty powerful.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:18:30",
    },
    {
      id: 11,
      text: "Have you tried Next.js?",
      senderId: "user_1",
      createdAt: "2026-07-09T10:20:00",
    },
    {
      id: 12,
      text: "Yes, using it for the new module.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:22:15",
    },
    {
      id: 13,
      text: "That routing system is great.",
      senderId: "user_1",
      createdAt: "2026-07-09T10:24:40",
    },
    {
      id: 14,
      text: "Agreed. Saves a lot of time.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:26:10",
    },
    {
      id: 15,
      text: "Are you free later for a call?",
      senderId: "user_1",
      createdAt: "2026-07-09T10:28:30",
    },
    {
      id: 16,
      text: "Sure, around 5 PM?",
      senderId: "user_2",
      createdAt: "2026-07-09T10:30:05",
    },
    {
      id: 17,
      text: "5 PM works for me.",
      senderId: "user_1",
      createdAt: "2026-07-09T10:32:45",
    },
    {
      id: 18,
      text: "Great, I'll send a meet link.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:34:20",
    },
    {
      id: 19,
      text: "Thanks. Oh, by the way...",
      senderId: "user_1",
      createdAt: "2026-07-09T10:36:10",
    },
    {
      id: 20,
      text: "Did you check the latest PR?",
      senderId: "user_1",
      createdAt: "2026-07-09T10:37:05",
    },
    {
      id: 21,
      text: "Not yet, I will review it now.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:39:15",
    },
    {
      id: 22,
      text: "Let me know if changes are needed.",
      senderId: "user_1",
      createdAt: "2026-07-09T10:41:30",
    },
    {
      id: 23,
      text: "Will do. Give me 10 mins.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:43:50",
    },
    {
      id: 24,
      text: "Take your time.",
      senderId: "user_1",
      createdAt: "2026-07-09T10:45:20",
    },
    {
      id: 25,
      text: "Looks good! Just one minor thing.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:55:10",
    },
    {
      id: 26,
      text: "What is it?",
      senderId: "user_1",
      createdAt: "2026-07-09T10:56:30",
    },
    {
      id: 27,
      text: "Line 45, maybe use optional chaining.",
      senderId: "user_2",
      createdAt: "2026-07-09T10:58:45",
    },
    {
      id: 28,
      text: "Ah right, good catch.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:00:15",
    },
    {
      id: 29,
      text: "I'll push the fix in a minute.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:01:05",
    },
    {
      id: 30,
      text: "Awesome.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:03:20",
    },
    {
      id: 31,
      text: "Done, pushed.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:05:40",
    },
    {
      id: 32,
      text: "Approved and merged.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:07:55",
    },
    {
      id: 33,
      text: "Thanks! Moving to the next task.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:10:10",
    },
    {
      id: 34,
      text: "Which ticket are you picking up?",
      senderId: "user_2",
      createdAt: "2026-07-09T11:12:30",
    },
    {
      id: 35,
      text: "The UI bug on the dashboard.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:14:45",
    },
    {
      id: 36,
      text: "Oh, that one. It's a bit tricky.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:16:00",
    },
    {
      id: 37,
      text: "Any hints on where to look?",
      senderId: "user_1",
      createdAt: "2026-07-09T11:18:20",
    },
    {
      id: 38,
      text: "Check the CSS grid properties.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:20:35",
    },
    {
      id: 39,
      text: "Will do.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:22:50",
    },
    {
      id: 40,
      text: "Also the responsiveness on mobile.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:24:15",
    },
    {
      id: 41,
      text: "Got it. I'll test on smaller screens.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:26:30",
    },
    {
      id: 42,
      text: "Let me know if you get stuck.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:28:45",
    },
    {
      id: 43,
      text: "I think I found the issue.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:35:10",
    },
    {
      id: 44,
      text: "That was fast!",
      senderId: "user_2",
      createdAt: "2026-07-09T11:36:25",
    },
    {
      id: 45,
      text: "Yeah, someone hardcoded a width.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:38:40",
    },
    {
      id: 46,
      text: "Haha, classic mistake.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:40:55",
    },
    {
      id: 47,
      text: "Changing it to 100% fixed it.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:42:10",
    },
    {
      id: 48,
      text: "Perfect. Put up a PR.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:44:30",
    },
    {
      id: 49,
      text: "Creating the PR right now.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:46:45",
    },
    {
      id: 50,
      text: "Send me the link when done.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:48:00",
    },
    {
      id: 51,
      text: "Here you go: PR#402",
      senderId: "user_1",
      createdAt: "2026-07-09T11:50:15",
    },
    {
      id: 52,
      text: "Reviewing...",
      senderId: "user_2",
      createdAt: "2026-07-09T11:52:30",
    },
    {
      id: 53,
      text: "Looks solid.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:54:45",
    },
    {
      id: 54,
      text: "Thanks for the quick review.",
      senderId: "user_1",
      createdAt: "2026-07-09T11:56:00",
    },
    {
      id: 55,
      text: "No problem. See you at 5.",
      senderId: "user_2",
      createdAt: "2026-07-09T11:58:15",
    },
    {
      id: 56,
      text: "Yep, see ya!",
      senderId: "user_1",
      createdAt: "2026-07-09T12:00:30",
    },
  ]);

  // 🔹 custom hook
  const [formatDateTime] = useFunction();

  //🔹 comment likhee daww
  function groupedMessages() {
    const sorted = [...msgs].sort((a, b) => {
      const diffA = moment().diff(moment(a.createdAt), "minutes");
      const diffB = moment().diff(moment(b.createdAt), "minutes");

      return diffA - diffB;
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
