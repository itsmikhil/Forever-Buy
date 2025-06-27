import React, { useState } from "react";
import Home from "./pages/Home";
import Routing from "./routes/Routing";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-screen  font-[Outfit]">
      <NavBar />
      <SideBar />
      <Routing ></Routing>
      <Footer/>
    </div>
  );
};

export default App;
