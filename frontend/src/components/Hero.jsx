import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="w-full px-8 sm:px-32 py-8 ">
      <div className="flex flex-col sm:flex-row justify-between w-full h-full border-[1px] border-gray-400">
        <div className="left flex flex-col justify-center gap-2 px-16 py-8 sm:py-0">
          <h1 className="uppercase flex items-center text-md gap-2">
            <hr className="w-8" />
            our bestsellers
          </h1>
          <h1 className="font-[prata] text-3xl sm:text-5xl text-gray-600">
            Latest Arrivals
          </h1>
          <h1 className="uppercase flex items-center text-md gap-2">
            shop now
            <hr className="w-8" />
          </h1>
        </div>
        <div className="right w-full sm:w-[50%]">
          <img src={assets.hero_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
