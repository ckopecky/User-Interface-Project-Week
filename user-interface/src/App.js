import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
