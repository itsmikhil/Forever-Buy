import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setproducts] = useState([]);
  const [bestseller, setbestseller] = useState([]);
  const [latestProducts, setlatestProducts] = useState();
  const [filteredProducts, setfilteredProducts] = useState();
  const [selectedFilters, setselectedFilters] = useState([]);
  const [selectedsubCategory, setselectedsubCategory] = useState([]);
  const [pricingOrder, setpricingOrder] = useState("relevant");
  const [showFilters, setshowFilters] = useState(true);
  const [searchText, setsearchText] = useState("");

  let fetchAllProducts = async () => {
    try {
      let res = await axios.get(backendUrl + "/api/products/list");
      if (res.data.success) {
        console.log(res.data);
        setproducts(res.data.allproducts);
        toast.success("Working");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  let handleBestseller = () => {
    if (products) {
      setbestseller(products.filter((item) => item.bestseller).slice(0, 5));
    }
  };

  let handleLatestProducts = () => {
    if (products) {
      setlatestProducts(products.slice(0, 10));
    }
  };

  useEffect(() => {
    handleBestseller();
    handleLatestProducts();
    setfilteredProducts(products);
  }, [products]);

  let handleSelectionOfFilter = (e) => {
    if (selectedFilters.includes(e.target.value)) {
      setselectedFilters(
        selectedFilters.filter((item) => item != e.target.value)
      );
    } else {
      setselectedFilters([...selectedFilters, e.target.value]);
    }
  };

  let handleSelectionOfsubCategory = (e) => {
    if (selectedsubCategory.includes(e.target.value)) {
      setselectedsubCategory(
        selectedsubCategory.filter((item) => item != e.target.value)
      );
    } else {
      setselectedsubCategory([...selectedsubCategory, e.target.value]);
    }
  };

  //   updating filtered products based on selected category
  let handleFilterProducts = () => {
    let updatedProducts = [...products];

    // category based sorting
    if (selectedFilters.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        selectedFilters.includes(item.category)
      );
    }
    // type based sorting
    if (selectedsubCategory.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        selectedsubCategory.includes(item.subCategory)
      );
    }

    //price based sorting
    if (pricingOrder === "Low to High") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (pricingOrder === "High to low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    // search based sorting
    if (searchText.trim() != "") {
      updatedProducts = updatedProducts.filter((item) =>
        item.name.toLowerCase().includes(searchText.trim().toLowerCase())
      );
    }
    setfilteredProducts(updatedProducts);
  };

  useEffect(() => {
    handleFilterProducts();
  }, [selectedFilters, pricingOrder, selectedsubCategory, searchText]);

  let value = {
    products,
    setproducts,
    bestseller,
    setbestseller,
    latestProducts,
    setlatestProducts,
    filteredProducts,
    setfilteredProducts,
    selectedFilters,
    setselectedFilters,
    selectedsubCategory,
    setselectedsubCategory,
    pricingOrder,
    setpricingOrder,
    showFilters,
    setshowFilters,
    searchText,
    setsearchText,
    fetchAllProducts,
    handleBestseller,
    handleLatestProducts,
    handleSelectionOfFilter,
    handleSelectionOfsubCategory,
    handleFilterProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
