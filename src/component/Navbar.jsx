import React from "react";
import navbar from "../images/navbar.svg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <div className="px-24 max-xl2:px-2 py-7 flex items-center justify-evenly max-lx:px-9 max-lg:px-2 max-md:justify-between">
        <div className="flex items-center gap-1">
          <img className="h-7" src={navbar} />
          <h1 className="text-3xl font-extrabold ">Nexcent</h1>
        </div>
        <div className="flex gap-11 max-md:hidden">
          <ul className="flex items-center text-lg font-medium gap-11 max-lg:gap-3">
            <li className="">Home</li>
            <li>Features</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>

          <button className="text-lg flex items-center gap-3 bg-[#4CAF4F] text-white rounded-md  px-6 py-2 max-lg:px-2 max-lg:py-1 ">
            Register Now
            <span className="text-white flex items-center ">
              <FaLongArrowAltRight className="text-base" />
            </span>
          </button>
        </div>
        <div className="hidden max-md:block text-3xl">
          <RxHamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
