import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Policies = () => {
  return (
    <div className="w-[80%] mx-auto items-center justify-center text-center px-4 py-16 grid md:grid-cols-3 md:px-16 gap-y-12">
      <div className="flex flex-col items-center gap-2">
        <img src={assets.exchange_icon} alt="" />
        <div>
          <h1 className="text-base font-medium">Easy Exchange Policy</h1>
          <h1 className="font-sm text-gray-400">
            We offer hassle free exchange policy
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={assets.quality_icon} alt="" />
        <div>
          <h1 className="text-base font-medium">7 Days Return Policy</h1>
          <h1 className="font-sm text-gray-400">
            We provide 7 days free return policy
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={assets.support_img} alt="" />
        <div>
          <h1 className="text-base font-medium">Best customer support</h1>
          <h1 className="font-sm text-gray-400">
            we provide 24/7 customer support
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Policies;
