import { RouteProps } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { List as CategoryList } from "../pages/categories/List";

export interface IRouteProps extends RouteProps {
  label: string;
  name: string;
}

const routes: IRouteProps[] = [
  {
    name: "dashboard",
    label: "Dashboard",
    path: "/",
    element: <Dashboard />,
  },
  {
    name: "categories.list",
    label: "Listar Categorias",
    path: "/categories",
    element: <CategoryList />,
  },
];

export default routes;
