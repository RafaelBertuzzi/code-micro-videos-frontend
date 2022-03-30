import { RouteProps } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { List as CategoryList } from "../pages/categories/List";

interface IRouteProps extends RouteProps {
  label: string;
}

const routes: IRouteProps[] = [
  {
    label: "Dashboard",
    path: "/",
    element: <Dashboard />,
  },
  {
    label: "Listar Categorias",
    path: "/categories",
    element: <CategoryList />,
  },
];

export default routes;
