import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {

    // not used 
  return (
    <ProductContext.Provider value={}>
      {children}
    </ProductContext.Provider>
  );
};