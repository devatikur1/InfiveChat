import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<AppLayout />}>
      
    </Route>),
  );
  return <RouterProvider router={router} />;
}
