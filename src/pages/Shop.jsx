import React from "react";
import useApi from "../services/useApi";
import PopularCard from "../components/PopularCard";

const Shop = () => {
  const { data: sneakers, loading, error } = useApi('/read/shop-items/all');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-container py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop Our Latest Sneakers</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {sneakers.map((sneaker,index) => (
          <PopularCard
            key={index}
            name={sneaker.name}
            imgURL={sneaker.imgUrl}
            reviewsNr={sneaker.reviewsNr}
            price={sneaker.price}
            rating={sneaker.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
