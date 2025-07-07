import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminDataContext = createContext();

export const AdminDataContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setproducts] = useState([]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [token, settoken] = useState("");
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("Mens");
  const [subCategory, setsubCategory] = useState("Topwear");
  const [sizes, setsizes] = useState([]);
  const [bestseller, setbestseller] = useState(false);
  const [image1, setimage1] = useState();
  const [image2, setimage2] = useState();
  const [image3, setimage3] = useState();
  const [image4, setimage4] = useState();
  const [orders, setorders] = useState([]);

  // <----------------------Add expire token feature------------------->

  let fetchAllProducts = async () => {
    try {
      let res = await axios.get(backendUrl + "/api/products/list");
      if (res.data.success) {
        setproducts(res.data.allproducts);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let handleLogin = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(backendUrl + "/api/admin/login", {
        email,
        password,
      });
      if (res.data.success) {
        settoken(res.data.token);
        localStorage.setItem("token", res.data.token);
        setemail("");
        setpassword("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (localStorage?.getItem("token") != "") {
      settoken(localStorage?.getItem("token"));
    }
  }, []);

  let logOutFunction = () => {
    settoken("");
    localStorage.setItem("token", "");
  };

  let addProduct = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      let res = await axios.post(backendUrl + "/api/products/add", formData, {
        headers: {
          token: token,
        },
      });
      if (res.data.success) {
        setname("");
        setdescription("");
        setbestseller(false);
        setprice(0);
        setcategory("Mens");
        setsubCategory("Topwear");
        setsizes([]);
        setimage1();
        setimage2();
        setimage3();
        setimage4();
        toast.success(res.data.message);
      } else {
        toast.error(res.data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let deleteProduct = async (id) => {
    try {
      let res = await axios.delete(backendUrl + `/api/products/delete/${id}`, {
        headers: {
          token: token,
        },
      });
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let getAllOrders = async () => {
    try {
      let res = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      console.log(res.data);

      if (res.data.success) {
        setorders(res.data.allOrders);
        console.log(orders);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let updateOrderStatus = async (updatedOrderStatus, orderId) => {
    try {
      let res = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderStatus:updatedOrderStatus,
          orderId,
        },
        { headers: { token } }
      );
      console.log(res.data);
      
      if (res.data.success) {
        getAllOrders();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let value = {
    backendUrl,
    token,
    settoken,
    products,
    setproducts,
    email,
    setemail,
    password,
    setpassword,
    name,
    setname,
    bestseller,
    setbestseller,
    price,
    setprice,
    description,
    setdescription,
    sizes,
    setsizes,
    category,
    setcategory,
    subCategory,
    setsubCategory,
    image1,
    setimage1,
    image2,
    setimage2,
    image3,
    setimage3,
    image4,
    setimage4,
    orders,
    setorders,
    fetchAllProducts,
    addProduct,
    deleteProduct,
    handleLogin,
    logOutFunction,
    getAllOrders,
    updateOrderStatus,
  };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
};
