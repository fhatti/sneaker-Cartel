import React from "react";
import useApi from "../services/useApi";

const Shop = () => {
  const { sneakers, loading, error } = useApi();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {sneakers.map((sneaker, index) => (
          <li key={index}>
            {sneaker.name} - ${sneaker.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
