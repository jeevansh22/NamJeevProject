import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-gray-100">
      <Logo />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
