import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Checkout from './components/Checkout.js';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
//Note Always Keep the Home Route at the Bottom.
function App() {
  return (
    <Router>
      <div className="app">
        {/* Header*/}
        <Header/>
        <Switch>

          {/* Checkout Route*/}
          <Route path="/checkout">
            {/*Checkout*/}
            <Checkout/>
          </Route>

          
          {/* Home Route*/}
          <Route path="/">
            {/* Home*/}
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
