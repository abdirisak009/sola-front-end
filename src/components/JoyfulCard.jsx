import React from "react";
const JoyfulCard = ({ src, title, text }) => {
  return (
    <div className="bg-[#fff] rounded-[10px] overflow-hidden space-y-1">
      <img src={src} className="w-full h-[60%] lg:h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-[15px] font-bold">{title}</h3>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default JoyfulCard;
