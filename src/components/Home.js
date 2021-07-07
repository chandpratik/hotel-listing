import React from 'react';
import Header from './Header';
import HotelCard from './HotelCard';
// import formatData from '../helper/formatData';

const Home = ({ combinedDataArray }) => {
  return (
    <>
      <Header />
      <div className="container max-w-full flex-column justify-center mt-10">
        {combinedDataArray.map(data => (
          <HotelCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
