import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Resume from "../utils/Dennis Rivera Res.pdf";

// const NavbarWrapper = styled.nav`
//   color: #ffffff;
//   font-family: "Roboto", sans-serif;
//   background-color: #272727;
//   display: flex;
//   justify-content: space-between;
//   position: fixed;
//   top: 0;
//   right: 0;
//   left: 0;
//   max-height: 300px;
//   padding: 0 6rem;

//   @media (max-width: 500px) {
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 0;
//   }
// `;

// const NavList = styled.ul`
//   display: flex;
//   justify-content: space-evenly;

//   @media (max-width: 500px) {
//     display: none;
//     flex-direction: column;
//     width: 100%;
//   }
// `;
// const NavListItems = styled.li`
//   list-style: none;
//   margin: 20px;
//   transition: transform 0.2s;

//   :hover {
//     transform: scale(1.3);
//   }

//   @media (max-width: 500px) {
//     width: 100%;
//     text-align: center;
//     margin: 0;
//     padding: 0.5rem 0;
//   }
// `;
// const NavLinks = styled(NavLink)`
//   color: #ffffff;
//   text-decoration: none;

//   :hover {
//     color: #468499;
//   }
// `;
// const ResumeLink = styled.a`
//   color: #ffffff;
//   text-decoration: none;

//   :hover {
//     color: #468499;
//   }
// `;
// const NavTitle = styled.h1`
//   display: flex;
//   align-items: center;
//   transition: transform 1s;
//   font-weight: 400;

//   :hover {
//     transform: rotate(-5deg);
//   }
// `;
// const NavTitleLink = styled(Link)`
//   color: #ffffff;
//   text-decoration: none;

//   :hover {
//     color: #468499;
//   }
// `;

// const ToggleButton = styled.a`
//   position: absolute;
//   top: 0.75rem;
//   right: 1rem;
//   display: none;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 30px;
//   height: 21px;

//   @media (max-width: 500px) {
//     display: flex;
//   }
// `;

// const ToggleBar = styled.span`
//   height: 3px;
//   width: 100%;
//   background-color: #ffffff;
//   border-radius: 10px;
// `;

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">
        <Link className="title" to="/">
          dennisrivera.io
        </Link>
      </h1>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <ul>
        <li>
          <Link
            to="/"
            // activeStyle={{
            //   color: "#468499",
            // }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeStyle={{
              color: "#468499",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            activeStyle={{
              color: "#468499",
            }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <a href={Resume} target="_blank">
            Resume
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            activeStyle={{
              color: "#468499",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
