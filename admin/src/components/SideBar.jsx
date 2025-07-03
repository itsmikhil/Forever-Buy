import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-full flex flex-col px-3 py-4 gap-4 border-r-1 h-full min-h-screen border-gray-200">
      <NavLink to={"/add"}>
        <div className="w-full flex  gap-4 items-center cursor-pointer border-1 p-2 border-gray-200">
          <img className="h-5 w-5" src={assets.add_icon} alt="" />
          <h1 className="hidden sm:block">Add Items</h1>
        </div>
      </NavLink>
      <NavLink to={"/list"}>
        <div className="w-full flex gap-4 items-center cursor-pointer border-1 p-2 border-gray-200">
          <img className="h-5 w-5" src={assets.order_icon} alt="" />
          <h1 className="hidden sm:block">List Items</h1>
        </div>
      </NavLink>
      <NavLink to={"/orders"}>
      <div className="w-full flex gap-4 items-center cursor-pointer border-1 p-2 border-gray-200">
        <img className="h-5 w-5" src={assets.order_icon} alt="" />
        <h1 className="hidden sm:block">Orders</h1>
      </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
