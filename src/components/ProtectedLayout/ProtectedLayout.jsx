import React from "react";
import { Outlet } from "react-router";

import { Footer } from "../Footer";

const ProtectedLayout = () => {
  console.log("hello");
  return (
    <>
      <Footer />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
