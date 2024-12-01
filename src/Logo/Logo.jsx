import React from "react";
import logo from "/Logo/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="logo" className="m-1 h-32" />
      <p className="ml-3 text-right  font-bold sm:text-sm md:text-xl lg:text-3xl">
        TRIMUKH SALES AND SERVICES LLP
      </p>
    </div>
  );
};

export default Logo;
