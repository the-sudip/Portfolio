import React, { useState, useEffect, useRef, use } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import { Alegreya_SC } from "next/font/google";

const Navbar2 = () => {
  const navigators = [
    { id: 1, label: "Skills", href: "#skills" },
    { id: 2, label: "Projects", href: "#projects" },
    { id: 3, label: "Experience", href: "#experience" },
    { id: 4, label: "Education", href: "#education" },
    { id: 5, label: "Contact Me", href: "#contactMe" },
  ];
  const menuRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [burgerVisibility, setBurgerVisibility] = useState(true);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", resizeHandler);
    // return window.removeEventListener("resize", resizeHandler);
    return (
        () => {
            window.removeEventListener("resize", resizeHandler)
        }
    )
  }, []);

  useEffect(() => {
    const outsideClickHandler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
        setBurgerVisibility(true);
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", outsideClickHandler);
    }
    // return document.removeEventListener("mousedown", outsideClickHandler);
    return (
        () => {
            document.removeEventListener("mousedown", outsideClickHandler)
        }
    )
  }, [openMenu]);

  const burgerClickHandler = () => {
    setBurgerVisibility(false);
    setOpenMenu(true);
  };
  return (
    <div
      className={`flex justify-between px-5 pt-2 pb-5 relative`}
    >
      <div className="icontag flex gap-2">
        <div className="image w-[40px] h-[40px]  rounded-full bg-black"></div>
        <p className="name text-xl font-bold text-black mt-1.5">Sudip Das</p>
      </div>
      <div className="navigators hidden md:flex gap-x-10 pt-3">
        {navigators.map((navigator) => (
          <div
            key={navigator.id}
            className="text-gray-700 hover:text-black font-medium"
          >
            <a href={navigator.href}>{navigator.label}</a>
          </div>
        ))}
      </div>

      {burgerVisibility && (
        <div
          className="menu flex md:hidden text-black pt-3 hover:cursor-pointer"
          onClick={() => {
            burgerClickHandler();
          }}
        >
          <GiHamburgerMenu />
        </div>
      )}
      {openMenu && (
        <div ref={menuRef} className="pt-3">
          <Menu navigators={navigators} setOpenMenu={setOpenMenu} setBurgerVisibility={setBurgerVisibility} />
        </div>
      )}
    </div>
  );
};

export default Navbar2;
