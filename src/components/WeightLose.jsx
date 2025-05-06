import React from "react";
import target from "../assets/images/target.png";
import balance from "../assets/images/balance.png";
import noodles from "../assets/images/noodles.png";
import cutlery from "../assets/images/cutlery.png";
import cup from "../assets/images/cup.png";
import clock from "../assets/images/clock.png";
import lean from "../assets/images/lean.jpeg";
import khudaar from "../assets/images/khudaar.jpg";
import green from "../assets/images/green.jpeg";
import HealthyFood from "../assets/images/healthyfood.jpeg";
import man from "../assets/images/man.jpeg";
import women from "../assets/images/women.jpeg";
import Header from "./Header";

const Weight = () => {
  return (
    <>
      <Header />

      {/* weight-loss section start hera */}
      <section className="bg-[#22C55E] text-white text-center py-12  mt-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">
            Your Weight Loss Journey Starts Here
          </h1>
          <p className="text-xl mb-6 text-[#ddf6e6]">
            Discover science-backed strategies, meal plans, and success stories
            to help you achieve your weight loss goals in a healthy, sustainable
            way.
          </p>
          <button className="bg-white text-[#22C55E] font-semibold py-2 px-6 rounded-full text-lg shadow-md hover:bg-gray-100 transition">
            Start Your Journey
          </button>
        </div>
      </section>
      {/* weight-loss section end hera */}
      {/* weight-loss Guidance section start hera */}
      <div className="p-8 min-h-screen flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-2 mt-3">
          Weight Loss Guidance
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Follow these evidence-based principles to lose weight effectively and
          keep it off long-term
        </p>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
              <img src={target} className="h-10 font-bold" alt="" />
            </div>
            <h3 className="text-lg font-semibold">Set Realistic Goals</h3>
            <p className="text-gray-600 mt-2">
              Aim for 1-2 pounds per week of weight loss. This pace is
              sustainable and helps preserve muscle mass while losing fat.
            </p>
          </div>

          <div className="bg-[#F9FAFB] p-3 rounded-2xl shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
              <img src={balance} className="h-8 font-bold" alt="" />
            </div>
            <h3 className="text-lg font-semibold">Create a Calorie Deficit</h3>
            <p className="text-gray-600 mt-2">
              Consume fewer calories than you burn. A deficit of 500-750
              calories per day is generally effective for sustainable weight
              loss.
            </p>
          </div>

          <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
              <img src={noodles} className="h-7 font-bold" alt="" />
            </div>
            <h3 className="text-lg font-semibold">Focus on Nutrient Density</h3>
            <p className="text-gray-600 mt-2">
              Choose foods that provide the most nutrients for the fewest
              calories. This helps you feel satisfied while eating less.
            </p>
          </div>

          <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
              <img src={cutlery} className="h-6 font-bold" alt="" />
            </div>
            <h3 className="text-lg font-semibold">Portion Control</h3>
            <p className="text-gray-600 mt-2">
              Be mindful of portion sizes. Using smaller plates, measuring
              servings, and eating slowly can help prevent overeating.
            </p>
          </div>
          <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
              <img src={cup} className="h-6 font-bold" alt="" />
            </div>
            <h3 className="text-lg font-semibold">Stay Hydrated</h3>
            <p className="text-gray-600 mt-2">
              Drink plenty of water. Sometimes thirst is mistaken for hunger,
              and staying hydrated can help control appetite.
            </p>
          </div>
          <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
              <img src={clock} className="h-7 font-bold" alt="" />
            </div>
            <h3 className="text-lg font-semibold">Consistency is Key</h3>
            <p className="text-gray-600 mt-2">
              Maintain consistent eating patterns. Skipping meals often leads to
              overeating later and can slow metabolism.
            </p>
          </div>
        </div>
      </div>
      {/* weight-loss Guidance section end hera */}
      {/* Foods That Support Weight Loss section start hera */}
      <div className="flex flex-col items-center bg-gray-100 py-10">
        <h2 className="text-3xl font-bold">Foods That Support Weight Loss</h2>
        <p className="text-gray-500 mt-2 text-center">
          These nutrient-dense foods will keep you satisfied while helping you
          reach your goals
        </p>
        <div className="grid md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mt-6">
          <div className="bg-[#F9FAFB] p-5 rounded-xl shadow-md flex flex-col">
            <img src={lean} className="max-w-screen " alt="" />

            <h3 className="text-lg font-semibold mt-3">Lean Proteins</h3>
            <p className="text-gray-600 text-sm mt-4">
              Chicken breast, turkey, fish, tofu, legumes, and low-fat dairy
              help build muscle and keep you full longer.
            </p>
          </div>
          <div className="bg-[#F9FAFB] p-5 rounded-2xl shadow-md">
            <img src={khudaar} className="w-54 h-54" alt="" />
            <h3 className="text-lg font-semibold mt-3">
              Non-Starchy Vegetables
            </h3>
            <p className="text-gray-600 text-sm mt-4">
              Broccoli, spinach, kale, bell peppers, and cauliflower are low in
              calories but high in fiber and nutrients.
            </p>
          </div>
          <div className="bg-[#F9FAFB] p-5 rounded-2xl shadow-md flex flex-col items-start">
            <img src={green} className="w-54 h-54" alt="" />

            <h3 className="text-lg font-semibold mt-3">Whole Grains</h3>
            <p className="text-gray-600 text-sm mt-4">
              Quinoa, brown rice, oats, and barley provide fiber and sustained
              energy without spiking blood sugar.
            </p>
          </div>
          <div className="bg-[#F9FAFB] p-5 rounded-2xl shadow-md flex flex-col items-start">
            <img src={HealthyFood} className="w-60 h-54" alt="" />
            <h3 className="text-lg font-semibold mt-3">Healthy Fats</h3>
            <p className="text-gray-600 text-sm mt-4">
              Avocados, nuts, seeds, and olive oil provide essential fatty acids
              and help with nutrient absorption.
            </p>
          </div>
        </div>
      </div>
      {/* Foods That Support Weight Loss section end hera */}
      <div className="flex flex-col items-center justify-center  bg-gray-100 p-5 my-5">
        <h1 className="text-2xl font-bold mb-6">Sample Meal Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
          {/* Breakfast */}
          <div className="bg-white shadow-md rounded-lg  p-5">
            <h2 className="text-green-600 font-semibold text-lg mb-2">
              Breakfast
            </h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2 marker:text-green-600">
              <li className="text-gray-600 text-sm mt-4 ">
                Greek yogurt with berries and a tablespoon of honey
              </li>
              <li>Overnight oats with almond milk and chia seeds</li>
              <li>Vegetable omelet with whole grain toast</li>
            </ul>
          </div>

          {/* Lunch */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-green-600 font-semibold text-lg mb-2">Lunch</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2 marker:text-green-600">
              <li>Grilled chicken salad with olive oil dressing</li>
              <li>Quinoa bowl with roasted vegetables and chickpeas</li>
              <li>Turkey and avocado wrap with side salad</li>
            </ul>
          </div>

          {/* Dinner */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-green-600 font-semibold text-lg mb-2">
              Dinner
            </h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2 marker:text-green-600">
              <li>Baked salmon with steamed broccoli and sweet potato</li>
              <li>Stir-fried tofu with mixed vegetables and brown rice</li>
              <li>Lentil soup with a side of mixed greens</li>
            </ul>
          </div>
        </div>
      </div>
      {/* testmonial */}
      <div className="flex flex-col items-center justify-center  bg-gray-100 p-4 mb-5">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-center">Success Stories</h1>
        <p className="text-gray-500 text-center mb-8">
          Real people, real results with NutriTracker
        </p>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300   flex items-center justify-center rounded-full mb-4">
                <img src={women} className="w-12 h-12 rounded-full" alt="" />
              </div>
              <div>
                <h2 className="font-semibold">Sarah J.</h2>
                <p className="text-sm text-gray-500">
                  Lost 32 pounds in 6 months
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              "NutriTracker changed my relationship with food. The meal tracking
              made me aware of my portions, and the personalized recommendations
              helped me make better choices. I've never felt healthier!"
            </p>
            {/* Star Ratings */}
            <div className="mt-4 text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300   flex items-center justify-center rounded-full mb-4">
                <img src={man} className="w-12 h-12 rounded-full" alt="" />
              </div>
              <div>
                <h2 className="font-semibold">Michael T.</h2>
                <p className="text-sm text-gray-500">
                  Lost 45 pounds in 8 months
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              "As someone who travels frequently for work, eating healthy was
              always a challenge. The app's restaurant suggestions and meal
              planning features made it so much easier to stay on track, even on
              the road."
            </p>
            {/* Star Ratings */}
            <div className="mt-4 text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weight;
