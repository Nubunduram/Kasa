import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/main.scss";
// Routes
import Home from "./routes/home";
import ErrorPage from "./routes/error-page";
import Hosting from "./routes/hosting";
import About from "./routes/about";
import Layout from "./routes/layout";

const router = createBrowserRouter([
  {
    path: "/Kasa/",
    element: <Layout children={<Home />} />,
    errorElement: <Layout children={<ErrorPage />} />,
  },
  {
    path: "/Kasa/fiche-logement/:logementId",
    element: <Layout children={<Hosting />} />,
  },
  {
    path: "/Kasa/a-propos",
    element: <Layout children={<About />} />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);