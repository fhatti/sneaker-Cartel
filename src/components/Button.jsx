import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  label,
  element,
  bgColor,
  textColor,
  borderColor,
  fullWidth,
  hoverBgColor,
  hoverTextColor,
  to,
}) => {
  const buttonContent = (
    <button
      className={`flex justify-center items-center gap-2 px-5 py-3 min-h-10 border font-montserrat text-lg leading-none
      ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor}`
          : "bg-button text-black border-none hover:bg-black hover:text-headline"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {element}
    </button>
  );

  // Conditionally wrap button content with Link if 'to' prop is provided
  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent;
};

export default Button;
