import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./component/layout";
import ErrorPage from "./component/error_page";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/planet",
      //   element: <Planet/>,
      // },
      // {
      //   path: "/starship",
      //   element: <Starship/>,
      // },
      // {
      //   path: "/people",
      //   element: <People/>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
