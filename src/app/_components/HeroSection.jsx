import React from "react";
import { CgProfile } from "react-icons/cg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center bg-white gap-5 mt-5">
      <div className="text-[80px] font-medium text-gray-800">
        <CgProfile />
      </div>
      <div className="flex flex-col items-center font-bold text-6xl text-black">
        <div>Building digital</div>
        <div>products, brands, and</div>
        <div>experience</div>
      </div>
      <div className="flex flex-col items-center font-medium text-[15px] text-gray-700 mt-5">
        <p>
          <span className="font-bold text-black">
            A Product Designer and Visual Developer in SF.
          </span>
        </p>
        <p>I specialize in UI/UX Design, Responsive Web Design</p>
        <p>and Visual Development</p>
      </div>
    </div>
  );
};

export default HeroSection;
