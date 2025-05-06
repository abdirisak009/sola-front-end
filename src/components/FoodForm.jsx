import React from "react";
import clearbg from "../assets/images/clearbg.png";
import logo from "../assets/images/logo.png";
const FoodForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 bg-center bg-cover " style={{ backgroundImage: `url(${clearbg}) `,  }}>
      {/* Header */}
      <div className="text-center mb-6 mt-10">
        <div className="flex items-center justify-center space-x-2">
          <img
            src={logo} 
            className="h-40"
          />
          
        </div>
      </div>

      {/* Form */}
      <form className=" border border-green-300 rounded-xl p-6 w-full max-w-lg mb-10 shadow-lg">
        <h2 className="text-4xl font-semibold text-green-600 mb-4 text-center">
          Food Form
        </h2>
        <span className="text-green-600  font-bold ">Food Name</span>
        <input
          type="text"
          name="foodName"
          placeholder="Enter Food Name"
          className="mb-3 mt-2 w-full px-3 py-2 border border-green-400 rounded-md outline-green-400 focus:ring-2 focus:ring-green-400"
        />

        <span className="text-green-600  font-bold ">Weight (grams)</span>
        <input
          type="number"
          name="weight"
          placeholder="Enter Weight"
          className="mb-3 mt-2 w-full px-3 py-2 border border-green-400 rounded-md outline-green-400 focus:ring-2 focus:ring-green-400"
        />

        <span className="text-green-600  font-bold ">Meal Type</span>
        <select
          name="mealType"
          className="mb-3 mt-2 w-full px-3 py-2 border border-green-400 rounded-md outline-green-400 focus:ring-2 focus:ring-green-400 "
        >
          <option value="">--Select--</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>

        <span className="text-green-600  font-bold ">Date</span>
        <input
          type="date"
          name="date"
          className="mb-4 w-full px-3 py-2 border border-green-400 rounded-md outline-green-400 focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white text-2xl py-2 rounded-md hover:bg-green-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
