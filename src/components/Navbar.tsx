import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props: any) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/home" className="brand-logo">
          SAP Login View
        </Link>
        <ul className="right">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>{props.isLoggedIn 
              ? <button onClick={props.handleLogout}>Logout</button> 
              : null}
            </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;