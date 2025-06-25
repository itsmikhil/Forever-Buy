import React from "react";
import Home from "./pages/Home";
import Routing from "./routes/Routing";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="w-full h-screen  font-[Outfit]">
      <NavBar />
      <SideBar />
      <Routing></Routing>
    </div>
  );
};

export default App;
