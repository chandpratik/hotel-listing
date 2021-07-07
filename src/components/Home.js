import React from 'react';
import Header from './Header';
import formatData from '../helper/formatData';

const Home = ({ combinedData }) => {
  const data = formatData(combinedData);
  console.log(data);
  return <Header />;
  // return data.map(({ id, name, price }) => <h1 key={id}>{name}</h1>);
};

export default Home;
