import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [trasition, setTransition] = useState(1);

  const transitionEffect = () => {};

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
        <li className="nav nav-about" onClick={transitionEffect}>
          ABOUT
        </li>
        <li className="nav nav-portfolio" onClick={transitionEffect}>
          PORTFOLIO
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
