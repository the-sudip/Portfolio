import React from "react";

const Button = ({
  size = "medium",
  type = "filled",
  icon,
  onClick = () => {
    console.log(children, " clicked");
  },
  children,
}) => {
  const sizeClasses = {
    medium: "w-[150px]",
    large: "w-[200px]",
    small: "w-[100px]",
  };
  const typeClasses = {
    filled: "bg-black text-white",
    border: "border-2 border-black text-black",
  };
  return (
    <div>
      <button
        onClick={onClick}
        className={`${sizeClasses[size]} ${typeClasses[type]} flex justify-center gap-2 px-[10px] py-[5px] rounded-full text-[12px] cursor-pointer`}
      >
        {icon && <span className="text-[15px]">{icon}</span>}
        {children}
      </button>
    </div>
  );
};

export default Button;
