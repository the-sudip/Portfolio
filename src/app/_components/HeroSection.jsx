import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const viewProperties = {
    threshold: 0.2,
    triggerOnce: false,
  };
  const { ref: profileRef, inView: profileInView } = useInView(viewProperties);
  const { ref: mainTextRef, inView: mainTextInView } =
    useInView(viewProperties);
  const { ref: descRef, inView: descInView } = useInView(viewProperties);

  useEffect(() => {
    if (profileInView) console.log("Profile in view");
  });
  return (
    <div className="flex flex-col items-center justify-center bg-white gap-5 mt-5">
      <div
        ref={profileRef}
        className={`profile flex flex-col items-center transition-all duration-500 ease-in transform ${
          profileInView ? "opacity-100" : "opacity-20"
        }`}
      >
        <div className="text-[80px] font-medium text-gray-800">
          <CgProfile />
        </div>
        <p className="text-gray-800 font-medium">Hi, I'm Sudip Das</p>
      </div>
      <p
        ref={mainTextRef}
        className={`mainText text-[40px] text-center leading-tight font-black sm:text-[70px] md:text-[100px] text-black transition-all duration-500 ease-in-out transform ${
          mainTextInView ? "opacity-100 scale-100" : "opacity-20 scale-98"
        }`}
      >
        Building digital products, brands, and experience
      </p>

      <div
        ref={descRef}
        className={`description flex flex-col items-center font-medium text-[15px] text-gray-700 mt-5 transition-all duratoin-500 ease-in-out transform ${
          descInView ? "scale-100 opacity-100" : "scale-98 opacity-20"
        }`}
      >
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
