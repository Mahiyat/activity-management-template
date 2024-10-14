import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import ActivityPage from "../components/ActivityPage";

export default function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ index: true, element: <ActivityPage /> }],
    },
  ]);

  return <RouterProvider router={routes} />;
}
