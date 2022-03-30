import { Route, Routes } from "react-router-dom";

import routes from "./index";

export function AppRouter(): JSX.Element {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Route key={key} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
