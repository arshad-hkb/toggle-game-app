import React from "react";
import { Outlet } from "react-router";
import { Footer } from "../Footer";
import Header from "../Header/Header";

const Layout = () => {
  console.log("hello");
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
