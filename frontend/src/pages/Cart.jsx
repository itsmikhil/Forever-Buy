import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";

const Cart = () => {
  let {
    cart,
    setcart,
    totalBill,
    settotalBill,
    handelDeletionInCart,
    billCalculation,
  } = useContext(DataContext);

  useEffect(() => {
    billCalculation();
  }, [cart]);

  return (
    <div className="w-full px-8 sm:px-22 py-8 mx-auto overflow-x-hidden">
      {/* heading */}
      <div className="flex items-center gap-2 uppercase">
        <h1 className=" sm:text-2xl font-medium text-gray-500">your</h1>
        <h1 className=" sm:text-2xl font-medium">cart</h1>
        <hr className="w-7" />
      </div>
      {/* cart items */}
      {cart.length != 0 ? (
        <div className="w-full flex flex-col py-4 mx-auto overflow-hidden">
          {cart.map((item, index) => {
            return (
              // cart item
              <div
                key={index}
                className="flex w-full mx-auto sm:px-16 py-4 items-center justify-between gap-2 sm:gap-16 border-t-[1px] border-b-[1px] border-gray-200"
              >
                <div className="flex gap-4">
                  {/* image */}
                  <div className="w-30 sm:h-30 sm:w-25 overflow-hidden">
                    <img
                      className="object-cover"
                      src={item.imageToBeShown}
                      alt=""
                    />
                  </div>
                  {/* info */}
                  {/* leftside info */}
                  <div className="flex flex-col py-3 gap-3">
                    <h1>{item.name}</h1>
                    <div className="flex gap-4 items-center">
                      <h1>${item.price}</h1>
                      <h1 className="px-2 py-1 bg-gray-200">{item.size}</h1>
                    </div>
                  </div>
                </div>
                {/* rightside info */}
                <input
                  className="border-[1px] border-gray-300 w-[3rem] sm:w-[4rem] px-2 py-1"
                  type="number"
                  defaultValue={1}
                  name=""
                  id=""
                />
                <img
                  onClick={() => handelDeletionInCart(item.id, item.size)}
                  className="w-5 cursor-pointer h-5"
                  src={assets.bin_icon}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full flex item-center justify-center py-32 text-gray-400">
          <h1 className="text-xl sm:text-3xl capitalize">
            Oops! your cart is empty :(
          </h1>
        </div>
      )}
      {/* Bill */}
      <div className="flex flex-col items-end w-full">
        {/* heading */}
        <div className="w-[98%] sm:w-sm ">
          <div className=" flex items-center gap-2 uppercase sm:self-start">
            <h1 className=" sm:text-2xl font-medium text-gray-500">cart</h1>
            <h1 className=" sm:text-2xl font-medium">totals</h1>
            <hr className="w-7" />
          </div>
          {/* Total */}
          <div className="flex flex-col">
            <div className="flex justify-between w-[98%] sm:w-sm text-gray-400 border-b-[1px] border-gray-200 py-2">
              <h1>Subtotal</h1>
              <h1>${totalBill == 0 ? totalBill : totalBill - 10}</h1>
            </div>
            <div className="flex justify-between w-[98%] sm:w-sm text-gray-400 border-b-[1px] border-gray-200 py-2">
              <h1>Shipping</h1>
              <h1>$10</h1>
            </div>
            <div className="flex justify-between w-[98%] sm:w-sm font-medium py-2">
              <h1>Total</h1>
              <h1>${totalBill}</h1>
            </div>
          </div>
          <button className="bg-black text-white px-2 py-1 font-light mt-4">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
