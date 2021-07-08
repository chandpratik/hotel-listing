import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Details from './pages/Details';
import useFetch from './hooks/useFetch';
import formatData from './helper/formatData';

function App() {
  const { response } = useFetch(
    'http://www.mocky.io/v2/5a7f23442e00005000b56873'
  );

  const { response: response2 } = useFetch(
    'http://www.mocky.io/v2/5a7f24f02e00005200b56875'
  );

  const { response: response3 } = useFetch(
    'http://www.mocky.io/v2/5a7f265b2e00005d00b56877'
  );

  if (!response2 || !response || !response3) {
    return <div>Loading...</div>;
  }
  const { data: hotelsData } = response;
  const { data: priceData } = response2;
  const {
    data: { policies, essentials },
  } = response3;

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
        render={() => (
          <Details
            combinedData={combinedData}
            essentials={essentials}
            policies={policies}
          />
        )}
      />
    </Router>
  );
}

export default App;
