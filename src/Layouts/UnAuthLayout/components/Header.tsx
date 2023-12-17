import React from "react";
import Logo from "../../../img/logo.svg";

const Header = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="pt-2">
          <img src={Logo} alt="logo" />
        </div>

        <div className="hidden  md:flex space-x-6">
          <a
            href="#"
            className="hover:text-sky-700 hover:underline font-semibold text-neutral-600"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-sky-700 hover:underline font-semibold text-neutral-600"
          >
            Products
          </a>
          <a
            href="#"
            className="hover:text-sky-700 hover:underline font-semibold text-neutral-600"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-sky-700 hover:underline font-semibold text-neutral-600"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-sky-700 hover:underline font-semibold text-neutral-600"
          >
            Contact Us
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-3 text-white bg-sky-700 rounded-full baseline"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;
