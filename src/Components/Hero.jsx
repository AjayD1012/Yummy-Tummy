import React, { useEffect, useState } from "react";
import DosaImage from "../images/dosa.jpg";
import ParathaImage from "../images/paratha.jpg";
import rajma from "../images/vegthali.jpg";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Hero = () => {
  const [slider, setSlider] = useState(1);
  const imageData = [
    { src: DosaImage, alt: "Dosa" },
    { src: ParathaImage, alt: "paratha" },
    { src: rajma, alt: "Rajmarice" },
  ];

  function handleleft() {
    setSlider(slider === 0 ? imageData.length - 1 : slider - 1);
  }

  function handleright() {
    setSlider(slider === imageData.length - 1 ? 0 : slider + 1);
  }
  useEffect(() => {
    const sliderClear = setInterval(() => {
      handleright();
    }, 3000);
    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <>
      <div className="mt-[100px]">
        <div className="w-[90%] mx-auto h-[80vh] my-5 relative">
          {imageData.map((image, index) => (
            <div
              key={index}
              className={`${slider === index ? "block" : "hidden"}`}
            >
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full h-[80vh] object-strech rounded-2xl"
              />
            </div>
          ))}

          <div className="w-full mx-auto h-[80vh] opacity-30 rounded-2xl bg-black absolute top-0 left-0 "></div>
          <div className="absolute top-[45%] w-full  text-center font-semibold flex justify-center items-center text-xl text-[#f1faee]">
            <div>
              <p className="font-bold text-center text-2xl text-[#fda531]font-bold sm:text-[20px] md:text-[25px] lg:text-[30px] hover:" >
                {" "}
                welcome to yummy tummy
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full absolute px-5 top-[45%] text-white">
            <IoIosArrowDropleft
              onClick={handleleft}
              size={30}
              className="cursor-pointer"
            />
            <IoIosArrowDropright
              onClick={handleright}
              size={30}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
