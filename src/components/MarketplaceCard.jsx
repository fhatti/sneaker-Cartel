import React, {useState} from 'react';
import { FaHeart } from 'react-icons/fa';

const MarketplaceCard = ({ name, imgURL, price, description,user }) => {
    const [addToFav,setAddToFav] = useState();
    const handleFav = () => {
        setAddToFav(!addToFav)
    }
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <div className="absolute top-4 right-4">
        <FaHeart onClick={handleFav} className={ `cursor-pointer text-xl  hover:text-red-500  ${addToFav ? "text-gray-400": "text-red-500"}`} />
      </div>
      <p>posted by <span className='font-bold text-headline underline cursor-pointer'>{user}</span></p>
      <img src={imgURL} alt={name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-headline mb-2">{name}</h3>
      <p className="text-paragraph mb-4">{description}</p>
      <p className="text-xl font-bold text-button">{price} €</p>
    </div>
  );
}

export default MarketplaceCard;
