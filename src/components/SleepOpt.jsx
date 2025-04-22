import React from "react";
import { FaRegMoon } from "react-icons/fa";
import IconBox from "./IconsBox";

const SleepOpt = () => {
  return (
    <div>
      <div className="max-w-sm md:max-w-6xl mx-auto my-12">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#000] text-center max-w-3xl mx-auto">
            Sleep Optimization{" "}
          </h1>
          <p className="text-[16px] text-gray-500 text-center max-w-[85%] mx-auto">
            Quality sleep is essential for physical health, mental clarity, and
            emotional wellbeing{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-10  mt-10">
          <div className="bg-gray-100 max-w-[90%] lg:w-1/2 mx-auto rounded-[10px] p-5">
            <div className="flex items-center gap-2">
              <IconBox icon={FaRegMoon} />
              <h3 className="text-[18px] font-bold">The Science of Sleep</h3>
            </div>
            <div className="mt-3 space-y-3">
              <p className="text-gray-500">
                Sleep is not merely rest-it's an active period of restoration
                and processing. During sleep, your body:{" "}
              </p>
              <ul className="list-disc list-inside marker:text-[#22c55e] marker:text-xs mt-2 text-gray-500 space-y-2">
                <li>Repairs tissues and strengthens immune function </li>
                <li>Consolidates memories and learning </li>
                <li>
                  Regulates hormones that control appetite and metabolism{" "}
                </li>
                <li>Clears waste products from the brain </li>
                <li>Balances emotional regulation </li>
                <li>Enhances cognitive function and creativity</li>
                <li>Supports cardiovascular health</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 max-w-[90%] lg:w-1/2 mx-auto rounded-[10px] p-5">
            <div>
              <h3 className="text-[18px] font-bold">
                Sleep Hygiene Practices{" "}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[35px] h-[35px] rounded-full bg-[#dcfce7] flex items-center justify-center">
                <h3 className="text-[15px] text-[#22c55e] font-bold">1</h3>
              </div>
              <div className="mt-3 flex flex-col">
                <h3 className="text-[15px] font-bold">Consistent Schedule </h3>
                <p className="text-sm text-gray-500">
                  Go to bed and wake up at the same times daily, even on
                  weekends, to regulate your body's intermal clock
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-[35px] h-[35px] rounded-full bg-[#dcfce7] flex items-center justify-center">
                <h3 className="text-[15px] text-[#22c55e] font-bold">2</h3>
              </div>
              <div className="mt-3 flex flex-col">
                <h3 className="text-[15px] font-bold">Consistent Schedule </h3>
                <p className="text-sm text-gray-500">
                  Go to bed and wake up at the same times daily, even on
                  weekends, to regulate your body's intermal clock
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-[35px] h-[35px] rounded-full bg-[#dcfce7] flex items-center justify-center">
                <h3 className="text-[15px] text-[#22c55e] font-bold">3</h3>
              </div>
              <div className="mt-3 flex flex-col">
                <h3 className="text-[15px] font-bold">Consistent Schedule </h3>
                <p className="text-sm text-gray-500">
                  Go to bed and wake up at the same times daily, even on
                  weekends, to regulate your body's intermal clock
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* <IconBox icon={RiNumber4} /> */}
              <div className="w-[35px] h-[35px] rounded-full bg-[#dcfce7] flex items-center justify-center">
                <h3 className="text-[15px] text-[#22c55e] font-bold">4</h3>
              </div>
              <div className="mt-3 flex flex-col">
                <h3 className="text-[15px] font-bold">Consistent Schedule </h3>
                <p className="text-sm text-gray-500">
                  Go to bed and wake up at the same times daily, even on
                  weekends, to regulate your body's intermal clock
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepOpt;
