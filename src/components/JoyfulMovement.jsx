import React from "react";
import JoyfulCard from "./JoyfulCard";
import yoga from "../assets/images/joyfull-04.jpg";
import hiking from "../assets/images/joyfull-02.jpg";
import dance from "../assets/images/joyfull-01.jpg";
import strength from "../assets/images/joyfull-03.jpg";

const JoyfulMovement = () => {
  return (
    <div className="py-10">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#000] text-center max-w-3xl mx-auto">
          Joyful Movement
        </h1>
        <p className="text-[16px] text-gray-500 text-center max-w-[85%] mx-auto">
          Find physical activites you genuinely enoy for sustainable fitness and
          wellbeing
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 mt-10 max-w-6xl mx-auto">
        <div className="mt-3 space-y-3 max-w-[90%] md:max-w-[90%] lg:w-1/2">
          <h3 className="text-[18px] font-bold">Beyond "Exercise"</h3>
          <p className="text-gray-500">
            When movement becomes something you look forward to rather than a
            chore, you're more likely to stay consistent. The best physical
            activity is one that you'll actually do regularly.
          </p>
          <div className="bg-[#fff] rounded-[10px] p-4">
            <h3 className="text-[15px] font-bold">
              Benefits of Regular Movement
            </h3>
            <ul className="list-disc list-inside marker:text-[#22c55e] marker:text-xs mt-2 text-gray-500 space-y-2">
              <li>Improves mood by releasing endorphins</li>
              <li> Reduces stress and anxiety</li>
              <li>Enhances cognitive function and creativity</li>
              <li> Improves sleep quality</li>
              <li> Boosts energy and reduces fatigue</li>
              <li>Strengthens immune function</li>
            </ul>
          </div>

          <div className="bg-[#fff] rounded-[10px] p-4">
            <h3 className="text-[15px] font-bold">
              Finding Your Movement Style
            </h3>
            <p className="text-gray-500">
              Consider these questions to discover activities you'll genuinely
              enjoy:
            </p>
            <ul className="list-disc list-inside marker:text-[#22c55e] marker:text-xs mt-2 text-gray-500 space-y-2">
              <li> Do you prefer solo activities or social settings?</li>
              <li>Do you enjoy being outdoors or indoors?</li>
              <li>Do you like structure or flexibility? </li>
              <li>Do you enjoy fast-paced or slow-paced activities?</li>
              <li>What activities make you feel energized and happy?</li>
              <li>Are there activities you loved as a child?</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[90%] md:max-w-[90%] lg:w-1/2">
          <JoyfulCard
            src={yoga}
            title="Yoga & Stretching"
            text="Improves flexibility, balance, and mind-bodyconnection. Great for stress reduction andrecovery."
          />
          <JoyfulCard
            src={hiking}
            title="Walking & Hiking"
            text="Accessible, low-impact activity that combinesmovement with nature for mental clarity."
          />
          <JoyfulCard
            src={dance}
            title="Dance & Movement"
            text="Joyful expression through movement thatimproves coordination, mood, and cardiovascularhealth."
          />
          <JoyfulCard
            src={strength}
            title="Strength Training"
            text="Builds muscle, boosts metabolism, and improvesfunctional fitness for daily activities."
          />
        </div>
      </div>
    </div>
  );
};

export default JoyfulMovement;
