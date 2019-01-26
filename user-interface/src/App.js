import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toggle: null,
        isClosed: null,
    }

    this.handleClick = this.handleClick.bind(this);
}

componentWillMount() {
    this.setState({toggle: true, isClosed: true})

}
handleClick() {
    if(this.state.toggle === false && this.state.isClosed === false) {
        this.setState({toggle: true, isClosed: true });
    } else if(this.state.toggle === true && this.state.isClosed === true) {
        this.setState({toggle: false, isClosed: false})
    } else {
        this.componentWillMount();
    }
    console.log(this.state);
}
  render() {
    return (
      <div className="App">
        <Route 
          exact path="/"   
          render={(props) => <Home {...props} 
          toggle={this.state.toggle}
          isClosed={this.state.isClosed} 
          handleClick={this.handleClick}
          />}
        />
        <Route 
          path="/services" 
          render={(props) => <Services {...props}
          toggle={this.state.toggle}
          isClosed={this.state.isClosed}
          handleClick={this.handleClick}
          />}
        />
        <Route 
          path="/contact" 
          render={(props) => <Contact {...props}
          toggle={this.state.toggle}
          isClosed={this.state.isClosed}
          handleClick={this.handleClick}
          />}
        />
      </div>
    );
  }
}

export default App;
