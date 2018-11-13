import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Dieuhuong from './router/Dieuhuong';
class Vd1 extends Component {
  render() {
    return (
      <div>
        <h2 class="text-center">AAAA</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Nav></Nav>
          <Dieuhuong></Dieuhuong>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
