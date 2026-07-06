import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ChatLayout from "./layouts/ChatLayout";
import EmptyChatBoxPage from "./pages/EmptyChatBoxPage";
import ChatInboxPage from "./pages/ChatInboxPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route element={<ChatLayout />}>
          <Route index element={<EmptyChatBoxPage />} />
          <Route path=":id" element={<ChatInboxPage />} />
        </Route>
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}
