import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Routing from "./routes/Routing";

const App = () => {
  return (
    <div className="font-[outfit] bg-[#F9FAFB] min-h-screen w-full">
      <NavBar />
      <div className="flex">
        <div className="w-[18%]">
          <SideBar />
        </div>
        <div className="w-[82%] ">
          <Routing/>
        </div>
      </div>
    </div>
  );
};

export default App;
