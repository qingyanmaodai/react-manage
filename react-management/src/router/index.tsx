import { Navigate } from "react-router";
import Home from "../views/Home";
import About from "../views/About";
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
