import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { DataContext } from "../context/DataContext";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Search = () => {
  let { searchText, setsearchText } = useContext(ProductContext);
  let { searchBar, setsearchBar } = useContext(DataContext);
  const location = useLocation();

  return (
    searchBar &&
    location.pathname == "/collection" && (
      <div className="w-full bg-red-50 flex justify-center items-center relative py-6 mb-2 gap-5">
        <div className="flex border-[1px] px-8 py-2 rounded-full sm:w-[40%]">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            className="outline-none w-full"
            placeholder="Search"
          />
          <img src={assets.search_icon} className="w-5 h-5" alt="" />
        </div>
        <img
          className="cursor-pointer w-5 h-5"
          onClick={() => {
            setsearchBar(false);
            setsearchText("");
          }}
          src={assets.cross_icon}
          alt=""
        />
      </div>
    )
  );
};

export default Search;
