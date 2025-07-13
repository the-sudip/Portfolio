import React from "react";
import Button from "./Button";
import { Lexend } from "next/font/google";
import { MdOutlineFileDownload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const downloadHandler = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sudip_Das_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={` flex justify-between bg-white py-1`}>
      <div className="iconAndTag flex gap-1 mt-1">
        <div className="icon w-[40px] h-[40px] rounded-full bg-black"></div>
        <h2 className="font-bold text-xl text-black mt-1">Sudip Das</h2>
      </div>
      <div className="flex md:hidden text-black mt-3"><GiHamburgerMenu/></div>
      <div className="hidden md:flex gap-10">
        <div className="nevigators flex gap-5 lg:gap-10 transtition-[gap] duration-200 ease-in-out text-[#323232] text-[15px] font-semibold mt-3">
          <a
            href="#skills"
            className=" hover:text-black hover:cursor-pointer hover:font-bold"
          >
            Skills
          </a>
          <a
            href="#projects"
            className=" hover:text-black hover:cursor-pointer hover:font-bold"
          >
            Projects
          </a>
          <a
            href="#experience"
            className=" hover:text-black hover:cursor-pointer hover:font-bold"
          >
            Experience
          </a>
          <a
            href="education"
            className=" hover:text-black hover:cursor-pointer hover:font-bold"
          >
            Education
          </a>
          <a
            href="contactMe"
            className=" hover:text-black hover:cursor-pointer hover:font-bold"
          >
            Contact Me
          </a>
        </div>

        <Button
          type="filled"
          icon={<MdOutlineFileDownload />}
          onClick={downloadHandler}
        >
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
