import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
function App() {
  return (
    <div className="app">
      {/* <h1>AMZZNIA E-commerce App.</h1>*/}
      {/* Header*/}
      <Header/>
      
      {/* Home*/}
      <Home/>
    </div>
  );
}

export default App;
