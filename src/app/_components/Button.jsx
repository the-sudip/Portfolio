import React from "react";

const Button = ({
  height = "medium",
  type = "filled",
  icon,
  onClick = () => {
    console.log(children, " clicked");
  },
  children,
}) => {
 
  const typeClasses = {
    filled: "bg-black text-white",
    border: "border-2 border-black text-black",
  };

  const heightClasses = {
    medium: "py-[15px]",
    small: "py-[7px]"
  }
  return (
    <div>
      <button
        onClick={onClick}
        className={`${typeClasses[type]} flex justify-center gap-1 px-[30px] ${heightClasses[height]} rounded-full text-[12px] cursor-pointer`}
      >
        {icon && <span className="text-[15px] mt-[1px]">{icon}</span>}
        {children}
      </button>
    </div>
  );
};

export default Button;
