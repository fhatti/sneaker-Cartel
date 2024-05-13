import React, { useState, useEffect} from "react";
import { offer } from "../assets/images";
import { Button } from "../components";
import { useInView } from "react-intersection-observer";


const Sale = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    // <section
    // id="sale"
    //   className="flex justify-wrap- items-center max-xl:flex-col-reverse gap-10 max-container 
    //   "
    // >
    <section
      ref={ref}
      className={`flex justify-wrap- items-center max-xl:flex-col-reverse gap-10 max-container ${
        isVisible ? "animate-fadeInUp" : ""
      }`}
    >
      <div className="flex-1">
        <img
          src={offer}
          width={800}
          height={690}
          alt="sale"
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col p-10">
        <h2 className="text-4xl font-palanquin font-bold text-headline">
          <span className="text-button">Special </span>
          Offer
        </h2>
        <p className="mt-4 text-paragraph">
          Explore an exhilarating shopping odyssey, where unbeatable bargains
          redefine the way you shop. From top-tier picks to jaw-dropping
          discounts, we deliver unmatched value that catapults us into a league
          of our own.
        </p>
        <p className="mt-6 text-paragraph">
          Embark on a boundless voyage tailored to satisfy your individual
          cravings, surpassing even the loftiest dreams. Your expedition with us
          is nothing less than extraordinary—and we're just getting started.
        </p>
        <div className='mt-11 flex flex-wrap gap-4' >
          <Button label={"Shop Now"}
          textColor={"text-headline"}/>
          <Button
          label="Learn more"
          bgColor={"bg-headline"}
          />
        </div>
      </div>
    </section>
  );
};

export default Sale;
