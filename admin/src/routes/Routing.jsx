import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "../pages/Add";
import List from "../pages/List";
import Orders from "../pages/Orders";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Add />} path="/add" />
      <Route element={<List />} path="/list" />
      <Route element={<Orders />} path="/orders" />
    </Routes>
  );
};

export default Routing;
