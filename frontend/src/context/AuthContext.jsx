import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, settoken] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  //   <-------------------- Sign up handling-------------------------->

  let registerHandler = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(backendUrl + "/api/user/register", {
        name,
        email,
        password,
      });
      if (res.data.success) {
        settoken(res.data.token);
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //   <-------------------- Login handling-------------------------->

  let loginHandler = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(backendUrl + "/api/user/login", {
        email,
        password,
      });
      if (res.data.success) {
        settoken(res.data.token);
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/");
        setemail("");
        setpassword("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // <-----------------token management----------------->

  useEffect(() => {
    if (token == "" && localStorage.getItem("token")) {
      settoken(localStorage.getItem("token"));
    }
  }, []);

  // <-----------------Logg Out handler----------------->

  let handleLogOut = () => {
    settoken("");
    localStorage.setItem("token", "");
    toast.success("You have been Logged out");
  };

  let value = {
    navigate,
    token,
    settoken,
    email,
    setemail,
    password,
    setpassword,
    name,
    setname,
    loginHandler,
    handleLogOut,
    registerHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
