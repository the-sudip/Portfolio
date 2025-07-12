import React from 'react'
import PercentageBar from './PercentageBar'

const Skills = () => {

    const Skills = [
        {id: 1, name: "Java", percentage: 83},
        {id: 2, name: "JS", percentage: 42},
        {id: 3, name: "SQL", percentage: 65},
        {id: 4, name: "Figma", percentage: 90},
        {id: 5, name: "Photoshop", percentage: 75},
        {id: 6, name: "Illustrator", percentage: 82}
    ]
  return (
    <div id='skills' className='flex flex-col gap-2.5 justify-center items-center my-5'>
        <h2 className=' text-[35px] sm:text-5xl font-bold text-gray-800 mb-10'>Skills</h2>
      {Skills.map((skill) => (
        <div id={skill.id}><PercentageBar name={skill.name} percentage={skill.percentage} /></div>
      ))}
    </div>
  )
}

export default Skills
