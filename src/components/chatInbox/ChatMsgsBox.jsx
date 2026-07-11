import clsx from "clsx";
import React from "react";

export default function ChatMsgsBox({ grouped }) {
  return (
    <main className="flex-1 px-2 sm:px-5 md:px-2 lg:px-9 xl:px-16 overflow-auto custom-scroll">
      <nav className="w-full flex flex-col gap-2 py-2">
        {Object.entries(grouped).map(([date, messages]) => (
          <ul key={date} className="relative w-full h-auto flex flex-col gap-2">
            <div className="sticky top-0 w-full flex justify-center items-start text-textMuted pt-2 pb-1.5">
              <span className="text-xs bg-surface px-3 py-1 rounded-md">
                {date}
              </span>
            </div>
            {messages.map((message) => (
              <li
                key={message.id}
                className={clsx(
                  "w-full flex items-center",
                  message.senderId === "user_1"
                    ? "justify-end"
                    : "justify-start",
                )}
              >
                <div
                  className={clsx(
                    "flex items-start w-auto max-w-[92%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[60%]",
                    message.senderId === "user_1"
                      ? "flex-row-reverse"
                      : "flex-row",
                  )}
                >
                  <span
                    className={clsx(
                      message.senderId === "user_1"
                        ? "text-accentSoft"
                        : "text-surface",
                    )}
                  >
                    {message.senderId === "user_1" ? (
                      <svg
                        viewBox="0 0 8 13"
                        height="13"
                        width="8"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.1"
                        x="0px"
                        y="0px"
                        enableBackground="new 0 0 8 13"
                      >
                        <title>tail-out</title>
                        <path
                          className="x5eawxs"
                          d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 8 13"
                        height="13"
                        width="8"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.1"
                        x="0px"
                        y="0px"
                        enableBackground="new 0 0 8 13"
                      >
                        <title>tail-in</title>
                        <path
                          className="x5eawxs"
                          fill="#0000000"
                          d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
                        ></path>
                      </svg>
                    )}
                  </span>
                  <div
                    className={clsx(
                      "w-full flex items-center justify-center text-sm text-textPrimary/90 px-2.5 py-2",
                      message.senderId === "user_1"
                        ? "bg-accentSoft rounded-s-md rounded-br-md"
                        : "bg-surface rounded-bl-md rounded-e-md",
                    )}
                  >
                    <span className="h-full w-auto">{message.text}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </main>
  );
}
