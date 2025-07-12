import React from "react";

const Button = ({
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
  return (
    <div>
      <button
        onClick={onClick}
        className={`${typeClasses[type]} flex justify-center gap-1 px-[30px] py-[15px] rounded-full text-[12px] cursor-pointer`}
      >
        {icon && <span className="text-[15px] mt-[1px]">{icon}</span>}
        {children}
      </button>
    </div>
  );
};

export default Button;
