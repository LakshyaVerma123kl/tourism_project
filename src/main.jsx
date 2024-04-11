import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PictureCarousel from "./Home.jsx";
import PackagesPage from "./Packages.jsx";
import Team from "./team.jsx";
import About from "./about.jsx";
import SignUp from "./sign_UP.jsx";
import Layout from "./layout.jsx";
import FSignin from "./finalSign_In.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <FSignin />,
      },
      {
        path: "layout/",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <PictureCarousel />,
          },
          {
            path: "packages",
            element: <PackagesPage />,
          },
          {
            path: "team",
            element: <Team />,
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
