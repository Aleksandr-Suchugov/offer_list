import React from 'react';
import './App.css';
import Listing from './components/Listing.js';
import Etsy from './etsy.json';

function App() {
  // const data = JSON.parse(Etsy);
  // console.log(Etsy);
  return (
    <Listing items={Etsy} />
  );
}

export default App;
