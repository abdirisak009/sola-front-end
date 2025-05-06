import React from "react";
import Header from "../components/Header";
import Breakfast from "../assets/images/healthyfood.jpeg";
import Lunch from "../assets/images/mediterranean.jpg";
import Dinner from "../assets/images/lean.jpeg";
import Snacks from "../assets/images/intermmitentfasting.jpg";
import Vegetarian from "../assets/images/pleodiet.jpg";
import Vegan from "../assets/images/khudaar.jpg";
import Gluton from "../assets/images/katagonicdiet.jpg";
import Quick from "../assets/images/katogonic.jpg";

const Recipes = () => {
  return (
    <>
      <Header />
      <section className="bg-[#22c55e] h-[60vh]">
        <div className="py-20 flex flex-col items-center space-y-5 md:space-y-7">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-[#fff] text-center max-w-3xl mx-auto">
              Delicious & Nutritious Recipes
            </h1>
            <p className="text-[16px] text-[#fff] text-center max-w-[85%] mx-auto">
              Discover healthy, flavorful recipes and master essential cooking
              techniques to transform your meals and nourish your body.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mx-auto items-center justify-between">
            <input
              type="text"
              placeholder="Search Recipes"
              className="px-6 py-3 bg-white rounded-full w-[80%] md:w-[70%]"
            />
            <button className="bg-[#f97316] text-[#fff] px-6 py-3 rounded-full font-medium cursor-pointer hover:scale-105 transition duration-300 ease-in-out text-center w-[80%] md:w-[30%]">
              Find Recipes
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-15 min-h-screen">
        <div className="space-y-2 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#000] text-center max-w-3xl mx-auto">
            The Power of Mindset{" "}
          </h1>
          <p className="text-[16px] text-gray-500 text-center max-w-[85%] mx-auto">
            Your thoughts shape your reality. Cultivate a positive mindset to
            transform your health journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
          {[
            {
              title: "Breakfast",
              text: "Start your day right",
              img: Breakfast,
            },
            {
              title: "Lunch",
              text: "Midday fuel",
              img: Lunch,
            },
            {
              title: "Dinner",
              text: "Evening satisfaction",
              img: Dinner,
            },
            {
              title: "Snacks",
              text: "Healthy bites",
              img: Snacks,
            },
            {
              title: "Vegetarian",
              text: "Plant powered meals",
              img: Vegetarian,
            },
            {
              title: "Vegan",
              text: "100% Plant-based",
              img: Vegan,
            },
            {
              title: "Gluton-free",
              text: "no gluton, all flavor",
              img: Gluton,
            },
            {
              title: "Quick & easy",
              text: "30 min or less",
              img: Quick,
            },
          ].map((info, index) => (
            <div
              key={index}
              className="bg-white relative rounded shadow overflow-hidden"
            >
              <img src={info.img} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent text-white font-semibold flex items-end">
                <div className="p-4">
                  <h4 className="text-lg font-bold">{info.title}</h4>
                  <p className="text-[15px] text-gray-200">{info.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Recipes;
