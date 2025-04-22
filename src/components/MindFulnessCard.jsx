import React from "react";
import IconsBox from "./IconsBox";

const MindFulnessCard = ({
  icon: Icon,
  title: title,
  text: text,
  olTitle: olTitle,
  li_1: li_1,
  li_2: li_2,
  li_3: li_3,
  li_4: li_4,
  li_5: li_5,
}) => {
  return (
    <div className="bg-gray-100 rounded-[10px] space-y-1 p-4 max-w-[90%] md:max-w-[100%] mx-auto">
      <IconsBox icon={Icon} />
      <div className="space-y-5">
        <h3 className="text-[16px] tracking-wide font-bold">{title}</h3>
        <p className="text-sm  tracking-wide text-gray-500 font-[400]">
          {text}
        </p>
        <div className="bg-[#fff] p-4 rounded-[5px] space-y-2">
          <h4 className="text-[16px] tracking-wide font-bold">{olTitle}</h4>
          <ol className="text-sm  tracking-wide text-gray-500 font-[400] list-decimal list-inside">
            <li>{li_1}</li>
            <li>{li_2}</li>
            <li>{li_3}</li>
            <li>{li_4}</li>
            <li>{li_5}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MindFulnessCard;
