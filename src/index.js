// Default
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
// Routes
import Home from "./routes/home";
import ErrorPage from "./routes/error-page";
import Hosting from "./routes/hosting";
import About from "./routes/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fiche-logement/:logementId",
    element: <Hosting />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/a-propos",
    element: <About />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);