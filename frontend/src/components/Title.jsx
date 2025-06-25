import React from "react";

const Title = ({ text1, text2, para }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 uppercase">
        <h1 className="text-3xl font-medium text-gray-500">{text1}</h1>
        <h1 className="text-3xl font-medium">{text2}</h1>
        <hr className="w-7" />
      </div>
      <p className="text-center text-gray-500 opacity-90 w-[96%] md:w-[100%]">{para}</p>
    </>
  );
};

export default Title;
