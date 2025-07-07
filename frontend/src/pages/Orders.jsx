import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  //   const loadOrderData = async () => {
  //     try {
  //       if (!token) {
  //         return null;
  //       }
  //       const response = await axios.post(
  //         backendUrl + "/api/order/userOrders",
  //         {},
  //         { headers: { token } }
  //       );
  //       if (response.data.success) {
  //         let allOrderItems = [];
  //         response.data.orders.map((order) => {
  //           order.items.map((item) => {
  //             item["status"] = order.status;
  //             item["payment"] = order.payment;
  //             item["paymentMethod"] = order.paymentMethod;
  //             item["date"] = order.date;
  //             allOrderItems.push(item);
  //           });
  //         });
  //         setOrderData(allOrderItems.reverse());
  //       }
  //     } catch (error) {}
  //   };

  //   useEffect(() => {
  //     loadOrderData();
  //   }, [token]);

  return (
    <div className="pt-16 px-4 sm:px-18 md:px-32">
      <div className="text-2xl mb-4">
        <div className=" flex items-center gap-2 uppercase sm:self-start">
          <h1 className=" sm:text-2xl font-medium text-gray-500">cart</h1>
          <h1 className=" sm:text-2xl font-medium">totals</h1>
          <hr className="w-7" />
        </div>
      </div>
      <div>
        <div className="py-4 border-b justify-between border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-6 text-sm">
            <img className="w-16 bg-blue-100 sm:w-20" alt="" />
            <div>
              <p className="sm:text-base font-medium">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                <p>price</p>
                <p>Quantity: 2</p>
                <p>Size: M</p>
              </div>
              <p className="mt-1">
                Date: <span className="text-gray-400">Date</span>
              </p>
              <p className="mt-1">
                Payment: <span className="text-gray-400">RazorPay</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-between">
            <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base">Delivered</p>
            </div>
            <button className="border px-4 py-2 text-sm font-medium rounded-sm">
              Track Order
            </button>
          </div>
        </div>
        <div className="py-4 border-b justify-between border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-6 text-sm">
            <img className="w-16 bg-blue-100 sm:w-20" alt="" />
            <div>
              <p className="sm:text-base font-medium">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                <p>price</p>
                <p>Quantity: 2</p>
                <p>Size: M</p>
              </div>
              <p className="mt-1">
                Date: <span className="text-gray-400">Date</span>
              </p>
              <p className="mt-1">
                Payment: <span className="text-gray-400">RazorPay</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-between">
            <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base">Delivered</p>
            </div>
            <button className="border px-4 py-2 text-sm font-medium rounded-sm">
              Track Order
            </button>
          </div>
        </div>
        <div className="py-4 border-b justify-between border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-6 text-sm">
            <img className="w-16 bg-blue-100 sm:w-20" alt="" />
            <div>
              <p className="sm:text-base font-medium">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                <p>price</p>
                <p>Quantity: 2</p>
                <p>Size: M</p>
              </div>
              <p className="mt-1">
                Date: <span className="text-gray-400">Date</span>
              </p>
              <p className="mt-1">
                Payment: <span className="text-gray-400">RazorPay</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-between">
            <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base">Delivered</p>
            </div>
            <button className="border px-4 py-2 text-sm font-medium rounded-sm">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
