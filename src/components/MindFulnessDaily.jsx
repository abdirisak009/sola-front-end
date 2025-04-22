import React from "react";

const MindFulnessDaily = () => {
  return (
    <div className="max-w-[90%] lg:max-w-6xl mx-auto p-4 bg-[#f0fdf4] text-[#22c55e] flex flex-col lg:flex-row space-y-5 items-center justify-between rounded-[10px]">
      <div>
        <h3 className="text-[15px] font-bold">Mindfulness in Daily Life</h3>
        <p>
          Formal meditation is valuable, but mindfulness can be practiced
          throughout your day in simple ways:
        </p>
        <ul className="list-disc list-inside marker:text-[#22c55e] marker:text-xs mt-2 space-y-2">
          <li>
            Eat one meal without distractions, noticing flavors and textures
          </li>
          <li>Take three mindful breaths before checking your phone</li>
          <li>Feel the sensation of water during handwashing or showering</li>
          <li>
            Notice the feeling of your feet touching the ground while walking
          </li>
        </ul>
      </div>
      <div className="my-6 lg:mt-0">
        <button className="bg-[#22c55e] text-[#fff] py-3 px-6 rounded-full text-center font-bold cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
          Try Guided Meditation
        </button>
      </div>
    </div>
  );
};

export default MindFulnessDaily;
