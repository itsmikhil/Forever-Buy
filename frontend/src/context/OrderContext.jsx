import React, { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  let { token } = useContext(AuthContext);
  let { cart,setcart, totalBill,handleGetCartData } = useContext(CartContext);
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState();
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState();
  const [method, setMethod] = useState("COD");
  const [orders, setOrders] = useState([]);

  let placeOrder = async (e) => {
    try {
      e.preventDefault();
      let dataToBeSent = {
        items: cart,
        deliveryDetails: {
          firstName,
          lastName,
          email,
          street,
          city,
          state,
          zipcode,
          country,
          phone,
        },
        paymentMethod: method,
        amount: totalBill,
      };
      let res = await axios.post(
        backendUrl + "/api/order/place",
        dataToBeSent,
        { headers: { token } }
      );

      if (res.data.message === "Please Login") {
        navigate("/login");
      }
      if (res.data.success) {
        toast.success(res.data.message);
        handleGetCartData()
        // reset states
        setcart([]);
        setFirstName("");
        setLastName("");
        setEmail("");
        setStreet("");
        setCity("");
        setState("");
        setZipcode();
        setCountry("");
        setPhone("");
        setMethod("COD");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let userOrders = async () => {
    try {
      let res = await axios.post(
        backendUrl + "/api/order/get",
        {},
        { headers: { token } }
      );
      if (res.data.message === "Please Login") {
        navigate("/login");
      }

      if (res.data.success) {
        setOrders(res.data.userOrders);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let value = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    zipcode,
    setZipcode,
    country,
    setCountry,
    phone,
    setPhone,
    method,
    setMethod,
    orders,
    setOrders,
    placeOrder,
    userOrders,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
