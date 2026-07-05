import React from "react";

export default function EmptyChatBox({ icon: ICON, heading, para }) {
  return (
    <figure className="w-full h-full hidden lg:flex justify-center items-center">
      <article className="flex flex-col justify-center items-center gap-7">
        <section className="text-textMuted">
          <ICON size={60} />
        </section>
        <section>
          <h2 className="text-textPrimary text-center text-3xl mb-2">{heading}</h2>
          <p className="text-textMuted text-center text-sm">{para}</p>
        </section>
      </article>
    </figure>
  );
}
