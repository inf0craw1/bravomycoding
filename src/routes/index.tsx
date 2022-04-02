import { RouteObject, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import Main from "../pages/Main";
import Auth from "../pages/Auth";

const ROUTES:RouteObject[] = [
  { path: paths.main, element: <Main/> },
  { path: paths.auth, element: <Auth/> },
  { path: '*', element: <Main/> },
];

const RenderRoutes = () => {
  return useRoutes(ROUTES);
};

export default RenderRoutes;