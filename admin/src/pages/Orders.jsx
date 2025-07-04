import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Orders = () => {
  return (
    <div className="w-full flex flex-col gap-3 px-3  sm:px-12 py-8 text-gray-500">
      <h1>Order Page</h1>
      <div className="text-sm flex flex-col gap-2 lg:text-base lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_3fr_2fr_1fr_2fr] border-1 border-gray-200 px-6 py-6">
        <img className="w-15" src={assets.parcel_icon} alt="" />
        <div className="flex flex-col gap-3">
          <h1>Kid Tapered Slim Fit Trouser x 1 M</h1>
          <h1>Rana Dutta</h1>
          <h1>
            VILL - SIRKABAD, P.O- SIRKABAD, P.S - ARSHA, Purulia, West Bengal,
            India, 723154
          </h1>
        </div>
        <div>
          <h1 className="mb-3">Items : 1</h1>
          <h1>Method : COD</h1>
          <h1>Payment : Pending</h1>
          <h1>Date : 7/4/2025</h1>
        </div>
        <h1>$48</h1>
        <select className="border-1 border-gray-300 p-2 w-fit h-fit outline-none" name="" id="">
          <option value="">Order Placed</option>
          <option value="">Packing</option>
          <option value="">Shipping</option>
          <option value="">Out for Delivery</option>
          <option value="">Delivered</option>
        </select>
      </div>
    </div>
  );
};

export default Orders;
