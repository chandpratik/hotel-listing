import React from 'react';
import HotelDetail from '../components/HotelDetail';

const Details = ({ combinedData, policies, essentials }) => {
  const hotelId = localStorage.getItem('hotelId');
  const hotelData = combinedData[hotelId];
  return (
    <>
      <HotelDetail
        hotelData={hotelData}
        essentials={essentials}
        policies={policies}
      />
    </>
  );
};

export default Details;
