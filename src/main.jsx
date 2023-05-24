import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminDashboard></AdminDashboard>
  </React.StrictMode>
);
