import React from 'react';
import { useHistory } from 'react-router';
import lowestCost from '../helper/lowestCost';
import HotelRoom from '../images/HotelRoom.jpg';

const HotelCard = ({ data }) => {
  let history = useHistory();
  const displayPrice = lowestCost(data.price);

  function handleClick() {
    localStorage.setItem('hotelId', data.id);
    history.push('/details');
  }
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl my-5">
      <div className="md:flex ">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={HotelRoom}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="flex-column w-full">
          <div className="flex justify-between p-4">
            <div>
              <p className="uppercase text-md text-green-500 font-semibold">
                {data.name}
              </p>
              <p className="block mt-1 text-sm font-medium text-black ">
                {data.locality ? data.locality + ', ' : data.city}
                {data.locality ? data.city : ''}
              </p>
            </div>
            <div>
              <p
                className={`text-md ${
                  displayPrice ? 'text-black' : 'text-red-200'
                }`}
              >
                {displayPrice ? '₹' + displayPrice : 'Sold Out'}
              </p>
            </div>
          </div>
          <div className="p-4 flex justify-end">
            {displayPrice ? (
              <button
                className="p-2 bg-green-400 text-sm text-black"
                onClick={handleClick}
              >
                Book
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
