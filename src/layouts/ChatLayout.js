import React from 'react'
import ChatList from '../components/layouts/chat/ChatList';

export default function ChatLayout() {
  return (
    <section className="w-full h-full">
      <figure className="w-full h-full">
        <ChatList />
      </figure>
    </section>
  );
}
