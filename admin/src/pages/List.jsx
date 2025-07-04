import React from "react";
import { assets } from "../assets/admin_assets/assets";

const List = () => {
  return (
    <div className="w-full py-4 px-7 min-h-screen">
      <h1>All Product List</h1>
      <div className="hidden sm:grid sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 p-2 font-semibold text-sm">
        <h1>Image</h1>
        <h1>Name</h1>
        <h1>Category</h1>
        <h1>Price</h1>
        <h1>Action</h1>
      </div>
      <div className="grid grid-cols-1 py-3 gap-3">
        <div className="grid grid-rows-2 grid-cols-[1fr_2fr_1fr] sm:grid-rows-1 sm:grid-cols-[1fr_3fr_1fr_1fr_1fr]  border-1 border-gray-200 p-2 items-center">
          <div className="w-12 h-15 bg-blue-100"></div>
          <h1>Kid Tapered Slim Fit Trouser</h1>
          <h1>Kids</h1>
          <h1>$38</h1>
          <h1 className="cursor-pointer">X</h1>
        </div>
        <div className="grid grid-rows-2 grid-cols-[1fr_2fr_1fr] sm:grid-rows-1 sm:grid-cols-[1fr_3fr_1fr_1fr_1fr]  border-1 border-gray-200 p-2 items-center">
          <div className="w-12 h-15 bg-blue-100"></div>
          <h1>Kid Tapered Slim Fit Trouser</h1>
          <h1>Kids</h1>
          <h1>$38</h1>
          <h1 className="cursor-pointer">X</h1>
        </div>
        <div className="grid grid-rows-2 grid-cols-[1fr_2fr_1fr] sm:grid-rows-1 sm:grid-cols-[1fr_3fr_1fr_1fr_1fr]  border-1 border-gray-200 p-2 items-center">
          <div className="w-12 h-15 bg-blue-100"></div>
          <h1>Kid Tapered Slim Fit Trouser</h1>
          <h1>Kids</h1>
          <h1>$38</h1>
          <h1 className="cursor-pointer">X</h1>
        </div>
        <div className="grid grid-rows-2 grid-cols-[1fr_2fr_1fr] sm:grid-rows-1 sm:grid-cols-[1fr_3fr_1fr_1fr_1fr]  border-1 border-gray-200 p-2 items-center">
          <div className="w-12 h-15 bg-blue-100"></div>
          <h1>Kid Tapered Slim Fit Trouser</h1>
          <h1>Kids</h1>
          <h1>$38</h1>
          <h1 className="cursor-pointer">X</h1>
        </div>
      </div>
    </div>
  );
};

export default List;
