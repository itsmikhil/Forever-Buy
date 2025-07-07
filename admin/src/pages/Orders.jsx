import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { useContext } from "react";
import { AdminDataContext } from "../context/AdminDataContext";
import { useEffect } from "react";

const Orders = () => {
  let { orders, getAllOrders, token, updateOrderStatus } =
    useContext(AdminDataContext);
  useEffect(() => {
    if (token) {
      getAllOrders();
    }
  }, [token]);
  if (orders) {
    console.log(orders.items);
  }

  return (
    <div className="w-full flex flex-col gap-3 px-3  sm:px-12 py-8 text-gray-500">
      <h1>Order Page</h1>
      {orders.map((order,index) => (
        <div key={index} className="text-sm flex flex-col gap-2 lg:text-base lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_3fr_2fr_1fr_2fr] border-1 border-gray-200 px-6 py-6">
          <img className="w-15" src={assets.parcel_icon} alt="" />
          <div className="flex flex-col gap-3">
            {order.items.map((item,idx) => {
              return (
                <h1 key={idx}>
                  {item.productId.name} x {item.quantity}
                </h1>
              );
            })}
            <h1>
              {order.deliveryDetails.firstName} {order.deliveryDetails.lastName}
            </h1>
            <h1>
              {order.deliveryDetails.street}, {order.deliveryDetails.city},{" "}
              {order.deliveryDetails.state},{order.deliveryDetails.country},{" "}
              {order.deliveryDetails.zipcode}
            </h1>
          </div>
          <div>
            <h1 className="mb-3">Items : {order.items.length}</h1>
            <h1>Method : {order.paymentMethod}</h1>
            <h1>Payment : {order.paymentStatus ? "Paid" : "Pending"}</h1>
            <h1>Date : {new Date(order.date).toLocaleDateString()}</h1>
          </div>
          <h1>${order.amount}</h1>
          <select
            className="border-1 border-gray-300 p-2 w-fit h-fit outline-none"
            value={order.orderStatus}
            onChange={(e) => {console.log(e.target.value);updateOrderStatus(e.target.value, order._id)}}
            name=""
            id=""
          >
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipping">Shipping</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;
