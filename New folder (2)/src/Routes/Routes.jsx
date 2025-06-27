// src/Routes.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages.jsx/Home";
import Layout from "../components/Layout";
import Portfolio from "../Pages.jsx/Portfolio";
import React from 'react'

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;