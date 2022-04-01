import { RouteObject, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import Main from "../pages/Main";

const ROUTES:RouteObject[] = [
  { path: paths.main, element: <Main/> },
  { path: '*', element: <Main/> },
];

const RenderRoutes = () => {
  return useRoutes(ROUTES);
};

export default RenderRoutes;