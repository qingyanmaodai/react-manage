import React, { lazy } from "react";
import { Navigate } from "react-router";
import Home from "../views/Home";
import Login from "../views/Login";
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Page301 = lazy(() => import("../views/Page3/Page301"));
const Page302 = lazy(() => import("../views/Page3/Page302"));
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
        path: "/page3/page301",
        element: withLoadingComponent(<Page301 />),
      },
      {
        path: "/page3/page302",
        element: withLoadingComponent(<Page302 />),
      },
    ],
  },
  //嵌套路由结束
  {
    path: "/login",
    element: <Login />,
  },
  //访问其他路径进行重定向
  {
    path: "*",
    element: <Navigate to="/page1" />,
  },
];

export default routes;
