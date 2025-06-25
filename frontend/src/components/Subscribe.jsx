import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center gap-16 text-center py-16">
      <div>
        <h1 className="text-3xl font-medium">Subscribe now & get 20% off</h1>
        <h1 className="text-sm text-gray-500 opacity-90">
          No spam, just style. Get the good stuff first.
        </h1>
      </div>
      <div className="flex gap-0 w-[90%] md:w-[40%]">
        <input
          type="text"
          className="w-[100%] p-2 outline-none border-[1px] border-gray-300"
          placeholder="Enter your email"
        />
        <button className="bg-black text-white px-5 py-2 cursor-pointer">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
