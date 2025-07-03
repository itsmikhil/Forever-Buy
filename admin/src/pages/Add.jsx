import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Add = () => {
  return (
    <form className="flex flex-col justify-start px-12 gap-3 py-5">
      <h1>Upload Image</h1>
      {/* image input */}
      <div className="flex gap-2">
        <div>
          <input className="hidden" type="file" name="image1" id="image1" />
          <label htmlFor="image1">
            <img className="w-20 h-20" src={assets.upload_area} alt="" />
          </label>
        </div>
        <div>
          <input className="hidden" type="file" name="image2" id="image2" />
          <label htmlFor="image2">
            <img className="w-20 h-20" src={assets.upload_area} alt="" />
          </label>
        </div>
        <div>
          <input className="hidden" type="file" name="image3" id="image3" />
          <label htmlFor="image3">
            <img className="w-20 h-20" src={assets.upload_area} alt="" />
          </label>
        </div>
        <div>
          <input className="hidden" type="file" name="image4" id="image4" />
          <label htmlFor="image4">
            <img className="w-20 h-20" src={assets.upload_area} alt="" />
          </label>
        </div>
      </div>
      <label htmlFor={"name"}>Product name</label>
      <input
        className="w-[40%] bg-white outline-none py-1 px-2 border-1 border-gray-300"
        type="text"
        id="name"
        placeholder="Type Here"
      />
      <label htmlFor="description">Product Description</label>
      <textarea
        className="bg-white w-fit outline-none resize-none p-2 border-1 border-gray-300"
        name="description"
        id="description"
        cols="53"
        rows="3"
        placeholder="Write content here"
      ></textarea>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Product Category</label>
          <select
            className="text-black outline-none w-fit border-1 border-gray-300 p-2"
            name="category"
            id="category"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="subcategory">Sub Category</label>
        <select
          className="text-black outline-none w-fit border-1 border-gray-300 p-2"
          name="subcategory"
          id="subcategory"
        >
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="price">Price</label>
        <input className="w-[5rem] p-2 border-1 outline-none border-gray-300" placeholder="$100" type="number" name="price" id="price" />
        </div>
      </div>
      <h1>Product Sizes</h1>
      <div className="flex gap-2">
        <h1 className="px-2 py-1 bg-gray-300">XS</h1>
        <h1 className="px-2 py-1 bg-gray-300">S</h1>
        <h1 className="px-2 py-1 bg-gray-300">M</h1>
        <h1 className="px-2 py-1 bg-gray-300">XL</h1>
        <h1 className="px-2 py-1 bg-gray-300">XXL</h1>
      </div>
      <div className="flex items-center gap-2">
        <input className="w-fit" type="checkbox" name="" id="bestseller" />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>
      <input className="w-fit bg-black px-6 py-2 text-white" type="submit" value="ADD" />
    </form>
  );
};

export default Add;
