// Default
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/main.scss";
// Routes
import Home from "./routes/home";
import ErrorPage from "./routes/error-page";
import Hosting from "./routes/hosting";
import About from "./routes/about";
// Header & Footer
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <Header />
      {children}
      <Footer />
    </React.StrictMode>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<Home />} />,
    errorElement: <Layout children={<ErrorPage />} />,
  },
  {
    path: "/fiche-logement/:logementId",
    element: <Layout children={<Hosting />} />,
    errorElement: <Layout children={<ErrorPage />} />,
  },
  {
    path: "/a-propos",
    element: <Layout children={<About />} />,
    errorElement: <Layout children={<ErrorPage />} />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);