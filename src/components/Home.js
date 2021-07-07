import React from 'react';
import formatData from '../helper/formatData';

const Home = ({ combinedData }) => {
  const data = formatData(combinedData);

  return data.map(({ id, name, price }) => <h1 key={id}>{name}</h1>);
};

export default Home;
