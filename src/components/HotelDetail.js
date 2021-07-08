import React from 'react';
import Policy from './Policy';

const HotelDetail = ({ hotelData, policies, essentials }) => {
  return (
    <div className="container max-w-full h-screen flex-column justify-center items-center mt-10">
      <div className="h-2/5 w-2/5 mx-auto text-center bg-white shadow-md">
        <h1 className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
          {hotelData.name}
        </h1>
        <h2 className="block mt-1 text-sm leading-tight font-medium text-gray-400">
          {hotelData.locality ? hotelData.locality + ', ' : hotelData.city}
          {hotelData.locality ? hotelData.city : ''}
        </h2>
      </div>
      <Policy policies={policies} />
    </div>
  );
};

export default HotelDetail;
