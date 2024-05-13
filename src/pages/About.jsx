import React from "react";
import { Button } from "../components";
import { shoe8 } from "../assets/images";
import { socialMedia } from "../constants";

const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-headline">
          About us
        </h2>
        <p className="mt-4 lg:max-w-lg text-paragraph text-2xl">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg text-paragraph text-2xl ">
          Each pair is meticulously crafted with premium materials and attention
          to detail, ensuring you step out in confidence and style.
        </p>
        <p className="mt-6 lg:max-w-lg text-paragraph  text-2xl">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <p className="mt-6 lg:max-w-lg text-paragraph  text-2xl">
          Join us on this journey of comfort and elegance. Your feet will thank
          you!
        </p>
        <div className="mt-11">
          <Button label="View details"  />
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center bg-about bg-contain bg-no-repeat bg-center">
        <img
          src={shoe8}
          alt="product detail"
          width={600}
          height={500}
          className="object-contain hover:animate-slide-fwd-center"
        />
      </div>
      <div className="mt-12 flex lg:flex-col">
        {socialMedia.map((social) => (
          <a href="/">
            <img
              src={social.src}
              alt={social.alt}
              className="bg-headline rounded-full p-2 m-2 hover:bg-button"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default About;
