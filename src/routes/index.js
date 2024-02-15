import React from "react";
import { Routes, Route } from "react-router";
import { routesConfig } from "./routes-config";
import { ProtectedLayout } from "../components";
const AppRoutes = () => {
  <Routes>
    <Route element={<ProtectedLayout />}>
      {routesConfig.map((value) => (
        <Route key={value.path} path={value.path} element={value.component} />
      ))}
    </Route>
  </Routes>;
};

export default AppRoutes;
