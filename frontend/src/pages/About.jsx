import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe";

let data = [
  {
    heading: "Quality Assurance:",
    para: "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
  },
  {
    heading: "Convenience:",
    para: "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
  },
  {
    heading: "Exceptional Customer Service:",
    para: "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
  },
];

const About = () => {
  return (
    <div className="w-full relative py-6">
      {/* Title */}

      <Title text1={"About"} text2="Us" para="" />

      {/* About us text */}

      <div className="w-[94%] flex-col sm:flex-row sm:w-[80%] mx-auto flex relative justify-between gap-8 sm:gap-32 py-8">
        <img
          src={assets.about_img}
          alt=""
          className="w-full sm:w-[45%] h-[25rem] sm:h-[30rem]"
        />
        <div className="flex flex-col gap-6 sm:py-10 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h1 className="font-bold">Our Mission</h1>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why choose us */}
      <div className="flex items-center justify-center gap-2 uppercase w-full py-8">
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-500">Why</h1>
        <h1 className="text-2xl sm:text-3xl font-medium">Choose us</h1>
        <hr className="w-7" />
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-3 px-4 py-6">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 border-[1px] border-gray-200 py-16 px-8"
            >
              <h1 className="uppercase">{item.heading}</h1>
              <p>{item.para}</p>
            </div>
          );
        })}
      </div>
      <Subscribe/>
    </div>
  );
};

export default About;
