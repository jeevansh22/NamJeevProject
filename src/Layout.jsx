import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
