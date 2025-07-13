import React, { useEffect, useState } from "react";
import PercentageBar from "./PercentageBar";
import { useInView } from "react-intersection-observer";
import FadingDiv from "../FadingDiv";

const Skills = () => {
  const Skills = [
    { id: 1, name: "Java", percentage: 83 },
    {id: 2, name: "JS", percentage: 62},
    { id: 3, name: "SQL", percentage: 65 },
    { id: 4, name: "Figma", percentage: 90 },
    { id: 5, name: "Photoshop", percentage: 75 },
    { id: 6, name: "Illustrator", percentage: 82 },
  ];
  const {ref, inView} = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })
  return (
    <div
      ref={ref}
      id="skills"
      // className="flex flex-col gap-2.5 justify-center items-center my-5 transition-all duration-1000 ease-in "
      className={`flex flex-col gap-2.5 justify-center items-center my-5 transition-all duration-500 ease-in-out transform ${inView ? "opacity-100 scale-100": "opacity-20 scale-98"}`}
    >
      <h2 className=" text-[35px] sm:text-5xl font-bold text-gray-800 mb-10">
        Skills
      </h2>
      {Skills.map((skill) => (
        <div key={skill.id}>
          <PercentageBar name={skill.name} percentage={skill.percentage} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
