import React from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-background dark:bg-background-dark">
      <Outlet />
    </main>
  );
}
