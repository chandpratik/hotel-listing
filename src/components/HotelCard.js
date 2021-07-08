import React from 'react';
import { useHistory } from 'react-router';
import lowestCost from '../helper/lowestCost';

const HotelCard = ({ data }) => {
  let history = useHistory();
  const displayPrice = lowestCost(data.price);

  function handleClick() {
    localStorage.setItem('hotelId', data.id);
    history.push('/details');
  }
  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl my-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold">
            {data.name}
          </div>
          <p className="block mt-1 text-sm leading-tight font-medium text-black ">
            {data.locality ? data.locality + ', ' : data.city}
            {data.locality ? data.city : ''}
          </p>

          <p className="text-sm text-indigo-500" onClick={handleClick}>
            {displayPrice ? displayPrice : 'Sold Out'}
          </p>
        </div>
        <div className="p-8"></div>
      </div>
    </div>
  );
};

export default HotelCard;
