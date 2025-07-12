import React from "react";
import { CgProfile } from "react-icons/cg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white gap-5 mt-5">
      <div className="text-[80px] font-medium text-gray-800">
        <CgProfile />
      </div>
      <p className="text-gray-800 font-medium">Hi, I'm Sudip Das</p>
      
        {/* <div className="m-0">Building digital</div>
        <div className="m-0 p-0">products, brands, and</div>
        <div className="m-0 p-0">experience</div> */}
        <p className="text-[40px] text-center leading-tight font-black sm:text-[70px] md:text-[100px] text-black">Building digital products, brands, and experience</p>
      
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
