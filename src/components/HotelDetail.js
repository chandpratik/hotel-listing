import React from 'react';
import Facilities from './Facilities';
import Policy from './Policy';
import Room from './Room';

const HotelDetail = ({ hotelData, policies, essentials }) => {
  return (
    <div className="container max-w-full h-screen flex-column justify-center items-center mt-10">
      <div className="w-2/5 mx-auto py-6 bg-white shadow-md">
        <h1 className="uppercase tracking-wide text-xl text-center text-indigo-500 font-extrabold">
          {hotelData.name}
        </h1>
        <h2 className="block mt-1 text-sm leading-tight text-center font-medium text-black">
          {hotelData.locality ? hotelData.locality + ', ' : hotelData.city}
          {hotelData.locality ? hotelData.city : ''}
        </h2>
        <div className="p-4 ">
          <h2 className="font-extrabold">ROOM TYPES</h2>
          {Object.entries(hotelData.price).map(([room, price]) => (
            <Room room={room} price={price} key={room} />
          ))}
        </div>
      </div>
      <Facilities essentials={essentials} />
      <Policy policies={policies} />
    </div>
  );
};

export default HotelDetail;
