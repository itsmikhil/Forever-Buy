import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sideBar, setsideBar] = useState(false);  // example state

  return (
    <DataContext.Provider value={{ sideBar, setsideBar }}>
      {children}
    </DataContext.Provider>
  );
};