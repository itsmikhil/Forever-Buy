import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "./ProductContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  let { singleProduct } = useContext(ProductContext);
  let { token } = useContext(AuthContext);
  const [sideBar, setsideBar] = useState(false); // example state
  const [searchBar, setsearchBar] = useState(false);
  const [cart, setcart] = useState([]);
  const [selectedSize, setselectedSize] = useState("");
  const [totalBill, settotalBill] = useState(0);
  // const [reqQuantity, setreqQuanitity] = useState();

  // Adding products in cart
  let handleAddToCart = async () => {
    try {
      let res = await axios.post(
        backendUrl + "/api/cart/add",
        { id: singleProduct._id, quantity: 1, size: selectedSize },
        {
          headers: {
            token: token,
          },
        }
      );

      if (res.data.message === "Please Login") {
        navigate("/login");
      }

      if (res.data.success) {
        toast.success(res.data.message);
        setselectedSize("");
        handleGetCartData();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // handle get cart data

  let handleGetCartData = async () => {
    try {
      let res = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        {
          headers: {
            token: token,
          },
        }
      );
      if (res.data.message === "Please Login") {
        navigate("/login");
      }
      if (res.data.success) {
        setcart(res.data.cartData);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let handleUpdateProductQuantity = async (id, quantity, size) => {
    try {
      let res = await axios.post(
        backendUrl + "/api/cart/update",
        { id, quantity, size },
        {
          headers: {
            token: token,
          },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        handleGetCartData();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let handleDeletionFromCart = async (id, size) => {
    try {
      let res = await axios.post(
        backendUrl + "/api/cart/delete",
        { id, size },
        {
          headers: {
            token: token,
          },
        }
      );
      if (res.data.success) {
        handleGetCartData();
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let billCalculation = () => {
    if (cart.length == 0) {
      settotalBill(0);
      return;
    }
    let totalSum = 0;
    cart.forEach((item) => {
      totalSum += item.productId.price * item.quantity;
    });
    // shipping charges
    totalSum += 10;
    settotalBill(totalSum);
  };

  let value = {
    sideBar,
    setsideBar,
    searchBar,
    setsearchBar,
    cart,
    setcart,
    selectedSize,
    setselectedSize,
    totalBill,
    settotalBill,
    handleGetCartData,
    handleAddToCart,
    handleUpdateProductQuantity,handleDeletionFromCart,
    billCalculation,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
