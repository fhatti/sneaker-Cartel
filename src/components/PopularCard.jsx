import React from "react";
import { star } from "../assets/icons";

const PopularCard = ({ imgURL, name, price, rating, reviewsNr }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full bg-background p-5">
      <div className=" bg-background flex flex-col justify-center items-center">
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] bg-center bg-contain hover:animate-slide-fwd-center hover:cursor-pointer"
        />
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-headline align-middle">
          {rating} <span className="text-paragraph p-1">({reviewsNr})</span>
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-white">
        {name}
      </h3>
      <p className="mt-2 leading-normal font-semibold text-paragraph">
        {price}
      </p>
    </div>
  );
};

export default PopularCard;
