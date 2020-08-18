import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
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
        <li
          className="nav nav-link"
          onClick={props.slideAboutOut}
          id={props.active}
        >
          ABOUT
        </li>
        <li
          className="nav nav-link"
          onClick={props.slideIn}
          id={props.activeTwo}
        >
          PORTFOLIO
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
