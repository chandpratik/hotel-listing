import React from 'react';

const Room = ({ room, price }) => {
  return (
    <div className="flex ">
      <h2
        className={`text-sm font-medium ${
          price ? 'text-black' : 'text-gray-400'
        }  py-1 pr-2`}
      >
        {room.toUpperCase()}
      </h2>
      <h2
        className={`text-sm font-medium ${
          price ? 'text-black' : 'text-red-400'
        }  py-1 pr-2`}
      >
        {price ? '₹' + price : 'Sold Out'}
      </h2>
    </div>
  );
};

export default Room;
