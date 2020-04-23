import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  background-color: #272727;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  max-height: 300px;
  padding: 0 6rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
const NavListItems = styled.li`
  list-style: none;
  margin: 20px;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.3);
  }
`;
const NavLinks = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  :hover {
    color: #468499;
  }
`;
const ResumeLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  :hover {
    color: #468499;
  }
`;
const NavTitle = styled.h1`
  display: flex;
  align-items: center;
  transition: transform 1s;
  font-weight: 400;

  :hover {
    transform: rotate(-5deg);
  }
`;
const NavTitleLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  :hover {
    color: #468499;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavTitle className="nav-title">
        <NavTitleLink className="title" to="/">
          dennisrivera.io
        </NavTitleLink>
      </NavTitle>
      <NavList>
        <NavListItems>
          <NavLinks
            to="/"
            activeStyle={{
              color: "#468499",
            }}
          >
            Home
          </NavLinks>
        </NavListItems>
        <NavListItems>
          <NavLinks
            to="/about"
            activeStyle={{
              color: "#468499",
            }}
          >
            About
          </NavLinks>
        </NavListItems>
        <NavListItems>
          <NavLinks
            to="/portfolio"
            activeStyle={{
              color: "#468499",
            }}
          >
            Portfolio
          </NavLinks>
        </NavListItems>
        <NavListItems>
          <ResumeLink
            href="https://docs.google.com/document/d/1yXqWcnEyHx_3yN-J7mRfOX6sUcd1Tv7SXxA5x10NOsg/edit?usp=sharing"
            target="_blank"
          >
            Resume
          </ResumeLink>
        </NavListItems>
        <NavListItems>
          <NavLinks
            to="/contact"
            activeStyle={{
              color: "#468499",
            }}
          >
            Contact
          </NavLinks>
        </NavListItems>
      </NavList>
    </NavbarWrapper>
  );
};

export default Navbar;
