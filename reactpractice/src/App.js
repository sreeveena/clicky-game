import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      <Nav score="0" top-score="0"/>
      <Header />
      <Body />
      <Footer />

    </div>
  );
}

export default App;
