import React from "react";

const Button = ({ label, element }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-button rounded-full border-button text-black ">
      {label}
      {element}
    </button>
  );
};

export default Button;
