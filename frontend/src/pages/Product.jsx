import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ProductContext } from "../context/ProductContext";
import RelatedProducts from "../components/RelatedProducts";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

const Product = () => {
  let { singleProduct, handelRelatedProducts, handleSingleProduct } =
    useContext(ProductContext);

  let { handleAdditionInCart } = useContext(DataContext);

  const [image, setimage] = useState(singleProduct?.images[0]);

  const { selectedSize, setselectedSize } = useContext(DataContext);

  let handleImageSelection = () => {
    if (singleProduct) {
      setimage(singleProduct.images[0]);
    }
  };

  //   whenever selected product changes , related product change
  let { id } = useParams();
  useEffect(() => {
    handleSingleProduct(id);
  }, []);

  // updating Related Products & selected Image whenever selected product changes
  useEffect(() => {
    if (singleProduct) {
      setimage(singleProduct.images?.[0]);
      handelRelatedProducts();
    }
    setselectedSize("");
  }, [singleProduct]);

  return (
    singleProduct && (
      <>
        <div className="w-[96%] mx-auto flex flex-col sm:flex-row sm:px-32 py-8  justify-between gap-4">
          {/* left */}
          <div className="flex w-full flex-col-reverse sm:flex-row sm:w-[45%] relative gap-2  justify-center">
            <div className="grid grid-cols-4 sm:grid-rows-4 sm:grid-cols-1 gap-2">
              {singleProduct.images.map((item, index) => {
                return (
                  <img
                    onClick={() => setimage(item)}
                    src={item}
                    key={index}
                    className="h-[7rem] cursor-pointer"
                  />
                );
              })}
            </div>
            <div className="flex-1 h-[32rem]  overflow-hidden relative">
              <img src={image} className="h-full object-cover" alt="" />
            </div>
          </div>
          {/* right */}
          <div className="gap-5 px-4 sm:w-[50%] flex flex-col justify-evenly">
            <h1 className="text-3xl">{singleProduct.name}</h1>
            <div className="flex items-center">
              <img
                className={"h-[1rem] w-[1rem]"}
                src={assets.star_icon}
                alt=""
              />
              <img
                className={"h-[1rem] w-[1rem]"}
                src={assets.star_icon}
                alt=""
              />
              <img
                className={"h-[1rem] w-[1rem]"}
                src={assets.star_icon}
                alt=""
              />
              <img
                className={"h-[1rem] w-[1rem]"}
                src={assets.star_icon}
                alt=""
              />
              <img
                className={"h-[1rem] w-[1rem]"}
                src={assets.star_dull_icon}
                alt=""
              />
              <p>(122)</p>
            </div>
            <h1 className="text-2xl">${singleProduct.price}</h1>
            <p>{singleProduct.description}</p>
            <p>Select Size:-</p>
            <div className="flex gap-2">
              {singleProduct.sizes.map((size, index) => {
                return (
                  <div
                    onClick={() => setselectedSize(size)}
                    key={index}
                    className={`${
                      selectedSize == size ? "border-[1px] border-black" : ""
                    } px-3 py-1 bg-gray-300 cursor-pointer`}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleAdditionInCart}
              className="uppercase  bg-black text-white px-8 py-2 cursor-pointer w-[11rem]"
            >
              Add To Cart
            </button>
            <hr className="border-gray-200" />
            <div className="text-gray-500">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </>
    )
  );
};

export default Product;
