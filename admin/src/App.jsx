import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Routing from "./routes/Routing";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { AdminDataContext } from "./context/AdminDataContext";

const App = () => {
  let { token } = useContext(AdminDataContext);
  return token ? (
    <div className="font-[outfit] bg-[#F9FAFB] min-h-screen w-full">
      <ToastContainer />
      <NavBar />
      <div className="flex">
        <div className="w-[18%]">
          <SideBar />
        </div>
        <div className="w-[82%] ">
          <Routing />
        </div>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  );
};

export default App;
