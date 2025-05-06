import React from "react";
import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <div className="my-5 mx-4 font-[Poppins]">
        <nav className="bg-[#D8EFE2] flex justify-between text-center items-center rounded-full px-14 py-3">
          <Link to="/" className="hover:text-green-600">
            <img className="w-40" src="/src/assets/images/logo.png" alt="" />
          </Link>

          <div className="flex gap-20 ">
            <ul className="hidden md:flex gap-10 text-xl cursor-pointer">
              <li>
                <Link to="/WeightLose" className="hover:text-green-600">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link to="/Nutration" className="hover:text-green-600">
                  Nutration & Diet
                </Link>
              </li>
              <li>
                <Link to="/Recipes" className="hover:text-green-600">
                  Recipes & Cooking
                </Link>
              </li>
              <li>
                <Link to="/LifestyleMindset" className="hover:text-green-600">
                  Lifestyle & Mindset
                </Link>
              </li>
            </ul>
            <button className="text-lg font-bold cursor-pointer">
              <Link to="/SignIn" className="hover:text-green-600">
                SignIn
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
