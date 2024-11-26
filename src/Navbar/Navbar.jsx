import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Machinery from "../Machinery/Machinery";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const navigation = [
    { name: "HOME", href: "/", current: true },
    { name: "MACHINERY", href: "/machinery", current: false },
    { name: "Download Catalogue", href: "/downloadcatalogue", current: false },
    { name: "ABOUT US", href: "/aboutus", current: false },
    { name: "CONTACT US", href: "/contactus", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Disclosure as="nav" className="bg-blue-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Desktop Navigation */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          to={item.href}
                          key={item.name}
                          onMouseEnter={() =>
                            ["MACHINERY", "SPARE PARTS"].includes(item.name)
                              ? setActiveDrawer(item.name)
                              : setActiveDrawer(null)
                          }
                          onMouseLeave={() => setActiveDrawer(null)}
                          // className={classNames(
                          //   item.current
                          //     ? "bg-blue-700 text-white"
                          //     : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          //   "rounded-md px-3 py-2 text-sm font-medium"
                          // )}
                          className={({ isActive }) =>
                            `${isActive ? "bg-blue-700" : ""}
                            rounded-md px-3 py-2 text-sm font-medium text-white
                          `
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Responsive Drawer Below Navigation */}
      {activeDrawer && (
        <div className="absolute left-0 w-full bg-gray-100 shadow-lg z-50">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <h2 className="text-lg font-medium text-gray-800">
              {activeDrawer === "MACHINERY"
                ? "Explore our range of machinery"
                : "Discover our spare parts"}
            </h2>
            <p className="text-sm text-gray-600">
              {activeDrawer === "MACHINERY"
                ? "Browse through our collection of high-quality machinery designed to meet your needs."
                : "Find the perfect spare parts for your equipment."}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
