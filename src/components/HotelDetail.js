import React from 'react';

const HotelDetail = ({ hotelData, policies, essentials }) => {
  return (
    <div className="container max-w-full h-screen flex  justify-center items-center">
      <div className="h-2/5 w-2/5 text-center bg-white shadow-md">
        <h1 className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
          {hotelData.name}
        </h1>
        <h2 className="block mt-1 text-sm leading-tight font-medium text-gray-400">
          {hotelData.locality ? hotelData.locality + ', ' : hotelData.city}
          {hotelData.locality ? hotelData.city : ''}
        </h2>
      </div>
    </div>
  );
};

export default HotelDetail;
