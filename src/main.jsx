import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RouteProvider from "./provider/RouteProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouteProvider>
      <RouterProvider router={router} />
    </RouteProvider>
  </StrictMode> 
);
