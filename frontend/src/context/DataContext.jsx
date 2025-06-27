import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sideBar, setsideBar] = useState(false); // example state
  const [searchText, setsearchText] = useState("");
  const [searchBar, setsearchBar] = useState(false);

  let value = {
    sideBar,
    setsideBar,
    searchText,
    setsearchText,
    searchBar,
    setsearchBar,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
