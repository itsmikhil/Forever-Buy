import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminDataContext = createContext();

export const AdminDataContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, settoken] = useState("");
  const [products, setproducts] = useState([]);
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("Mens");
  const [subCategory, setsubCategory] = useState("Topwear");
  const [sizes, setsizes] = useState([]);
  const [bestseller, setbestseller] = useState(false);
  const [image1, setimage1] = useState();
  const [image2, setimage2] = useState();
  const [image3, setimage3] = useState();
  const [image4, setimage4] = useState();

  let fetchAllProducts = async () => {
    try {
      let res = await axios.get(backendUrl + "/api/products/list");
      if (res.data.success) {
        setproducts(res.data.allproducts);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let addProduct = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      let res = await axios.post(backendUrl + "/api/products/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        setname("");
        setdescription("");
        setbestseller(false);
        setprice(0);
        setcategory("Mens");
        setsubCategory("Topwear");
        setsizes([])
        setimage1();
        setimage2();
        setimage3();
        setimage4();
        toast.success(res.data.message);
      } else {
        toast.error(res.data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let deleteProduct = async (id) => {
    try {
      let res = await axios.delete(backendUrl + `/api/products/delete/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let value = {
    backendUrl,
    token,
    settoken,
    products,
    setproducts,
    name,
    setname,
    bestseller,
    setbestseller,
    price,
    setprice,
    description,
    setdescription,
    sizes,
    setsizes,
    category,
    setcategory,
    subCategory,
    setsubCategory,
    image1,
    setimage1,
    image2,
    setimage2,
    image3,
    setimage3,
    image4,
    setimage4,
    fetchAllProducts,
    addProduct,
    deleteProduct,
  };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
};
