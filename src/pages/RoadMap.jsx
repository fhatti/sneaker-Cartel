import React, { useState, useEffect} from "react";
import { companyMap } from "../constants";
import {textLogo,textLogo1} from "../assets/images";
import { useInView } from "react-intersection-observer";



const RoadMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [srcOfLogo, setSrcOfLogo ] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <section
    ref={ref}
    className={`flex justify-wrap- items-center max-xl:flex-col-reverse gap-10 max-container
    `}
  >
    <div className="flex-2 bg-aboutLogo bg-cover">
      <img
        src={srcOfLogo ? textLogo1 : textLogo}
        width={800}
        height={690}
        alt="sale"
        className="object-contain w-full  hover:cursor-pointer hover:animate-slide-fwd-center1"
        onMouseEnter={() => setSrcOfLogo(true)}
        onMouseLeave={()=> setSrcOfLogo(false)}
      />
    </div>
    <div className="flex flex-1 flex-col  ">
    {companyMap.map((event => (
      <div key={event.date} className={`flex flex-1 flex-col p-1  ${
        isVisible ? "animate-fadeInUp" : ""}`}> 
      <p className="mt-4 text-headline  py-2">
        {event.date}
      </p>
      <p className="mt-2 text-paragraph font-montserrat text-xl">
        {event.description}
      </p>
    </div>
    )))}
    </div>
  </section>
  );
};

export default RoadMap;
