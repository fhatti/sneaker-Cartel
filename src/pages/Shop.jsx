import React from "react";
import useApi from "../services/useApi";
import PopularCard from "../components/PopularCard";


const Shop = () => {
  const { sneakers, loading, error } = useApi();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
    {sneakers.map((sneaker) => (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            <PopularCard
            name={sneaker.name}
            imgURL={sneaker.imgUrl}
            />
        </div>
    ))}
    </div>
  );
};

export default Shop;
