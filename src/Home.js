import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import "./App.css";
import Contact from "./Contact.js";


class Home extends Component {
  render() {
    return (
      <div id="canvas">
        <div id="ListView" className="components">
          <h1 id="List-header">List View</h1>
          <div id="Contacts-header"><h2>Contacts</h2></div>
          <div id="Contacts-list">
            <Link to="/Contact/:id"><h3>Name</h3></Link>
          </div>
        </div>


        <Route path="/Contact/:id" exact component={Contact}/>
      </div>


    )
  }
}





export default Home
