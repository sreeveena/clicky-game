
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topscore: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Nav score="0" topscore="0"/>
        <Header />
        <Body />
        <Footer />

      </div>
    );
  }
}

export default App;
