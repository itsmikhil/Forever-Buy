import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { AuthContext } from "../context/AuthContext";

const SideBar = () => {
  let { token, handleLogOut } = useContext(AuthContext);
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
          {!token && (
            <NavLink
              className="uppercase"
              to={"/login"}
              onClick={() => setsideBar(false)}
            >
              login
            </NavLink>
          )}
          <NavLink
            className="uppercase"
            to={"/cart"}
            onClick={() => setsideBar(false)}
          >
            cart
          </NavLink>
          <NavLink
            className="uppercase"
            to={"/orders"}
            onClick={() => setsideBar(false)}
          >
            orders
          </NavLink>
          {token && (
            <NavLink
              className="uppercase"
              to={"/orders"}
              onClick={() => {
                setsideBar(false), handleLogOut();navigate("/")
              }}
            >
              log out
            </NavLink>
          )}
        </ul>
      </div>
    )
  );
};

export default SideBar;
