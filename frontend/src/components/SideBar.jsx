import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const SideBar = () => {
  const { sideBar, setsideBar } = useContext(CartContext);
  return (
    sideBar && (
      <div className="absolute top-0 left-0 sidebar w-full h-screen flex flex-col z-[10] bg-white text-center text-5xl justify-center items-center">
        <img
          src={assets.cross_icon}
          className="absolute top-[50px] left-[50px] w-[2rem]"
          onClick={() => setsideBar(false)}
          alt=""
        />
        <ul className="flex flex-col w-full">
          <NavLink
            className="uppercase"
            to={"/"}
            onClick={() => setsideBar(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="uppercase"
            to={"/collection"}
            onClick={() => setsideBar(false)}
          >
            collection
          </NavLink>
          <NavLink
            className="uppercase"
            to={"/about"}
            onClick={() => setsideBar(false)}
          >
            about
          </NavLink>
          <NavLink
            className="uppercase"
            to={"/contact"}
            onClick={() => setsideBar(false)}
          >
            contact us
          </NavLink>
        </ul>
      </div>
    )
  );
};

export default SideBar;
