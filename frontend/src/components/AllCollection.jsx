import React, { useEffect, useState } from "react";
import Title from "./Title";
import { assets, products } from "../assets/frontend_assets/assets";

const AllCollection = () => {
  const [filteredProducts, setfilteredProducts] = useState(products);
  const [selectedFilters, setselectedFilters] = useState([]);
  const [pricingOrder, setpricingOrder] = useState("relevant");
  const [showFilters, setshowFilters] = useState(true);

  //   storing filtered category
  let handleSelectionOfFilter = (e) => {
    if (selectedFilters.includes(e.target.value)) {
      setselectedFilters(
        selectedFilters.filter((item) => item != e.target.value)
      );
    } else {
      setselectedFilters([...selectedFilters, e.target.value]);
    }
  };

  //   updating filtered products based on selected category
  let handleFilterProducts = () => {
    let updatedProducts = [...products];

    // category based sorting
    if (selectedFilters.length > 0) {
      updatedProducts = updatedProducts.filter(
        (item) =>
          selectedFilters.includes(item.category) ||
          selectedFilters.includes(item.subCategory)
      );
    }

    //price based sorting
    if (pricingOrder === "Low to High") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (pricingOrder === "High to low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }
    setfilteredProducts(updatedProducts);
  };

  useEffect(() => {
    handleFilterProducts();
  }, [selectedFilters, pricingOrder]);

  return (
    <div className="w-full min-h-screen">
      <div className="w-[95%] sm:w-[80%] mx-auto flex flex-col sm:flex-row relative">
        {/* filters */}
        <div className="w-full sm:w-[20%] flex flex-col gap-4 py-3">
          <h1
            className="uppercase text-xl flex items-center gap-2"
            onClick={() => setshowFilters(!showFilters)}
          >
            filters{" "}
            <img
              className="w-[0.5rem] h-[1rem] rotate-90"
              src={assets.dropdown_icon}
              alt=""
            />
          </h1>
          {/* Categories */}
          {showFilters && (
            <>
              <div className="flex flex-col gap-2 border-[1px] p-4 border-gray-300">
                <h1>CATEGORIES</h1>
                <div className="text-gray-500 text-sm flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Men"
                      id="Men"
                      value={"Men"}
                      onChange={handleSelectionOfFilter}
                    />
                    <label htmlFor="Men">Men</label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Women"
                      id="Women"
                      value={"Women"}
                      onChange={handleSelectionOfFilter}
                    />
                    <label htmlFor="Women">Women</label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Kids"
                      id="Kids"
                      value={"Kids"}
                      onChange={handleSelectionOfFilter}
                    />
                    <label htmlFor="Kids">Kids</label>
                  </div>
                </div>
              </div>
              {/* subcategories */}
              <div className="flex flex-col gap-2 border-[1px] p-4 border-gray-300">
                <h1>TYPE</h1>
                <div className="text-gray-500 text-sm flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Topwear"
                      id="Topwear"
                      value={"Topwear"}
                      onChange={handleSelectionOfFilter}
                    />
                    <label htmlFor="Topwear">Topwear</label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Bottomwear"
                      id="Bottomwear"
                      value={"Bottomwear"}
                      onChange={handleSelectionOfFilter}
                    />
                    <label htmlFor="Bottomwear">Bottomwear</label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Winterwear"
                      id="Winterwear"
                      value="Winterwear"
                      onChange={handleSelectionOfFilter}
                    />
                    <label htmlFor="Winterwear">Winterwear</label>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* All collection */}
        <div className="flex-1 px-4 relative">
          {/* Top */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2 uppercase">
              <h1 className=" sm:text-3xl font-medium text-gray-500">All</h1>
              <h1 className=" sm:text-3xl font-medium">Collection</h1>
              <hr className="w-7" />
            </div>
            <div className="border-[1px] border-gray-300 p-2">
              <label htmlFor="price">Price:</label>
              <select
                name="price"
                id="price"
                className="outline-none"
                onChange={(e) => setpricingOrder(e.target.value)}
              >
                <option value="Relevant">Relevant</option>
                <option value="High to low">High to low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>
          {/* Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            {filteredProducts.map((item, index) => {
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
      </div>
    </div>
  );
};

export default AllCollection;
