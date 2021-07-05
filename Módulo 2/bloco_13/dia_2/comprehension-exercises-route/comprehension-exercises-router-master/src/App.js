import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Link exact to="/" > Home </Link>
      <Link to="/about" > About </Link>
      <Link to="/users" > Users </Link>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </BrowserRouter>
    );
  }
}

export default App;
