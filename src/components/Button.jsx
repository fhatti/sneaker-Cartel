import React from "react";

const Button = ({ label, element, bgColor, textColor, borderColor,fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor}`
          : "bg-button text-black border-none"
      } rounded-full ${fullWidth && "w-full"}`}>
      {label}
      {element}
    </button>
  );
};

export default Button;
