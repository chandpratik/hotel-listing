import React from 'react';

const Details = ({ combinedData }) => {
  let hotelId = localStorage.getItem('hotelId');

  return <div>Details {combinedData[hotelId].name}</div>;
};

export default Details;
