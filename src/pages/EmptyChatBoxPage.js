import { MessageSquareText } from "lucide-react";
import React from "react";

export default function EmptyChatBoxPage({
  icon: Icon = MessageSquareText,
  heading = "Welcome to Infive Chat",
  para = "Select a conversation from the sidebar or start a new chat to begin messaging.",
}) {
  return (
    <article className="w-full h-full hidden md:flex justify-center items-center">
      <figure className="flex flex-col justify-center items-center gap-7">
        <section className="text-textMuted">
          <Icon size={60} />
        </section>
        <section>
          <h2 className="text-textPrimary text-center text-2xl lg:text-3xl font-semibold">
            {heading}
          </h2>
          <p className="max-w-md text-textMuted text-center text-sm leading-relaxed">
            {para}
          </p>
        </section>
      </figure>
    </article>
  );
}
