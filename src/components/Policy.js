import React from 'react';

const Policy = ({ policies }) => {
  return (
    <div className="w-2/5 bg-white shadow-md mx-auto mt-5 p-4">
      <h1 className="font-extrabold mb-1">POLICIES</h1>
      {policies.map(policy => (
        <p className="font-medium text-sm text-gray-400 py-1" key={policy}>
          {policy}
        </p>
      ))}
    </div>
  );
};

export default Policy;
