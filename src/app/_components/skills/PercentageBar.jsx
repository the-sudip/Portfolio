import React from "react";

const PercentageBar = ({ name, percentage }) => {
  console.log("Percentage called");
  const value = Number(percentage);
  const maxLen = 250;
  const len = maxLen * (value / 100);
  return (
    <div className="flex flex-col mb-2 lg:flex-row">
      <div className="text-black w-[100px]">{name}</div>
      <div className="flex justify-center items-center">
        <div
          className={`progressBar w-[250px] h-1 rounded-full bg-gray-300 relative overflow-hidden mr-1`}
        >
          <div
            className={`progress rounded-full top-0 left-0 bg-black h-full`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <p className="text-black">{percentage}%</p>
      </div>
    </div>
  );
};

export default PercentageBar;
