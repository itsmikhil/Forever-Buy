import React, { useContext } from "react";
import { assets } from "../assets/admin_assets/assets";
import { AdminDataContext } from "../context/AdminDataContext";

const Add = () => {
  let {
    name,
    setname,
    price,
    setprice,
    description,
    setdescription,
    category,
    setcategory,
    sizes,
    setsizes,
    subCategory,
    setsubCategory,
    bestseller,
    setbestseller,
    image1,
    setimage1,
    image2,
    setimage2,
    image3,
    setimage3,
    image4,
    setimage4,
    addProduct,
    deleteProduct
  } = useContext(AdminDataContext);


  return (
    <form
      method="post"
      encType="multipart/form-data"
      className="flex flex-col justify-start px-12 gap-3 py-3 w-full overflow-x-hidden"
    >
      <h1>Upload Image</h1>
      {/* image input */}
      <div className="flex gap-2">
        <div>
          <input
            onChange={(e) => setimage1(e.target.files[0])}
            className="hidden"
            type="file"
            name="image1"
            id="image1"
          />
          <label htmlFor="image1">
            <img
              className="w-20 h-15 sm:h-20"
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area}
              alt=""
            />
          </label>
        </div>
        <div>
          <input
            onChange={(e) => setimage2(e.target.files[0])}
            className="hidden"
            type="file"
            name="image2"
            id="image2"
          />
          <label htmlFor="image2">
            <img
              className="w-20 h-15 sm:h-20"
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
              alt=""
            />
          </label>
        </div>
        <div>
          <input
            onChange={(e) => setimage3(e.target.files[0])}
            className="hidden"
            type="file"
            name="image3"
            id="image3"
          />
          <label htmlFor="image3">
            <img
              className="w-20 h-15 sm:h-20"
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
              alt=""
            />
          </label>
        </div>
        <div>
          <input
            onChange={(e) => setimage4(e.target.files[0])}
            className="hidden"
            type="file"
            name="image4"
            id="image4"
          />
          <label htmlFor="image4">
            <img
              className="w-20 h-15 sm:h-20"
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
              alt=""
            />
          </label>
        </div>
      </div>
      {/* other info */}
      <label htmlFor={"name"}>Product name</label>
      <input
        onChange={(e) => setname(e.target.value)}
        value={name}
        className="sm:w-[40%] bg-white outline-none py-1 px-2 border-1 border-gray-300"
        type="text"
        id="name"
        placeholder="Type Here"
      />
      <label htmlFor="description">Product Description</label>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="bg-white outline-none resize-none p-2 border-1 border-gray-300 sm:w-[40%]"
        name="description"
        id="description"
        rows="3"
        placeholder="Write content here"
      ></textarea>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Product Category</label>
          <select
            onChange={(e) => setcategory(e.target.value)}
            value={category}
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
          <label htmlFor="subCategory">Sub Category</label>
          <select
            onChange={(e) => setsubCategory(e.target.value)}
            value={subCategory}
            className="text-black outline-none w-fit border-1 border-gray-300 p-2"
            name="subCategory"
            id="subCategory"
          > 
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <input
            onChange={(e) => setprice(e.target.value)}
            value={price}
            className="w-[5rem] p-2 border-1 outline-none border-gray-300"
            placeholder="$100"
            type="number"
            name="price"
            id="price"
          />
        </div>
      </div>
      <h1>Product Sizes</h1>
      <div className="flex gap-2">
        {["XS", "S", "M", "XL", "XXL"].map((size, index) => {
          return (
            <h1
              key={index}
              onClick={() =>
                sizes.includes(size)
                  ? setsizes((prev) => prev.filter((item) => item != size))
                  : setsizes((prev) => [...prev, size])
              }
              className={`${
                sizes.includes(size) ? "bg-gray-500" : "bg-gray-300"
              } px-2 py-1 bg-gray-300 cursor-pointer`}
            >
              {size}
            </h1>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <input
          checked={bestseller}
          onChange={() => setbestseller((prev) => !prev)}
          className="w-fit"
          type="checkbox"
          name=""
          id="bestseller"
        />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>
      <input
        className="w-fit bg-black px-6 py-2 text-white cursor-pointer"
        onClick={(e) => addProduct(e)}
        type="submit"
        value="ADD"
      />
    </form>
  );
};

export default Add;
