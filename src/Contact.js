import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import App from "./App.js";
import "./App.css";





class Contact extends Component {
  render() {
    return (
    <div id="canvas">
      <div id="SingleView" className="components">
        <h1 id="Single-header">Single View</h1>
        <div id="Single-image">
          <h3 id="image-here">Image Here</h3>
          <button><Link to="/">Back</Link></button>
        </div>
        <div id="Single-info">
          <h3>Info 1</h3>
          <h3>Info 1</h3>
          <h3>Info 1</h3>
          <h3>Info 1</h3>
        </div>
      </div>
    </div>
    )
  }
}










export default Contact;
