import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Bestseller from "../components/Bestseller";
import Policies from "../components/Policies";
import Subscribe from "../components/Subscribe";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Bestseller />
      <Policies />
      <Subscribe />
    </div>
  );
};

export default Home;
