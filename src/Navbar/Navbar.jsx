import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className=" w-full mt-4 bg-blue-900 p-8  text-white grid grid-flow-col auto-cols-max justify-start gap-x-12">
      <NavItem item={"Home"} />
      <NavItem item={"Machinery"} />
      <NavItem item={"Spare Parts"} />
      <NavItem item={"Download Catalogue"} />
      <NavItem item={"About Us"} />
      <NavItem item={"Contact Us"} />
    </div>
  );
};

export default Navbar;
