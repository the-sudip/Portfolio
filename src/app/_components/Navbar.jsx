import React from "react";
import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";


const Navbar = () => {
    const downloadHandler = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Sudip_Das_Resume";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
    <div className="flex justify-between bg-white py-1">
      <div className="iconAndTag flex gap-1 ">
        <div className="icon w-[40px] h-[40px] rounded-full bg-black"></div>
        <h2 className="font-bold text-xl text-black mt-1">Sudip Das</h2>
      </div>
      <div className="nevigators flex gap-3 text-gray-700 text-[15px] mt-1.5">
        <a
          href="#skills"
          className=" hover:text-black hover:cursor-pointer hover:font-medium"
        >
          Skills
        </a>
        <a
          href="#projects"
          className=" hover:text-black hover:cursor-pointer hover:font-medium"
        >
          Projects
        </a>
        <a
          href="#experience"
          className=" hover:text-black hover:cursor-pointer hover:font-medium"
        >
          Experience
        </a>
        <a
          href="education"
          className=" hover:text-black hover:cursor-pointer hover:font-medium"
        >
          Education
        </a>
        <a
          href="contactMe"
          className=" hover:text-black hover:cursor-pointer hover:font-medium"
        >
          Contact Me
        </a>
      </div>
      <div className="buttonContainer flex gap-3 mt-1.5">
        <Button size="small" type="filled" icon={<MdOutlineFileDownload />} onClick={downloadHandler}>
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
