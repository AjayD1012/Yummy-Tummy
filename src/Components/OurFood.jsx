import React from "react";
import { mealData } from "../data/data";

const OurFood = ({ handleAdd, removeItem }) => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className="text-center text-[#1a2f33] text-3xl font-bold py-5">
          Our Food
        </h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#fdfdfd">
        {mealData.map((meal) => (
          <div className="flex flex-col justify-center items-center py-6 gap-5">
            <div>
              <img
                src={meal.image}
                alt=""
                className="w-[250px] h-[200px] object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center items-center py-2 px-4">
              <p className="font-semibold">{meal.name}</p>
              <p className="font-semibold">{meal.price}</p>
              <div className="gap-2 flex">
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
      </div>
    </>
  );
};

export default OurFood;
