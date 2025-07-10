import React from 'react'

const Button = ({size = "medium", type = "filled", onClick = () => {console.log(children, " clicked")}, children}) => {
    const sizeClasses = {
        medium: "w-[150px]",
        large: "w-[200px]",
        small: "w-[100px]"
    }
    const typeClasses = {
        filled: "bg-black text-white",
        border: "border-2 border-black text-black"
    }
  return (
    <div>
      <button onClick={onClick} className={`${sizeClasses[size]} ${typeClasses[type]} px-[10px] py-[5px] rounded-full text-[12px] cursor-pointer`}>{children}</button>
    </div>
  )
}

export default Button
