import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState();
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState();
  const [method, setMethod] = useState("cod");

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
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
