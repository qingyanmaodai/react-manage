import React, { lazy } from "react";
import { Navigate } from "react-router";
import Home from "../views/Home";
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const About = lazy(() => import("../views/About"));
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);
const routes = [
  // 嵌套路由
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
      {
        path: "/about",
        element: withLoadingComponent(<About />),
      },
    ],
  },
];

export default routes;
