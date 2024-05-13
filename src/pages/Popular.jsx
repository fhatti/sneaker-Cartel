import React from "react";
import { products } from "../constants";
import PopularCard from "../components/PopularCard";
const Popular = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palaquin">
          Discover Our <span className="text-stroke">Best-Sellers</span>!
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-subHeadline text-xl">
          Dive into our lineup of fan-favorites, handpicked with love and{" "}
          <span>swag</span>.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularCard key={product.name} {...product} />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <a className=" hover:text-headline" href="/">
          see more...
        </a>
      </div>
    </section>
  );
};

export default Popular;
