import React from 'react';
import './App.css';

import Home from './components/Home';
import useFetch from './hooks/useFetch';

function App() {
  const { response } = useFetch(
    'http://www.mocky.io/v2/5a7f23442e00005000b56873'
  );

  const { response: Res2 } = useFetch(
    'http://www.mocky.io/v2/5a7f24f02e00005200b56875'
  );
  // const { data } = response;

  if (!Res2 || !response) {
    return <div>Loading...</div>;
  }
  const { data } = response;
  const { data: priceData } = Res2;

  // data.map(({ id }) => <h1 key={id}>{id}</h1>)

  return <Home combinedData={[...data, ...priceData]} />;
}

export default App;
