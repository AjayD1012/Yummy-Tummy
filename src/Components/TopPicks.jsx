import React from "react";
import { topPicks } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopPicks = ({ handleAdd, removeItem }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="font-bold text-2xl pl-10 text-[#1a2f33]">
        What is on Your Mind ?
      </h2>
      <div className="py-20">
        <Slider {...settings}>
          {topPicks.map((item) => (
            <div className="bg-[white] rounded-md" key={item.id}>
              <div className="flex justify-center items-center rounded-t-xl ">
                <img
                  src={item.img}
                  alt=""
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
              </div>
              {/* //content */}
              <div className="flex flex-col justify-center items-center gap-2 p-4">
                <p className="font-semibold uppercase text-xl">{item.title}</p>
                <p>{item.price}</p>
                <div className="flex gap-2">
                  <button
                    className="bg-[#5e0826] rounded-md w-[100px] text-white text-[10px] my-6 py-3  font-semibold hover:bg-[#F9D689] hover:text-[#5e0826]"
                    onClick={handleAdd}
                  >
                    Add to cart
                  </button>
                  <button
                    className="bg-[#5e0826] rounded-md w-[100px] text-white text-[10px] my-6 py-3  font-semibold hover:bg-[#F9D689] hover:text-[#5e0826]"
                    onClick={removeItem}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopPicks;
