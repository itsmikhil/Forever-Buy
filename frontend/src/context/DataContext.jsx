import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "./ProductContext";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  let {singleProduct, setsingleProduct} = useContext(ProductContext)
  const [sideBar, setsideBar] = useState(false); // example state
  const [searchBar, setsearchBar] = useState(false);
  const [cart, setcart] = useState([]);
  const [selectedSize, setselectedSize] = useState("");
  const [totalBill, settotalBill] = useState();
  // const [reqQuantity, setreqQuanitity] = useState();

  // Adding products in cart
  let handleAdditionInCart = () => {
    if (selectedSize == "") {
      toast.error("Please select a size before adding to cart!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    let productToBeAdded = {
      name: singleProduct.name,
      imageToBeShown: singleProduct.images[0],
      size: selectedSize,
      id: singleProduct._id,
      quantity: 1,
      price: singleProduct.price,
    };

    if (cart.includes(productToBeAdded)) {
      setcart([...cart, productToBeAdded.quantity++]);
      return;
    }

    toast.success("Item Added to cart", {
      position: "top-right",
      autoClose: 2000,
    });

    setcart([...cart, productToBeAdded]);
  };

  let handelDeletionInCart = (removalId, removalSize) => {
    setcart(
      cart.filter((item) => {
        if (item.id == removalId) {
          if (item.size == removalSize) {
            return false;
          } else {
            return true;
          }
        }
        return true;
      })
    );
  };

  let billCalculation = () => {
    if (cart.length == 0) {
      settotalBill(0);
      return;
    }
    let totalSum = 0;
    cart.forEach((item) => {
      totalSum += item.price * item.quantity;
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
    handleAdditionInCart,
    handelDeletionInCart,
    billCalculation,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
