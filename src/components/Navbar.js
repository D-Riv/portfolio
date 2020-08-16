import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1 className="nav-title">
        <Link className="nav nav-title" to="/">
          drivera.io
        </Link>
      </h1>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <ul className="nav-links">
        <li className="nav nav-about">ABOUT</li>
        <li className="nav nav-portfolio">PORTFOLIO</li>
      </ul>
    </nav>
  );
};

export default Navbar;
