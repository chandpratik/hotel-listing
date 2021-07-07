import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Details from './components/Details';
import useFetch from './hooks/useFetch';
import formatData from './helper/formatData';

function App() {
  const { response } = useFetch(
    'http://www.mocky.io/v2/5a7f23442e00005000b56873'
  );

  const { response: response2 } = useFetch(
    'http://www.mocky.io/v2/5a7f24f02e00005200b56875'
  );
  // const { data } = response;

  if (!response2 || !response) {
    return <div>Loading...</div>;
  }
  const { data: hotelsData } = response;
  const { data: priceData } = response2;
  const combinedData = formatData([...hotelsData, ...priceData]);
  const combinedDataArray = Object.values(combinedData);

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => <Home combinedDataArray={combinedDataArray} />}
      />
      <Route
        path="/details"
        exact
        render={() => <Details combinedData={combinedData} />}
      />
    </Router>
  );
}

export default App;
