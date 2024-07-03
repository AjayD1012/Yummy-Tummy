import React from "react";
import Phone from "../images/deliveryapp.avif";

const DeliveryApp = () => {
  return (
    <div className="w-full py-16 px-4">
      <h2 className="font-bold text-center text-2xl text-[#fda531]font-bold sm:text-[20px] md:text-[25px] lg:text-[30px]">
        {/* //className=" text-purple-900" */} Quick Delivery app{" "}
      </h2>
      <div className="grid grid-cols-2 w-[70%] mx-auto gap-10 my-10">
        <img src={Phone} alt="" className="w-[550px]  " />

        <div className="flex flex-col justify-center ml-5">
          <p className="font-bold sm:text-[20px] md:text-[25px] lg:text-[30px] text-purple-900">
            Get The App{" "}
          </p>
          <h2 className="font-bold md:text-3xl lg:text-5xl sm:text-2xl py-2">
            Quck Response to every customer
          </h2>
          <button className="bg-[#5e0826] rounded-md sm:w-[100px] md:w-[150px] text-white text-[20px] my-6 py-[15px] hover:text-purple-800 font-semibold">
            Get started..
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeliveryApp;
