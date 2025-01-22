import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RouteProvider from "./provider/RouteProvider.jsx";
import ContentPage from "./pages/ContentPage.jsx";
import MainLayout from "./layout/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contentPage/:category/:type", element: <ContentPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouteProvider>
      <RouterProvider router={router} />
    </RouteProvider>
  </StrictMode> 
);
