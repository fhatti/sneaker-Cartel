import React, { useState } from "react";

import { Button, ShoeCard } from "../components";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <h1 className=" font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-headline">
          <span className="xl:bg-background xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-button inline-block mt-3 mr-5">of</span>Our
          Brand Collection
        </h1>
        <p className="font-monserrat text-paragraph text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Dive into our latest, effortlessly stylish collection arrivals.
          Experience the perfect blend of quality, comfort, and undeniable
          coolness in every pair of sneakers we offer.
        </p>
        <Button label="Shop now" element={<BsArrowRightCircleFill />} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold text-headline">
                {stat.value}
              </p>
              <p className="font-montserrat text-paragraph leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* right-side */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-button bg-hero bg-cover  bg-bottom">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[15%] max-sm:px-8">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

