import React, { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import Title from "./Title";
import { NavLink } from "react-router-dom";

const Bestseller = () => {
  const [Bestseller, setBestseller] = useState(
    products.filter((item) => item.bestseller).slice(0, 5)
  );
  return (
    <div className="w-full">
      <Title
        text1={"Best"}
        text2={"Seller"}
        para={
          "Discover the most loved pieces that our customers can’t get enough of."
        }
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:sm:grid-cols-4 lg:grid-cols-5 px-8 lg:px-48 py-16 gap-5 gap-y-7 relative">
        {Bestseller.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-2 cursor-pointer">
              <NavLink to={`/product/${item._id}`}>
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
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bestseller;
