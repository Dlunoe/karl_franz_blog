import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import HomePage from './Components/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
