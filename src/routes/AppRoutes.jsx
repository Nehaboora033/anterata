import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Timeline from "../pages/Timeline";
import Graphics from "../pages/Graphics";
import Portfolio from "../pages/Portfolio";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Timeline />,
      },
      {
        path: "/graphics",
        element: <Graphics />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

export default AppRoutes;
