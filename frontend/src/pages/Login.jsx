import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="w-full flex flex-col justify-center items-center py-24 gap-12">
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
        <p className="text-right w-full text-gray-400 text-sm cursor-pointer">
          <NavLink to={"/signup"}>Create New Account?</NavLink>
        </p>
        <input
          type="submit"
          value={"Log In"}
          className="bg-black font-light px-4 py-2 cursor-pointer text-white w-[8rem]"
        />
      </form>
    </div>
  );
};

export default Login;
