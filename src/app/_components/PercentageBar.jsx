import React from "react";

const PercentageBar = ({ name, percentage }) => {
    console.log("Percentage called")
  const value = Number(percentage);
  const maxLen = 250;
  const len = maxLen * (value / 100);
  return (
    <div className="flex gap-2 items-center">
      <div className="text-black">{name}</div>
      <div className={`w-[250px] h-1 rounded-full bg-gray-300 relative overflow-hidden`}>
        <div
          className={`rounded-full top-0 left-0 bg-black h-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <p className="text-black">{percentage}%</p>
    </div>
  );
};

export default PercentageBar;
