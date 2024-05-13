import React from "react";

const Button = ({ label, element, bgColor, textColor, borderColor,fullWidth, hoverBgColor,hoverTextColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor}`
          : "bg-button text-black border-none  hover:bg-black hover:text-headline"
      } rounded-full ${fullWidth && "w-full"}`}>
      {label}
      {element}
    </button>
  );
};

export default Button;
