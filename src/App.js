import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ChatBoxPage from "./pages/ChatBoxPage";
import ChatsPage from "./pages/ChatsPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<ChatsPage />} />
        <Route path=":id" element={<ChatBoxPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}
