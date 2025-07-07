import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const CartBill = () => {
  let { billCalculation, totalBill, settotalBill } = useContext(CartContext);

  useEffect(() => {
    billCalculation();
  }, []);
  return (
    <>
      <div className=" flex items-center gap-2 uppercase sm:self-start">
        <h1 className=" sm:text-2xl font-medium text-gray-500">cart</h1>
        <h1 className=" sm:text-2xl font-medium">totals</h1>
        <hr className="w-7" />
      </div>
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
      
    </>
  );
};

export default CartBill;
