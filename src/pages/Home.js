import React from 'react';
import Header from '../components/Header';
import HotelCard from '../components/HotelCard';

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
