import React from "react";
import { ROUTE_CONSTANTS } from "../common-constant";
import { Hasil, Info, Permainon, Saya, Statement } from "../pages";
const { HASIL_ROUTE, INFO_ROUTE, PERMAINON_ROUTE, SAYA, STATEMENT_ROUTE } =
  ROUTE_CONSTANTS;
export const routesConfig = [
  {
    path: "/",
    component: <Permainon />,
  },
  {
    path: PERMAINON_ROUTE,
    component: <Permainon />,
  },
  {
    path: HASIL_ROUTE,
    component: <Hasil />,
  },
  {
    path: INFO_ROUTE,
    component: <Info />,
  },

  {
    path: SAYA,
    component: <Saya />,
  },
  {
    path: STATEMENT_ROUTE,
    component: <Statement />,
  },
];
