import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/layouts/SideBar";

export default function AppLayout() {
  return (
    <main className="w-screen h-screen bg-bgPrimary flex flex-col-reverse md:flex-row">
      <SideBar />
      <Outlet />
    </main>
  );
}
