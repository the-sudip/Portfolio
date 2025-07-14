import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

const Navbar = () => {
  const navigators = [
    {id: 1, label: "Skills", href:"#skills"},
    {id: 2, label: "Projects", href: "#projects"},
    {id: 3, label: "Experience", href: "#experience"},
    {id: 4, label: "Education", href: "#education"},
    {id: 5, label: "Contact Me", href: "#contactMe"}
  ]
  const downloadHandler = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sudip_Das_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [burgerVisibility, setBurgerVisibility] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(Math.floor(window.innerWidth));
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const width = windowWidth;
    console.log(width);
    if (width < 900) setBurgerVisibility(true);
    else setBurgerVisibility(false);
  }, [windowWidth]);

  return (
    <div className={` flex justify-between bg-white py-1 px-5`}>
      <div ref={leftRef} className="iconAndTag flex gap-1 mt-1">
        <div className="icon w-[40px] h-[40px] rounded-full bg-black"></div>
        <h2 className="font-bold text-xl text-black mt-1">Sudip Das</h2>
      </div>

      <div ref={rightRef} className="hidden md:flex gap-10 ">
        <div
          className={`navigators ${
            burgerVisibility ? "hidden" : "flex"
          } gap-5 lg:gap-10 transtition-[gap] duration-200 ease-in-out text-[#323232] text-[15px] font-semibold mt-3`}
        >
          <a href="#skills" className=" hover:text-black hover:cursor-pointer ">
            Skills
          </a>
          <a
            href="#projects"
            className=" hover:text-black hover:cursor-pointer "
          >
            Projects
          </a>
          <a
            href="#experience"
            className=" hover:text-black hover:cursor-pointer "
          >
            Experience
          </a>
          <a
            href="#education"
            className=" hover:text-black hover:cursor-pointer "
          >
            Education
          </a>
          <a
            href="#contactMe"
            className=" hover:text-black hover:cursor-pointer "
          >
            Contact Me
          </a>
        </div>
        <div className={`${burgerVisibility ? "hidden" : "flex"}`}>
          <Button
            type="filled"
            icon={<MdOutlineFileDownload />}
            onClick={downloadHandler}
          >
            Resume
          </Button>
        </div>
      </div>
      <div
        className={`${burgerVisibility ? "flex" : "hidden"} text-black border-2 border-black mt-3`}
        onClick={() => (setOpenMenu(true))}
      >
        <GiHamburgerMenu />
        {openMenu && <Menu navigators={navigators} setOpenMenu={setOpenMenu} />}
      </div>
    </div>
  );
};

export default Navbar;
