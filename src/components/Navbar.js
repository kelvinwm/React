import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../index.css';

class Navbar extends Component {
  render() {
    return (
     <header>
      <div className="container">
        <div id="branding">
          <h3> L-M-S Webpack Config</h3>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li ><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    )
  }
}
export default Navbar;