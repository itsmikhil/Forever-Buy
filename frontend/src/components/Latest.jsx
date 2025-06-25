import React, { useState } from "react";
import Title from "./Title";
import { products } from "../assets/frontend_assets/assets";

const Latest = () => {
  const [latestProducts, setlatestProducts] = useState(products.slice(30,40));
  return (
    <div className="w-full">
      <Title
        text1={"Latest"}
        text2={"Collections"}
        para={"Explore our newest arrivals, crafted with style and precision"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:sm:grid-cols-4 lg:grid-cols-5 px-8 lg:px-48 py-16 gap-5 gap-y-7 relative">
        {latestProducts.map((item,index) => {
          return (
            <div key={index} className="flex flex-col gap-2 cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={item.image[0]}
                  className="hover:scale-105 transition-transform ease-out duration-150 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-[0.8rem]">{item.name}</h1>
                <h1 className="text-sm">${item.price}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Latest;
