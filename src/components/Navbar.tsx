import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="" className="brand-logo">
          SAP Login View
        </a>
        <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;