import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PercentageBar = ({ name, percentage }) => {
  console.log("Percentage called");
  // const value = Number(percentage);
  percentage = Math.floor(percentage)
  const maxLen = 250;
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [width, setWidth] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (inView) {
      console.log("in view");
      setWidth(percentage);
      const interval = (1000)/20;
      const increment = Math.floor((percentage) / interval);
      // const inter = setInterval(() => {
      //   setValue(prev => prev + increment)
      // }, interval)
      let current = 0;
      const inter = setInterval(() => {
        current += increment
        if(current < percentage){
          setValue(current);
        }else{
          setValue(percentage);
          clearInterval(inter)
        }
      })
      
    } else {
      setWidth(0);
      setValue(0);
    }
  }, [inView]);
  return (
    <div ref={ref} className="flex flex-col mb-2 lg:flex-row">
      <div className="text-black w-[100px]">{name}</div>
      <div className="flex justify-center items-center">
        <div
          className={`progressBar w-[250px] h-1 rounded-full bg-gray-300 relative overflow-hidden mr-1`}
        >
          <div
            className={`progress absolute rounded-full top-0 left-0 bg-black h-full transition-all duration-1000 ease-in-out`}
            style={{ width: `${width}%` }}
          ></div>
        </div>
        <p className="text-black">{value}%</p>
      </div>
    </div>
  );
};

export default PercentageBar;
