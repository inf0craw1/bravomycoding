import { RouteObject, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import Main from "../pages/Main";

const ROUTES:RouteObject[] = [
  { path: paths.main, element: <Main/> },
];

const RenderRoutes = () => {
  const element = useRoutes(ROUTES);
  return element;
};

export default RenderRoutes;