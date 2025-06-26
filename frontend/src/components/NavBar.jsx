import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import { DataContext } from "../context/DataContext";

const NavBar = () => {
  const { sideBar, setsideBar } = useContext(DataContext);
  return (
    <>
      <div className="w-full flex px-6 sm:px-24 justify-between py-4 items-center">
        <img className="w-[9rem] object-cover" src={assets.logo} alt="" />
        <ul className="hidden sm:inline-flex  gap-4 ">
          <li className="uppercase text-md relative">
            <NavLink to={"/"}>
              Home
              <hr className={`w-[70%] mx-auto hidden `}></hr>
            </NavLink>
          </li>
          <li className="uppercase text-md relative">
            <NavLink to={"/collection"}>
              Collection
              <hr className={`w-[70%] mx-auto hidden `}></hr>
            </NavLink>
          </li>
          <li className="uppercase text-md relative">
            <NavLink to={"/about"}>
              About
              <hr className={`w-[70%] mx-auto hidden `}></hr>
            </NavLink>
          </li>
          <li className="uppercase text-md relative">
            <NavLink to={"/contact"}>
              Contact
              <hr className={`w-[70%] mx-auto hidden `}></hr>
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-4">
          <img
            src={assets.search_icon}
            alt=""
            className=" w-[1.5rem] h-[1.5rem] cursor-pointer"
          />
          <NavLink to={"/login"}>
            <img
              src={assets.profile_icon}
              alt=""
              className=" w-[1.5rem] h-[1.5rem] cursor-pointer "
            />
          </NavLink>
          <div className=" relative h-fit">
            <img
              src={assets.cart_icon}
              alt=""
              className="w-[1.5rem] h-[1.5rem] cursor-pointer "
            />
            <div className="absolute w-3 h-3 bg-black rounded-full bottom-[-2px] right-[-3px] text-white text-[0.5rem] text-center font-bold">
              10
            </div>
          </div>
          <div className="block sm:hidden">
            <img
              onClick={() => setsideBar(!sideBar)}
              src={assets.menu_icon}
              className="block sm:hidden w-[1.5rem] h-[1.5rem]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="w-[88%] mx-auto border-gray-200" />
    </>
  );
};

export default NavBar;
