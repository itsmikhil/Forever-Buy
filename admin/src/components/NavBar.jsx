import React from "react";
import { assets } from "../assets/admin_assets/assets";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-20 py-3 border-b-1 border-gray-200">
      <img className="h-14" src={assets.logo} alt="" />
      <button className="bg-[#4B5563] text-white px-7 text-sm py-2 rounded-full  cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default NavBar;
