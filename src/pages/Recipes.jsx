import React from "react";
import Header from "../components/Header";

const Recipes = () => {
  return (
    <>
      <Header />
      <div className="bg-[#22c55e] py-20 flex flex-col items-center space-y-5 md:space-y-7">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-[#fff] text-center max-w-3xl mx-auto">
            Delicious & Nutritious Recipes
          </h1>
        </div>
        <div>
          <p className="text-[16px] text-[#fff] text-center max-w-[85%] mx-auto">
            Discover healthy, flavorful recipes and master essential cooking
            techniques to transform your meals and nourish your body.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-[40%] mx-auto items-center justify-between">
          <input
            type="text"
            placeholder="Search Recipes"
            className="px-6 py-3 bg-white rounded-full w-[70%]"
          />
          <button className="bg-[#f97316] text-[#fff] px-6 py-3 rounded-full font-medium cursor-pointer hover:scale-105 transition duration-300 ease-in-out text-center w-[30%]">
            Find Recipes
          </button>
        </div>
      </div>
    </>
  );
};

export default Recipes;
