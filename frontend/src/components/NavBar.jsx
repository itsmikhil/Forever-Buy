import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { CartContext } from "../context/CartContext";
import Search from "./Search";
import { AuthContext } from "../context/AuthContext";
import { IoIosLogOut } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  const navigate = useNavigate();

  const { token, handleLogOut } = useContext(AuthContext);
  const {
    sideBar,
    setsideBar,
    searchBar,
    setsearchBar,
    searchText,
    setsearchText,
    cart,
    setcart,
  } = useContext(CartContext);

  // search comp handling
  let handleSearchComp = () => {
    navigate("/collection");
    setsearchBar(true);
  };
  return (
    <>
      <div className="w-full flex px-6 md:px-24 justify-between py-4 items-center">
        <img className="w-[9rem] object-cover" src={assets.logo} alt="" />
        <ul className="hidden md:inline-flex  gap-4 ">
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
        <div className="flex items-center gap-4 ">
          <img
            onClick={handleSearchComp}
            src={assets.search_icon}
            alt=""
            className=" w-[1.5rem] h-[1.5rem] cursor-pointer"
          />

          <NavLink className={"relative hidden md:block"} to={"/cart"}>
            <BsCart2 className="w-[1.5rem] h-[1.5rem] object-cover cursor-pointer" />
            <div className="absolute w-3 h-3 bg-black text-white rounded-full top-[0px] right-[-4px]  text-[0.5rem] text-center font-extrabold">
              {cart.length}
            </div>
          </NavLink>
          <NavLink>
            <img
              src={assets.cart_icon}
              alt=""
              className=" w-[1.5rem] h-[1.5rem] cursor-pointer hidden md:block"
            />
          </NavLink>
          {token ? (
            <IoIosLogOut
              onClick={handleLogOut}
              className="scale-[1.8] object-cover cursor-pointer hidden md:block"
            />
          ) : (
            <img
              onClick={() => {
                if (!token) navigate("/login");
              }}
              src={assets.profile_icon}
              alt=""
              className="w-[1.5rem] h-[1.5rem] cursor-pointer hidden md:block"
            />
          )}
          <div className="block md:hidden">
            <img
              onClick={() => setsideBar(!sideBar)}
              src={assets.menu_icon}
              className="block md:hidden w-[1.5rem] h-[1.5rem]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="w-[88%] mx-auto border-gray-200" />
      <Search
        searchText={searchText}
        setsearchText={setsearchText}
        searchBar={searchBar}
        setsearchBar={setsearchBar}
      />
    </>
  );
};

export default NavBar;
