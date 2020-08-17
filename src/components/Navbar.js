import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const transitionEffect = () => {
    if (props.animation == "none") {
      props.changeStyle("slideIn 2s forwards");
    } else {
      let car = props.animation;
    }
  };

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
        <li className="nav nav-about" onClick={props.slideIn}>
          ABOUT
        </li>
        <li className="nav nav-portfolio" onClick={props.slideIn}>
          PORTFOLIO
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
