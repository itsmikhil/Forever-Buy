import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { OrderContext } from "../context/OrderContext";
import { AuthContext } from "../context/AuthContext";

const Orders = () => {
  let { token } = useContext(AuthContext);
  let { orders, userOrders } = useContext(OrderContext);

  useEffect(() => {
    if (token) {
      userOrders();
    }
  }, [token]);

  return (
    <div className="pt-16 px-4 sm:px-18 md:px-32">
      <div className="text-2xl pb-5 border-b border-gray-200">
        <div className=" flex items-center gap-2 uppercase sm:self-start">
          <h1 className=" sm:text-2xl font-medium text-gray-500">My</h1>
          <h1 className=" sm:text-2xl font-medium">orders</h1>
          <hr className="w-7" />
        </div>
      </div>
      <div>
        {orders.length > 0 ? (
          orders.map((order) =>
            order.items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-4 border-b justify-between border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div className="flex gap-6 text-sm">
                    <img
                      src={item.productId.images[0]}
                      className="w-16 bg-blue-100 sm:w-20"
                      alt=""
                    />
                    <div>
                      <p className="sm:text-base font-medium">
                        {item.productId.name}
                      </p>
                      <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                        <p>${item.productId.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size}</p>
                      </div>
                      <p className="mt-1">
                        <span className="text-gray-400">
                          {new Date(order.date).toLocaleDateString()}
                        </span>
                      </p>
                      <p className="mt-1">
                        Payment:{" "}
                        <span className="text-gray-400">
                          {order.paymentMethod}
                        </span>
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
              );
            })
          )
        ) : (
          <h1 className="text-xl sm:text-3xl capitalize text-gray-400 w-full text-center py-16">
            No Orders placed yet :(
          </h1>
        )}
      </div>
    </div>
  );
};

export default Orders;
