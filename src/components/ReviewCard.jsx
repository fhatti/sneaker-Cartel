import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className=" rounded-full object-cover w-[120px] h-[120px]  bg-customerThumbnail bg-contain "
      />
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold text-headline">{customerName}</h3>
      <p className="mt-6 max-w-sm text-center text-background ">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="star-icon"
          className="object-contain m-0"
        />
        <p className="text-l font-montserrat">({rating})  </p>
      </div>
    
    </div>
  );
};

export default ReviewCard;
