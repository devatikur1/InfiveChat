import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/layouts/app/SideBar";

export default function AppLayout() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-bgPrimary flex justify-center items-center">
        <SideBar />
        <Outlet />
    </main>
  );
}
