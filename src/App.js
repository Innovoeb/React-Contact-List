import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Contact from "./Contact.js";
import Home from "./Home.js";
import data from "./randomUsers.json";







class App extends Component {

  render() {
    return (
      <Router>
        <div>







          <Route path="/" exact component={Home}/>
          <Route path="/Contact/:id" exact component={Contact}/>

        </div>
      </Router>














    );
  }
}

export default App;
