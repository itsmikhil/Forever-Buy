import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Title from "./Title";
import { NavLink } from "react-router-dom";

const RelatedProducts = ({ singleProduct, setsingleProduct }) => {
  let { products } = useContext(ProductContext);
  const [relatedProducts, setrelatedProducts] = useState([]);

  //   finding related products using keywords
  let handelRelatedProducts = () => {

    let result = products;
    let keywords = singleProduct.name.toLowerCase().split(" ");

    result = result.filter(
      (item) =>
        item != singleProduct &&
        item.category == singleProduct.category &&
        item.subCategory == singleProduct.subCategory &&
        keywords.some((word) => item.name.toLowerCase().includes(word))
    );
    // we want max 5 products
    if (result.length > 5) {
      result = result.slice(0, 5);
    }

    setrelatedProducts(result);
  };

  //   whenever selected product changes , related product change
  useEffect(() => {
    handelRelatedProducts();
  }, [singleProduct]);

  return (
    <div className="w-full py-4">
      <Title text1={"Related"} text2={"Products"} para={""} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:sm:grid-cols-4 lg:grid-cols-5 px-8 lg:px-32 py-8 gap-5      relative">
        {relatedProducts.map((item, index) => {
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

export default RelatedProducts;
