"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 text-2xl z-10  bg-white border-b border-gray-300 text-blue-900 font-semibold bg-opacity-60 ${
        navbarOpen ? "bg-gray-500 h-full" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-center mx-auto p-8">
        {/* <Link
          href="/"
          className="text-2xl md:text-5xl text-blue-900 font-semibold"
        >
          Ikweb
        </Link> */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex-item-center px-3 py-2 border rounded text-slate-900 border-slate-900 hover:text-black hover:border-black"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />{" "}
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-900 border-slate-900 hover:text-black hover:border-black"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="hidden md:block md:w-auto text-blue-900"
          id="navbar-default"
        >
          <ul className="font-medium  text-blue-800 flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => {
              return (
                <li key={link.path}><b>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    key={link.title}
                  />
                  </b>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
