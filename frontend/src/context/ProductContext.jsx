import React, { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
