import React from "react";

const Menu = ({ navigators, setOpenMenu, setBurgerVisibility }) => {
  return (
    <div className="absolute flex flex-col gap-3 top-0 right-0 bg-gray-50 rounded-[10px] py-3 shadow-sm shadow-gray-200 z-50">
      {navigators.map((navigator) => (
        <a
          key={navigator.id}
          className="px-5 bg-gray-50 hover:bg-gray-100 text-[14px] text-gray-800 "
          href={navigator.href}
          onClick={() => {
            setOpenMenu(false);
            setBurgerVisibility(true);
          }}
        >
          {navigator.label}
        </a>
      ))}
    </div>
  );
};

export default Menu;
