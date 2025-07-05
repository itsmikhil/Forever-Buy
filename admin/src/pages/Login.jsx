import React, { useContext, useState } from "react";
import { AdminDataContext } from "../context/AdminDataContext";

const Login = () => {
  let { email, setemail, password, setpassword, handleLogin } =
    useContext(AdminDataContext);

  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col justify-center items-center min-h-screen gap-8">
      <h1 className="font-[prata] text-3xl flex items-center gap-2">
        Log In <hr className="w-7" />
      </h1>
      <form action="" className="flex flex-col items-center gap-4">
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          className="border-[1px] border-gray-300 p-2 w-[20rem] sm:w-[25rem] outline-none"
          type="email"
          placeholder="Enter email id"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          className="border-[1px] border-gray-300 p-2 w-[20rem] sm:w-[25rem] outline-none"
          type="password"
          name="password"
          id=""
          placeholder="Enter password"
        />
        <input
          onClick={(e) => handleLogin(e)}
          type="submit"
          value={"Log In"}
          className="bg-black font-light px-4 py-2 cursor-pointer text-white w-[8rem]"
        />
      </form>
    </div>
  );
};

export default Login;
