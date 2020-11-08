import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { MovieService } from './services/MovieService';
// import DetailPage from './components/DetailPage';

// import { MovieService } from './services/MovieService'

function App() {

  const service = new MovieService();

  return (
    <div className="App">
      <LandingPage service={service}/>
    </div>
  );
}

export default App;
