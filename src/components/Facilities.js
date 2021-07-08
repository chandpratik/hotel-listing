import React from 'react';

const Facilities = ({ essentials }) => {
  return (
    <div className="w-2/5 bg-white shadow-md mx-auto mt-5 p-4">
      <h1 className="font-extrabold mb-2">FACILITIES</h1>
      <div className="flex  justify-between">
        {essentials.map(essential => (
          <div
            className=" text-sm leading-tight font-medium text-gray-400"
            key={essential}
          >
            {essential}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
